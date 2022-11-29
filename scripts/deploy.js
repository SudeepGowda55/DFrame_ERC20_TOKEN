async function main() {
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("DFrame");
  const token = await Token.deploy();
  console.log("Token address:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

  // 0xbcbA862fBd0fB77929b1889eB6aAC70da34e02C8 -> Old contract address

  // 0x5E098E545f3e16646DB47A8D0A9e0bC70bF26f89    -> New Contract Address
  // polygon mainnet contract address
