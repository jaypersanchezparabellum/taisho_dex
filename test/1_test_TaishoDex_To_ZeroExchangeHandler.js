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

/*
* Logic step
* 1. Determine the DEX with the best price.   This will set the exchange handler smart contract address
* 2. Setup Orders array with data
* 3. Setup Trade array with data
* 4. Setup Swaps array with data
*/

const _sourceAsset = '0x10996EE480E7Fb1229B814A91f8F62170C8FAe89';
const _destinationAsset = '0xC31E6a668F03E9E7B5F95AA22C560f30f42EC6f7';
const _feeRecipientAddress = '0xC11E17D6e503b8De2F422C2f7f2FfBf8a6f3BF77';
const _senderAddress;          // Address that is allowed to call Exchange contract methods that affect this order. If set to 0, any address is allowed to call these methods.
const _makerAssetAmount;       // Amount of makerAsset being offered by maker. Must be greater than 0.
const _takerAssetAmount;       // Amount of takerAsset being bid on by maker. Must be greater than 0.
const _makerFee;               // Amount of ZRX paid to feeRecipient by maker when order is filled. If set to 0, no transfer of ZRX from maker to feeRecipient will be attempted.
const _takerFee;               // Amount of ZRX paid to feeRecipient by taker when order is filled. If set to 0, no transfer of ZRX from taker to feeRecipient will be attempted.
const _expirationTimeSeconds;  // Timestamp in seconds at which order expires.
const _salt;                   // Arbitrary number to facilitate uniqueness of the order's hash.
const _makerAssetData;           // Encoded data that can be decoded by a specified proxy contract when transferring makerAsset. The last byte references the id of this proxy.
const _takerAssetData;           // Encoded data that can be decoded by a specified proxy contract when transferring takerAsset. The last byte references the id of this proxy.
const _makerFeeAssetData;        // Encoded data that represents data for the maker fee asset
const _takerFeeAssetData;        // Encoded data that represents data for the taker fee asset
const _signature;

//exchangeHandler like ZeroExHandler contract address
_orders = [
    {
        makerAddress : _sourceAsset,           
        takerAddress : _destinationAsset,           
        feeRecipientAddress : _feeRecipientAddress,     
        senderAddress : _senderAddress,          
        makerAssetAmount : _makerAssetAmount,       
        takerAssetAmount : _takerAssetAmount,       
        makerFee : _makerFee,               
        takerFee : _takerFee,               
        expirationTimeSeconds : _expirationTimeSeconds,  
        salt : _salt,                   
        makerAssetData : _makerAssetData,           
        takerAssetData : _takerAssetData,
        makerFeeAssetData : _makerFeeAssetData,        
        takerFeeAssetData : _takerFeeAssetData,
        signature : _signature
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
_swap = [
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

