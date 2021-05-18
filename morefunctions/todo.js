module.exports = async function (message) {
    const Discord = require('discord.js');
    const config = require('../config.json');

    const todolist = ["-Andere Reforges","-Ultimate Enchants","-Dungeons Requirements","-Archer Antwort","-Mage Antwort","-Berserk Antwort","-Healer Antwort",
    "-Tank Antwort","-Campfire Badge","-Spooky Event"];

    if (message.content === "!todolist") {
        message.channel.send(todolist)
    }
}