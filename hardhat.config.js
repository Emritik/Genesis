require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const MAINNET_RPC_URL = "https://eth-mainnet.g.alchemy.com/v2/EVyYxunExnZ_V24Wq04Dplk4mefNvRHv";

const SEPOLIA_RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/EVyYxunExnZ_V24Wq04Dplk4mefNvRHv";

const POLYGON_MAINNET_RPC_URL = "https://polygon-mainnet.g.alchemy.com/v2/EVyYxunExnZ_V24Wq04Dplk4mefNvRHv";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 11155111,
    },
    mainnet: {
      url: MAINNET_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 1,
    },
    polygon: {
      url: POLYGON_MAINNET_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 137,
    },
  },
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./src/contracts",
    artifacts: "./src/abis",
  },
  mocha: {
    timeout: 40000,
  },
};
