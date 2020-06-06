module.exports = {
    name: 'crash',
    description: 'This is built to crash the bot.',
    execute(message, args, Client, Discord) {
        console.log("This is built to crash don't worry")
        const crash = new Discord.Crash()
        message.channel.send(crash);
    },
};