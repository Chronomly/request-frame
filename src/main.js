const Client = require('discord.js').Client;

//#region Export class RequestFrame; The main class of this framework.
module.exports = class RequestFrame extends Client {
    constructor(options = {
        discordJSOptions
    }) {
        super(discordJSOptions);
    }

}
//#endregion