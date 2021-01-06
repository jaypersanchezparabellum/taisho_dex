const UniswapV2Handler = artifacts.require("./contracts/exchange_handler/UniswapV2Handler");
//const KyberExchangeHandler = artifacts.require("./contracts/exchange_hanlder/KyberHandler")


module.exports = function (deployer) {
  deployer.deploy(UniswapV2Handler);
  //deployer.deploy(KyberExchangeHandler)
};

