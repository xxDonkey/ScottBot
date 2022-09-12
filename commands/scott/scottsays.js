module.exports = {
    name: 'scottsays',
    description: 'Scott says something.',
    run: async(client, interaction, args) => {
        const messages = [
            'DO NOTE VIOLATE SCOTT\'S 11 COMMANDMENTS',
            'Scott makes my heart beat 100x faster - Abe Lincoln',
            'Scott is love, Scott is life',
            'I might have two kidneys, but we only have one Scott',
            'We live for Scott',
            'If I had a million dollars, I would give 2 million to Scott, I don\'t care about money, I only car about Scott',
            'ALL ARE FREE WHEN SCOTT FORGIVES YOU',
            'We :heart: Scott Visser',
            'There is only 1 true Scott',
            'Scott for president!',
            'SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOTT',
            'Scott is always watching',
            'BEPIS#9161 IS WATCHING YOU',
            'War is peace, all love Scott',
            'Scoot >= god',
            'Scott 4 life',
            'Scott = Illuminati',
        ];
        await interaction.reply(messages[Math.floor(Math.random() * messages.length)]);
    },
};