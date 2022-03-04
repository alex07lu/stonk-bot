require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
const messageCount = require("./message-counter");
client.login(process.env.BOTTOKEN);
client.on("ready", async () => {
  console.log("Hello!");

  messageCount(client);
});

const commandHandler = require("./commands");
client.on("message", commandHandler);
