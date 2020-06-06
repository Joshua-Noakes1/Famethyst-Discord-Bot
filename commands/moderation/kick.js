module.exports = {
    name: 'kick',
    description: 'kick command',
    execute(message, args, Client, Discord) {
        if (message.member.roles.cache.some(j => j.name === 'Joshua')) {
            let reason = args.slice(1).join(" ");

            if (message.mentions.members.size === 0)
                return message.reply("Please mention a user to kick");

            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return;

            const kickMember = message.mentions.members.first();

            kickMember.kick(reason).then(member => {
                message.reply(`${member.user.username} was succesfully kicked.`);
            }).catch(err => {
                message.channel.send('Wrong');
                console.log(err);
            });
        } else {
            console.log('else')
            return;
        }
    }
};