muteUser = async (msg, user) => {
    let args = msg.content.slice(9).split(' ')
    if (args != ''){
        emptyElement = args.shift()
    }

    let mutedUser = user
    let muteTime = args[1]
    let muteReason = args[2]

    let muteRole = message.guild.roles.find(`name`, "muted")

    if (!mutedUser) {
        return msg.reply("Provide a user to mute.")
    }
    if (!muteTime) {
        return msg.reply("Provie a time to mute.")
    }
    if (!muteReason) {
        return msg.reply("Provide a reason to mute.")
    }

    if(!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions:[]
            })

            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }

    await(mutedUser.addRole(muteRole.id));
    message.reply(`${mutedUser} has been muted for ${ms(ms(muteTime))}`);
  
    setTimeout(function() {
      mutedUser.removeRole(muteRole.id);
      message.channel.send(`${mutedUser} has been unmuted!`);
    }, ms(mutetime));
}

module.exports = {
    muteUser
}