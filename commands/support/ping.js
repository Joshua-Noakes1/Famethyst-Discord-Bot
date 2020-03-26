module.exports = {
    name: ';!ping',
    description: 'Checking the ping',
    execute(message, args, Client, Discord) {
        // Message Latency info
        // sets a variable on the first message
        message.channel.send('🏓 Pinging...').then(msg => {
                // Checks the api speed 
                if (Client.ping <= '250') {
                    var Api_Time = ("✅ The ping looks okay right now!");
                    var Api_Color = ('0x00FF00')
                } else if (Client.ping <= '450') {
                    var Api_Time = (`⚠️ The ping might be having trouble right now! \nThe ping time is ${Client.ping}ms \nCheck the discord status page [here](https://status.discordapp.com)`);
                    var Api_Color = (`0xFFFF00`)
                } else if (Client.ping <= '750') {
                    var Api_Time = (`❗️ The ping response time is very high something might be going very wrong! \nThe ping time is ${Client.ping}ms \nCheck the status page [here](https://status.discordapp.com)`);
                    var Api_Color = (`0xFF8C00`)
                } else {
                    var Api_Time = (`❌ The ping is having a problem \nThe ping time is ${Client.ping}ms, \nCheck whats going wrong [here](https://status.discordapp.com)`);
                    var Api_Color = (`0xFF0000`)
                }
                // msg.edit(Api_Time);
                const Api_embed = new Discord.RichEmbed()
                    .setTitle('🏓 Ping...')
                    .setColor(`${Api_Color}`)
                    .setDescription('You\'ll get the most up to date infomation from the [Discord Status Page](https://status.discordapp.com)')
                    .addField('How does the ping look?', Api_Time)
                    .addField(`What's the HTTP API time?`, `${Client.ping}ms`)
                    .setTimestamp()
                    .setFooter('Ping times!');
                msg.delete();
                message.channel.send(Api_embed);
        });
    },
}