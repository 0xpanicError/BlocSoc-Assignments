const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const cryptoDevsNFTContract = "0x41d1fd83f8aAAe54485BCF04ddaE1AA4977D5433";

  const cryptoDevsTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );

  const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(
    cryptoDevsNFTContract
  );

  await deployedCryptoDevsTokenContract.deployed();
  console.log(
    "Crypto Devs Token Contract Address:",
    deployedCryptoDevsTokenContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
