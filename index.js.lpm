//*
//Hello, this discord bot is used in the Famethyst server
//Join it here (https://discord.io/Famethyst)
//If you want to add anything dm me (Joshua Noakes#2968)
//*
// This code helps the bot join the server
require('dotenv').config()
const {
  Client,
  RichEmbed
} = require('discord.js');
const versnu = ("Version : Reptile Protection")
const client = new Client();
const prefex = (`-`)
client.on('ready', message => {
  console.log(`Logged in as ${client.user.tag}`)
  console.log(`Running ${versnu}`)
  client.user.setActivity(`Please run -info to find out more | ${versnu}`);

});
//This code gives someone the 'Amethysts' role when they join
client.on('guildMemberAdd', (guildMember, member) => {
  guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Amethysts"));
  guildMember.setNickname("Amethysts")
  botlog.send(`Given ${guildMember.username} the Amethysts role and set their @ to Amethysts!`)
});
//This code responds to chat messages
client.on('message', message => {
if (message.content == '-info'){
  message.channel.send("Due to the risk of Lizard Squad (https://twitter.com/RattlerSquad/status/1209326937920987136), I have turned the bot off till the 26/12/2020")
  message.channel.send("I don\'t want to overload the API")
  message.channel.send("I should get V4 out by 11pm 25/12/2020 and it'll be up by 26/12/2020")
  message.channel.send(`Now running ${versnu}`)
}
});
//This code is a secure way of loging on using 'Dotenv (.env)' and the variable 'Bot_Token'
client.login(process.env.Bot_Token_Beta);