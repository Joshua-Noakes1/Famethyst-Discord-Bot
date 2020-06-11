module.exports = {
    name: 'water',
    description: 'Testing if the bot works',
    execute(message, args, Client, Discord, build_v, command_count) {
        var date_master = new Date();
        var date = date_master.toISOString().slice(0, 10);
        var time = date_master.getHours() + "-" + date_master.getMinutes();
        var file_time = date_master.getHours() + ":" + date_master.getMinutes();
        var second = date_master.getSeconds();
        const fetch = require('node-fetch');
        let subreddit = 'ocean';
        const randomcolor = ['0x008080', '0x4682B4', '0x191970', '0x4169E1', '0x6A5ACD', '0x9370DB'];
        var randomcolorcodes = randomcolor[Math.floor(Math.random() * randomcolor.length)];
        fetch(`http://meme-api.herokuapp.com/gimme/${subreddit}`)
            .then(res => res.json())
            .then(json => {
                const title = json.title
                if (title === undefined) {
                    const not_found = new Discord.MessageEmbed()
                        .setTitle(`Images not found for r\/${subreddit}`)
                        .setColor('0xFF0000')
                        .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/error_1_red.png')
                        .setDescription(`Hey, ${message.member.displayName} I don't think r/${subreddit} has images!\nTry a diffrent subreddit`)
                        .setTimestamp();
                    message.channel.send(not_found);
                    return;
                };
                if (json.nsfw) {
                    if (!message.channel.nsfw) {
                        const not_nsfw_channel = new Discord.MessageEmbed()
                            .setTitle(`We've found an NSFW post!`)
                            .setColor('0x483D8B')
                            .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/alert_1_Yellow.png')
                            .setDescription(`Hey, ${message.member.displayName} I've found an NSFW post\nTo view NSFW posts goto an NSFW channel in ${message.guild.name}!`)
                            .setTimestamp();
                        message.channel.send(not_nsfw_channel);
                        return;
                    };
                };
                const reddit_embed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setColor(randomcolorcodes)
                    .setImage(json.url)
                    .setURL(json.postLink)
                    .setTimestamp()
                    .setFooter(`r/${json.subreddit}`)
                message.channel.send(reddit_embed)
            }).catch(error => {
                fs.writeFile(`./errors/error_with_reddit_on_${date}@${time}-${second}.err`, `--------------------\n${Client.user.tag} has had an error\nit occured at ${date} - ${file_time}:${second}\nThe affected command is reddit.js\nThe bot is running build ${build_v} and had ${command_count} commands loaded\nthe error is: ${error}\n--------------------`, function (err) {
                    if (err) return console.log(err);
                    console.log(`Logged the error with reddit.js that occured on ${date} @ ${file_time}:${second}`);
                    const titlequotes = ['our time traveling trees never predicted!', 'our observant grasshoppers missed!'];
                    var titlequotes_random = titlequotes[Math.floor(Math.random() * titlequotes.length)];
                    const main_message_error = new Discord.MessageEmbed()
                        .setTitle(`An error has occured with "reddit"`)
                        .setColor('0xFF0000')
                        .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/error_1_red.png')
                        .setDescription(`Hey, ${message.member.displayName} something's gone wrong that ${titlequotes_random}\n\nThe problem's been logged on our side and the code monkeys are hard working on a fix!`)
                        .setTimestamp();
                    message.channel.send(main_message_error);
                    return;
                });
            })
    },
};