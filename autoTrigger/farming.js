module.exports = async function (message) {
    const Discord = require('discord.js');
    const config = require('../config.json');

    if (message.content.match(/farm|farmen|(schnell farmen)|(gute farm)/i)
    && (message.content.match(/bau|contest/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .addField('Wie man schnell Farmen baut:', 'https://youtu.be/OsnwMCNnAM4')
          .addField('Alle Arten von Farmen // Gold in jedem Farming Contest bekommen', 'https://youtu.be/uSYRSxtM6Ok')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }
    
    if (message.content.match(/(was ist)|beste|(auf was)|welches/i)
    && (message.content.match(/farm|hoe/i))
    && (message.content.match(/reforge/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .setDescription('Für Farming Tools eignet sich das Reforge [Blessed](https://hypixel-skyblock.fandom.com/wiki/Blessed_Fruit) am besten.')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }

    if (message.content.match(/(was ist)|beste|welcher|(wie viel)/i)
    && (message.content.match(/farm|für|bei/i))
    && (message.content.match(/speed/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .addField('Einzelne Reihe','355 Speed')
          .addField('Kürbisse/Melonen etc. (2 Reihen)','266 Speed')
          .addField('Karotten/Kartoffeln etc. (4 Reihen)','116 Speed')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }
}