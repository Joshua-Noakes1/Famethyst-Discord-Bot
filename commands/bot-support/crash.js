module.exports = {
    name: '~crash',
    description: 'This is built to crash the bot.',
    execute(message, args, Client, Discord) {
        console.log("This is built to crash don't worry")
        const crash_embed = new Discord.Crash()
            .setTitle("Error")
            .setfooter("if you can see this somethings gone really wrong")
            .setColor("0xFF0000");
        message.channel.send(crash_embed);
    },
};