const config = JSON.parse(fs.readFileSync('config.json','utf-8'));

client.on('message', () => {
  if(message.content.includes(/farm|farmen|(schnell farmen)|(gute farm)/i)
  && (message.content.includes(/bau|contest/i))) {
    discord.message.create ({
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
})