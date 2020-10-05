const { category } = require('../helpers')

module.exports = {
  name: 'ready',
  execute() {
    const client = this
    console.log(`${client.user.username} ist ready!`)

    // create for every server a Loona category
    client.guilds.cache.forEach((server) => {
      category.create(server)
    })
  },
}
