const path = require("path"); // Need to read .sol
const fs = require("fs");
const solc = require("solc");

const carReportPath = path.resolve(__dirname, "../contracts", "CarReport.sol");
const source = fs.readFileSync(carReportPath, "utf8");

// Export Inbox contract, need bytecode and interface
// (contract file, number of contracts)
// contracts["FileName:Contract"]
module.exports = solc.compile(source, 1).contracts[":CarReport"]; 