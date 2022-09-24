require('dotenv').config('../../../')
const { GUILD_ID } = process.env
const { ActivityType } = require('discord.js');
const update = require('../misc/update');

module.exports = (client) => {
    console.assert(client.guilds.cache.size == 1, 'This bot is only designed to work in one guild!');
    console.assert(client.guilds.cache.at(0).id == GUILD_ID, 'This bot is proprrietary to the Scott Visser Discord server!');

    client.user.setActivity('your prayers', { type: ActivityType.Listening });

    update(client);
    setInterval(() => update(client), 10 * 60 * 1000);
};