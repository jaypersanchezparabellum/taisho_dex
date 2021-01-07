const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "5777",       // Any network (default: none)
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(infuraKey, 'https://ropsten.infura.io/v3/714b179d65a24336ab560cda9742f768');
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  },
  rinkeby: {
    provider: function() {
      return new HDWalletProvider(infuraKey, 'https://rinkeby.infura.io/v3/714b179d65a24336ab560cda9742f768');
    },
    network_id: 4,
    gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
  }
},

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.7",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
    //  settings: {          // See the solidity docs for advice about optimization and evmVersion
    //    optimizer: {
    //      enabled: false,
    //      runs: 200
    //    },
      //  evmVersion: "byzantium"
    //  }
   }
  }
};
