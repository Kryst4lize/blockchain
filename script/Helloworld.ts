import "@nomiclabs/harhat-ethers";
import "@nomiclabs/hardhat-waffle";

import { ethers } from "hardhat"
import { expect } from "chai";

describe(" Hello World Contract",()=>{
    it("Shou it say hi",async ()=>{
        // 1. setup
        // 2. deployed
        // 3. test-call function
        const HelloWorld = await.ethers.getContractFactory("HelloWorld");
        // HelloWorld contract in solidity file
        const hello = await HelloWorld.deploy();
        await hello.deployed();

        expect (await hello.hello()).to.equal("Hello World");
    } );

});


