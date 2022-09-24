const { InteractionType, ApplicationCommandOptionType } = require("discord.js");

module.exports = (interaction, client) => {
    if (interaction.type !== InteractionType.ApplicationCommand) return;

    const cmd = client.slash.get(interaction.commandName);
    console.assert(cmd, `Command ${interaction.commandName} not found!`);

    if (cmd.permissions) {
        if (!client.guilds.cache.get(interaction.guild.id).members.cache
            .get(interaction.member.id).permissions.has(cmd.permissions || [])) {
            return interaction.reply(`You need the \`${cmd.permissions}\` permission to use this command!`)
        }
    }

    let args = {};
    interaction.options.data.forEach(element => {
        if (element.type == ApplicationCommandOptionType.Subcommand) {
            args.__subcommand = element.name;
            element.options.forEach(subElement => args[subElement.name] = subElement.value);
        }
        else args[element.name] = element.value;
    });

    try {
        cmd.run(client, interaction, args);
    } catch (e) {
        interaction.reply({ content: `An error occured:\n${e.message}` })
    }
};
