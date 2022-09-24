const { ApplicationCommandOptionType, ChannelType } = require('discord.js');
const { text_embed } = require('../../tools/embeds');

module.exports = {
    name: 'embed',
    description: 'Generates an embed.',
    permissions: ['Administrator'],
    options: [
        {
            name: 'text_embed',
            description: 'Generates a text embed.',
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: 'text',
                    description: 'The text to display in the embed.',
                    type: ApplicationCommandOptionType.String,
                    required: true,
                },
            ],
        },
        {
            name: 'text_from_message',
            description: 'Generates a text embed from a message.',
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: 'id',
                    description: 'The ID of the message to copy from.',
                    type: ApplicationCommandOptionType.String,
                    required: true,
                },
            ],
        },
    ],
    run: async (client, interaction, args) => {
        if (args.__subcommand == 'text_embed') {
            const embed = await text_embed(args.text, client);
            await interaction.reply({ embeds: [embed] });
        }
        else if (args.__subcommand == 'text_from_message') {
            let message;
            const channel = await client.guilds.cache[0].channels.cache.array.forEach((element) => {
                if (element.type == ChannelType.GuildText) {
                    let msg = element.messages.cache.find(ele => ele.id == args.id);
                    if (msg) {
                        message = msg;
                    }
                }
            });
            const embed = await text_embed(message.content, client);
            await interaction.reply({ embeds: [embed] });
        }
    },
}