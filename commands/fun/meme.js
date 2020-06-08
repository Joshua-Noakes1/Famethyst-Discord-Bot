module.exports = {
    name: 'meme',
    description: 'Testing if the bot works',
    execute(message, args, Client, Discord) {
        const cheerio = require('cheerio');
        const request = require('request');

        let searchq = args.slice(0).join(" ");

        if (!searchq) {
            const no_searchq = new Discord.MessageEmbed()
                .setTitle(`I need something to meme`)
                .setColor(`0xFF0000`)
                .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/error_1_red.png')
                .setDescription(`Hey, ${message.member.displayName} i need something to meme`)
                .setTimestamp();
            message.channel.send(no_searchq);
            return;
        };
        image(message)

        function image(message) {

            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=" + `${searchq}` + ` meme`,
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            };

            request(options, function (error, response, responseBody) {
                if (error) {
                    return;
                }


                $ = cheerio.load(responseBody);


                var links = $(".image a.link");

                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

                if (!urls.length) {
                    const no_urls = new Discord.MessageEmbed()
                        .setTitle(`I can\'t meme ${searchq}`)
                        .setColor(`0xFF0000`)
                        .setThumbnail(`https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/error_1_red.png`)
                        .setDescription(`I can\'t find any memes images for ${searchq}\nTry and search again...`)
                        .setTimestamp();
                    message.channel.send(no_urls);
                    return;
                };

                const cursed_url = urls[Math.floor(Math.random() * urls.length)];
                // Send result
                const randomcolor = ['0x008080', '0x4682B4', '0x191970', '0x4169E1', '0x6A5ACD', '0x9370DB'];
                var randomcolorcodes = randomcolor[Math.floor(Math.random() * randomcolor.length)];
                const cursed_lev = ['1','2','3','4','5','6','7','8','9','10'];
                var randomcursed_lev = cursed_lev[Math.floor(Math.random() * cursed_lev.length)];
                const cap_searchq = searchq.charAt(0).toUpperCase();
                const searchq_rest = searchq.slice(1)
                const send_result = new Discord.MessageEmbed()
                    .setTitle(`${cap_searchq}`+`${searchq_rest}`+` memes`)
                    .setColor(`${randomcolorcodes}`)
                    .setImage(`${cursed_url}`)
                    .setDescription(`[Click here](${cursed_url}) for the full image`)
                    .setTimestamp()
                    .setFooter(`Meme level: ${randomcursed_lev}/10`);
                message.channel.send(send_result);
                //  message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
            });
        }

    },
};