var version = '[Alpha] ';

module.exports = async (event, context) => {
  
  /**  if(event.content.match(/test/i)) {
    await lib.discord.channels.messages.create({
      channel_id: event.channel_id,
      content: 'test',
    })
  }*/
  
  // FARMING
  
  if ((event.content.match(/(was ist)|beste|(auf was)|welches/i))
  && (event.content.match(/farm|hoe/i))
  && (event.content.match(/reforge/i))) {
    await lib.discord.channels.messages.create({
      channel_id: event.channel_id,
      content: '',
      embed: {
        title: version + 'Automatische Antwort',
        type: 'rich',
        color: 0xFF8C00,
        description: 'Für Farming Tools eignet sich das Reforge [Blessed](https://hypixel-skyblock.fandom.com/wiki/Blessed_Fruit) am besten.' 
        }
    });
  }
  
  // FISHING
  
  if ((event.content.match(/(was ist)|beste|(auf was)|welches/i))
  && (event.content.match(/fishing|angel|rod/i))
  && (event.content.match(/reforge/i))) {
    await lib.discord.channels.messages.create({
      channel_id: event.channel_id,
      content: ``,
      embed: {
        title: version + 'Automatische Antwort',
        type: 'rich',
        color: 0xFF8C00,
        "fields": [
          {
            "name": "Fishing Reforge für Angeln:",
            "value": "[Salty](https://hypixel-skyblock.fandom.com/wiki/Terry)"
          },
          {
            "name": "Fishing Reforge für Rüstungen:",
            "value": "[Submerged](https://hypixel-skyblock.fandom.com/wiki/Deep_Sea_Orb)"
          },
        ]}
    });
  }
  
  // MINING
  
  if ((event.content.match(/(was ist)|beste|(auf was)|welches/i))
  && (event.content.match(/drill|pickaxe|mining/i))
  && (event.content.match(/reforge/i))) {
    await lib.discord.channels.messages.create({
      channel_id: event.channel_id,
      content: ``,
      embed: {
        title: version + 'Automatische Antwort',
        type: 'rich',
        color: 0xFF8C00,
        description: 'In Arbeit.' 
        }
    });
  }
  
}
