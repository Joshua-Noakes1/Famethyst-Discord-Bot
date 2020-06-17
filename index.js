// The Lake discord moderation bot, Lake is a basic discord moderation bot, it might become more advanced later.
// Lake Config - The config for the bot to connect to discord and grab modules.
const build_v = "1.0.0.4"
const command_count = 13
const Bot_Codename = "terraceroof"
console.log(`Lake Discord Bot Beta Build ${build_v}\n--------------------\nInitialising the bot\'s login configuration...`);

//imports
//whats .env
require('dotenv').config();
console.log('Loaded dotenv...')
const async = require('async');
//error loging file and data stuff
fs = require('fs');
var date_master = new Date();
var date = date_master.toISOString().slice(0, 10);
var time = date_master.getHours() + "-" + date_master.getMinutes();
var file_time = date_master.getHours() + ":" + date_master.getMinutes();
var second = date_master.getSeconds();
console.log('Configured the file system, date and time...')
//discord magic
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const clientcommands = require('./commands');
console.log('Configured the discord API...')
const prefix = '~';
Object.keys(clientcommands).map(key => {
    client.commands.set(clientcommands[key].name, clientcommands[key]);
});
console.log(`Codename ${Bot_Codename}...\nCurrent loaded commands ${command_count}...\nFinalising the bot\'s login configuration.\n--------------------`)
//the magic connection to discord potato servers
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(`at the lake | ${prefix}help | Version ${build_v}`, {
        type: "PLAYING"
    });
});

//messages what else
client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args, client, Discord, build_v, command_count, async, Bot_Codename, prefix);
    } catch (error) {
        //when things go wrong.
        //Logging error in errors.txt
        //lets hope that we dont get a bunch of cascading errors
        //if we do well we're going to have a lot more wrong then some log files breaking
        fs.writeFile(`./errors/error_with_${command}_on_${date}@${time}-${second}.err`, `--------------------\n${client.user.tag} has had an error\nit occured at ${date} - ${file_time}:${second}\nThe affected command is ${command}.js\nThe bot is running build ${build_v} and had ${command_count} commands loaded\nthe error is: ${error}\n--------------------`, function (err) {
            if (err) return console.log(err);
            console.log(`Logged the error with ${command}.js that occured on ${date} @ ${file_time}:${second}`);
        });
        //Error message if a command goes wrong so we dont crash 
        const titlequotes = ['our time traveling trees never predicted!', 'our observant grasshoppers missed!'];
        var titlequotes_random = titlequotes[Math.floor(Math.random() * titlequotes.length)];
        const main_message_error = new Discord.MessageEmbed()
            .setTitle(`An error has occured with "${command}"`)
            .setColor('0xFF0000')
            .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/error_1_red.png')
            .setDescription(`Hey, ${message.member.displayName} something's gone wrong that ${titlequotes_random}\n\nThe problem's been logged on our side and the code monkeys are hard working on a fix!`)
            .setTimestamp();
        message.channel.send(main_message_error);
        return;
    }
});

client.login(process.env.Bot_Token_Beta).catch(err => {
    console.log(err);
    fs.writeFile(`./errors/error_with_Discord_API_on_${date}@${time}-${second}.err`, `--------------------\nThe Discord API broke at ${date} - ${file_time}:${second}\n\n${err}\n--------------------`, function (err) {
        if (err) return console.log(err);
        console.log(`Logged the error with the Discord API that occured on ${date} @ ${file_time}:${second}`);
        return;
    });
});