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
            name: `Lake | -info`
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
        const dev = client.users.get(`${process.env.Owner_ID}`)
        const command_error_embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} an error has occured!`)
        .setDescription(`${message.author.username} an error has occured with the ${command} command! \nI'll let ${dev.toString()} know you ran the ${command} command!`)
        .setColor(`0xFF0000`)
        .setThumbnail(`https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Errors/error_1_red.png`)
        .setTimestamp();
        message.channel.send(command_error_embed)
        const author_error = new Discord.RichEmbed()
        .setTitle(`${dev.username} an error has occured with the ${command} command!`)
        .setDescription(`${message.member.displayName} (${message.author.toString()}) tried to run the ${command} command in ${message.guild.name} but an error occured! You should see whats up!`)
        .setColor(`0xFF0000`)
        .setThumbnail(`https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Errors/error_1_red.png`)
        .setTimestamp();
        dev.send(author_error)
        return;
    }
});

client.login(process.env.Bot_Token_Beta)