const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const { execute } = require('./autoTrigger/farming');

client.once('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on('message', message => {
	if(message.content.match(/farm|farmen|(schnell farmen)|(gute farm)/i)
  && (message.content.match(/bau|contest/i))) {
    execute('./autoTrigger/farming');
	}
});

client.on('message', async msg => {
  if(msg.author.bot) {
    return
  }
})

client.login(config.token);