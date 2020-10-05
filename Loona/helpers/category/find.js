const { categoryName } = require('../../../config.json')

// Check if the server got a Looner Category and return the Category
module.exports = (server) => {
  return server.channels.cache.find(
    ({ type, name }) => type === 'category' && name === categoryName
  )
}
