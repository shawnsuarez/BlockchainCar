const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema({
  vin: Number,
  record: [
    { date: Date, blockAdress: String }
  ]
});

mongoose.model("cars", carSchema);
