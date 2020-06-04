module.exports = {
    name: ';!debug_info',
    description: 'Linux Command',
    execute(message, args, Client, Discord) {
        const Version_Number = ('Version 7');
        const Build_Number = ('Build Number: 6.9:7550');

        const debug_embed = new Discord.RichEmbed()
        .setTitle(`Debug Info`)
        .setColor('0xd44b28')
        .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Errors/alert_1_Yellow.png')
        .setDescription(`Debug Info for ${Client.user.toString()}`)
        .addField(`Version:`, `${Version_Number}`)
        .addField(`Build Number:`, `${Build_Number}`)
        .addField(`Compiled Date:`, `26/03/2020`)
        .addField(`Compiled Time:`, `02:05`)
        .setTimestamp()
        message.channel.send(debug_embed)
    },
}