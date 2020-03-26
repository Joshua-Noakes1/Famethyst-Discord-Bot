// Famethyst Discord Server Bot, this bot is used for managing the server, I've rewritten the bot here so it uses args and swicth cases
// Dotenv call in so the bot can be connected without exposing the token
require('dotenv').config();
// Discord.js call in
// This calls the Client class from discord.js (https://discord.js.org/#/docs/main/stable/class/Client)
// This calls the RichEmbed class from discord.js (https://discord.js.org/#/docs/main/stable/class/RichEmbed)
// This calls the Attachment class from discord.js (https://discord.js.org/#/docs/main/stable/class/Attachment)
const {
    Discord,
    Client,
    RichEmbed,
    Attachment
} = require("discord.js");
// This removes the bots ability to @everyone
const client = new Client({
    disableEveryone: true
});
// All the major vars thats aren't to do with proper code like the version number and build number
// So it can see messages without with prefix (-)
const Prefix = ('');
const Version_Number = ('Version 6');
const Build_Number = ('Build Number: 5.9:5950');
// The 'Ready' listner is key to letting discord know that the bot is ready to run
client.on("ready", () => {
    console.log(`The bot has connected with the username and tag ${client.user.tag} \nThe bot is also running ${Version_Number} and ${Build_Number}`);
    client.user.setPresence({
        game: {
            name: `Hey a | ;!info | ${Version_Number}`
        }
    });
});

