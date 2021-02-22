const { Client } = require('discord.js');
const config = require('./config.json')
const monke = new Client();

const photos = [
    "https://tenor.com/view/monkey-dance-happy-weekend-party-hard-lit-gif-9965336",
    "https://tenor.com/view/mad-monkey-mad-monkey-sassy-sad-gif-14704705",
    "https://tenor.com/view/pedro-monkey-puppet-meme-awkward-gif-15268759",
    "https://tenor.com/view/monkey-monke-dame-dame-da-ne-monkey-selfie-gif-18120991",
    "https://tenor.com/view/monkey-smart-phone-primate-tech-watching-gif-17406753",
    "https://tenor.com/view/look-back-monkey-mask-monkey-busted-blake-webber-gif-11941099",
    "https://tenor.com/view/baboon-monkey-butt-slap-mock-gif-5498401",
    "https://tenor.com/view/monkey-beauty-funny-animals-gif-8057241",
    "https://tenor.com/view/mad-monkey-mad-monkey-sassy-sad-gif-16709860",
    "https://tenor.com/view/gif-monkey-monkeys-baby-lol-gif-3468797",
    "https://tenor.com/view/chattering-monkey-doc-antle-cameo-monkey-talking-gif-17759335",
    "https://tenor.com/view/monke-monkey-monke-army-monke-swag-buy-gif-20219369",
    "https://tenor.com/view/reject-modernity-return-to-monke-monke-gif-19167526"
]

monke.once('ready', () => {
    console.log(`cool bot is now online`)
})

monke.on('message', async message => {
    if (message.author.bot) return;
    if (message.guild.id === undefined) return;
    if (message.content.startsWith(`${config.prefix}monke`)) {
        message.delete()
        let randomValue = photos[Math.floor(photos.length * Math.random())];
        message.channel.send(randomValue)
    }
})

monke.login(config.token)