module.exports = {
  name: ';!test',
  description: 'Testing if the bot works',
  execute(message, args, Client, Discord) {
    const command_good_embed = new Discord.RichEmbed()
    .setTitle(`${message.member.displayName} an error has not occured!`)
    .setDescription(`${message.member.displayName} an not error has occured with the command you tried to run!`)
    .setColor(`0x00FF00`)
    .setThumbnail(`https://raw.githubusercontent.com/Joshua-Noakes1/famethyst-cdn/master/CDN/Images/Errors/alert_1_Green.png`)
    .setTimestamp();
    message.channel.send(command_good_embed)
  },
};