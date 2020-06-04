module.exports = {
    name: 'hey jasper',
    description: 'reply with the hey j command',
    execute(message, args, Client, Discord) {
        const images = ['https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Jasper/Jasper.jpg', 'https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Jasper/b190dfc6ecdc176ea01e90d97fbd43afda0d2e0cv2_hq.jpg', 'https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Jasper/e6ZmPfRtO24SGPSuuB9WLXpTMiESiUuueMcjIpFkOpg.jpg', 'https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Jasper/jasper-smirk-588feafc0ebab.png']
        var images_random = images[Math.floor(Math.random() * images.length)]
        const titlequotes = ['how you doing?', 'you good?', 'whats up?', 'what you doing?', 'how\'s it going?']
        var titlequotes_random = titlequotes[Math.floor(Math.random() * titlequotes.length)]
        const heyj_embed = new Discord.RichEmbed()
        .setAuthor(`Hey ${message.member.displayName} ${titlequotes_random}`, message.author.avatarURL)
        .setColor('0xd44b28')
        .setImage(`${images_random}`)
        .setTimestamp();
        message.channel.send(heyj_embed)
    },
};