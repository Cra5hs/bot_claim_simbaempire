# bot_claim_simbaempire

Join group & follow me: 
[![Telegram Badge](https://img.shields.io/badge/[Source%20code]Bot%20Simba%20Empire-0072b1?style=flat&logo=Telegram&logoColor=white&link=https://t.me/joinchat/Lu9JNIDr6sU2MTg1)](https://t.me/joinchat/Lu9JNIDr6sU2MTg1) 

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
