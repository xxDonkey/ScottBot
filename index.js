const { Client, GatewayIntentBits, Collection } = require('discord.js');

require('dotenv').config();
const { TOKEN } = process.env;

const load_events = require('./loader/load_events');
const load_slash_commands = require('./loader/load_slash_commands');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

client.slash = new Collection();

load_events(client);
load_slash_commands(client);

client.login(TOKEN).then(() => console.log('Logged in!'));