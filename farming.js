const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

var version = '[Alpha] ';

module.exports = async (event, context) => {
  
  /**  if(event.content.match(/test/i)) {
    await lib.discord.channels.messages.create({
      channel_id: event.channel_id,
      content: 'test',
    })
  }*/

  if ((event.content.match(/farm|farmen|(schnell farmen)|(gute farm)/i)) 
  && (event.content.match(/bau|contest/i))) {
    await lib.discord.channels.messages.create({
      channel_id: event.channel_id,
      content: ``,
      embed: {
        title: version + 'Automatische Antwort',
        type: 'rich',
        color: 0xFF8C00,
        "fields": [
        {
          "name": "Wie man schnell Farmen baut:",
          "value": "<https://youtu.be/OsnwMCNnAM4>"
        },
        {
          "name": "Alle Arten von Farmen // Gold in jedem Farming Contest bekommen",
          "value": "<https://youtu.be/uSYRSxtM6Ok>"
        },
      ]}
    });
  }
  
}
