module.exports = {
  name: 'test',
  description: 'Testing if the bot works',
  execute(message, args, Client, Discord) {
    const test_embed = new Discord.MessageEmbed()
    .setTitle('This works')
    .setColor('0x483D8B')
    .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/alert_1_Green.png')
    .setDescription('Hey this works \nThat\'s prety good')
    .setTimestamp()
    message.channel.send(test_embed);    
  },
};