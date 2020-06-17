module.exports = {
    name: 'changeuser',
    description: 'This is built to changethe activity of the bot',
    execute(message, args, Client, Discord, ) {
        let change = args.slice(0).join(" ");
        require('dotenv').config();
        if (message.author.id !== process.env.Joshua_ID) return;
        Client.user.setActivity(`${change} | ~help | Version 1.0.0.4`, {
            type: "PLAYING"
        });
    },
};