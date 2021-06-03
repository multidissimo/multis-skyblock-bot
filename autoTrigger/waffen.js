module.exports = async function (message) {
    const Discord = require('discord.js');
    const config = require('../config.json');

    if (message.content.match(/(soul whip)|soulwhip/i)
    && (message.content.match(/bekomm|craft|brauch/i))
    && (message.content.match(/wie|was/i))) {
        message.channel.send(new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(config.version + 'Waffen')
        .setDescription('Für eine [Soul Whip](https://hypixel-skyblock.fandom.com/wiki/Soul_Whip) braucht man 12 [Ectoplasm](https://hypixel-skyblock.fandom.com/wiki/Ectoplasm) und 8 [Soul Fragments](https://hypixel-skyblock.fandom.com/wiki/Soul_Fragment). Um sie benutzen zu können, muss man mindestens Fishing Level 26 sein.')
        .setTimestamp()
        .setFooter(config.footer))
    }
}