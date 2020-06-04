module.exports = {
    name: ';!info',
    description: 'Linux Command',
    execute(message, args, Client, Discord) {
        const rules_channel = message.guild.channels.find(channel => channel.name == `°°rules°°`);
        var TheGods = message.guild.roles.find(roles => roles.name == "The Gods")
        var MiniGods = message.guild.roles.find(roles => roles.name == "Mini-gods")
        const info_embed = new Discord.RichEmbed()
            .setTitle(`Server Info!`)
            .setColor(`0xd44b28`)
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`${message.member.displayName} here's the server info!`)
            .addField(`How many people are here?`, `There are ${Math.floor(message.guild.memberCount) - 9} people here!`)
            .addField(`Where can i find the rules?`, `You can find the rules for the server in the ${rules_channel.toString()} channel!`)
            .addField(`Who are the mods?`, `Mods have the roles ${TheGods.toString()} and ${MiniGods.toString()}! \n(Some have their own role aswell)`)
            .addField(`What other commands are there?`, `You can find the other commands on my github page [here](https://www.github.com/Joshua-Noakes1/Famethyst-Discord-Bot/)!`)
            .setTimestamp()
            .setFooter(`How you doing ${message.member.displayName}`);
        message.channel.send(info_embed);
    },
}