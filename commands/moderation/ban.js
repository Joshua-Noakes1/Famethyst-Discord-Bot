module.exports = {
    name: 'ban',
    description: 'ban command',
    execute(message, args, Client, Discord) {
        //lets hope the sanity checks work...
        if (message.member.roles.cache.some(j => j.name === 'Joshua')) {
            //ban command
            let reason = args.slice(1).join(" ");

            if (message.mentions.members.size === 0) {
                message.delete({
                    timeout: 1
                });
                const no_mention = new Discord.MessageEmbed()
                    .setTitle('You need to tell me someone to ban')
                    .setColor('0xFF0000')
                    .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/error_1_red.png')
                    .setDescription(`Hey, ${message.member.displayName} you need to tell me someone to ban!`)
                    .setTimestamp()
                    .setFooter('I\'ll delete this in 10 seconds');
                message.channel.send(no_mention).then(msg => msg.delete({
                    timeout: 10000
                }));
                return;
            }

            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return;
            //ban code
            const banMember = message.mentions.members.first();
            banMember.ban(reason).then(member => {
                const member_then = new Discord.MessageEmbed()
                    .setTitle(`Banned ${banMember.displayName}`)
                    .setColor(`0x00FF00`)
                    .setThumbnail(`https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/alert_1_Green.png`)
                    .setDescription(`Hey, ${message.member.displayName} i\'ve successfully baned ${banMember.displayName}!`)
                    .setTimestamp()
                    .setFooter('I\'ll delete this in 10 seconds');
                message.channel.send(member_then).then(msg => msg.delete({
                    timeout: 10000
                }));
            }).catch(err => {
                //lets catch an error so we dont break 
                message.delete({
                    timeout: 1
                });
                const catch_member = new Discord.MessageEmbed()
                    .setTitle('Something\'s Gone Wrong')
                    .setColor('0xFF0000')
                    .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/error_1_red.png')
                    .setDescription(`Hey, ${message.member.displayName} something's gone wrong\nI might be missing the permissions to ban ${banMember.displayName}`)
                    .setTimestamp()
                    .setFooter('I\'ll delete this in 10 seconds');
                message.channel.send(catch_member).then(msg => msg.delete({
                    timeout: 10000
                }));
                console.log(err);
            });
        } else {
            //people that dont have an admin role
            return;
        }
    }
};