require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/c2VYULLPUkxTZN22Nmdew1O06w5ce_4j',
      accounts: [
        'f6086f8633237450d10fee7268339116803bd4c11358ee13263112341977b0f1',
      ],
    },
  },
}