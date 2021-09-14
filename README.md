# bot_claim_simbaempire

⚠️ ⚠️ ⚠️ **WARNING** ⚠️ ⚠️ ⚠️<br/>
**If you share the private key with a stranger, you will lose all your money, so you need to keep it carefully. You need to understand the source code to enter the private key.** <br/>

**Please do not share the private key with anyone, including relatives.** <br/>
⚠️ ⚠️ ⚠️ **WARNING** ⚠️ ⚠️ ⚠️ <br/>
How to start:

1.  Install nodejs
2.  Open server/schedule.js and replace your address wallet and your private key

```private key = metamask => Account => Account details => Export private key```

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
3.  Open terminal and ```cd {your bot_claim_simbaempire folder}/claim_simba```
4.  ```npm install```
5.  ```npm run start:proc```

Waitting and claim, Enjoy!!
```
Donate: 0xECd6fa6cD46F6a04b9A85Bfc86BF2a2ac601eb93 (MATIC)
```
