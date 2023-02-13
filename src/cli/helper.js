const figlet = require('figlet')
const gradient = require('gradient-string')
const CLI = require('clui')
const chalk = require('chalk')

const welcome = (text) => {
    const textfiglet = figlet.textSync(text, { font: 'DOS Rebel', horizontalLayout: 'full', width: 100 })
    const textgradient = gradient.cristal(textfiglet)
    console.log(textgradient);
}

const createsASCIIArtFromText = async () => {
    return await figlet.textSync('Boo!', { font: 'Ghost' })
}

const colorizesTheOutput = async (text) => {
    return chalk.blue(text)
}


const drawsCommandLine = async (outputBuffer) => {
    var Line = CLI.Line
    new Line(outputBuffer).column('Title Placehole', 20, [clc.green]).fill().store();
}
  

module.exports = { welcome }
