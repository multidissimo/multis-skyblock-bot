module.exports = {
  name: 'farming',
  description: 'Who is this helpful bot?!',
  execute(message) {
      message.channel.send(new Discord.MessageEmbed()
      .setColor('#e74c3c')
      .setTitle(config.version)
      .addField('Wie man schnell Farmen baut:', '<https://youtu.be/OsnwMCNnAM4>')
      .addField('Alle Arten von Farmen // Gold in jedem Farming Contest bekommen', '<https://youtu.be/uSYRSxtM6Ok>')
      .setTimestamp()
      .setFooter(config.footer))
  },
}