client.on("guildMemberAdd", member => {
    var Amethyst_Role = member.guild.roles.find(role => role.name == 'Amethyst');
    member.addRole(Amethyst_Role);
});
// The message listner is so it can respond to messages 
client.on("message", async message => {
    // Sleep command 
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    };
    // Checks if the author is a bot if so it stops
    if (message.author.bot) return;
    // Checks if the message is coming from outside a server (guild = server)
    if (!message.guild) return;
    // Caches a users member-status (best way i can say it (just who they are in the server)) if it cant find it alredy in the cache
    if (!message.member) member.member = await message.guild.fetchMember(message);
    // Used to pull the args from the switch statement
    let args = message.content.substring(Prefix.length).split(" ");
    // Amathyst Array 
    const ama_links = ["https://am22.mediaite.com/tms/cnt/uploads/2015/03/amethyst.png", "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/8/8a/Amethyst_new.png/revision/latest?cb=20151117212235", "https://pm1.narvii.com/6052/ce2c29bfdc99cc3e0cb05b26af2d01f289889e56_hq.jpg", "https://media1.tenor.com/images/68c2c67832f8fbc7e033cc7658a78cf7/tenor.gif?itemid=4801663", "https://www.overlyanimated.com/wp-content/uploads/2016/08/Too_Short_to_Ride_075.png", "https://media0.giphy.com/media/dxOAJ4dPF0keAcUqiq/giphy.gif"]
    // Amaehyst Image Embed
    var ama_p_link = ama_links[Math.floor(Math.random() * ama_links.length)]
    // corona array
    const corona_funny = ["Don\'t buy all the shit role!", "Be thoughtfull of the elderly when shopping!", "Don\'t mass hord food supplies", "Please be careful", "Self-Isolate", "You should self isolate for 14 days!"]
    // corona footer funnys
    var corona_funny_footers = corona_funny[Math.floor(Math.random() * corona_funny.length)]
    switch (args[0].toLowerCase()) {
        case ';!info':
            message.delete()
            const rules_channel = message.guild.channels.find(channel => channel.name == `°°rules°°`);
            var TheGods = message.guild.roles.find(roles => roles.name == "The Gods")
            var MiniGods = message.guild.roles.find(roles => roles.name == "Mini-gods")
            const info_embed = new RichEmbed()
                .setTitle(`Server Info!`)
                .setColor(`0xC49FD9`)
                .setThumbnail(`${message.author.avatarURL}`)
                .setDescription(`${message.author.username} here's the server info!`)
                .addField(`How many people are here?`, `There are ${Math.floor(message.guild.memberCount) - 9} people here!`)
                .addField(`Where can i find the rules?`, `You can find the rules for the server in the ${rules_channel.toString()} channel!`)
                .addField(`Who are the mods?`, `Mods have the roles ${TheGods.toString()} and ${MiniGods.toString()}! \n(Some have their own role aswell)`)
                .addField(`What other commands are there?`, `You can find the other commands on my github page [here](https://www.github.com/Joshua-Noakes1/Famethyst-Discord-Bot/)!`)
                .setTimestamp()
                .setFooter(`How you doing ${message.author.username}`);
                message.member.displayName
            message.reply(info_embed);
            break;
        case ';!debug_info':
            message.delete()
            const debug_embed = new RichEmbed()
                .setTitle(`Debug Info`)
                .setColor(`0xC49FD9`)
                .setDescription(`Compiled: 04:05 UTC 20/03/2020 | Device: Windows 10 Joshua-PC\\\\joshua (VSC) (${Build_Number}) \nThe bot connected with Username and Tag ${client.user.tag}`)
                //.addField(`Change Log`, `[Change Log on Github](https://github.com/Joshua-Noakes1/Famethyst-Discord-Bot/blob/master/changelog.md)`)
                .setTimestamp();
            message.author.send(debug_embed)
            message.reply(`I've just sent you the info!`).then(msg => msg.delete(5000));
            break;
        case 'linux':
            const linux_embed = new RichEmbed()
                .setTitle(`Hey, ${message.author.username} Arch is pretty good!`)
                .setColor(`0xC49FD9`)
                .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1200px-Archlinux-icon-crystal-64.svg.png`)
                .setDescription(`Hey, ${message.author.username} [arch](https://www.archlinux.org/) is pretty good!`)
                .setTimestamp()
                .setFooter(`I *think*... I run on Arch!`);
            message.reply(linux_embed).then(msg => msg.react('😳'));
            break;
            
        case 'coronavirus':
            const corona_embed = new RichEmbed()
                .setTitle('COVID-19')
                .setColor("0xC49FD9")
                .setThumbnail("https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/CoronaVirusCDC.jpg")
                .setDescription('Please click [here](https://www.who.int/emergencies/diseases/novel-coronavirus-2019) for the WHO\'s current status on [COVID-19](https://en.wikipedia.org/wiki/Coronavirus_disease_2019).\n\nThe coronavirus (medically know as [COVID-19](https://en.wikipedia.org/wiki/Coronavirus_disease_2019) previously know as [2019-nCoV](https://en.wikipedia.org/wiki/Coronavirus_disease_2019)) is an  infectious disease caused by [SARS-CoV-2](https://en.wikipedia.org/wiki/Severe_acute_respiratory_syndrome_coronavirus_2).\nThis means that It\'s closely related to [SARS](https://en.wikipedia.org/wiki/Severe_acute_respiratory_syndrome) or Severe acute respiratory syndrome.\n\n[COVID-19](https://en.wikipedia.org/wiki/Coronavirus_disease_2019) can cause a fever, cough and shortness of breath,\nThough cases can progress into pneumonia and multi-organ failure \nyou shouldn\'t worry about [COVID-19](https://en.wikipedia.org/wiki/Coronavirus_disease_2019) as It\'s just a bad case of the flu,\nThe current fatality percentage is at between 1% & 3%.\n\nIf you have flu like symptoms please go to your local medial center\nyou can find your local medial center [here](https://www.google.com/search?q=medical+center+near+me).')
                .setTimestamp()
                .setFooter(`${corona_funny_footers} | Information correct at 04:16 20/03/20 GMT`);
            message.channel.send(corona_embed);
            break;
        case ';!p':
            var fpm = message.mentions.users.first()
            if (!fpm) {
                const no_mention_embed = new RichEmbed()
                .setTitle(`${message.author.username} you haven't mentioned anyone!`)
                .setColor("0xFF0000")
                .setThumbnail(`https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/error_1.png`)
                .setDescription(`${message.author.username} you need to mention someone for the p command to work!`)
                .setTimestamp()
                message.reply(no_mention_embed)
                return;
                }
            const yes_mention_embed = new RichEmbed()
            .setTitle(`${fpm.username}`)
            .setThumbnail(`${fpm.avatarURL}`)
            .addField(`When did ${fpm.username} make their profile? \n${fpm.username} made their account on \n${fpm.createdAt > 1000*60*60*24*10}`)
            .setTimestamp()
            message.reply(yes_mention_embed)
            break;
    }

    // Okay I've had to turn this to an if statements so...
    // UPDATE 20/03/20, i think i can use an array 
    if (message.content.toLowerCase() == 'hey amethyst?') {
        const send_embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage(`${ama_p_link}`)
            .setTimestamp();
        message.channel.send(send_embed);
    }
    if (message.content.toLowerCase() == 'hey amethyst!') {
        const send_embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage(`${ama_p_link}`)
            .setTimestamp();
        message.channel.send(send_embed);
    }
    if (message.content.toLowerCase() == 'hey amethyst') {
        const send_embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage(`${ama_p_link}`)
            .setTimestamp();
        message.channel.send(send_embed);
    }
    if (message.content.toLowerCase() == 'hey a') {
        const send_embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage(`${ama_p_link}`)
            .setTimestamp();
        message.channel.send(send_embed);
    }
});

client.login(process.env.Bot_Token_Beta);