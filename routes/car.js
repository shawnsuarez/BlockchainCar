const mongoose = require("mongoose");
const keys = require("../config/keys");
const Car = mongoose.model("cars");

const { deploy, retrieve } =  require("../deploy");
const { interface, bytecode } = require("../compile");

module.exports = app => {
	app.post("/api/create-record", async (req, res) => {
		const { vin, data, date } = req.body;

		const blockAddress = await deploy(vin, data);

		if (deployedAddress) {
			const newRecord = await new Car({
				date, blockAddress
			}).save();

			if (newRecord) {
				res.send({ success: true })
			}
			else {
				res.sent({ success: false});
			}
		}
		else {
			res.send({ success: false});
		}
	});
}