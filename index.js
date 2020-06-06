// The Lake discord moderation bot, Lake is a basic discord moderation bot, it might become more advanced later.
// Lake Config - The config for the bot to connect to discord and grab modules.
console.log('Lake Discord Bot Beta Build 0.2\n--------------------\nInitialising the bot\'s login configuration...');

//whats .env
require('dotenv').config();
console.log('Loaded dotenv...')
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
console.log('Finalising the bot\'s login configuration.\n--------------------')
//the magic connection to discord potato servers
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity("at the lake | ~help", {
        type: "PLAYING"
    });
})

//messages what else
client.on('message', message => {
    const args = message.content.substring(0);
    const command = args.toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args, client, Discord);
    } catch (error) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        //when things go wrong.
        //Logging error in errors.txt
        //lets hope that we dont get a bunch of cascading errors
        //if we do well we're going to have a lot more wrong then some log files breaking.
        fs.writeFile(`./errors/error_with_${command}_on_${date}@${time}-${second}.err`, `The command ${command}.js was just run by ${message.member.displayName} (${message.author.tag}) on ${date} at ${file_time}:${second} UTC+1 in the server ${message.guild.name} but it gave an error!\n\n${error}`, function (err) {
            if (err) return console.log(err);
            console.log(`Logged the error with ${command} that occured on ${date} @ ${file_time}:${second}`);
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
        message.channel.send(main_message_error).then(msg => {
            msg.react(`😳`)
        });
        return;
    }
});

client.login(process.env.Bot_Token_Beta);