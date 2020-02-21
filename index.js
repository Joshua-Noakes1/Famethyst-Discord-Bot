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
const Version_Number = ('Version 5.5');
const Build_Number = ('Build Number: 5.3:5507');
// The 'Ready' listner is key to letting discord know that the bot is ready to run
client.on("ready", () => {
    console.log(`The bot has connected with the username and tag ${client.user.tag} \nThe bot is also running ${Version_Number} and ${Build_Number}`);
    client.user.setPresence({
        game: {
            name: `Hey a | -info | ${Version_Number}`
        }
    });
});

client.on("guildMemberAdd", member => {
    const ama_links = ["https://am22.mediaite.com/tms/cnt/uploads/2015/03/amethyst.png", "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/8/8a/Amethyst_new.png/revision/latest?cb=20151117212235", "https://pm1.narvii.com/6052/ce2c29bfdc99cc3e0cb05b26af2d01f289889e56_hq.jpg", "https://media1.tenor.com/images/68c2c67832f8fbc7e033cc7658a78cf7/tenor.gif?itemid=4801663", "https://www.overlyanimated.com/wp-content/uploads/2016/08/Too_Short_to_Ride_075.png", "https://media0.giphy.com/media/dxOAJ4dPF0keAcUqiq/giphy.gif"]
    var Amethyst_Role = member.guild.roles.find(role => role.name == 'Amethyst');
    var Rules_Channel = member.guild.channels.find(Channel => Channel.name == '◯-rules-◯');
    var Bot_Logs_Channel = member.guild.channels.find(Channel => Channel.name == '◯-bot-logs-◯');
    var All_Member_Count_Channel = member.guild.channels.get('679346474995417109');
    var Member_Count = member.guild.channels.get('679346750489886720');
    var ama_p_link = ama_links[Math.floor(Math.random() * ama_links.length)]
    member.addRole(Amethyst_Role);
    const Join_Embed = new RichEmbed()
        .setTitle(`${member.user.username} has just joined the server!`)
        .setColor("0xC49FD9")
        .setImage(`${ama_p_link}`)
        .setDescription(`${member.user.username} has just joined the server \n${member.user.toString()} don't forget to check ${Rules_Channel.toString()}`)
        .setTimestamp()
        .setFooter(`There's now ${member.guild.memberCount} people here!`);
    Bot_Logs_Channel.send(Join_Embed).then(msg => msg.react('😳'));
    const Memeber_Send = new RichEmbed()
        .setTitle(`${member.user.username} welcome to the ${member.guild.name} server!`)
        .setColor("0xC49FD9")
        .setImage(`${ama_p_link}`)
        .setDescription(`Hi, ${member.user.username} welcome to the ${member.guild.name} server! \nDon't forget to check the ${Rules_Channel.toString()} channel! \nOh yeah and have fun!`)
        .setTimestamp()
        .setFooter(`Welcome!`);
    member.send(Memeber_Send).then(msg => msg.react('😳'));
    if (member.guild.memberCount == 69) {
        const author_69_member = new RichEmbed()
            .setTitle(`Woah ${member.user.username} you're our 69th member!`)
            .setImage(`${ama_p_link}`)
            .setDescription(`Hey ${member.user.username} you're our 69th member that's pretty cool😳`)
            .setColor(`0xC49FD9`)
            .setTimestamp()
            .setFooter(`Nice`);
        member.user.send(author_69_member);
    }
    All_Member_Count_Channel.setName(`All Members : ${member.guild.memberCount}`);
    Member_Count.setName(`Members : ${Math.floor(member.guild.memberCount - 8)}`);
});
client.on("guildMemberRemove", member => {
    const ama_links = ["https://i.ytimg.com/vi/bz3RrVWjg6s/maxresdefault.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa4ccfeb-8e9d-413b-8e0b-d389983cae07/d8ysq0i-89dd9118-cec1-4769-a1ce-0eb9ffca1705.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FhNGNjZmViLThlOWQtNDEzYi04ZTBiLWQzODk5ODNjYWUwN1wvZDh5c3EwaS04OWRkOTExOC1jZWMxLTQ3NjktYTFjZS0wZWI5ZmZjYTE3MDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9lDqX6VUxGZ5E61_Q6Ik33aBqJp_17dFyZ8r0ShDgsg", "https://thegeekiary.com/wp-content/uploads/2016/08/steven-vs-amethyst-angry-at-herself.png", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dc2ab4e9-ba7a-4abc-98da-a941649c19fe/d913i5c-fc9a0c0c-68cc-4db8-9c2c-9466ccd06711.jpg/v1/fill/w_1024,h_1024,q_75,strp/sad_amethyst_by_chlorofilla_d913i5c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2RjMmFiNGU5LWJhN2EtNGFiYy05OGRhLWE5NDE2NDljMTlmZVwvZDkxM2k1Yy1mYzlhMGMwYy02OGNjLTRkYjgtOWMyYy05NDY2Y2NkMDY3MTEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lj0bg05Cn6zdHxFYA0NH2SPlKspB9p8zjlakpzpTSQ8"]
    var ama_p_link = ama_links[Math.floor(Math.random() * ama_links.length)]
    var Bot_Logs_Channel = member.guild.channels.find(Channel => Channel.name == '◯-bot-logs-◯');
    var All_Member_Count_Channel = member.guild.channels.get('679346474995417109');
    var Member_Count = member.guild.channels.get('679346750489886720');
    const embed = new RichEmbed()
        .setTitle(`${member.user.username} just left 😔`)
        .setDescription(`${member.user.username} just left the server 😔`)
        .setColor("0xC49FD9")
        .setImage(`${ama_p_link}`)
        .setTimestamp()
        .setFooter(`Why?`);
    Bot_Logs_Channel.send(embed).then(msg => msg.react('😔'));
    All_Member_Count_Channel.setName(`All Members : ${member.guild.memberCount}`);
    Member_Count.setName(`Members : ${Math.floor(member.guild.memberCount - 8)}`);
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
    switch (args[0].toLowerCase()) {
        // Message Latency info
        case `-ping`:
            // deletes the first message 
            message.delete()
            // sets a variable on the first message
            message.channel.send('🏓 Pinging...').then(msg => {
                sleep(5 * 1000).then(() => {
                    // finds message latency and api latency
                    var Message_Latency = (`${Math.floor(msg.createdAt - message.createdAt)}ms`);
                    var APILatency = (`${Math.floor(client.ping)}ms`);
                    // Checks the api speed 
                    if (client.ping <= '250') {
                        var Api_Time = ("✅ The ping looks okay right now!");
                    } else if (client.ping <= '450') {
                        var Api_Time = (`⚠️ The ping might be having trouble right now! \nThe ping time is ${client.ping}ms \nCheck the discord status page [here](https://status.discordapp.com)`);
                    } else if (client.ping <= '750') {
                        var Api_Time = (`❗️ The ping response time is very high something might be going very wrong! \nThe ping time is ${client.ping}ms \nCheck the status page [here](https://status.discordapp.com)`);
                    } else {
                        var Api_Time = (`❌ The ping is having a problem \nThe ping time is ${client.ping}ms, \nCheck whats going wrong [here](https://status.discordapp.com)`);
                    }
                    // msg.edit(Api_Time);
                    const Api_embed = new RichEmbed()
                        .setTitle('🏓 Ping...')
                        .setColor("0xC49FD9")
                        .setDescription('You\'ll get the most up to date infomation from the [Discord Status Page](https://status.discordapp.com)')
                        .addField('How does the ping look?', Api_Time)
                        .addField(`What's the HTTP API time?`, `${client.ping}ms`)
                        .setTimestamp()
                        .setFooter('Ping times!');
                    msg.delete();
                    message.channel.send(Api_embed);
                });
            });
            break;
        case '-info':
            message.delete()
            const rules_channel = message.guild.channels.find(channel => channel.name == `◯-rules-◯`);
            var TheGods = message.guild.roles.find(roles => roles.name == "The Gods")
            var MiniGods = message.guild.roles.find(roles => roles.name == "Mini-gods")
            var tinyGods = message.guild.roles.find(roles => roles.name == "teeny god")
            const info_embed = new RichEmbed()
                .setTitle(`Server Info!`)
                .setColor(`0xC49FD9`)
                .setThumbnail(`${message.author.avatarURL}`)
                .setDescription(`${message.author.username} here is the server info!`)
                .addField(`How many people are here?`, `There ${Math.floor(message.guild.memberCount) - 8} people here! \n\(Not including Bots!\)`)
                .addField(`Where can i find the rules?`, `You can find the rules for the server in the ${rules_channel.toString()} channel!`)
                .addField(`Who are the mods?`, `Mods have the roles ${TheGods.toString()}, ${MiniGods.toString()} and ${tinyGods.toString()}!`)
                .addField(`What's the ip for the Minecraft server?`, `You can join the server at mc.famethyst.ml \nYou can check out the status page [here](https://lobby.famethyst.ml)`)
                .addField(`What other commands are there?`, `You can find the other commands on my github page [here](https://www.github.com/Joshua-Noakes1/Famethyst-Discord-Bot/)!`)
                .setTimestamp()
                .setFooter(`How you doing ${message.author.username}`);
            message.reply(info_embed);
            break;
        case '-debug_info':
            message.delete()
            const debug_embed = new RichEmbed()
                .setTitle(`Debug Info`)
                .setColor(`0xC49FD9`)
                .setDescription(`Compiled: 00:02 UTC 21/02/2020 | Device: Windows 10 Joshua-PC\\joshua (Visual Studio Code) (${Build_Number}) \nThe bot connected with Username and Tag ${client.user.tag}`)
                .addField(`Change Log`, `[Change Log on Github](https://github.com/Joshua-Noakes1/Famethyst-Discord-Bot/blob/master/changelog.md)`)
                .setTimestamp();
            message.author.send(debug_embed)
            message.channel.send(`${message.author.username} I've just sent you the info!`).then(msg => msg.delete(5000));
            break;
        case 'linux':
            const linux_embed = new RichEmbed()
                .setTitle(`Hey, ${message.author.username} Arch is better!`)
                .setColor(`0xC49FD9`)
                .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1200px-Archlinux-icon-crystal-64.svg.png`)
                .setDescription(`Hey, ${message.author.username} [arch](https://www.archlinux.org/) is better!`)
                .setTimestamp()
                .setFooter(`I run on Arch!`);
            message.reply(linux_embed).then(msg => msg.react('😠'));
            break;
    }

    // Okay I've had to turn this to an if statements so...
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

client.login(process.env.Bot_Token);
