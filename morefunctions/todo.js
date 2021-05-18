module.exports = async function (message) {
    const Discord = require('discord.js');
    const config = require('../config.json');

    const todolist = ["-Andere Reforges","-Ultimate Enchants","-Dungeons Requirements","-Archer Antwort","-Mage Antwort","-Berserk Antwort","-Healer Antwort",
    "-Tank Antwort","-Mehr Damage/Talismane","-Campfire Badge","-Fishing Rüstung","-Mining Rüstung","-Spooky Event","-Farming Speed","-","-Verbotene Wörter Liste","-Verbotene Wörter Zähler",
    "-Coin System","-Coinspiele"];

    if (message.content === "!todolist") {
        message.channel.send(todolist)
    }
}