const { ApplicationCommandOptionType, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
    name: 'createconfigmenu',
    description: 'Creates a selection menu.',
    permissions: ['Administrator'],
    options: [
        {
            name: 'default_role',
            description: 'Create a selection menu for the default role.',
            type: ApplicationCommandOptionType.Subcommand
        }
    ],
    run: async (client, interaction, args) => {
        if (args.__subcommand == 'default_role') {
            const row = new ActionRowBuilder().addComponents(
                new SelectMenuBuilder()
                    .setCustomId('default_role')
                    .setPlaceholder('Select a role'));
            interaction.guild.roles.cache.forEach(role => {
                if (role.name == '@everyone') return;
                row.components[0].addOptions({
                    label: role.name,
                    value: role.id
                })
            });
          

            await interaction.reply({ content: 'Select a default role for new players joining the server:', components: [row] });
        }
    },
}