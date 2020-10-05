module.exports = {
  name: 'deleteAllBotMessages',
  description: 'Delete all Messages in this channel.',
  command: { Delete: ['delete', 'lösche'], Messages: ['message', 'nachricht'] },
  execute(client, message) {
    console.log('call deleteAllBotMessages')

    // delete all messages
    message.channel.messages.fetch().then((messages) => {
      for (var [key, value] of messages) {
        if (value.author.id === client.user.id) {
          value.delete()
        }
      }
    })
  },
}
