import { ethers } from "hardhat";

async function main() {
    const Auction= await ethers.getContractFactory("Auction");

    const [owner, addr1, addr2] = await ethers.getSigners();
    
    const deployedAuction = await Auction.deploy();
        
    await deployedAuction.deployed();
  
    console.log("Aution Address:", deployedAuction.address);

    
}




main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});