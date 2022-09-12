module.exports = (client) => {
    const fs = require('fs');
    let slash = [];

    const cmd_folders = fs.readdirSync('./commands');
    for (const folder of cmd_folders) {
        const cmd_files = fs.readdirSync(`./commands/${folder}`)
            .filter(file => file.endsWith('.js'));
        for (const file of cmd_files) {
            const cmd = require(`../commands/${folder}/${file}`);
            if (cmd.name) {
                client.slash.set(cmd.name, cmd);
                slash.push(cmd);
            } else {
                console.log(`Command ${folder}/${file} is missing a name!`);
            }
        }
    }
    slash.forEach(async cmd => { console.log(`Loaded ${cmd.name} command.`) });
    client.on('ready', async() => {
        await client.application.commands.set(slash);
    });
};