module.exports = {
    name: 'praise',
    description: 'Praise Scott. Displays how many times you have repeated the holy name of Scott.',
    run: async (client, interaction, args) => {
        const { members } = require('../../data/levels.json');
        const scott_count = members[interaction.user.id];
        await interaction.reply(`You have praised Scott ${scott_count} times.`);
    },
};