const hre = require("hardhat");

async function main() {
  const LabradorsNFT = await hre.ethers.getContractFactory("LabradorsNFT");
  const labradorsNFT = await LabradorsNFT.deploy();

  await labradorsNFT.deployed();

  console.log("LabradorsNFT deployed to:", labradorsNFT.address);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
