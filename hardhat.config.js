/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "9FAaVEYE_f8XEqv5abNvPw7B8Nl4zC1o";
const GOERLI_PRIVATE_KEY = "996d038eccf71a4a44da5717c5b816591afbdddb369958000d016375249c2c2a";

module.exports = {
  solidity: "0.8.9",

  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/9FAaVEYE_f8XEqv5abNvPw7B8Nl4zC1o`,
      accounts: [`0x${GOERLI_PRIVATE_KEY}`],
    },
  },
};