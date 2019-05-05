const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

// ETH Account Mneumonic and Infura API Key
const provider = new HDWalletProvider(
	"dose blast traffic jewel color struggle panda garment crunch athlete carbon kangaroo",
	"https://rinkeby.infura.io/v3/1ad138cbb8f544428fcd4c1e72df7972"
);

const web3 = new Web3(provider);

const initialVin = "1234";
const initialStatus = "Brakes: Good, Transmission: Good";
//let retrurnAddress = "0x5A9E7014784134b0880A27B33BB6BE6393b160c0";

/*const deploy = async (vin, status) => {
	const accounts = await web3.eth.getAccounts();

	// Deploy CarReport Contract with initial VIN and initial Status
	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: [ vin, status ] })
		.send({ gas: "1000000", from: accounts[0] });

	retrurnAddress = result.options.address;
	//console.log("Contract deployed to", result.options.address);
	return retrurnAddress;
};

// Retrive contract at a given block address using the contract's ABI
const retrieve = async (interface, address) => {
	const result = await new web3.eth.Contract(JSON.parse(interface), address);
	const resultVIN = await result.methods.vin().call();
	const resultStatus = await result.methods.status().call();

	const record = {
		vin: resultVIN,
		status: resultStatus
	}

	//console.log(record.vin);
	//console.log(record.status);
	return record;
};

module.exports.deploy = deploy;
module.exports.retrieve = retrieve;*/

const deploy = async (vin, type, hash) => {
	const accounts = await web3.eth.getAccounts();

	// Deploy CarReport Contract with initial VIN and initial Status
	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: [ vin, type, hash ] })
		.send({ gas: "1000000", from: accounts[0] });

	let retrurnAddress = result.options.address;
	//console.log("Contract deployed to", result.options.address);
	return retrurnAddress;
};

// Retrive contract at a given block address using the contract's ABI
const retrieve = async (interface, address) => {
	const result = await new web3.eth.Contract(JSON.parse(interface), address);
	const resultVIN = await result.methods.vin().call();
	const resultType = await result.methods.recordType().call();
	const resultHash = await result.methods.recordHash().call();

	const record = {
		vin: resultVIN,
		type: resultType,
		status: resultHash
	}

	//console.log(record.vin);
	//console.log(record.status);
	return record;
};

module.exports.deploy = deploy;
module.exports.retrieve = retrieve;