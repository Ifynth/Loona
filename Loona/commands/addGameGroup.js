module.exports = {
  name: 'addGameGroup',
  description:
    'Post a message, so people can react to it to get added to game group',
  command: { Add: ['add', 'füge', 'hinzu', 'dazu'], Game: ['spiel', 'game'] },
  execute(client, message) {
    console.log('call addGameGroup')
  },
}
