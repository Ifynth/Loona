const { createCategory } = require('../helpers')

module.exports = {
  name: 'ready',
  execute() {
    console.log(`${this.user.username} ist ready!`)

    createCategory(this);
  },
}
