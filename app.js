const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require(".config/keys");

require(".models/Car");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());

require("./routes/car")(app);

app.listen(8080, () => {
	console.log("NODE server listening on port 8080!");
});

//retrieve(interface, retrurnAddress);