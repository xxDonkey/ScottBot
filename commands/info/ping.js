module.exports = {
    name: "ping",
    description: "Displays the bot's latency.",
    run: async (client, interaction, args) => {
        const start = new Date().getTime();
        await interaction.reply('Pinging...').then(async msg => {
            await interaction.editReply(`Pong! Latency is ${new Date().getTime() - start}ms. API Latency is ${Math.round(client.ws.ping)}ms.`);
        });
    },
};