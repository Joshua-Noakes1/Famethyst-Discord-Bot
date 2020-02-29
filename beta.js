//Dotenv support 
require('dotenv').config();
//Discord.js support & disabling @everybody
const {
    Discord,
    Client,
    RichEmbed,
    Attachment
} = require("discord.js");
const client = new Client({
    disableEveryone: true
});
// Global Vars
const Prefix = ('');
const Version_Number = ('Version 5.6');
const Build_Number = ('Build Number: 5.4:5607');
const Channel_Circles = ('°°');
// bot ready 
client.on("ready", () => {
    console.log(`The bot has connected with the username and tag ${client.user.tag} \nThe bot is also running ${Version_Number} and ${Build_Number}`);
    client.user.setPresence({
        game: {
            name: `Hey a | -info | ${Version_Number}`
        }
    });
});