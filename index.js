// Main bot config (inc. discord.js (https://discord.js.org) dotenv(https://www.npmjs.com/package/dotenv))
require('dotenv').config()
// This calls the Client class from discord.js (https://discord.js.org/#/docs/main/stable/class/Client)
// This calls the RichEmbed class from discord.js (https://discord.js.org/#/docs/main/stable/class/RichEmbed)
const {
    Client,
    RichEmbed
} = require("discord.js")
// The bot is also blocked from doing @everyone (becuase no one wants that do they)
const client = new Client({
    disableEveryone: true
});
// Global Vars / Consts are defined here
// Prefex : - (How to call it in code (ES6) tilda => (`[Command goes here]`) => (`${prefex} Command`))
const prefex = ("-");
const vsNum = ("Version 4.9")
const BudNum = (`OMEGA_${vsNum}_4499`)
// Client.on is a listner and ready gets opened when the bot connects
// its passed into a arrow function => and then used and things can be called on
client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
    console.log(`Running ${vsNum}`)
    console.log(`Running Build: ${BudNum}`)
    client.user.setPresence({
        game: {
            name: `Hey a | -info | ${vsNum}`
        }
    });
});
// Says when someone joins
client.on("guildMemberAdd", member => {
    member.addRole(member.guild.roles.find(r => r.name === "Amethyst"))
    var general = member.guild.channels.find(c => c.name === "◯-bot-logs-◯")
    const emote = member.guild.emojis.find(e => e.name === `FlushedClown`)
    const embed = new RichEmbed()
        .setAuthor(`${member.user.username} has just joined the server!`, member.user.avatarURL)
        .setDescription(`Hey, ${member.user.username} ${emote}`)
        .setColor("0xC49FD9")
        .setImage("https://pm1.narvii.com/6360/a287991d58551ecc65857ad17dd1d291139c23c5_hq.jpg")
        .setTimestamp()
        .setFooter(`There's now ${member.guild.memberCount} people here!`)
    general.send(embed)
})
// Says when someone leaves!
client.on("guildMemberRemove", member => {
    var general = member.guild.channels.find(c => c.name === "◯-bot-logs-◯");
    const emote = member.guild.emojis.find(e => e.name === `PensiveClown`)
    const embed = new RichEmbed()
        .setAuthor(`${member.user.username} has just left the server!`, member.user.avatarURL)
        .setDescription(`Why? ${emote.toString()}`)
        .setColor("0xC49FD9")
        .setImage("https://i.ytimg.com/vi/bz3RrVWjg6s/maxresdefault.jpg")
        .setTimestamp()
        .setFooter(`There's now ${member.guild.memberCount} people here!`)
    general.send(embed)
})

// The bot listens for messages here and deals with them acordingly 
client.on("message", async message => {
    // Checks if the author is a bot if so it stops
    if (message.author.bot) return;
    // Checks if the message is coming from outside a server (guild = server)
    if (!message.guild) return;
    // Caches a users member-status (best way i can say it (just who they are in the server)) if it cant find it alredy in the cache
    if (!message.member) member.member = await message.guild.fetchMember(message);
    // switch stateent
    let args = message.content.substring(prefex.length).split(" ");

    // info commands
    // info Server (guild)
    if (message.content === `${prefex}info server`) {
        var srvname = message.guild.name
        var membercount = message.guild.memberCount
        var TheGods = message.guild.roles.find(r => r.name == "The Gods")
        var MiniGods = message.guild.roles.find(r => r.name == "Mini-gods")
        var tinyGods = message.guild.roles.find(r => r.name == "teeny god")
        const embed = new RichEmbed()
            .setAuthor(`💜 ${srvname} Server Info 💜`)
            .setColor("0xC49FD9")
            .setTimestamp()
            .setDescription(`Welcome to the ${srvname} server! \nThis server was made to replace the old Famethyst server!`)
            .addField(`How many people are here?`, `There are currently ${Math.floor(membercount - 8)} people here!`)
            .addField(`How do i talk to a mod?`, `You can get a mod's attention by mentioning either the \n${TheGods.toString()}, ${MiniGods.toString()} or ${tinyGods.toString()}`)
            .setFooter(`Running ${vsNum} | Running ${BudNum}`)
        message.channel.send(embed)
    }

    // info commands
    if (message.content === `${prefex}info`) {
        const embed = new RichEmbed()
            .setAuthor(`Command info`)
            .setColor("0XC49FD9")
            .setTimestamp()
            .addField(`${message.author.username} you can find the commands on github`, `Check the github page [here](https://github.com/Joshua-Noakes1/Famethyst-Discord-Bot)`)
        message.channel.send(embed)
    }

    //info mc 
    if (message.content === `${prefex}info mc`) {
        const embed = new RichEmbed()
            .setAuthor(`⛏️ Minecraft Server Info ⛏️`)
            .setColor("DARK_GREEN")
            .setTimestamp()
            .setDescription(`⛏️ Minecraft Server Info ⛏️`)
            .addField("What's the IP?", "The IP is: mc.famethyst.ml")
            .addField("What time will the server be up?", "The server will be up ***12am(UTC)Fri - 12am(UTC)Mon*** every week")
        message.channel.send(embed)
    }

    // info Debug_Info
    if (message.content === `${prefex}!debug_info`) {
        message.delete()
        const embed = new RichEmbed()
        .setTitle("Debug Info")
        .setColor("0xC49FD9")
        .setDescription(`COMPILED: 16/2/20; 11:04AM UTC | DEVICE: MAC BOOKAIR 13" (VSC) (IDV:4499) | BUILD: ${BudNum}`)
        .setFooter(`GITHUB-COMMENT: \"[Fixed -info]\"`)
        .setTimestamp()
        message.author.send(embed)
        message.reply("I've sent you the info!").then(msg => msg.delete(5000))
    }


    switch (args[0]) {
        case nick:
            let fms = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            fms.guild.name(`${args[1]}`)
            break;
    }

    // Hey amethyst
    // Okay, this is shit, i can't work out how tf i can make this smaller but if it's possible please tell me! (email: joshua@joshuageorge.ml)

    // (Channel Message = [ Hey ama message trigers])
    if (message.content === "Hey, Amethyst?") {
        // embed = new discord RichEmbed
        const embed = new RichEmbed()
            // Grabs the message authors icon and their username and replys with their usr name and icon in the message
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            // sets the color as to amaethysts deafult purple
            .setColor("0xC49FD9")
            // sets the image to amathysts
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            // adds the always changing time stamp
            .setTimestamp()
        // sends the embed into the channel that the message was sent in
        message.channel.send(embed)
    }

    if (message.content === "hey, amethyst?") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content === "hey amethyst?") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content === "Hey, Amethyst!") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content === "hey, amethyst!") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content === "Hey Amethyst!") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content === "Hey, Amethyst") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content === "Hey Amethyst") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content === "hey, amethyst") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content === "hey amethyst") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content === "hey amethyst") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content === "hey, a") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content === "Hey a") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content === "hey a") {
        const embed = new RichEmbed()
            .setAuthor(`Hey, ${message.author.username} \nHow you doing?`, message.author.avatarURL)
            .setColor("0xC49FD9")
            .setImage("https://i.imgur.com/yIe6irt.jpg")
            .setTimestamp()
        message.channel.send(embed)
    }
});
client.login(process.env.Bot_Token);
