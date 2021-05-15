const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

const autoTrigger = require('./autoTrigger/autoTrigger');

client.on('message', autoTrigger);

client.once('ready', () => {
    console.log("Connected as " + client.user.tag)
})

/**
client.on('message', message => {
	if (message.content.match(/farm|farmen|(schnell farmen)|(gute farm)/i)
  && (message.content.match(/bau|contest/i))) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('#e74c3c')
    .setTitle(config.version)
    .addField('Wie man schnell Farmen baut:', '<https://youtu.be/OsnwMCNnAM4>')
    .addField('Alle Arten von Farmen // Gold in jedem Farming Contest bekommen', '<https://youtu.be/uSYRSxtM6Ok>')
    .setTimestamp()
    .setFooter(config.footer))
  }
})

client.on('message', message => {
  if (message.content.match(/(basket of seeds)|(nether wart pouch)|(builders wand)|(builder's wand)|(builder wand)/i)
  && (message.content.match(/aktiviert|deaktiviert|(geht nicht)|wann|warum/i))) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('#e74c3c')
    .setTitle(config.version)
    .setDescription('Basket of Seeds, Nether Wart Pouch, Builder`s Wand etc. sind derzeit deaktiviert. Es ist nicht bekannt, wann sie wieder funktionieren werden.')
    .setTimestamp()
    .setFooter(config.footer))
  }
})

client.on('message', message => {
  if (message.content.match(/(was ist)|beste|(auf was)|welches/i)
  && (message.content.match(/farm|hoe/i))
  && (message.content.match(/reforge/i))) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('#e74c3c')
    .setTitle(config.version)
    .setDescription('Für Farming Tools eignet sich das Reforge [Blessed](https://hypixel-skyblock.fandom.com/wiki/Blessed_Fruit) am besten.')
    .setTimestamp()
    .setFooter(config.footer))
  }
})

client.on('message', message => {
  if ((message.content.match(/(was ist)|beste|(auf was)|welches/i))
  && (message.content.match(/fishing|angel|rod/i))
  && (message.content.match(/reforge/i))) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('#e74c3c')
    .setTitle(config.version)
    .addField('Fishing Reforge für Angeln:','[Salty](https://hypixel-skyblock.fandom.com/wiki/Terry)')
    .addField('Fishing Reforge für Rüstungen:','[Submerged](https://hypixel-skyblock.fandom.com/wiki/Deep_Sea_Orb)')
    .setTimestamp()
    .setFooter(config.footer))
  }
})

client.on('message', message => {
  if ((message.content.match(/(was ist)|beste|(auf was)|welches/i))
  && (message.content.match(/drill|pickaxe|mining/i))
  && (message.content.match(/reforge/i))) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('#e74c3c')
    .setTitle(config.version)
    .setDescription('Im Mining Bereich gibt es mehrere sinnvolle Reforges je nach Anwendung.')
    .addField('Für mehr Mining Speed:','[Fleet](https://hypixel-skyblock.fandom.com/wiki/Diamonite)')
    .addField('Für mehr Mining XP:','[Refined](https://hypixel-skyblock.fandom.com/wiki/Refined_Amber)')
    .setTimestamp()
    .setFooter(config.footer))
  }
})

*/

client.on('message', async msg => {
  if(msg.author.bot) {
    return
  }
})

client.login(config.token);