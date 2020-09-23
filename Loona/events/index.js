const fs = require('fs')

const events = fs
  .readdirSync('./Loona/events')
  .filter((file) => file.endsWith('.js') && file !== 'index.js')

const startEvents = (client) => {

  for(const file of events) {
    const event = require(`./${file}`)
    client.on(event.name, event.execute)
  }
}

module.exports = startEvents
