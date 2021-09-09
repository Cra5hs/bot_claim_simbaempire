const Web3 = require('web3');
var SIM_ABI = require("./abi.json");
var WITHDRAW_ABI = require("./withdrawabi.json");

const provider = "https://rpc-mainnet.matic.network";

const web3 = new Web3(new Web3.providers.HttpProvider(provider));

const SIM_ADDRESS = "0x70784d8A360491562342B4F3d3D039AaAcAf8F5D";
const POOL_ADDRESS = "0x9aa2f05b70386ffe0a273c757fe02c21da021d62";
const WITHDRAW_ADDRESS = "0x9aA2F05b70386fFe0A273C757fE02C21da021d62";
const CONTRACT_WITHDRAW = new web3.eth.Contract(WITHDRAW_ABI, WITHDRAW_ADDRESS);
const CONTRACT_SIM = new web3.eth.Contract(SIM_ABI, SIM_ADDRESS);

var CronJob = require('cron').CronJob;

const address = [{
  address: "your address wallet",
  private_key: "your private key export from metamask"
}];
module.exports = {
  async run() {
    console.log("===============START===============");
    var that = this;
    var job = new CronJob('* * * * * *', async function() {
      var balance = await that.getBalance();
      if (balance > 1000) {
        console.log(`=== CLAIM ===`);
        address.forEach((item, i) => {
          that.claim(item.address, item.private_key);
        });
      }
    }, null, true, 'America/Los_Angeles');
    job.start();
  },

  async claim(address, private_key) {
    try {
      const transaction = CONTRACT_WITHDRAW.methods.withdraw();
      var estimateGas = await transaction.estimateGas({
        from: address
      });
      var gasPrice = await web3.eth.getGasPrice();
      const options = {
        to: WITHDRAW_ADDRESS,
        data: transaction.encodeABI(),
        gas: estimateGas,
        gasPrice: gasPrice
      };
      const signed = await web3.eth.accounts.signTransaction(options, private_key);
      const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
      console.log(receipt);
    } catch (err) {
      console.log(err);
    }
  },

  async getBalance() {
    try {
      const result = await CONTRACT_SIM.methods.balanceOf(POOL_ADDRESS).call();
      const format = web3.utils.fromWei(result);
      console.log(`===== POOL HAS ${format} =====`);
      return format;
    } catch {}
    return 0;
  }
}
