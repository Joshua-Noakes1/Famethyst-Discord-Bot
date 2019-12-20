// This code helps the bot join the server
require('dotenv').config()
const {Client} = require('discord.js');
const client = new Client();
client.on('ready', message => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity('Hey, Amethyst!');
});
//This code gives someone the 'Amethysts' role when they join
client.on('guildMemberAdd', (guildMember, member) => {
    guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Amethysts"));
});
//This code responds to chat messages
client.on('message', message => {
    if (message.content === 'Hey, Amethyst!'){
        message.reply(' <@655534619633909763> Hey, Amethyst!')
    }
    if (message.content === 'hey, amethyst!'){
        message.reply(' <@655534619633909763> Hey, Amethyst!')
    }
    if (message.content === 'Hey Amethyst!'){
        message.reply(' <@655534619633909763> Hey, Amethyst!')
    }
    if (message.content === 'hey amethyst!'){
        message.reply(' <@655534619633909763> Hey, Amethyst!')
    }
    if (message.content === 'hey amethyst'){
        message.reply(' <@655534619633909763> Hey, Amethyst!')
    }
    if (message.content === 'hey a'){
        message.reply(' <@655534619633909763> Hey, Amethyst!')
    }
});
//This code is a secure way of loging on using 'Dotenv (.env)' and the variable 'Bot_Token'
client.login(process.env.Bot_Token);
