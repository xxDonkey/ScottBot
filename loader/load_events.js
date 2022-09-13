const client_event = (type) => require(`../event/client/${type}`)
const guild_event = (type) => require(`../event/guild/${type}`)
const menu_event = (type) => require(`../event/menu/${type}`)

module.exports = (client) => {
    // Client Events
    client.on('ready', () => client_event('ready')(client));

    // Guild Events
    client.on('messageCreate', (param) => guild_event('messageCreate')(param, client));
    client.on('interactionCreate', (param) => guild_event('interactionCreate')(param, client));
    client.on('guildMemberAdd', (param => guild_event('guildMemberAdd')(param, client)));

    // Menu Events
    client.on('interactionCreate', (param) => menu_event('selectMenuUpdate')(param, client));

};