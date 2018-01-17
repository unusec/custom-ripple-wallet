# Custom Ripple Wallet
Script to generate a Ripple wallet ending with a custom string, based on a idea of [Jaap Vermaire](https://github.com/jaapenstaart)


## How to 

* Install [node.js](https://nodejs.org/)
* Clone/download and open in cmd/terminal
* Run `npm install`
* Run `node find [custom]`
* Note: To avoid very long waiting times, I recommend using a custom string of max 3 characters.


## Example

Run: `node generate XXX`
Result:
```
Found Ripple wallet after 57041 tries
Wallet address: rGBpdRAqjMyX6m3aYZyetXvbCHo5GfaXXX
Wallet secret key: shvUuHKgUzyMHB1ZPFVMwhNdch4YS

```
As you can see the puclic key ends with the provided name: XXX.
If you decide to use the generated wallet, make sure to save your secret and keep it safe.


## Donations

Much appreciate it and only if you feel like it, you can donate XRP to this address:

<p align="center">
	<img src="http://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=rUXmS2w8dbwA98yAws36k1Y4E7XkzvkfwE&amp;qzone=1&amp;margin=0&amp;size=400x400&amp;ecc=L" alt="Donate XRP to UnuSec" />
</p>

```
rUXmS2w8dbwA98yAws36k1Y4E7XkzvkfwE
```


## License
[MIT](LICENSE.md)