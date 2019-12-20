require('dotenv').config()
const {
    Client,
    RichEmbed,
    Attachment
} = require('discord.js');
const client = new Client();
client.on('ready', message => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity('Hey, Amethyst!');
});
client.on('guildMemberAdd', (guildMember, member) => {
    guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Fam"));
});
client.on('message', message => {
    if (message.content === 'Hey, Amethyst!'){
        message.reply('<@655534619633909763> Hey, Amethyst!')
    }
    if (message.content === 'hey, amethyst!'){
        message.reply('<@655534619633909763> Hey, Amethyst!')
    }
    if (message.content === 'Hey Amethyst!'){
        message.reply('<@655534619633909763> Hey, Amethyst!')
    }
    if (message.content === 'hey amethyst!'){
        message.reply('<@655534619633909763> Hey, Amethyst!')
    }
    if (message.content === 'hey amethyst'){
        message.reply('<@655534619633909763> Hey, Amethyst!')
    }
    if (message.content === 'hey a'){
        message.reply('<@655534619633909763> Hey, Amethyst!')
    }
});
client.login(process.env.Bot_Token);
