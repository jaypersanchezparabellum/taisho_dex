var TaishoZapper = artifacts.require("Zapper_Swap_General_V1_3");

//Addresses from below is from Ganache
const _toWhomToIssue = 0x25Cd01Fa547f54E794Bf8Ed618a7f0C83d12c6dD;
const signer = 0xd77655dDc59954261c25C512eD14ad7705894d07;
//const _partnerContract = 0xB215f4cEE44f05e339435d220277BC45c94993e8;
//Uniswap Contract Address from Rinkeby
_uniswapRouterV2 = 0xaf97f1da15428064179924f7555c1cca1ab871f0
_aaveRouter = 0xce53fd3a2dbfc419433003e889f54971786bc2fa

/**
    @notice This function is used swap tokens using multiple exchanges
    @return amount of tokens received after swap
*/
/*
 @param toWhomToIssue address to which tokens should be sent after swap
 */
let toWhomToIssue = _toWhomToIssue
/*
@param path token addresses indicating the conversion path - like from ETH To BTC or BTC To DAI?
*/
let eth = '0X';
let btc = '0X';
let dai = '0X'
let path = [{eth, btc}]
/*
@param amountIn amount of tokens to swap
*/
let amountIn = 35
/*
@param minTokenOut min amount of expected tokens
*/
let minTokenOut = 15
/*
@param withPool indicates the exchange and its sequence we want to swap from
*/
let withPool = _uniswapRouterV2
/*
@param starts indicates the index of path array for each swap
*/
let starts = 0
/*
@param poolData pool or token addresses needed for swapping tokens according to the exchange
*/
let poolData

it("Create TaishoZapper Instance", async() => {
    let taishozapper = await TaishoZapper.deployed(tokenTransferProxy, signer);
    console.log("\t\t[ Contract address :: " + taishozapper.address + " ]");
    assert(taishozapper !== undefined, 'has no TaishoZapper instance');
}).timeout(100000);

it("Should Return Amount of Tokens Received", async() => {
    let taishozapper = await TaishoZapper.deployed();
    let amountTokensReceived = await taishozapper. MultiExchangeSwap(_toWhomToIssue, _path, _amountIn, minTokenOut, _starts, _withPool, _poolData)
    assert(amountTokensReceived > 0, "Should Received some tokens");
}).timeout(100000)

