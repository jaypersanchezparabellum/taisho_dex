var TotlePrimary = artifacts.require("TotlePrimary");
const truffleAssert = require('truffle-assertions');

/*
* For Ganache testing
* for consistency, use addresses for proxy transfer from odd number index 
* for consistency, use addresses for signer from even number index 
*/
const tokenTransferProxy = 0x17E30b86b543139668962391f688Da1A503E2663;
const signer = 0x91dF6dc8E91109a41977DDf1F8C5ebc9640a8085;
const _partnerContract = 0xB215f4cEE44f05e339435d220277BC45c94993e8;

const _sourceAsset = '0x10996EE480E7Fb1229B814A91f8F62170C8FAe89';
const _destinationAsset = '0xC31E6a668F03E9E7B5F95AA22C560f30f42EC6f7';
const _maxOrderSpend = 100000000000
//contract address taken after 2_migration of contract dependencies
const uniswapcontractaddress = '0x5BF0427Fabd9f5119fDB0dEA3a7bD0fd79Bcc26d'
let _payload;

//exchangeHandler like UniswapHandler contract address
_orders = [
    {
        exchangeHandler : uniswapcontractaddress,
        encodedPayload : _payload,
        minSourceAmount : 10000, 
        maxSourceAmount : 1000000
    }
]

//true if amount is sourceToken, false if it's destinationToken
_trades = [
    {
        sourceToken : _sourceAsset,
        destinationToken : _destinationAsset,
        amount : 100,
        isSourceAmount : true, 
        orders : [{
            sourceAsset : '0x10996EE480E7Fb1229B814A91f8F62170C8FAe89',
            destinationAsset : '0xC31E6a668F03E9E7B5F95AA22C560f30f42EC6f7',
            maxOrderSpend : 100000000000
        }]
    }
]

//Takes the fee before the trade if true, takes it after if false
_swap = [
    {
        trades : _trades,
        minimumExchangeRate : 2.0,
        minimumDestinationAmount : 1.0,
        sourceAmount : 100,
        tradeToTakeFeeFrom : 100,
        takeFeeFromSource : true, 
        redirectAddress : _destinationAsset,
        required : false
    }
]

swapCollection = [
    swaps = _swap,
    partnerContract = _partnerContract,
    expirationBlock = 100, //how to know the block number?
    id = 1,
    maxGasPrice = 200000,
    v = 0,
    r = 0,
    s = 0,
];


it("Create TotlePriamry Instance", async() => {
    let totlePrimary = await TotlePrimary.deployed(tokenTransferProxy, signer);
    console.log("\t\t[ Contract address :: " + totlePrimary.address + " ]");
    assert(totlePrimary !== undefined, 'has no TotlePrimary instance');
}).timeout(100000);

it("Should Emit LogSwapCollection", async() => {
    let eventEmitted = false;
    let totlePrimary = await TotlePrimary.deployed(tokenTransferProxy, signer);
    let result = await totlePrimary.performSwapCollection( swapCollection );
    let eventName = res.logs[0].event;
    let eventRes = res.logs[0].args;
    expect(eventRes.succeeded).to.equal(true);
}).timeout(100000)

