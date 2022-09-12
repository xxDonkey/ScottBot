const { InteractionType } = require("discord.js");

module.exports = (interaction, client) => {
    if (interaction.type !== InteractionType.ApplicationCommand) return;

    const cmd = client.slash.get(interaction.commandName);
    console.assert(cmd, `Command ${interaction.commandName} not found!`);

    try {
        cmd.run(client, interaction);
    } catch (e) {
        interaction.reply({ content: `An error occured:\n${e.message}` })
    }
};