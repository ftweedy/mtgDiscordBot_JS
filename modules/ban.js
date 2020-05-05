banUser = (msg, user) => {
    if (user) {
        let member = msg.guild.member(user);
        // If the member is in the guild, run on member not user
        if (member) {
            member.ban({reason: 'They were bad!', })
            .then(() => {
                msg.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {
                msg.reply('I was unable to ban the member');
                console.error(err);
            });
        } else {
            msg.reply("That user isn't in this guild!");
        }
    } else {
        msg.reply("You didn't mention the user to ban!");
    }
}

module.exports = {
    banUser
}