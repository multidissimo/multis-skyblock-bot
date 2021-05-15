const farming = require('./farming.js');
const general = require('./general.js');

module.exports = async function (message) {
    channel = '582211001777258529';
    if (message.content.match(/farm|farmen|(schnell farmen)|(gute farm)/i)
    && (message.content.match(/bau|contest/i))) {
        console.log(channel)
        farming(channel);
    }
}