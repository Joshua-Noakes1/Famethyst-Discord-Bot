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
const versnu = ("Version 3.1")
const client = new Client();
const prefex = (`-`)
client.on('ready', message => {
  console.log(`Logged in as ${client.user.tag}`)
  console.log(`Running ${versnu}`)
  client.user.setActivity(`Hey, Amethyst! | -info | ${versnu}`);

});
//This code gives someone the 'Amethysts' role when they join
client.on('guildMemberAdd', (guildMember, member) => {
  guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Amethysts"));
  guildMember.setNickname("Amethysts")
  botlog.send(`Given ${guildMember.username} the Amethysts role and set their @ to Amethysts!`)
});
//This code responds to chat messages
client.on('message', message => {
  const botlog = client.channels.get(`658789921489813515`)
  let args = message.content.substring(prefex.length).split(" ");
  let amarole = message.guild.roles.find(role => role.name === "Amethysts");
  //This is for the (-info) command
  if (message.content === "-info") {
    var authusernm = message.author.username
    const embed = {
      "title": "The Github",
      "description": "You can look at the code on [Github](http://bit.ly/FamBotCode)",
      "url": "http://bit.ly/FamBotCode",
      "color": 65280,
      "footer": {
        "text": `Made by (Joshua Noakes#2986) | info for ${authusernm} | Now running ${versnu}`
      },
      "image": {
        "url": "https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339"
      },
      "author": {
        "name": "Famethyst-Bot Info"
      },
      "fields": [{
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
          "name": "Want to add something?",
          "value": "Email me here => joshthekid234@gmail.com"
        }
      ]
    };
    message.channel.send({
      embed
    });
  }
  //Version 3 info (-Version3 info)
  if (message.content == `${prefex}Version3 info`) {
    var authusernm = message.author.username
    const embed = {
      "title": "Version 3 Info",
      "description": "Version 3 | look at the code on [Github](http://bit.ly/FamBotCode)",
      "url": "http://bit.ly/FamBotCode",
      "color": 65280,
      "footer": {
        "text": `Made by (Joshua Noakes#2986) | Version 3 info for ${authusernm} | Now running ${versnu}`
      },
      "image": {
        "url": "https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339"
      },
      "fields": [{
        "name": "What new features are there?",
        "value": "There's now the \"Hey Amethyst Amethys\" command..."
      }]
    };
    message.channel.send({
      embed
    });
  }
  // 5x @Everyone (Hey Amethyst Amethyst)
  if (message.content == 'Hey Amethyst Amethyst') {
    message.channel.send(`@everyone`)
    for (i = 0; i < 4; i++) {
      var authusernm = message.author.username
      const embeda = new RichEmbed()
        .setTitle("Hey, Amethysts")
        .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
        .setColor("0xC49FD9")
        .setFooter(`Hey, Amethyst from ${authusernm}`)
      message.channel.send(embeda)
    }
  }
  //* Below is code for all the (Hey, Amethyst!) commands
  if (message.content === 'Hey, Amethyst!') {
    var authusernm = message.author.username
    const embeda = new RichEmbed()
      .setTitle("Hey, Amethysts")
      .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
      .setColor("0xC49FD9")
      .setFooter(`Hey, Amethyst from ${authusernm}`)
    message.channel.send(` ${amarole}`)
    message.channel.send(embeda)
  }
  if (message.content === 'hey, amethyst!') {
    var authusernm = message.author.username
    const embeda = new RichEmbed()
      .setTitle("Hey, Amethysts")
      .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
      .setColor("0xC49FD9")
      .setFooter(`Hey, Amethyst from ${authusernm}`)
    message.channel.send(` ${amarole}`)
    message.channel.send(embeda)
  }
  if (message.content === 'Hey Amethyst') {
    var authusernm = message.author.username
    const embeda = new RichEmbed()
      .setTitle("Hey, Amethysts")
      .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
      .setColor("0xC49FD9")
      .setFooter(`Hey, Amethyst from ${authusernm}`)
    message.channel.send(` ${amarole}`)
    message.channel.send(embeda)
  }
  if (message.content === 'hey amethyst') {
    var authusernm = message.author.username
    const embeda = new RichEmbed()
      .setTitle("Hey, Amethysts")
      .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
      .setColor("0xC49FD9")
      .setFooter(`Hey, Amethyst from ${authusernm}`)
    message.channel.send(` ${amarole}`)
    message.channel.send(embeda)
  }
  if (message.content === 'hey a') {
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
