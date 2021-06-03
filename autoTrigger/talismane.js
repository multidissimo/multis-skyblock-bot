module.exports = async function (message) {
    const Discord = require('discord.js');
    const config = require('../config.json');

    if (message.content.match(/welch/i)
    && (message.content.match(/talis/i))
    && (message.content.match(/best/i))) {
        message.channel.send(new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(config.version + 'Talismane')
        .setDescription('Es gibt nicht den besten Talisman, da alle einzigartig sind.')
        .addField('Alle Talismane','https://hypixel-skyblock.fandom.com/wiki/Accessories')
        .addField('Alle Talismane, die man nicht craften kann','https://youtu.be/WQGcuezkaHU')
        .setTimestamp()
        .setFooter(config.footer))
    }

    if (message.content.match(/wo/i)
    && (message.content.match(/bekomm/i))
    && (message.content.match(/talis/i))) {
        message.channel.send(new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(config.version + 'Talismane')
        .setDescription('Für viele Talismane gibt es Rezepte, die man in Collections freischalten kann.')
        .addField('Alle Talismane','https://hypixel-skyblock.fandom.com/wiki/Accessories')
        .addField('Alle Talismane, die man nicht craften kann','https://youtu.be/WQGcuezkaHU')
        .setTimestamp()
        .setFooter(config.footer))
    }

}