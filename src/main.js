// Load module-only requires
const discordJS = require('discord.js');

// Define module
module.exports = {
    makeClient: function(options) {
        let Bot = new discordJS.Client(); Bot.login(options.botToken)
        return {
            run: function() {
                Bot.on('message', msg => {
                    if(msg.author.bot) return;
                    msg.channel.send('Hi')
                })
            }
        }
    }
};