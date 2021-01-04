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

//exchangeHandler like UniswapHandler contract address
_orders = [
    {
    exchangeHandler : '0X', 
    encodedPayload : {bid:23232, ask:545454},
    minSourceAmount : 100,
    maxSourceAmount : 200
    }
]

//true if amount is sourceToken, false if it's destinationToken
_trades = [
    {
    sourceToken : '0X',
    destinationToken : '0X',
    amount : 100,
    isSourceAmount : true, 
    _orders
    }
]

//Takes the fee before the trade if true, takes it after if false
_swaps = [
    {
    trades : _trades,
    minimumExchangeRate : 2.0,
    minimumDestinationAmount : 1.0,
    sourceAmount : 0,
    tradeToTakeFeeFrom : 0,
    takeFeeFromSource : true, 
    redirectAddress : '0X',
    required : false
    }
]

swapCollection = [
    swaps = _swaps,
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

