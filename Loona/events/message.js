const { matchOr } = require("../helpers")

const executeCommands = (client, message) => {
  const { content } = message
  const commands = []

  for (const attr of client.loona.commands.values()) {
    const { name, command } = attr
    var connectTerms = true

    for (const [searchTerm, terms] of Object.entries(command)) {
      connectTerms = connectTerms && matchOr(content, terms)
    }

    if (connectTerms) commands.push(name)
  }

  console.log('Auszuführende Befehle: ', commands)

  // call all commands
  commands.map((name) => {
    if (!client.loona.commands.has(name)) return

    try {
      client.loona.commands.get(name).execute(client, message)
    } catch (error) {
      console.error(error)
    }
  })
}

module.exports = {
  name: 'message',
  execute(message) {
    const { content } = message

    // check if loona is mentioned (no need on direkt message) and don't react on self-post
    if ((!content.match(/Loona/i) && message.channel.type !== 'dm') || message.author.id === this.user.id) return

    executeCommands(this, message);
  },
}
