const Discord = require('discord.js')
const commands = require('./commands')
const startEvents = require('./events')

const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
})
client.loona = { commands }

module.exports = {
  startEvents: () => startEvents(client),
  login: (token) => {
    client.login(token)
  },
}
