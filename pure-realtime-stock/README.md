# pure-realtime-stock
[![NPM Downloads](https://img.shields.io/npm/dt/pure-realtime-stock.svg?style=curved-square)](https://www.npmjs.com/package/pure-realtime-stock)
[![NPM Version](https://badge.fury.io/js/pure-realtime-stock.svg)](https://badge.fury.io/js/pure-realtime-stock)

get real-time stock data for free in Node.js

#### How does it work?
Hidden Robinhood pages are opened programmatically for each stock. When the price of a stock changes in realtime, the price and symbol is sent over.

## Installation

**Regular**

Using npm:
+ `npm install pure-realtime-stock`

Using yarn:
+ `yarn add pure-realtime-stock`

**Ubuntu**

+ Run installation as root and add `--unsafe-perm=true` flag
+ Install Puppeteer dependencies using `sh node_modules/pure-realtime-stock/deps.sh`


## Usage

#### RealtimeStock()
Creates a new EventEmitter that outputs realtime stock prices.
```js

const RealtimeStock = require("pure-realtime-stock");
const realtime = new RealtimeStock();
```

#### .subscribe(stock : string)
Subscribe to the price movements of a stock with the symbol.
```js

realtime.subscribe("ROKU");

// The realtime "priceMoved" event will now output ROKU's price movements.
```

#### .unsubscribe(stock : string)
Unsubscribe from a stock's price movements.
```js

realtime.unsubscribe("ROKU");

// The realtime "priceMoved" event will stop outputting ROKU's price movements.
```

#### .getPrice(stock : string)
Gets a stock price.
```js

realtime.getPrice("ROKU").then(price => console.log(`ROKU's current price is ${price}.`));
```

#### .getInformation(stock: string)
Gets a stock's information as found on a <a href="https://robinhood.com/stocks/ROKU">Robinhood</a> page.
```js

realtime.getInformation("ROKU").then(info => {
 console.log(info);
 realtime.close();
});
```

#### .close()
Should be ran at the end of your program to close the connection with Robinhood. **If `close` is not called, the program will not exit.**
```js

realtime.getPrice("ROKU").then(price => {
 console.log(price);
 realtime.close();
});
```

#### .on("priceMoved", callback( { stock : string, price : number } ) )
Listens for price movements of all the subscribed stocks.
```js

realtime.on("priceMoved", ({ stock, price }) => console.log(`${stock} moved... new price is ${price}`);
```

#### .on("debug", callback(error : string))
Listens for event messages or non-fatal problems.
 ```js
 realtime.unsubscribe("BLARG123");
 
 realtime.on("debug", (x) => console.log(x));
 // Output: BLARG123 is not a subscription.
 ````
 
#### .on("logs", callback(error : string))
Listens for internal error logs.
 ```js
 
 realtime.on("logs", (e) => console.log(e));
 ````

## Contributing
Feel free to send any pull requests this way!

### Getting Started

+ `$ git clone https://github.com/jackHedaya/pure-realtime-stock`
+ `$ cd pure-realtime-stock && yarn`

## Dependencies

+ <a href="https://github.com/GoogleChrome/puppeteer">puppeteer</a>
