unbanUser = (msg) => {
    // let invite = msg.channel.createInvite({ maxUses: 1 })
    let args = msg.content.slice(6).split(' ')
    if (args != ''){ //if (args)
        emptyElement = args.shift()
    }

    let bannedUser = args[0]
    if (bannedUser === '') {
        return msg.reply("Provide a user to unban")
    }
    try {
        msg.guild.unban(bannedUser)
        msg.channel.send(`${bannedUser.tag} has been unbanned!`)
    } catch(e) {
        msg.channel.send("Member is not banned")
    }
}

module.exports = {
    unbanUser
}