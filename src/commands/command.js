//#region Export class Command; A wrapper class for commands. Loaded by a <Loader> into a <Registry>.
module.exports = class Command {
    constructor({
        client,
        name = 'command',
        description = 'Command.',
        examples = ['command'],
        permissionLevel = 0
    } = {}) {
        this.client = client;
        this.name = name;
        this.description = description;
        this.examples = examples;
        this.permissionLevel = permissionLevel;
    }

    async call(client, message) {
        // Define shortcuts here:
        message.channel.say = message.channel.send;

        let args = message.args;

        if (this.client.options.roleStack[this.permissionLevel].check(message, client)) {
            await this.run(client, message, args);
        } else {
            await this.notPermitted(client, message, args);
        }
    }
}
//#endregion