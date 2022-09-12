module.exports = {
    name: "ping",
    description: "Displays the bot's latency.",
    run: async(client, interaction, args) => {
        await interaction.reply('Pinging...').then(async msg => {
            await interaction.editReply(`Pong! Latency is ${msg.createdTimestamp - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        });
    },
};