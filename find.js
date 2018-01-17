const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI();

const custom = process.argv.slice(2)[0] || '';

custom.length === 0 ? process.exit() : "";

custom.length === 4 ? console.warn('Warning: This might take a while...' ): "";

custom.length === 5 ? console.warn('Warning: This might take days...') : "";

if(custom.length >= 6) {
  console.log('Aborting: The string you provided is 6 characters or longer, it will take too long.');
  process.exit();
}

let tries = 0;
let wallet = api.generateAddress();
console.log(`Trying to find a Ripple wallet ending with: ${custom}`);
while (wallet.address.slice(-custom.length) !== custom.toUpperCase()) {
  tries++;
  wallet = api.generateAddress();
  if(tries%1000 === 0) {
    console.log(`Tring for ${tries} times`);
  }
}

console.log(`Found Ripple wallet after ${tries} tries
Wallet address: ${wallet.address}
Wallet secret key: ${wallet.secret}`);
