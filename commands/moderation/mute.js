//this works hopefuly
module.exports = {
    name: 'mute',
    description: 'kick command',
    execute(message, args, Client, Discord) {
        //TODO: add sanity checks.
        const mute_role = message.guild.roles.cache.find(mr => mr.name === 'mute');
        const muteMember = message.mentions.members.first();
        
        muteMember.roles.add(mute_role).then(memeber => {
            const complete_mute = new Discord.MessageEmbed()
                .setTitle(`Muted ${muteMember.displayName}`)
                .setColor('0x00FF00')
                .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/alert_1_Green.png')
                .setDescription(`Hey, ${message.members.displayName} i\'ve muted ${muteMember.displayName}`)
                .setTimestamp()
                .setFooter('I\'ll delete this in 10 seconds');
            message.channel.send(complete_mute).then(msg => (msg.delete({
                timeout: 10000
            })));
        }).catch(err => {
            //ill sort this later
            console.log(err);
        });
    },
};