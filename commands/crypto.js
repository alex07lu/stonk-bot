module.exports = function (msg, args) {
  let text = msg.content.split(" ");
  const url = "https://www.coinbase.com/price/" + text[1];
  msg.reply(url);
};
