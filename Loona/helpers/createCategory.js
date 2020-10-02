const { categoryName } = require('../../config.json')

module.exports = (client) => {
    // create Loona category for every server she is in. 
    client.guilds.cache.forEach(server => {
        const channels = server.channels
        const loonaCategory = channels.cache.find(({ type, name }) => type === "category" && name === categoryName)

        if (!loonaCategory) {
            // there is no Loona Category
            server.channels.create("Loona Realm", { type: "category" });
        }
    })
}