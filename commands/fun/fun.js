module.exports = {
    name: 'fun',
    description: 'Testing if the bot works',
    execute(message, args, Client, Discord) {
        const cheerio = require('cheerio');
        const request = require('request');

        let searchq = args.slice(0).join(" ");

        if (!searchq) {
            const no_searchq = new Discord.MessageEmbed()
                .setTitle(`I need something to make it fun`)
                .setColor(`0xFF0000`)
                .setThumbnail('https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/error_1_red.png')
                .setDescription(`Hey, ${message.member.displayName} i need something to make it fun`)
                .setTimestamp();
            message.channel.send(no_searchq);
            return;
        };
        image(message)

        function image(message) {

            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=fun " + `${searchq}`,
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
                        .setTitle(`I can\'t curse ${searchq}`)
                        .setColor(`0xFF0000`)
                        .setThumbnail(`https://raw.githubusercontent.com/Joshua-Noakes1/Lake-CDN/master/CDN/Images/Errors/error_1_red.png`)
                        .setDescription(`I can\'t find any fun images for ${searchq}\nTry and search again...`)
                        .setTimestamp();
                    message.channel.send(no_urls);
                    return;
                };

                const fun_url = urls[Math.floor(Math.random() * urls.length)];
                // Send result
                const randomcolor = ['0x008080', '0x4682B4', '0x191970', '0x4169E1', '0x6A5ACD', '0x9370DB'];
                var randomcolorcodes = randomcolor[Math.floor(Math.random() * randomcolor.length)];
                const send_result = new Discord.MessageEmbed()
                    .setTitle(`Fun ${searchq}`)
                    .setColor(`${randomcolorcodes}`)
                    .setImage(`${fun_url}`)
                    .setDescription(`[Click here](${fun_url}) for the full image`)
                    .setTimestamp();
                message.channel.send(send_result);
                //  message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
            });
        }

    },
};