const fs = require('fs');
const rankup_data = require('../../data/rankup.json');

module.exports = (message, client) => {
    if (message.author.bot) return;

    // rank bypass
    rankup_data.forEach((rank, i, array) => {
        if (message.content.toLowerCase().includes(rank.bypass)) {
            const member = message.guild.members.cache.get(message.author.id);
            const other_ranks = array.filter((ele) => ele != rank && ele.level < rank.level).map((ele) =>
                member.roles.cache.find((e) => e.name == ele.name)).filter((ele) => ele != undefined);
            if (other_ranks.length != 0) {
                other_ranks.forEach((ele) => member.roles.remove(ele));
                const role = message.guild.roles.cache.find((ele) => ele.name == rank.name);
                message.member.roles.add(role);
                const levels = require('../../data/levels.json');
                levels.members[message.author.id] = rank.level;
                fs.writeFileSync('./data/levels.json', JSON.stringify(levels, null, 4));
                console.log(`[RANKUP] ${message.author.username} has ranked up to ${rank.name} (SECRET).`);
            }
            return;
        }
    });

    let inc = false;
    ['scott', 'scoot'].forEach((scott_token) => {
        if (message.content.toLowerCase().includes(scott_token))
            inc = true;
    });

    // fetch cooldown
    const member = message.guild.members.cache.get(message.author.id);
    const member_rank_info = rankup_data.find((rank) =>
        member.roles.cache.find((role) => role.name == rank.name) != undefined);
    let cooldown = 15 * 1000; // in minutes conv to millis
    if (member_rank_info) cooldown = member_rank_info.cooldown * 1000;

    const date = new Date();
    if (!Object.keys(client.cooldowns).includes(message.author.id))
        client.cooldowns[message.author.id] = 0;

    if (inc && date.getTime() - client.cooldowns[message.author.id] < cooldown) {
        // set cooldown timer
        client.cooldowns[message.author.id] = date.getTime();

        // increment scott counter & save
        const levels = require('../../data/levels.json');
        levels.guild++;
        if (!Object.keys(levels.members).includes(message.author.id))
            levels.members[message.author.id] = 0;
        levels.members[message.author.id]++;
        fs.writeFileSync('./data/levels.json', JSON.stringify(levels, null, 4));

        // handling ranking up
        rankup_data.forEach((rank, i) => {
            if (levels.members[message.author.id] == rank.level) {
                const prereq = member.roles.cache.find(ele => ele.name == rank.prereq);
                if (prereq) {
                    const role = message.guild.roles.cache.find(ele => ele.name == rank.name);
                    member.roles.remove(prereq);
                    member.roles.add(role);
                    console.log(`[RANKUP] ${message.author.username} has ranked up to ${rank.name}!`);
                }
            }
        });
    } 
};
