const { matchOr } = require('../helpers')

module.exports = {
  name: 'message',
  execute(message) {
    const { content } = message

    // Direkt Message
    if (message.channel.type === 'dm' && message.author.id !== this.user.id) {
      const commands = []

      for (const attr of this.loona.commands.values()) {
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
        if (!this.loona.commands.has(name)) return

        try {
          this.loona.commands.get(name).execute(this, message)
        } catch (error) {
          console.error(error)
        }
      })
    }

    // check if loona is mentioned (no need on direkt message)
    if (!content.match(/Loona/i)) return
  },
}
