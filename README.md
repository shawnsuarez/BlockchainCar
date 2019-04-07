# Blockchain Car Data

Using the Rinkeby Ethereum Test Network, deploy and retrieve car data.

### How to

Example is shown in testblock.js:

```javascript
// Push data onto blockchain, returns a block address for data retrieval
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
.catch(err => console.log(err));
```
