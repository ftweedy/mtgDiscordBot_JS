const Discord = require('discord.js')
const token = ''
const client = new Discord.Client()

const mtg = require('mtgsdk')

const kick = require('./modules/kick.js')
const ban = require('./modules/ban.js')
const unban = require('./modules/unban.js')
const timedMute = require('./modules/timedMute.js')

// client.on('ready', () => {
//     var test = client.channels.cache.get("685609545548169278")
//     test.send("Hello!  I am a bot.")
// })

client.on('message', async msg => {
    if (msg.content === '!test'){
        msg.reply(`Hello ${msg.author}`)
    }

    if (msg.content === '!francis'){
        msg.channel.send('https://github.com/ftweedy')
    }

    if (msg.content != ""){
        //search for card by name
        if (msg.content.startsWith('[nameSearch] ')) {
            let args = msg.content.slice(13)

            mtg.card.where({ name: args })
            .then(card => {
                msg.reply(card[0].imageUrl)
            })
        }

        //admin Mod commands
        if ((msg.member.roles.cache.has(700816495189426276)) || (msg.member.id === msg.guild.owner.id)){
            let user = msg.mentions.users.first();
            let memb = msg.guild.member(user);

            if (memb && memb.roles.cache.has(700816495189426276) && msg.member.id != msg.guild.owner.id){
                return msg.channel.send('Only the server owner can mess with Mods.')
            }

            if (msg.content.startsWith('!kick')) {
                kick.kickUser(msg, user)
            }

            if (msg.content.startsWith('!ban')) {
                ban.banUser(msg, user)
            }

            if (msg.content.startsWith('!unban')) {
                unban.unbanUser(msg)
            }

            if (msg.content.startsWith('!tempmute')){
                timedMute.muteUser(msg, user)
            }
        }
    }
})

client.login(token)