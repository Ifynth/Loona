const { categoryName, gameName } = require('../../config.json')

module.exports = {
  name: 'ready',
  execute() {
    const client = this
    console.log(`${client.user.username} ist ready!`)

    // create for every server a Loona category
    client.guilds.cache.forEach((server) => {
      // check if Channel already exist
      if (
        !server.channels.cache.find(
          ({ type, name }) => type === 'category' && name === categoryName
        )
      ) {
        console.log("Create Loona Channel on Server " + server.name)
        server.channels
          .create(categoryName, { type: 'category' })
          .then((category) => {
            server.channels.create(gameName, { type: 'text', parent: category })
          })
      }
    })
  },
}
