const { ethers } = require('ethers');
const Web3 = require('web3');

const TotlePrimary = artifacts.require("TotlePrimary");

let provider = new ethers.providers.JsonRpcProvider('http://localhost:7545');

/// @param tokenTransferProxy address of the TokenTransferProxy
/// @param signer the suggester's address that signs the payloads. More can be added with add/removeSigner functions
const tokenTransferProxy = '0x17E30b86b543139668962391f688Da1A503E2663';
const signer_privatekey = '2dc5d0678af43631128578edb1a070fec6a7d2d5000f6715213d407001ea3bee';
let wallet = new ethers.Wallet(signer_privatekey, provider);


module.exports = function (deployer) {
  deployer.deploy(TotlePrimary, tokenTransferProxy, wallet);
};

