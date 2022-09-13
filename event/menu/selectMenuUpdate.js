const fs = require('fs');

module.exports = (interaction, client) => {
    if (!interaction.isSelectMenu()) return;
    
    const config = require('../../config.json')

    if (interaction.customId == config.default_role_selection_id) {
        config.default_role_id = interaction.values[0];
    }

    fs.writeFileSync('config.json', JSON.stringify(config, null, 4));
    interaction.reply({content: `Updated the default role ID to ${interaction.values[0]}!`, 'ephemeral': true});
    console.log(`Updated the default role ID to ${interaction.values[0]}!`);
};
