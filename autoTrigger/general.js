var version = '[Alpha] ';

module.exports = async (event, context) => {
  
  /**  if(event.content.match(/test/i)) {
    await lib.discord.channels.messages.create({
      channel_id: event.channel_id,
      content: 'test',
    })
  }*/
  
  if ((event.content.match(/(basket of seeds)|(nether wart pouch)|(builders wand)|(builder's wand)|(builder wand)/i)) 
  && (event.content.match(/aktiviert|deaktiviert|(geht nicht)|wann|warum/i))) {
    await lib.discord.channels.messages.create({
      channel_id: event.channel_id,
      content: ``,
      embed: {
        title: version + 'Automatische Antwort',
        type: 'rich',
        color: 0xFF8C00,
        description: 'Basket of Seeds, Nether Wart Pouch, Builder`s Wand etc. sind derzeit deaktiviert. Es ist nicht bekannt, wann sie wieder funktionieren werden.',
      }
    });
  }
  
}