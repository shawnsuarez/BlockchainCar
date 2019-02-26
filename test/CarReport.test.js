const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); // Web3 c-tor
const { interface, bytecode } = require("../compile");

const provider = ganache.provider();
const web3 = new Web3(provider); // Creates web3 instance

// Mocha Tests
let accounts;
let carReport;
const initialVin = "1234";
const initialStatus = "Brakes: Good, Transmission: Good";

beforeEach(async () => {
	// Get a list of all accounts
	accounts = await web3.eth.getAccounts();
		
	// Deploy contract
	carReport = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: [ initialVin, initialStatus ] })
		.send({ from: accounts[0], gas: "1000000" });

	carReport.setProvider(provider);
});

describe("CarReport", () => {
	it("Deploy Contract", () => {
		assert.ok(carReport.options.address);
	});

	it("has vin", async () => {
		const vin = await carReport.methods.vin().call();
		assert.equal(vin, initialVin);
	});

	it("has status", async () => {
		const status = await carReport.methods.status().call();
		assert.equal(status, initialStatus);
	});

	it("change status", async () => {
		const newStatus = "Brake: Critical, Transmission: Poor";
		await carReport.methods.setStatus(newStatus).send({ from: accounts[0] });
		const status = await carReport.methods.status().call();
		assert.equal(status, newStatus);
	});
});