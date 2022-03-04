const crypto = require("./commands/crypto.js");
const stonk = require("./commands/stonk.js");
const commands = { crypto, stonk };

module.exports = async function gotMessage(msg) {
  let tokens = msg.content.split(" ");
  let command = tokens.shift();
  if (command.charAt(0) === "!") {
    command = command.substring(1);
    command = command.split(" ")[0];
    commands[command](msg, tokens);
  }
};
