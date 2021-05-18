const Discord = require("discord.js");
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("config.json"  ,  'utf8'));
const statusmessages = 'Multis Discord';

const client = new Discord.Client()

const general = require('./autoTrigger/general');
client.on('message', general);

const farming = require('./autoTrigger/farming');
client.on('message', farming);

const fishing = require('./autoTrigger/fishing');
client.on('message', fishing);

const foraging = require('./autoTrigger/foraging');
client.on('message', foraging);

const mining = require('./autoTrigger/mining');
client.on('message', mining);

const pets = require('./autoTrigger/pets');
client.on('message', pets);

const todo = require('./morefunctions/todo');
client.on('message', todo);

console.log("Loading...")

client.on('ready'  , () => {
	console.log("Bot online als " + client.user.tag)
  client.user.setActivity(statusmessages,{type:"LISTENING"})
})

client.login(config.token);
