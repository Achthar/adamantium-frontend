require('babel-register')
require('babel-polyfill')
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider({mnemonic:{phrase:process.env.MNEMONIC}, 
          providerOrUrl:process.env.ROPSTEN_RPC_URL,
          numberOfAddresses: 1,
          shareNonce: true,})
      },
      network_id: '*',
      // ~~Necessary due to https://github.com/trufflesuite/truffle/issues/1971~~
      // Necessary due to https://github.com/trufflesuite/truffle/issues/3008
      skipDryRun: true,
      gas: 8000000,
      gasPrice: 100000000000
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider({mnemonic:{phrase:process.env.MNEMONIC}, 
          providerOrUrl:process.env.KOVAN_RPC_URL,
          numberOfAddresses: 1,
          shareNonce: true,})
      },
      network_id: '*',
      // ~~Necessary due to https://github.com/trufflesuite/truffle/issues/1971~~
      // Necessary due to https://github.com/trufflesuite/truffle/issues/3008
      skipDryRun: true,
      gas: 8000000,
      gasPrice: 100000000000
    },
  },
  mocha: {
    timeout: 100000000000000
 },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg",
      version: "0.6.6"
    }
  }
}
