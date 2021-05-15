/**client.on('message', message => {
    if (message.content.match(/(basket of seeds)|(nether wart pouch)|(builders wand)|(builder's wand)|(builder wand)/i)
    && (message.content.match(/aktiviert|deaktiviert|(geht nicht)|wann|warum/i))) {
      message.channel.send(new Discord.MessageEmbed()
      .setColor('#e74c3c')
      .setTitle(config.version)
      .setDescription('Basket of Seeds, Nether Wart Pouch, Builder`s Wand etc. sind derzeit deaktiviert. Es ist nicht bekannt, wann sie wieder funktionieren werden.')
      .setTimestamp()
      .setFooter(config.footer))
    }
  })*/