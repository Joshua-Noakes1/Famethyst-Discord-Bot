//this works hopefuly
module.exports = {
    name: 'unmute',
    description: 'unmute command',
    execute(message, args, Client, Discord) {
        message.delete({
            timeout: 1
        });
        //TODO: add sanity checks...
        if (message.member.roles.cache.some(mg => mg.name === 'Mini-gods') || message.member.roles.cache.some(tg => tg.name === 'The Gods')) {
            const unmute_role = message.guild.roles.cache.find(mr => mr.name === 'unmute');
            const unmuteMember = message.mentions.members.first();

            if (!unmute_role) {
                const missing_role = new Discord.MessageEmbed()
                    .setTitle(`I can\'t find the \'unmute\' role`)
                    .setColor(`0xFF0000`)
                    .setThumbnail(`https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/error_1_red.png`)
                    .setDescription(`Hey, ${message.member.displayName} I can\'t find the \'unmute\' role!`)
                    .setTimestamp()
                    .setFooter('I\'ll delete this in 10 seconds');
                message.channel.send(missing_role).then(msg => msg.delete({
                    timeout: 10000
                }));
                return;
            };

            if (!unmuteMember) {
                const missing_member = new Discord.MessageEmbed()
                    .setTitle('You need to tell me someone to unmute!')
                    .setColor('0xFF0000')
                    .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/error_1_red.png')
                    .setDescription(`Hey, ${message.member.displayName} you need to tell me someone to kick!`)
                    .setTimestamp()
                    .setFooter('I\'ll delete this in 10 seconds');
                message.channel.send(missing_member).then(msg => msg.delete({
                    timeout: 10000
                }));
                return;
            };
            //I think this has a sanity check in place.
            unmuteMember.roles.remove(unmute_role).then(memeber => {
                const complete_unmute = new Discord.MessageEmbed()
                    .setTitle(`Unmuted ${unmuteMember.displayName}`)
                    .setColor('0x00FF00')
                    .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/alert_1_Green.png')
                    .setDescription(`Hey, ${message.member.displayName} i\'ve unmuted ${unmuteMember.displayName}`)
                    .setTimestamp()
                    .setFooter('I\'ll delete this in 10 seconds');
                message.channel.send(complete_unmute).then(msg => (msg.delete({
                    timeout: 10000
                })));
            }).catch(err => {
                //ill sort this later
                console.log(err);
            });
        } else {
            return;
        }
    },
};