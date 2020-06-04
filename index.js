// The Lake discord moderation bot, Lake is a basic discord moderation bot, it might become more advanced later.

// Lake Config - The config for the bot to connect to discord and grab modules.
require('dotenv').config();

const Discord = require("discord.js");

const client = new Discord.Client();

client.commands = new Discord.Collection();
const clientcommands = require('./commands');

Object.keys(clientcommands).map(key => {
    client.commands.set(clientcommands[key].name, clientcommands[key]);
});


client.on('ready', () => {
    console.log(`The bot has connected with the username ${client.user.username}`);
    client.user.setPresence({
        game: {
            name: `Lake | ~info`
        }
    });
});


client.on('message', message => {
    const args = message.content.substring(0);
    const command = args.toLowerCase();
    console.info(`Called command: ${command}`);

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args, client, Discord);
    } catch (error) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        return;
    }
});

client.login(process.env.Bot_Token_Beta)