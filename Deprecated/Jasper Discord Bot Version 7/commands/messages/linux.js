module.exports = {
    name: 'linux',
    description: 'Linux Command',
    execute(message, args, Client, Discord) {
        const linux_types = ['Ubuntu', 'Arch Linux', 'Fedora', 'Mint Linux', 'Manjaro']
        var linux_distor_names = linux_types[Math.floor(Math.random() * linux_types.length)]
        if (linux_distor_names == 'Ubuntu') {
            const ubuntu_embed = new Discord.RichEmbed()
                .setTitle(`${message.member.displayName}, ${linux_distor_names} is pretty good`)
                .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Linux_Distros/ubuntu-4-logo-png-transparent.png')
                .setDescription(`${linux_distor_names} is pretty good`)
                .setColor('0xdd4814')
                .setTimestamp()
                .setFooter('I run on Ubuntu Server 19.03')
            message.channel.send(ubuntu_embed).then(msg => {msg.react('😳')})
        } else if (linux_distor_names == 'Arch Linux') {
            const Arch_embed = new Discord.RichEmbed()
                .setTitle(`${message.member.displayName}, ${linux_distor_names} is pretty good`)
                .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Linux_Distros/Archlinux-icon-crystal-64.svg.png')
                .setDescription(`${linux_distor_names} is pretty good`)
                .setColor('0x1793d0')
                .setTimestamp()
                .setFooter('Arch is kinda complicated')
            message.channel.send(Arch_embed).then(msg => {msg.react('😳')})
        } else if (linux_distor_names == 'Fedora') {
            const Fedora_embed = new Discord.RichEmbed()
                .setTitle(`${message.member.displayName}, ${linux_distor_names} is pretty good`)
                .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Linux_Distros/1200px-Fedora_logo.svg.png')
                .setDescription(`${linux_distor_names} is pretty good`)
                .setColor('0x072c61')
                .setTimestamp()
                .setFooter('Fedora run on servers')
            message.channel.send(Fedora_embed).then(msg => {msg.react('😳')})
        } else if (linux_distor_names == 'Mint Linux') {
            const Fedora_embed = new Discord.RichEmbed()
                .setTitle(`${message.member.displayName}, ${linux_distor_names} is pretty good`)
                .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Linux_Distros/linux_mint-512.webp')
                .setDescription(`${linux_distor_names} is pretty good`)
                .setColor('0x98ff98')
                .setTimestamp()
                .setFooter('Mint tastes nice')
            message.channel.send(Fedora_embed).then(msg => {msg.react('😳')})
        } else if (linux_distor_names == 'Manjaro'){
            const Manjaro_embed = new Discord.RichEmbed()
                .setTitle(`${message.member.displayName}, ${linux_distor_names} is pretty good`)
                .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Linux_Distros/675587.png')
                .setDescription(`${linux_distor_names} is pretty good`)
                .setColor('0x98ff98')
                .setTimestamp()
                .setFooter('Manjaor is good for Steam')
            message.channel.send(Manjaro_embed).then(msg => {msg.react('😳')})
        } else {
            const dev = client.users.get(`${process.env.Owner_ID}`)
            const Error_embed = new Discord.RichEmbed()
                .setTitle(`${message.member.displayName}, an error has occured in the linux command`)
                .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Errors/error_1_red.png')
                .setDescription(`${message.member.displayName} an error has occured with the linux command!`)
                .setColor('0x98ff98')
                .setTimestamp()
                .setFooter('Woah')
            message.channel.send(Error_embed)
        }
    },
}
