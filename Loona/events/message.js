module.exports = {
  name: 'message',
  execute(msg) {
    if (msg.split(' ').find((word) => word.toLowerCase().match('loona'))) {
      // const command = "addGameGroup"
      // if(!client.commands.has(command)) return;
      // try {
      //   client.commands.get(command).execute(message, args);
      // } catch (error) {
      //   console.error(error);
      // }
    }
  },
}
