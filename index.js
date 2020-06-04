// The Lake discord moderation bot, Lake is a basic discord moderation bot, it might become more advanced later.

// Lake Config - The config for the bot to connect to discord and grab modules.
require('dotenv').config();

fs = require('fs');
var date_master = new Date();
var date = date_master.toISOString().slice(0, 10);
var time = date_master.getHours() + "-" + date_master.getMinutes();
var file_time = date_master.getHours() + ":" + date_master.getMinutes();
var second = date_master.getSeconds();
const Discord = require("discord.js");

const client = new Discord.Client();

client.commands = new Discord.Collection();
const clientcommands = require('./commands');

const prefix = '~';

Object.keys(clientcommands).map(key => {
    client.commands.set(clientcommands[key].name, clientcommands[key]);
});


client.on('ready', () => {
    console.log(`Online as ${client.user.tag}`);
    client.user.setActivity("at the lake | ~help", {
        type: "PLAYING"
    });
})


client.on('message', message => {
    const args = message.content.substring(0);
    const command = args.toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args, client, Discord);
    } catch (error) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        //Logging error in errors.txt
        fs.writeFile(`./errors/error_with_${command}_on_${date}@${time}-${second}.err`, `The command ${command} was just run by ${message.member.displayName} (${message.author.tag}) on ${date} at ${file_time}:${second} BST in the server ${message.guild.name} but it gave an error!\n\n${error}`, function (err) {
            if (err) return console.log(err);
            console.log(`Logged the error that occured on ${date} @ ${file_time}:${second} with ${command}`);
        });
        //Error message if a command goes wrong so we dont crash 
        const titlequotes = ['our time traveling trees never predicted!', 'our observant grasshoppers missed!'];
        var titlequotes_random = titlequotes[Math.floor(Math.random() * titlequotes.length)];
        const main_message_error = new Discord.MessageEmbed()
            .setTitle(`An error has occured with ${command}`)
            .setColor('0xFF0000')
            .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/error_1_red.png')
            .setDescription(`Hey, ${message.member.displayName} something's gone wrong that ${titlequotes_random} \n\nThe problem's been logged on our side and the code monkeys are hard working on a fix!`)
            .setTimestamp();
        message.channel.send(main_message_error).then(msg => {msg.react(`😳`)});
        return;
    }
});

client.login(process.env.Bot_Token_Beta);