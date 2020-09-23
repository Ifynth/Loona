const fs = require('fs')
const Discord = require('discord.js')

const commands = new Discord.Collection()

const commandFiles = fs
  .readdirSync('./Loona/commands')
  .filter((file) => file.endsWith('.js') && file !== 'index.js')

for (const file of commandFiles) {
  const command = require(`./${file}`)
  commands.set(command.name, command)
}

module.exports = commands
