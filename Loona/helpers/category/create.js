const find = require('./find')
const { categoryName } = require('../../../config.json')

// create a category for Loona
module.exports = (server) => {
  const category = find(server)
  if (!category) {
    return server.channels.create(categoryName, { type: 'category' })
  }
  return category
}
