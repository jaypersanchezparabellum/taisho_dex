const TotlePrimary = artifacts.require("TotlePrimary");

/// @param tokenTransferProxy address of the TokenTransferProxy
/// @param signer the suggester's address that signs the payloads. More can be added with add/removeSigner functions
const tokenTransferProxy = '0x17E30b86b543139668962391f688Da1A503E2663';
const signer = '0x91dF6dc8E91109a41977DDf1F8C5ebc9640a8085';

module.exports = function (deployer) {
  deployer.deploy(TotlePrimary, tokenTransferProxy, signer);
};
