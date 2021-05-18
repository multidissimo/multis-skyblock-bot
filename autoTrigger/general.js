module.exports = async function (message) {
    const Discord = require('discord.js');
    const config = require('../config.json');

    if (message.content.match(/(basket of seeds)|(nether wart pouch)|(builders wand)|(builder's wand)|(builder wand)/i)
    && (message.content.match(/aktiviert|deaktiviert|(geht nicht)|wann|warum|geht/i))) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(config.version + 'FAQ')
    .setDescription('Basket of Seeds, Nether Wart Pouch, Builder`s Wand etc. sind derzeit deaktiviert. Es ist nicht bekannt, wann sie wieder funktionieren werden.')
    .setTimestamp()
    .setFooter(config.footer))
  }

}