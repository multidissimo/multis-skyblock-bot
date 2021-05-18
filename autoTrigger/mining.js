module.exports = async function (message) {
    const Discord = require('discord.js');
    const config = require('../config.json');

    if ((message.content.match(/(was ist)|beste|(auf was)|welches/i))
    && (message.content.match(/drill|pickaxe|mining/i))
    && (message.content.match(/reforge/i))) {
        message.channel.send(new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(config.version + 'Mining')
        .setDescription('Im Mining Bereich gibt es mehrere sinnvolle Reforges je nach Anwendung.')
        .addField('Für mehr Mining Speed:','[Fleet](https://hypixel-skyblock.fandom.com/wiki/Diamonite)')
        .addField('Für mehr Mining XP:','[Refined](https://hypixel-skyblock.fandom.com/wiki/Refined_Amber)')
        .setTimestamp()
        .setFooter(config.footer))
      }

    if ((message.content.match(/(wo ist)|(wo sind)/i))
    && (message.content.match(/fetchur|forge|(upper mines)|royal|(cliffside veins)|(lava springs)|dwarven|golin|(ice walker)/i))) {
        message.channel.send(new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(config.version + 'Mining')
        .setDescription('Alle Infos zu Orten und NPCs in den Dwarven Mines findest du hier: <https://youtu.be/Zu489h2O7Q4>')
        .setTimestamp()
        .setFooter(config.footer))
      }

    if ((message.content.match(/(was ist)|beste|welche/i))
    && (message.content.match(/mining/i))
    && (message.content.match(/rüstung|armor|armour/i))) {
        message.channel.send(new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(config.version + 'Mining')
        .setDescription('Hier findest du ein Video zu den besten Mining Rüstungen: https://youtu.be/wZ22kgUGM-c')
        .addField('Zusätzlich gibt es noch diese Rüstung, welche auch gut ist:','[Mineral Armor](https://hypixel-skyblock.fandom.com/wiki/Mineral_Armor)')
        .setTimestamp()
        .setFooter(config.footer))
      }
}