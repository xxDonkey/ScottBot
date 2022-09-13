module.exports = (client) => {
    const n = require('../../data/levels.json').guild;
    const { scott_tracker_id } = require('../../data/config.json');
    const guild = client.guilds.cache.at(0);
    const channel = guild.channels.cache.get(scott_tracker_id);
    
};  