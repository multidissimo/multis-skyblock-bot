module.exports = async function (message) {
    const Discord = require('discord.js');
    const config = require('../config.json');

    if ((message.content.match(/(was ist)|beste|(auf was)|welches/i))
    && (message.content.match(/axe|axt|foraging/i))
    && (message.content.match(/reforge/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version + 'Foraging')
          .addField('Bestes Reforge für Foraging:','[Toil](https://hypixel-skyblock.fandom.com/wiki/Toil_Log)')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }
}