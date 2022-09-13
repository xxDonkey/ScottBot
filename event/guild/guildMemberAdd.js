module.exports = (member, client) => {
    const { default_role_id } = require('../../data/config.json');
    const role = member.guild.roles.cache.get(default_role_id);
    member.roles.add(role);
};
