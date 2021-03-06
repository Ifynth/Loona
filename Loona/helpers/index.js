const matchOr = (text, terms, index = 0) => {
    if (terms.length === index) return false
    return (
        !!text.match(new RegExp(terms[index], 'i')) || matchOr(text, terms, ++index)
    )
}

const getChannelName = (name) => name.trim().replace(" ", "-").toLocaleLowerCase()

module.exports = { matchOr, getChannelName }
