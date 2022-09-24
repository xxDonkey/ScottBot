const { ApplicationCommandOptionType, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');
const { text_embed } = require('../../tools/embeds');

module.exports = {
    name: 'configmenu',
    description: 'Creates a selection menu.',
    permissions: ['Administrator'],
    options: [
        {
            name: 'default_role',
            description: 'Create a selection menu for the default role.',
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: 'scott_tracker',
            description: 'Create a selection menu for the Scott tracker channel.',
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: 'member_counter',
            description: 'Create a selection menu for the Member counter channel.',
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
            const embed = text_embed('Select a default role for new players joining the server.', client);
            await interaction.reply({ embeds: [embed], components: [row] });
        }
        else if (args.__subcommand == 'scott_tracker') {
            const row = new ActionRowBuilder().addComponents(
                new SelectMenuBuilder()
                .setCustomId('scott_tracker')
                .setPlaceholder('Select a channel'));
            interaction.guild.channels.cache.forEach(channel => {
                row.components[0].addOptions({
                    label: channel.name,
                    value: channel.id
                });
            });
            const embed = text_embed('Select a channel for the Scott tracker.', client);
            await interaction.reply({ embeds: [embed], components: [row] });
        }
        else if (args.__subcommand == 'member_counter') {
            const row = new ActionRowBuilder().addComponents(
                new SelectMenuBuilder()
                .setCustomId('member_counter')
                .setPlaceholder('Select a channel'));
            interaction.guild.channels.cache.forEach(channel => {
                row.components[0].addOptions({
                    label: channel.name,
                    value: channel.id
                });
            });
            const embed = text_embed('Select a channel for the member counter.', client);
            await interaction.reply({ embeds: [embed], components: [row] });
        }
    },
}