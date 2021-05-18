module.exports = async function (message) {
    const Discord = require('discord.js');
    const config = require('../config.json');

    if ((message.content.match(/(ich mache nur)|(mache ich)|(kann ich)|erhöhen|mache/i))
    && (message.content.match(/damage|schaden/i))
    && (message.content.match(/wie|(mehr schaden)|(mehr damage)/i))) {
        message.channel.send(new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(config.version + 'Damage')
        .setDescription('Schaden hängt von sehr vielen Faktoren ab. Die Waffe ist dabei eher unwichtig. Wie du deinen Schaden erhöhen kannst, erfährst du in diesem Video: https://youtu.be/HBiSZCUtGnA')
        .addField('Talisman Reforge Bot','Der Bot in #talisman-reforges hilft ebenfalls weiter, den Damage zu verbessern. Eine Anleitung dazu gibt es im obigen Video oder in #anleitungen')
        .setTimestamp()
        .setFooter(config.footer))
    }

    if ((message.content.match(/talis/i))
    && (message.content.match(/reforge/i))
    && (message.content.match(/wie|(mehr schaden)|(mehr damage)|(attack speed)|(crit chance)|(crit damage)|mana|intelligence/i))) {
        message.channel.send(new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(config.version + 'Damage')
        .setDescription('Der Bot in #talisman-reforges hilft, den Damage, die Crit Chance oder den Attack Speed zu verbessern. Eine Anleitung dazu gibt es in [diesem Video](https://youtu.be/HBiSZCUtGnA) oder in #anleitungen')
        .addField('Talisman Reforges für Schaden:','[Shaded](https://hypixel-skyblock.fandom.com/wiki/Dark_Orb) für **Common, Uncommon, Rare** und **Epic** Talismane, Strong für **Legendary** und **Mythic** Talismane.')
        .addField('Talisman Reforges für Attack Speed:','Strange')
        .addField('Talisman Reforges für Intelligence:','Bizarre')
        .setTimestamp()
        .setFooter(config.footer))
    }
}