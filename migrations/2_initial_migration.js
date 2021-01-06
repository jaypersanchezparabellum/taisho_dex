const UniswapV2Handler = artifacts.require("./contracts/exchange_handler/UniswapV2Handler");
const ExchangeHandler = artifacts.require("./contracts/exchange_hanlder/ExchangeHandler")


module.exports = function (deployer) {
  deployer.deploy(UniswapV2Handler);
  //deployer.deploy(ExchangeHandler)
};

