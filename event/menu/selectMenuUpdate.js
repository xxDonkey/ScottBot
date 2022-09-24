const fs = require('fs');

module.exports = (interaction, client) => {
    if (!interaction.isSelectMenu()) return;
    
    const config = require('../../data/config.json')

    if (interaction.customId == config.default_role_selection_id) {
        config.default_role_id = interaction.values[0];
        fs.writeFileSync('./data/config.json', JSON.stringify(config, null, 4));
        interaction.reply({ content: `Updated the default role ID to ${interaction.values[0]}!`, 'ephemeral': true });
        console.log(`Updated the default role ID to ${interaction.values[0]}!`);
    }
    else if (interaction.customId == config.scott_tracker_selection_id) {
        config.scott_tracker_id = interaction.values[0];
        fs.writeFileSync('./data/config.json', JSON.stringify(config, null, 4));
        interaction.reply({ content: `Updated the Scott tracker ID to ${interaction.values[0]}!`, 'ephemeral': true });
        console.log(`Updated the Scott tracker ID to ${interaction.values[0]}!`);
    }
    else if (interaction.customId == config.member_counter_selection_id) {
        config.member_counter_id = interaction.values[0];
        fs.writeFileSync('./data/config.json', JSON.stringify(config, null, 4));
        interaction.reply({ content: `Updated the member counter ID to ${interaction.values[0]}!`, 'ephemeral': true });
        console.log(`Updated the member counter ID to ${interaction.values[0]}!`);
    }

    
};
