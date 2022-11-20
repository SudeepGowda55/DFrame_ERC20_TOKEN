require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers")
require("@nomicfoundation/hardhat-network-helpers")
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "matic",
  networks: {
    matic: {
      url: process.env.ALCHEMY_POLYGON_URL,
      accounts: [process.env.POLYGON_WALLET_PRIVATE_KEY],
    },
  },
};
