const Web3 = require('web3');
const contractABI = require('./contractABI.json');
require('dotenv').config();

const web3 = new Web3(`https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`);

const tokenAddress = '0x53844f9577c2334e541aec7df7174ece5df1fcf0'; // DAI token address on Seoplia testnet
const tokenContract = new web3.eth.Contract(contractABI, tokenAddress);
const DELAY = 12000;
//wait 12 seconds
const MAX_GAS_FEE = '5';
const PRIORITY_FEE = '2.3';

let numTries = 0;
console.log('========================================================');
console.log(`==DELAY : ${DELAY} ms===================================`);
console.log(`==MAX_GAS_FEE: ${MAX_GAS_FEE}===========================`);
console.log(`===PRIORITY_FEE: ${PRIORITY_FEE}========================`);
console.log('========================================================');
console.log('======Get tDAI on Sepolia Network=======================');
console.log('===============by tg: @PulseChad =======================\n\n');

async function createToken() {
  try {
  // Create a new account object using your wallet's private key
  const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
  web3.eth.accounts.wallet.add(account);

  // Call the create() function
  const result = await tokenContract.methods.create(process.env.YOUR_ADDRESS).send({
    from: account.address,
    gas: 200000, // You can adjust the gas limit to suit your needs
    maxFeePerGas: web3.utils.toWei(MAX_GAS_FEE, 'gwei'), // Set your desired maximum fee per gas in gwei
    maxPriorityFeePerGas: web3.utils.toWei(PRIORITY_FEE, 'gwei') // Set your desired maximum priority fee per gas in gwei
  });

  numTries++; // Increment the number of tries after each call

  console.log(`Got 10,000 tDAI on try #${numTries}! tx: ${result.transactionHash}`);
  setTimeout(createToken, DELAY); // Call the function again after a 12-second delay
      }
      catch(error) {
        console.log(`There was an error ${error}`);
      }
}

createToken();
