const figlet = require('figlet')
const gradient = require('gradient-string')

const welcome = (text) => {
    const textfiglet = figlet.textSync(text, { font: 'DOS Rebel', horizontalLayout: 'full', width: 100 })
    const textgradient = gradient.cristal(textfiglet)
    console.log(textgradient)
}

module.exports = { welcome }
