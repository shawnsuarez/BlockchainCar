pragma solidity ^0.4.17;

contract CarDataReport {
    string public vin;
    string public recordType;
    string public recordHash;
    
    function CarDataReport(string carVin, string dataType, string givenRecordHash) public {
        vin = carVin;
        recordType = dataType;
        recordHash = givenRecordHash;
    }
    
}