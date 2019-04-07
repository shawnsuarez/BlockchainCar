
const { retrieve } =  require("./blockchain/deploy");
const { interface, bytecode } = require("./blockchain/compile");

// Get block address from other DB
let retrurnAddress = "0x5A9E7014784134b0880A27B33BB6BE6393b160c0";

const getData = async(int, addr) => {
	return await retrieve(int, addr);
}; 

// Get Car Data from blockchain. Returns VIN and Status
getData(interface, retrurnAddress).then(data => {
	console.log(data);
})
.catch(err => console.log(err));
