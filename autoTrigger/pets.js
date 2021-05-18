module.exports = async function (message) {
    const Discord = require('discord.js');
    const config = require('../config.json');

    if ((message.content.match(/(was ist)|welches|beste/i))
    && (message.content.match(/pet/i))
    && (message.content.match(/foraging|(foraging xp)/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .addField('Pet für mehr Foraging XP:','[Ocelot](https://hypixel-skyblock.fandom.com/wiki/Ocelot_Pet)')
          .addField('Pet für mehr Holz und schnelleres Abbauen:','[Monkey](https://hypixel-skyblock.fandom.com/wiki/Monkey_Pet)')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }
    
    if ((message.content.match(/(was ist)|welches|beste/i))
    && (message.content.match(/pet/i))
    && (message.content.match(/mining|(mining xp)|(mining speed)|(dwarven mines)|(mithril powder)/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .addField('Pet für mehr Mining XP:','[Silverfish](https://hypixel-skyblock.fandom.com/wiki/Silverfish_Pet)')
          .addField('Pet für mehr Mining Speed / Mithril Powder:','[Mithril Golem](https://hypixel-skyblock.fandom.com/wiki/Mithril_Golem_Pet)')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }
    
    if ((message.content.match(/(was ist)|welches|beste/i))
    && (message.content.match(/pet/i))
    && (message.content.match(/farming|(farming xp)/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .addField('Pet für mehr Farming XP:','[Rabbit](https://hypixel-skyblock.fandom.com/wiki/Rabbit_Pet)')
          .addField('Pet für mehr Farming Drops:','[Elephant](https://hypixel-skyblock.fandom.com/wiki/Elephant_Pet)')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }
    
    if ((message.content.match(/(was ist)|welches|beste/i))
    && (message.content.match(/pet/i))
    && (message.content.match(/combat|(combat xp)|damage|schaden/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .addField('Pet für mehr Combat XP:','[Wolf](https://hypixel-skyblock.fandom.com/wiki/Wolf_Pet)')
          .addField('Pets für mehr Schaden:','[Enderman](https://hypixel-skyblock.fandom.com/wiki/Enderman_Pet) | [Ender Dragon](https://hypixel-skyblock.fandom.com/wiki/Ender_Dragon_Pet) | [Griffin](https://hypixel-skyblock.fandom.com/wiki/Griffin_Pet) | [Tiger](https://hypixel-skyblock.fandom.com/wiki/Tiger_Pet) (Ferocity)')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }
    
    if ((message.content.match(/(was ist)|welches|beste/i))
    && (message.content.match(/pet/i))
    && (message.content.match(/enchanting|(enchanting xp)/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .setDescription('Das beste und einzige Enchanting Pet ist der [Guardian](https://hypixel-skyblock.fandom.com/wiki/Guardian_Pet)')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }
    
    if ((message.content.match(/(was ist)|welches|beste/i))
    && (message.content.match(/pet/i))
    && (message.content.match(/alchemy|(alchemy xp)/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .setDescription('Es gibt kein Pet für mehr Alchemy XP.')
          .addField('Es gibt aber die Foldenden Alchemy Pets:','[Sheep](https://hypixel-skyblock.fandom.com/wiki/Sheep_Pet) | [Parrot](https://hypixel-skyblock.fandom.com/wiki/Parrot_Pet) | [Jellyfish](https://hypixel-skyblock.fandom.com/wiki/Jellyfish_Pet)')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }
}