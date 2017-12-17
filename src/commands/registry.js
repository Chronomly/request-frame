const Collection = require('discord.js').Collection;
const Command = require('./command.js');

//#region Export class Registry; Holds loaded commands outputed by a <Loader>
module.exports = class Registry {
    constructor() {
        this.collection = new Collection();
    }

    async push(command) {
        if (command instanceof Command) {
            command = new command();
        }
    }
}
//#endregion