const { ChannelType } = require('discord.js');
const ranks = require('../../data/ranks.json');

require('dotenv').config('../../../')
const { GUILD_ID } = process.env

module.exports = async (client) => {
    const n = require('../../data/levels.json').guild;
    const { scott_tracker_id, member_counter_id } = require('../../data/config.json');
    const guild = await client.guilds.fetch(GUILD_ID);
    // need to fetch members to check role counts
    await guild.members.fetch();

    // update the Scott tracker
    const scott_channel = guild.channels.cache.get(scott_tracker_id);
    scott_channel.edit({ name: scott_channel.name.split(':')[0] + ': ' + n });

    // update the member tracker
    const member_channel = guild.channels.cache.get(member_counter_id);
    member_channel.edit({ name: member_channel.name.split(':')[0] + ': ' + guild.members.cache.size });

    // role trackers
    ranks.forEach(async (rank) => {
        const channel = guild.channels.cache.find((ch) => ch.name.includes(rank));
        if (!channel) guild.channels.create({
            name: rank + 's : ',
            type: ChannelType.GuildVoice,
        });
        else {
            const role = guild.roles.cache.find((r) => r.name == rank + ' of Scott');
            channel.edit({ name: channel.name.split(':')[0] + ': ' + role.members.size })
        }
    });
};  