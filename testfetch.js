const { deploy, retrieve } =  require("./blockchain/deploy");
const { interface, bytecode } = require("./blockchain/compile");
const hash = require("object-hash");
const fetch = require("node-fetch");

let vin = "123456";

const pushData = async(v, s) => {
	return await deploy(v, s);
};

const getData = async(int, addr) => {
	return await retrieve(int, addr);
}; 

const pushDataToBlockchain = async(v, t, h) => {
	console.log("pushing: ", v, t, h);
	return await deploy(v, t, h);
};

const getAndStoreCarData = (vin) => {
    let url = "https://crypto-sphere-229522.appspot.com/car/" + vin;
	fetch(url)
	.then(response => response.json())
	.then(response => {
		console.log("Blame Dominic");
	    let date = new Date();
	    let data = response;
	    let dataHash = hash(response);

	   pushDataToBlockchain(vin, "car", dataHash)
	    .then(addr => {
	    	console.log(date)
	    	console.log(data)
	    	console.log(dataHash)
	    	console.log(addr)
	        /*Car.findOneAndUpdate(
	            { vin: vin },
	            { "$push": 
	                { records: 
	                    { "date": date, 
	                    "data": data, 
	                    "hash": dataHash, 
	                    "blockAddr": addr}
	                }
	            }, (err, doc) => {
	                if (err) console.log(err);
	            })*/
	    })
	    .catch(err => console.log(err));
	})
	.catch(err => console.log("Blame Dominic" + err))
}

getRecentData = () => {
	let url = "https://crypto-sphere-229522.appspot.com/car/" + vin;
	let data;
	fetch(url)
	.then(response => response.json())
	.then(response => {
		//console.log(response);
		/*console.log(response["Average Miles per Gallon"]);
		console.log(response["Battery"])
		console.log(response["Car Usage"])
		console.log(response["Fuel Consumption"])
		console.log(response["Odometer"]);
		console.log(response["Trips"]);*/

		//console.log(JSON.stringify(response));
		data = JSON.stringify(response["Average Miles per Gallon"]);
		/*console.log(JSON.stringify(response["Average Miles per Gallon"]))
		console.log(JSON.stringify(response["Battery"]))
		console.log(JSON.stringify(response["Car Usage"]))
		console.log(JSON.stringify(response["Fuel Consumption"]))
		console.log(JSON.stringify(response["Odometer"]));
		console.log(JSON.stringify(response["Trips"]));*/
		pushData(vin, data)
		.then(addr => {
			// Add to records["blockAddresses"]["avgmpg"]
			console.log(addr)
		})
		.catch(err => console.log(err));
	})
	.catch(err => {
		console.log(err);
	})
	/*pushData(vin, data)
	.then(addr => console.log(addr))
	.catch(err => console.log(err));*/
}

getHistoryData = () => {
	let url = "https://crypto-sphere-229522.appspot.com/history/" + vin;
	fetch(url)
	.then(response => response.text())
	.then(response => {
		console.log(response);
	})
	.catch(err => {
		console.log(err);
	})
}

let AvgMPG = "0x9d59095aEb8aB0f22294dA2BdA6B120b14d0caF8";

//getRecentData();
//getHistoryData();

/*getData(interface, retrurnAddress).then(data => {
	console.log(data);
})
.catch(err => console.log(err));*/

// x6 for all data
/*getData(interface, AvgMPG).then(data => {
	console.log(data);
	console.log(JSON.parse(data["status"]));
})
.catch(err => console.log(err));*/

getAndStoreCarData(vin);
//https://crypto-sphere-229522.appspot.com/history/123456