module.exports = {
    name: 'ping',
    description: 'Checking the servers ping',
    execute(message, args, client, Discord) {
        // Message Latency info
        // sets a variable on the first message
        message.channel.send('🏓 Pinging...').then(msg => {
                // Checks the api speed 
                if (client.ws.ping <= '250') {
                    var Api_Time = ("✅ The ping looks okay right now");
                    var Api_Color = ('0x00FF00')
                } else if (client.ws.ping <= '450') {
                    var Api_Time = (`⚠️ The ping might be having trouble right now\nThe ping time is ${client.ws.ping}ms\nCheck the client status page [here](https://status.discord.com)`);
                    var Api_Color = (`0xFFFF00`)
                } else if (client.ws.ping <= '750') {
                    var Api_Time = (`❗️ The ping response time is very high something might be going very wrong\nThe ping time is ${client.ws.ping}ms\nCheck the status page [here](https://status.discord.com)`);
                    var Api_Color = (`0xFF8C00`)
                } else {
                    var Api_Time = (`❌ Somethings gone very wrong if you can see this\nThe ping time is ${client.ws.ping}ms\nCheck whats going wrong [here](https://status.discord.com)`);
                    var Api_Color = (`0xFF0000`)      
                };
                // msg.edit(Api_Time);
                const Api_embed = new Discord.MessageEmbed()
                    .setTitle('🏓 Ping...')
                    .setColor(`${Api_Color}`)
                    .setDescription('You\'ll get the most up to date infomation from the [discord status page](https://status.discord.com).')
                    .addField('How does the ping look?', Api_Time)
                    .setTimestamp()
                    .setFooter('Ping times!');
                msg.delete();
                message.channel.send(Api_embed);
        });
    },
};