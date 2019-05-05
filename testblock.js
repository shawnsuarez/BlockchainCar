const { deploy, retrieve } =  require("./blockchain/deploy");
const { interface, bytecode } = require("./blockchain/compile");

// Get block address from other DB
let retrurnAddress = "0x5A9E7014784134b0880A27B33BB6BE6393b160c0";
let vin = 1234;
let status = "Brakes: Poor, Transmission: Good";

/*// Push data onto blockchain, returns a block address for data retrieval
const pushData = async(v, s) => {
	return await deploy(v, s);
};

// Get data from blockchain using the contract bytecode and a given block address
const getData = async(int, addr) => {
	return await retrieve(int, addr);
}; 

// Get Car Data from blockchain. Returns VIN and Status
getData(interface, retrurnAddress).then(data => {
	console.log(data);
})
.catch(err => console.log(err));*/

// Push data onto blockchain, returns a block address for data retrieval
const pushData = async(v, t, s) => {
	return await deploy(v, t, s);
};

// Get data from blockchain using the contract bytecode and a given block address
const getData = async(int, addr) => {
	return await retrieve(int, addr);
}; 


let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time);
pushData("12345", "car", "e0a4462c072cb5d02a1eb4fbd201e8e86fd27cd4").then(addr => {
	console.log(addr);
	today = new Date();
	time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	console.log(time);
})

//0xaf10c9a0da5cEF1CB67e508099DE41E27aa59f39
//0x6E907F4Fd786eE9e5bD5521548Ec977622a863cF
let hashAddr = "0xaf10c9a0da5cEF1CB67e508099DE41E27aa59f39";

/*getData(interface, hashAddr).then(data => {
	console.log(data);
})
.catch(err => console.log(err));*/

/*// Get Car Data from blockchain. Returns VIN and Status
getData(interface, retrurnAddress).then(data => {
	console.log(data);
})
.catch(err => console.log(err));*/