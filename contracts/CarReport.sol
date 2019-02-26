pragma solidity ^0.4.17;

contract CarReport {
    string public vin;
    string public status;
    
    function CarReport(string initialVin, string initialStatus) public {
        vin = initialVin;
        status = initialStatus;
    }
    
    function setStatus(string newStatus) public {
        status = newStatus;
    }
}