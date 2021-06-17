const { Plugin } = require('powercord/entities');
const { post } = require('powercord/http');

// Made by Neppkun#0030
// Huge thanks to Ben855#0855, katlyn#9607, Оocrop#4420 and Samm-Cheese#9500 for helping me while making this plugin <3

module.exports = class shortener extends Plugin {
    startPlugin() {
        powercord.api.commands.registerCommand({
            command: 'tnylnk',
            description: 'Uses the TnyLnk API to shrink URLs',
            usage: '{c}tnylnk <url>',
            executor: this.shorteneris.bind(this)
        });
    }

    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('tnylnk');
    }

    async shorteneris(args) {
        const data = await post(`https://tnylnk.org/?url=${args[0]}`);
        console.log(JSON.parse(data.body))
        return {
            send: true,
            result: `${JSON.parse(data.body).url}`
        };
    }
};