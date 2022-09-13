const fs = require('fs');

module.exports = (message, client) => {
    if (message.author.bot) return;

    let inc = false;
    ['scott', 'scoot'].forEach((scott_token) => {
        if (message.content.toLowerCase().includes(scott_token))
            inc = true;
    })

    if (inc) {
        const levels = require('../../data/levels.json');
        levels.guild++;
        if (!Object.keys(levels.members).includes(message.author.id))
            levels.members[message.author.id] = 0;
        levels.members[message.author.id]++;
        fs.writeFileSync('./data/levels.json', JSON.stringify(levels, null, 4));
    } 
};
