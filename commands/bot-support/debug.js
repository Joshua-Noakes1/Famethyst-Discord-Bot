module.exports = {
    name: 'debug',
    description: 'This is built to crash the bot.',
    execute(message, args, Client, Discord, build_v, command_count) {
        var date_master = new Date();
        var date = date_master.toISOString().slice(0, 10);
        var time = date_master.getHours() + ":" + date_master.getMinutes();
        var second = date_master.getSeconds();
        const debug_embed = new Discord.MessageEmbed()
            .setTitle(`Debug`)
            .setColor(`0x483D8B`)
            .setThumbnail(`https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/alert_1_Yellow.png`)
            .addField(`System Time`, `${date} - ${time}:${second}\n`)
            .addField(`Current Build`, `${build_v}`)
            .addField(`Current Ping`, `${Client.ws.ping}ms`)
            .addField(`Commands Loaded`, `${command_count}`)
            .setTimestamp();
            message.channel.send(debug_embed);
    },
};