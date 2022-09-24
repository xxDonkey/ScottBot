const fetch_qr = require('../../tools/fetch_qr');
const { ApplicationCommandOptionType } = require('discord.js');
    
module.exports = {
    name: 'qr',
    description: 'Generates a QR code for an input (defaults to invite link).',
    permissions: ['Administrator'],
    options: [
        {
            name: 'input',
            description: 'The input to generate a QR code for.',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'size',
            description: 'The size of the QR code.',
            type: ApplicationCommandOptionType.Integer,
            required: false,
        },
        {
            name: 'color',
            description: 'The hex color of the QR code.',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'background',
            description: 'The hex color of the background.',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
    ],
    run: async (client, interaction, args) => {
        const input = args.input || 'https://discord.gg/GyQNsbxfCn';
        const size = args.size || 256;
        const color = args.color || '000000';
        const background = args.background || 'FFFFFF';
        fetch_qr({
            size: `${size}x${size}`,
            data: input,
            color: color,
            bgcolor: background,
            margin: 10,
        }, './data/qr.png').then((filename) => 
            interaction.reply({ files: [filename] })
        );
    },
};
