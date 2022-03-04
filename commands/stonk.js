const RealtimeStock = require("pure-realtime-stock");
const realtime = new RealtimeStock();
var price = 0;

module.exports = function (msg, args) {
  let text = msg.content.split(" ");
  const response = "The current price of " + text[1] + " is ";
  realtime.getPrice(text[1]).then((p) => {
    msg.reply(response + p);
  });
};
