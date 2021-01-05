const TotlePrimary = artifacts.require("TotlePrimary");
const UniswapHandler = artifacts.require("./contracts/exchange_handler/UniswapHandler");

/// @param tokenTransferProxy address of the TokenTransferProxy
/// @param signer the suggester's address that signs the payloads. More can be added with add/removeSigner functions
const tokenTransferProxy = '0x17E30b86b543139668962391f688Da1A503E2663';
const signer = '0x91dF6dc8E91109a41977DDf1F8C5ebc9640a8085';
const uniswapfactory = '0xB76DA26816112FBAC550b08038ae551785b772C2';

module.exports = function (deployer) {
  let totle;
  let uniswap;
  deployer.deploy(TotlePrimary, tokenTransferProxy, signer);
  deployer.deploy(UniswapHandler, uniswapfactory);
  TotlePrimary.deployed().then(function(instance){totle=instance;});
  UniswapHandler.deployed().then(function(instance){uniswap=instance;});
  console.log( `${totle} :: ${uniswap}` )
};

