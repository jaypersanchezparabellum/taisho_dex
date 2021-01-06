const UniswapV2Handler = artifacts.require("./contracts/exchange_handler/UniswapV2Handler");


module.exports = function (deployer) {
  deployer.deploy(UniswapV2Handler);
};

