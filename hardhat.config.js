const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  netwoks: {
    hardhat: {
      chainId: 31337,
    },
    // localhost: {
    //   url: 'http://localhost:8545',
    //   chainId: 1337,
    // },
  },
  solidity: '0.8.4',
};
