//*
//Hello, this discord bot is used in the Famethyst server
//Join it here (https://discord.io/Famethyst)
//If you want to add anything dm me (Joshua Noakes#2968)
//*
// This code helps the bot join the server
require('dotenv').config()
const {Client, RichEmbed} = require('discord.js');
const versno = ("Version 2.4")
const client = new Client();
client.on('ready', message => {
    console.log(`Logged in as ${client.user.tag}`)
    console.log(`Running ${versno}`)
    client.user.setActivity(`Hey, Amethyst! | -info | ${versno}`);
});
//This code gives someone the 'Amethysts' role when they join
client.on('guildMemberAdd', (guildMember, member) => {
    guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Amethysts"));
});
//This code responds to chat messages
client.on('message', message => {
    let amarole = message.guild.roles.find(role => role.name === "Amethysts");
    const versno = ("Version 2.4")
    //This is for the (!info) command
    if (message.content === "-info"){
        var authusernm = message.author.username
        const embed = {
            "title": "The Github",
            "description": "You can look at the code on [Github](http://bit.ly/FamBotCode)",
            "url": "http://bit.ly/FamBotCode",
            "color": 65280,
            "footer": {
              "text": `Made by (Joshua Noakes#2986) | Asked for ${authusernm} | Now running ${versno}`
            },
            "image": {
              "url": "https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339"
            },
            "author": {
              "name": "Famethyst-Bot Info"
            },
            "fields": [
              {
                "name": "What can Famethys-Bot do?",
                "value": "The Famethys-Bot gives people roles and replys to \"Hey, Amethyst!\""
              },
              {
                "name": "What else can you ask Famethys-Bot?",
                "value": "You can say \"Hey, Amethyst!\" \"hey, amethyst!\" \"Hey Amethyst\" \"hey amethyst\" \"hey a\""
              },
              {
                  "name": "Wheres the perma link to the Famethyst's server?",
                  "value": "[Perm-Link](https://discord.io/Famethyst)(https://discord.io/Famethyst)"
              },
                {
                  "name": "Want to add something?"
                  "value": "[Email Me](mailto:joshthekid234@gmail.com?subject=Famethyst-Discord-Bot-Request)(joshthekid234@gmail.com)"
                }
            ]
          };
          message.channel.send({embed});
    }
    //* Below is code for all the (Hey, Amethyst!) commands
    if (message.content === 'Hey, Amethyst!'){
        var authusernm = message.author.username
        const embeda = new RichEmbed()
        .setTitle("Hey, Amethysts")
        .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
        .setColor("0xC49FD9")
        .setFooter(`Hey, Amethyst from ${authusernm}`)
        message.channel.send(` ${amarole}`)
        message.channel.send(embeda)
    }
    if (message.content === 'hey, amethyst!'){
        var authusernm = message.author.username
        const embeda = new RichEmbed()
        .setTitle("Hey, Amethysts")
        .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
        .setColor("0xC49FD9")
        .setFooter(`Hey, Amethyst from ${authusernm}`)
        message.channel.send(` ${amarole}`)
        message.channel.send(embeda)
    }
    if (message.content === 'Hey Amethyst'){
        var authusernm = message.author.username
        const embeda = new RichEmbed()
        .setTitle("Hey, Amethysts")
        .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
        .setColor("0xC49FD9")
        .setFooter(`Hey, Amethyst from ${authusernm}`)
        message.channel.send(` ${amarole}`)
        message.channel.send(embeda)
    }
    if (message.content === 'hey amethyst'){
        var authusernm = message.author.username
        const embeda = new RichEmbed()
        .setTitle("Hey, Amethysts")
        .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
        .setColor("0xC49FD9")
        .setFooter(`Hey, Amethyst from ${authusernm}`)
        message.channel.send(` ${amarole}`)
        message.channel.send(embeda)
    }
    if (message.content === 'hey a'){
        var authusernm = message.author.username
        const embeda = new RichEmbed()
        .setTitle("Hey, Amethysts")
        .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
        .setColor("0xC49FD9")
        .setFooter(`Hey, Amethyst from ${authusernm}`)
        message.channel.send(` ${amarole}`)
        message.channel.send(embeda)
    }
});
//This code is a secure way of loging on using 'Dotenv (.env)' and the variable 'Bot_Token'
client.login(process.env.Bot_Token);
