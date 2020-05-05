kickUser = (msg, user) => {
    if (user) {
        const member = msg.guild.member(user);
        // If the member is in the guild, run on member not user
        if (member) {
            member.kick('Kicked because of testing')
            .then(() => {
                msg.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
                msg.reply('I was unable to kick the member');
                console.error(err);
            });
        } else {
            msg.reply("That user isn't in this guild!");
        }
    } else {
        msg.reply("You didn't mention the user to kick!");
    }
}

module.exports = {
    kickUser
}