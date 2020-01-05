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
const vernum = ("Version 3")
const buildnumber = ("buildnumber +GH3055BA")
const client = new Client();
const prefex = ("-")
client.on('ready', message => {
    console.log(`Logged in as ${client.user.tag}`)
    console.log(`Running ${vernum}`)
    console.log(`Running ${buildnumber}`)
    client.user.setActivity(`Hey a | -info | ${vernum}`)
});

// The code below gives someone the 'Amethyst' role when they join and says "@$their-username Welcome to the fam"
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(c => c.name === "◯-general-◯")
    const channel2 = member.guild.channels.find(c => c.name === "◯-bot-log-◯")
    if (!channel) return;
    channel.send(`${member} Welcome to the fam bro 🎉<:FlushedClown:661405645878329345>`)
    channel2.send(`Lets welcome ${member.user.username} to the fam!`)
    console.log(`New member ${member.user.username}`)
});
client.on('guildMemberAdd', guildMember => {
    guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Amethyst"))
});

// The code below responds to messages sent in the server (Join Here (https://discord.io/Famethyst-20))
client.on('message', message => {
    var authusernm = message.author.username
    let args = message.content.substring(prefex.length).split(" ");
  
    // setup v3 announcment!
    if (message.content === "-setupV3") {
        // checks for my role
        if (!message.member.roles.find(r => r.name === "Joshua's Role")) return;
        //deletes the message
        message.delete(100)
        // finds the roles 
        const godsrole = message.guild.roles.find(r => r.name === "The Gods") 
        const minirole = message.guild.roles.find(r => r.name === "Mini-gods")
        // finds the channels
        const adminch = message.guild.channels.find(c => c.name === "◯-admin-reports-◯")
        const announc = message.guild.channels.find(c => c.name === "◯-announcements-◯")
        const roles = message.guild.channels.find(c => c.name === "◯-role-requests-◯")
        // Main Announcment embed 
        const annoucan = new RichEmbed()
        .setTitle("New Update")
        .setColor("0xC49FD9")
        .setDescription("Hey, there are new commands you can do now!")
        .addField("Check the github", "Check the bots [github](https://github.com/Joshua-Noakes1/Famethyst-Discord-Bot) for a full list of commands you can use!")
        .addField("Don't forget to check the channels", "admin-reports and role-requests for a look at the new commands!")
        .setFooter(`Bot by ${message.author.username}`)
        announc.send(annoucan)
        // role announcment embed 
        const rolean = new RichEmbed()
            .setTitle("New Role Commands")
            .setColor("0xC49FD9")
            .setDescription("There are new role commands you can do now")
            .addField(`How to get the Artist role?`, "Type \"-roles Artist\"")
            .addField(`How to get the Singer role?`, "Type \"-role Singer\"")
            .addField(`How to get the Voice Actor role?`, "Type \"-roles VA\"")
            .addField(`How to get the Writer role?`, "Type \"-roles Writer\"")
            .addField(`How do i remove a role?`, `Just type what role you have and it will take it away, like if you have the Artist role type \"-roles Artist\" and it will take it away!`)
            .addField(`If you want to add a role`, "Open an issue on [github](https://github.com/Joshua-Noakes1/Famethyst-Discord-Bot/) with your role")
            .setFooter(`Bot by ${message.author.username}`);
        roles.send(rolean)
        // admin announcment embed
        const adminan = new RichEmbed()
            .setTitle("New Admin Commands!")
            .setColor("0xC49FD9")
            .setDescription(`There are new admin commands for the ${minirole.toString()} role and the ${godsrole.toString()} role!`)
            .addField("There is the Bubble role which gives someone their first warning!", `Run \"-Bubble (then @the person)\"`)
            .addField("There is the Cracked role which gives someone their second warning!", `Run \"-Cracked (then @the person)\"`)
            .addField("There is the Shattered role which gives someone their third warning!", `Run \"-Shattered (then @the person)\"`)
            .addField("There is the Poof command which bans someone!", `Run \"-Poof (then @the person) and give a single word reason!\"`)
            .addField("There is the Abandon command which kicks someone!", `\"-Abandon (then @the person) and give a single word reason!\"`)
            .setFooter(`Bot by ${message.author.username}`)
            adminch.send(`${godsrole.toString()} ${minirole.toString()}`)
            adminch.send(adminan)
    }

    // switch for adding the prefex to the start
    switch (args[0]) {
        // Bubble is warning V1
        case 'Bubble':
            const botlog = message.guild.channels.find(c => c.name === "◯-bot-log-◯")
            const bubbledrole = message.guild.roles.find(r => r.name === "Bubbled")
            //fms = first person mentioned
            let fms = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            if (!bubbledrole) return;
            const embed1 = new RichEmbed()
                .setTitle("Bro, you didn't @ someone")
                .setDescription("Bro, you didn't @ someone, you clown <:PensiveClown:661405400020549632>")
                .setImage("https://orig00.deviantart.net/7be7/f/2016/215/0/4/poor_amethyst_by_zetrystan-dacizfy.gif")
                .setColor("0xC49FD9")
                .setFooter(`Fam ${message.author.username} asked`);
            if (!fms) return message.channel.send(embed1)
            const embed2 = new RichEmbed()
                .setTitle("Bro, I can't let you do that")
                .setDescription("Sorry Bro I can't let you do that <:PensiveClown:661405400020549632>")
                .setImage("https://orig00.deviantart.net/7be7/f/2016/215/0/4/poor_amethyst_by_zetrystan-dacizfy.gif")
                .setColor("0xC49FD9")
                .setFooter(`Fam ${message.author.username} asked`);
            const embed3 = new RichEmbed()
                .setTitle(`Bro, I've ${bubbledrole.name} ${fms.user.username}`)
                .setDescription(`Bro, I bubbled ${fms.user.username} for you!`)
                .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
                .setColor("0xC49FD9")
                .setFooter(`Fam ${message.author.username} asked`);
            //Finds roles
            if (!message.member.roles.find(r => r.name === "The Gods") && !message.member.roles.find(r => r.name === "Joshua's Role") && !message.member.roles.find(r => r.name === "Mini-gods")) return message.channel.send(embed2)
            fms.addRole(bubbledrole).then(botlog.send(`Given ${fms.user.username} the bubbled role!`) || console.log(`${message.author.username} gave ${fms.user.username} the ${bubbledrole.name}`) || message.channel.reply(embed3));
            break;
            // Cracked is warning V2
        case 'Cracked':
            const crackedrole = message.guild.roles.find(r => r.name === "Cracked")
            if (!crackedrole) return;
            if (!message.member.roles.find(r => r.name === "The Gods") && !message.member.roles.find(r => r.name === "Joshua's Role") && !message.member.roles.find(r => r.name === "Mini-gods")) return message.channel.send(embed2)
            fms.addRole(crackedrole).then(botlog.send(`Given ${fms.user.username} the ${crackedrole.name} role!`) || console.log(`${message.author.username} gave ${fms.user.username} the ${crackedrole.name}`) || message.channel.reply(embed3));
            break;
            // Shattered is warning V3
        case 'Shattered':
            const shatrole = message.guild.roles.find(r => r.name === "Shattered")
            if (!crackedrole) return;
            if (!message.member.roles.find(r => r.name === "The Gods") && !message.member.roles.find(r => r.name === "Joshua's Role") && !message.member.roles.find(r => r.name === "Mini-gods")) return message.channel.send(embed2)
            fms.addRole(shatrole).then(botlog.send(`Given ${fms.user.username} the ${shatrole.name} role!`) || console.log(`${message.author.username} gave ${fms.user.username} the ${shatrole.name}`) || message.channel.reply(embed3));
            break;
            // Poof is a ban 
        case 'Poof':
            //fms1 finds the first person mentioned
            let fms1 = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            if (!fms1) return;
            const embed4 = new RichEmbed()
                .setTitle(`Bro, I've poofed ${fms1.user.username}`)
                .setDescription(`Bro, I poofed ${fms1.user.username} for you <:PensiveClown:661405400020549632>`)
                .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
                .setColor("0xC49FD9")
                .setFooter(`Fam ${message.author.username} asked`);
            if (!message.member.roles.find(r => r.name === "The Gods") && !message.member.roles.find(r => r.name === "Joshua's Role") && !message.member.roles.find(r => r.name === "Mini-gods")) return message.channel.send(embed2)
            fms1.ban(`${message.author.username} banned ${fms1.user.username} for ${args[2]}`).then(console.log(`${message.author.username} banned ${fms1.user.username}`) || message.channel.send(embed4))
            botlog.send(`${message.author.username} banned ${fms1.user.username}`)
            break;
            // Abandon is a kick
        case 'Abandon':
            if (!fms1) return;
            const embed5 = new RichEmbed()
                .setTitle(`Bro, I've abandoned ${fms1.user.username}`)
                .setDescription(`Bro, I abandoned ${fms1.user.username} for you <:PensiveClown:661405400020549632>`)
                .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
                .setColor("0xC49FD9")
                .setFooter(`Fam ${message.author.username} asked`);
            if (!message.member.roles.find(r => r.name === "The Gods") && !message.member.roles.find(r => r.name === "Joshua's Role") && !message.member.roles.find(r => r.name === "Mini-gods")) return message.channel.send(embed2)
            fms1.kick(`${message.author.username} kicked ${fms1.user.username} for ${args[2]}`).then(console.log(`${message.author.username} kicked ${fms1.user.username}`) || message.channel.send(embed5))
            botlog.send(`${message.author.username} kicked ${fms1.user.username}`)
            break;
    }

    // Roles Assigment

    // Artist 

    if (message.content === `${prefex}roles Artist`) {
        if (message.member.roles.find(r => r.name === "Artist")) {
            const Role = message.guild.roles.find(r => r.name === "Artist")
            message.delete(100)
            message.member.removeRole(Role)
            console.log(`${message.author.username} just left the ${Role.name}`)
            const botlog = message.guild.channels.find(c => c.name === "bot-log")
            botlog.send(`${message.author.username} just left the ${Role.name}`)
            const embedrm = new RichEmbed()
                .setTitle(`You've left the ${Role.name} role!`)
                .setDescription(`Thanks ${message.author.username} you've left got the ${Role.name} role!`)
                .setColor("0xC49FD9")
                .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
                .setFooter(`Thanks, ${message.author.username}`);
            message.author.send(embedrm)
        }
        if (!message.member.roles.find(r => r.name === "Artist")) {
            const Role = message.guild.roles.find(r => r.name === "Artist")
            const botlog = message.guild.channels.find(c => c.name === "bot-log")
            message.delete(100)
            message.member.addRole(Role).then(console.log(`${message.author.username} just got the ${Role.name} role`)).then(botlog.send(`${message.author.username} just got the ${Role.name} role!`))
            const embed = new RichEmbed()
                .setTitle(`You've just got the ${Role.name} role!`)
                .setDescription(`Thanks ${message.author.username} you've just got the ${Role.name} role!`)
                .setColor("0xC49FD9")
                .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
                .setFooter(`Thanks, ${message.author.username}`);
            message.author.send(embed)
        }
    }

    // Singer 

    if (message.content === `${prefex}roles Singer`) {
        if (message.member.roles.find(r => r.name === "Singer")) {
            const Role = message.guild.roles.find(r => r.name === "Singer")
            message.delete(100)
            message.member.removeRole(Role)
            console.log(`${message.author.username} just left the ${Role.name}`)
            const botlog = message.guild.channels.find(c => c.name === "bot-log")
            botlog.send(`${message.author.username} just left the ${Role.name}`)
            const embedrm = new RichEmbed()
                .setTitle(`You've left the ${Role.name} role!`)
                .setDescription(`Thanks ${message.author.username} you've left got the ${Role.name} role!`)
                .setColor("0xC49FD9")
                .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
                .setFooter(`Thanks, ${message.author.username}`);
            message.author.send(embedrm)
        }
        if (!message.member.roles.find(r => r.name === "Singer")) {
            const Role = message.guild.roles.find(r => r.name === "Singer")
            const botlog = message.guild.channels.find(c => c.name === "bot-log")
            message.delete(100)
            message.member.addRole(Role).then(console.log(`${message.author.username} just got the ${Role.name} role`)).then(botlog.send(`${message.author.username} just got the ${Role.name} role!`))
            const embed = new RichEmbed()
                .setTitle(`You've just got the ${Role.name} role!`)
                .setDescription(`Thanks ${message.author.username} you've just got the ${Role.name} role!`)
                .setColor("0xC49FD9")
                .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
                .setFooter(`Thanks, ${message.author.username}`);
            message.author.send(embed)
        }
    }

    // Voice Actor

    if (message.content === `${prefex}roles VA`) {
        if (message.member.roles.find(r => r.name === "Voice actor")) {
            const Role = message.guild.roles.find(r => r.name === "Voice actor")
            message.delete(100)
            message.member.removeRole(Role)
            console.log(`${message.author.username} just left the ${Role.name}`)
            const botlog = message.guild.channels.find(c => c.name === "bot-log")
            botlog.send(`${message.author.username} just left the ${Role.name}`)
            const embedrm = new RichEmbed()
                .setTitle(`You've left the ${Role.name} role!`)
                .setDescription(`Thanks ${message.author.username} you've left got the ${Role.name} role!`)
                .setColor("0xC49FD9")
                .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
                .setFooter(`Thanks, ${message.author.username}`);
            message.author.send(embedrm)
        }
        if (!message.member.roles.find(r => r.name === "Voice actor")) {
            const Role = message.guild.roles.find(r => r.name === "Voice actor")
            const botlog = message.guild.channels.find(c => c.name === "bot-log")
            message.delete(100)
            message.member.addRole(Role).then(console.log(`${message.author.username} just got the ${Role.name} role`)).then(botlog.send(`${message.author.username} just got the ${Role.name} role!`))
            const embed = new RichEmbed()
                .setTitle(`You've just got the ${Role.name} role!`)
                .setDescription(`Thanks ${message.author.username} you've just got the ${Role.name} role!`)
                .setColor("0xC49FD9")
                .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
                .setFooter(`Thanks, ${message.author.username}`);
            message.author.send(embed)
        }
    }

    // Writer

    if (message.content === `${prefex}roles Writer`) {
        if (message.member.roles.find(r => r.name === "Writer")) {
            const Role = message.guild.roles.find(r => r.name === "Writer")
            message.delete(100)
            message.member.removeRole(Role)
            console.log(`${message.author.username} just left the ${Role.name}`)
            const botlog = message.guild.channels.find(c => c.name === "bot-log")
            botlog.send(`${message.author.username} just left the ${Role.name}`)
            const embedrm = new RichEmbed()
                .setTitle(`You've left the ${Role.name} role!`)
                .setDescription(`Thanks ${message.author.username} you've left got the ${Role.name} role!`)
                .setColor("0xC49FD9")
                .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
                .setFooter(`Thanks, ${message.author.username}`);
            message.author.send(embedrm)
        }
        if (!message.member.roles.find(r => r.name === "Writer")) {
            const Role = message.guild.roles.find(r => r.name === "Writer")
            const botlog = message.guild.channels.find(c => c.name === "bot-log")
            message.delete(100)
            message.member.addRole(Role).then(console.log(`${message.author.username} just got the ${Role.name} role`)).then(botlog.send(`${message.author.username} just got the ${Role.name} role!`))
            const embed = new RichEmbed()
                .setTitle(`You've just got the ${Role.name} role!`)
                .setDescription(`Thanks ${message.author.username} you've just got the ${Role.name} role!`)
                .setColor("0xC49FD9")
                .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
                .setFooter(`Thanks, ${message.author.username}`);
            message.author.send(embed)
        }
    }

    // Normal bot info
    if (message.content === `${prefex}info`) {
        const embed = new RichEmbed()
            .setTitle(`${prefex}Fam Bot 2 Info`)
            .setColor("0x65280")
            .setImage("https://vignette4.wikia.nocookie.net/steven-universe/images/8/8a/Amethyst_new.png/revision/latest/scale-to-width-down/1000?cb=20150430231339")
            .setFooter(`Made by \'Joshua#2968 | fam ${authusernm} asked | ${vernum}`)
            .addField("What can this bot do?", "You can readup on [github](https://github.com/Joshua-Noakes1/Famethyst-Discord-Bot/)")
            .addField("What commands are there?", "Have a look on [github](https://github.com/Joshua-Noakes1/Famethyst-Discord-Bot/) (theres too many to fit here now <:PensiveClown:661405400020549632>")
            .addField("Do you want to add something?", "Submit it as an issue on the [github page](https://github.com/Joshua-Noakes1/Famethyst-Discord-Bot/)")
        message.channel.send(embed)
    }

    // Verbose bot info
    if(message.content === `${prefex}info ${prefex}v`){
        console.log(`Verbose info request by ${message.author.username}`)
        message.channel.send(`${buildnumber} : ${vernum} : date-built: 05-01-2020 - DD-MM-YYYY : time-built: 17:55:00 +0000GMT 24hourclock : unix-timestamp: 1578246900`)
    }

    // Hey ama commands
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

    if (message.content === 'hey amethyst!') {
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

    if (message.content === 'Hey, Amethyst') {
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

    if (message.content === 'hey, amethyst') {
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

    if (message.content === 'hey, a') {
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
