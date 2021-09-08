# bot_claim_simbaempire

How to start:

1.  Install nodejs
2.  Open server/schedule.js and replace your address wallet and your private key

Single claim
```
const address = [{
  address: "your address wallet",
  private_key: "your private key export from metamask"
}];
```
Multi claim
```
const address = [{
  address: "your address wallet1",
  private_key: "your private key1 export from metamask"
}, {
  address: "your address wallet2",
  private_key: "your private key2 export from metamask"
},{
  address: "your address wallet3",
  private_key: "your private key3 export from metamask"
},];
```
3.  Open terminal and ```cd {your bot_claim_simbaempire folder}```
4.  ```npm install```
5.  ```npm run start:proc```

Waitting and claim, Enjoy!!
