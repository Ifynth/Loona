const Loona = require('./Loona')
const { token } = require('./config.json')

Loona.startEvents();
Loona.login(token)