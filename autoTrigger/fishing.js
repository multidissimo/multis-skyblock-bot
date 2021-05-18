module.exports = async function (message) {
    const Discord = require('discord.js');
    const config = require('../config.json');

    if ((message.content.match(/(was ist)|beste|(auf was)|welches/i))
    && (message.content.match(/fishing|angel|rod/i))
    && (message.content.match(/reforge/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .addField('Fishing Reforge für Angeln:','[Salty](https://hypixel-skyblock.fandom.com/wiki/Terry)')
          .addField('Fishing Reforge für Rüstungen:','[Submerged](https://hypixel-skyblock.fandom.com/wiki/Deep_Sea_Orb)')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }

    if ((message.content.match(/(was ist)|beste|welches|für/i))
    && (message.content.match(/rüstung|armor|armour/i))
    && (message.content.match(/fishing/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .setDescription('Die beste Fishing Rüstung ist die [Shark Scale Armor](https://hypixel-skyblock.fandom.com/wiki/Shark_Scale_Armor).')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }

    if ((message.content.match(/(was ist)|welche/i))
    && (message.content.match(/fishing|angel|rod/i))
    && (message.content.match(/beste|(winter insel)/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .addField('Die beste Angel generell:','[Rod of the Sea](https://hypixel-skyblock.fandom.com/wiki/Rod_of_the_Sea)')
          .addField('Die beste Angel auf der Winter Insel (für Winter Sea Creatures):','[Auger Rod](https://hypixel-skyblock.fandom.com/wiki/Auger_Rod)')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }

    if ((message.content.match(/(was ist)|beste|welche|womit/i))
    && (message.content.match(/bait/i))) {
        var embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(config.version)
          .setDescription('Es gibt nicht **DEN** besten Bait. Jeder ist für etwas gut. [Übersicht aller Baits](https://hypixel-skyblock.fandom.com/wiki/Fishing_Bait)')
          .addField('Für schnelles Angeln:','**Minnow Bait** und **Spooky Bait** (je +15%) oder **Fishing Bait** (+30%)')
          .addField('Für schnelles Angeln zu bestimmten Zeiten:','**Light Bait** (bei Tag) oder **Dark Bait** (bei Nacht)')
          .addField('Für mehr Sea Creatures:','**Spiked Bait** (+6% Sea Creature Chance), **Spooky Bait** (+15% Chance auf Spooky Creatures), **Ice Bait** (+20% Chance auf Winter Creatures), **Shark Bait** (+15% Chance für Sharks)')
          .addField('Für mehr Drops:','**Blessed Bait** (15% Chance für Double Drops)')
          .addField('Für Carrot Kings:','**Carrot Bait** (Chance um Carrot Kings zu angeln)')
          .addField('Kombination aus Fishing, Light, Dark und Blessed Bait:','**Whale Bait**')
          .setTimestamp()
          .setFooter(config.footer)
        message.channel.send(embed)
    }
}