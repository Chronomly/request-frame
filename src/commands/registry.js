const Collection = require('discord.js').Collection;
const Command = require('./command.js');

//#region Export class Registry; Holds loaded <Command>s outputed by a <Loader>.
module.exports = class Registry {
    constructor() {
        this.collection = new Collection();
    }

    async push(command) {
        if (command.constructor instanceof Command) {
            // A command object, no need to make a instance.
            commandObject = command;
        } else if (command instanceof Command) {
            // A command class, need to make a instance to get a usable object.
            commandObject = new command();
        } else {
            throw 'Unknown command object/class.';
        }
    }
}
//#endregion