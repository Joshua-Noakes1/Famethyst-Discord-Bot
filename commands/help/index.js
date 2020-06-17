module.exports = {
    name: 'help',
    description: 'help command',
    execute(message, args, Client, Discord) {
        const help_embed = new Discord.MessageEmbed()
            .setTitle(`Help`)
            .setColor('0x483D8B')
            .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/alert_1_Yellow.png')
            .addField(`To get help with a command goto our [commands](https://github.com/Joshua-Noakes1/Lake-Bot/blob/master/commands.md) page on GitHub`)
            .setTimestamp();
        message.channel.send(help_embed);
    },
};