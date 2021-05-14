const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on('message', async msg => {
    if(msg.author.bot) {
      return
    }
})

client.on('message', async msg => {
    if(msg.content.includes('farm')) {
    msg.reply('test');
    }
  })

client.login('');