const client_event = (type) => require(`../event/client/${type}`)
const guild_event = (type) => require(`../event/guild/${type}`)

module.exports = (client) => {
    // Client Events
    client.on('ready', () => client_event('ready')(client));

    // Guild Events
    client.on('interactionCreate', (param) => guild_event('interactionCreate')(param, client));
};