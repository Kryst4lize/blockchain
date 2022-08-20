// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "hardhat/console.sol";

contract Counter {
    uint counter;
    function count() public {
        counter++;
        console.log("Counter is now",counter);
    }
    function getCount() public view returns (uint32){
        return uint32(counter);

    }
}
