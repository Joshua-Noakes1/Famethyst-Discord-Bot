// Main bot config (inc. discord.js (https://discord.js.org) dotenv(https://www.npmjs.com/package/dotenv))
require('dotenv').config()
// Cheerio and Request grab images from google
const cheerio = require('cheerio');
const request = require('request');
// This calls the Client class from discord.js (https://discord.js.org/#/docs/main/stable/class/Client)
// This calls the RichEmbed class from discord.js (https://discord.js.org/#/docs/main/stable/class/RichEmbed)
const {
    Client,
    RichEmbed,
    Attachment
} = require("discord.js")
// The bot is also blocked from doing @everyone (becuase no one wants that do they)
const client = new Client({
    disableEveryone: true
});
// Global Vars / Consts are defined here
// Prefex : - (How to call it in code (ES6) tilda => (`[Command goes here]`) => (`${prefex} Command`))
const prefex = ("-");
const vsNum = ("Version 5")
const BudNum = (`DELTA_${vsNum}_5001`)
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
    general.send(embed).then(msg => msg.react('😳'))
    if (member.guild.memberCount === 69) {
        const embed = new RichEmbed()
            .setAuthor(`Hey ${member.user.username} you're our 69th member! 😳`, member.user.avatarURL)
            .setDescription(`${member.user.username} you're our 69th member nice`)
            .setImage("https://66.media.tumblr.com/7697d802896c61fb9e8321f298ec1e97/tumblr_inline_nvpzh1xM1e1r1t1f7_540.png")
            .setTimestamp()
            .setColor("0xC49FD9")
            .setFooter("Nice")
        member.send(embed).then(general.send(`Woah ${member.user.username} is our 69th member *Nice*`))
    }
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
    general.send(embed).then(msg => msg.react('🇫'))
})

// The bot listens for messages here and deals with them acordingly 
client.on("message", async message => {
    // Sleep command
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
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
            .setFooter(`Running Version ${vsNum} | Running Build ${BudNum}`)
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
            .addField("Check the stats page out at", "[lobby.famethyst.ml](https://lobby.famethyst.ml)")
        message.channel.send(embed)
    }

    // info Debug_Info
    if (message.content === `${prefex}!debug_info`) {
        message.delete()
        const embed = new RichEmbed()
            .setTitle("Debug Info")
            .setColor("0xC49FD9")
            .setDescription(`COMPILED: 16/2/20; 11:04AM UTC | DEVICE: MAC BOOKAIR 13" (VSC) (IDV:4499) | BUILD: ${BudNum}`)
            .addField("CHANGE LOG", "[CHANGELOG.MD](https://github.com/Joshua-Noakes1/Famethyst-Discord-Bot/blob/master/changelog.md)")
            .setTimestamp()
        message.author.send(embed)
        message.reply("I've sent you the info!").then(msg => msg.delete(5000))
    }


    //Going feral commands
    if (message.content === 'Im going feral') {
        message.channel.send("Wait you're going feral? \nSo am I...")
        sleep(2 * 1000).then(() => {
            client.user.setPresence({
                game: {
                    name: `Ahhhhhhhh, I'm going fucking feral`
                }
            });
            message.channel.send(`Oh my god ${message.author.username} I'm going fucking feral \nAhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`)
            sleep(3 * 1000).then(() => {
                const image = new Attachment("https://66.media.tumblr.com/30ce04007d8c6874e6d5b7f386b0cc05/tumblr_inline_p7gjcd2V3B1qlu4t3_500.jpg")
                message.channel.send(image).then(message.channel.send("Ahhhhhhhhhhhhhhhh, all I fucking want is sleep and that's fucking it!")).then(message.channel.send('Ahhhhhhhhhhhhhhhh'))
                sleep(10 * 1000).then(() => {
                    message.channel.send("What you thought I was finished? \nOh I've only just started but I'll go scream in the corner...")
                    sleep(10 * 1000).then(() => {
                        client.user.setPresence({
                            game: {
                                name: `Hey a | -info | ${vsNum}`
                            }
                        });
                    })
                })
            })
        })
    }

    // linux 
    if (message.content === `linux`) {
        message.reply('Arch is good... Right?')
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
