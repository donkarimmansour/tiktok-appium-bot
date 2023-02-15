const inquirer = require('inquirer')
const dotenv = require('dotenv')
const { updateAttributeEnv } = require('../common/helper.js')
dotenv.config()


const List = async (choices = ["start", `settings`, "clear"]) => {
    return await inquirer.prompt({ name: `list`, type: `list`, message: `choose`, choices })
}

const Confirm = async () => {
    return await (await inquirer.prompt({ name: `end`, type: `confirm`, message: `confirm` })).end
}

const Start = async () => {
    return await (await inquirer.prompt({ name: `start`, type: `list`, message: `choose`, choices: ["new", "current"] })).start
}

const Current = async () => {
    return await (await inquirer.prompt({ name: `current`, type: `list`, message: `choose`, choices: ["all", "upload", "follow", "edit"] })).current
}


const Settings = async () => {
    const questions = [
        {
            type: 'list', name: 'version', message: `enter version (${process.env.version})`, choices: ["1", "2"],
            default() { return process.env.version },
            filter(value) {
                updateAttributeEnv("version", value)
                return true
            }
        },
        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'list', name: 'type', message: `enter type (${process.env.type})`, choices: ["signup", "login"],
            default() { return process.env.type },
            filter(value) {
                updateAttributeEnv("type", value)
                return true
            }
        },
        /////////////////////////////////////////////////////////////////////////////////////////

        {
            type: 'list', name: 'ip', message: `enter ip (${process.env.ip})`, choices: ["unique", "same"],
            default() { return process.env.ip },
            filter(value) {
                updateAttributeEnv("ip", value)
                return true
            }
        },
        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'list', name: 'vpn', message: `enter vpn (${process.env.vpn})`, choices: ["nordvpn"],
            default() { return process.env.vpn },
            filter(value) {
                updateAttributeEnv("vpn", value)
                return true
            },
        },
        /////////////////////////////////////////////////////////////////////////////////////////

        {
            type: 'input', name: 'RESPONSES_SHEET_ID', message: "enter RESPONSES_SHEET_ID",
            default() { return process.env.RESPONSES_SHEET_ID },
            validate(value) {
                updateAttributeEnv("RESPONSES_SHEET_ID", value)
                return true
            }
        },
        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'input', name: 'CREDENTIALS', message: "enter CREDENTIALS",
            default() { return process.env.CREDENTIALS },
            validate(value) {
                updateAttributeEnv("CREDENTIALS", value)
                return true
            }
        },
        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'input', name: 'nickname', message: "enter nickname",
            default() { return process.env.nickname },
            validate(value) {
                updateAttributeEnv("nickname", value)
                return true
            }
        },

        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'input', name: 'lusername', message: "enter lusername",
            default() { return process.env.lusername },
            validate(value) {
                updateAttributeEnv("lusername", value)
                return true
            }
        },

        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'password', name: 'password', message: "enter password",
            default() { return process.env.password },
            validate(value) {
                updateAttributeEnv("password", value)
                return true
            }
        },

        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'input', name: 'country', message: "enter country",
            default() { return process.env.country },
            validate(value) {
                updateAttributeEnv("country", value)
                return true
            }
        },

        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'input', name: 'motherAccount', message: "enter motherAccount",
            default() { return process.env.motherAccount },
            validate(value) {
                updateAttributeEnv("motherAccount", value)
                return true
            }
        },

        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'editor', name: 'hastages', message: "enter hastages",
            default() { return process.env.hastages },
            validate(value) {
                const hastages = value.split("\n").map(v => v.trim()).join(" ")
                updateAttributeEnv("hastages", `\"${hastages}\"`)
                return true
            }
        },

        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'input', name: 'bio', message: "enter bio",
            default() { return process.env.bio },
            validate(value) {
                updateAttributeEnv("bio", value)
                return true
            }
        },

        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'number', name: 'accountLimit', message: "enter account limit",
            default() { return process.env.accountLimit },
            validate(value) {
                updateAttributeEnv("accountLimit", value)
                return true
            }
        },
         /////////////////////////////////////////////////////////////////////////////////////////
         {
            type: 'number', name: 'uploadLimit', message: "enter upload limit",
            default() { return process.env.uploadLimit },
            validate(value) {
                updateAttributeEnv("uploadLimit", value)
                return true
            }
        },
        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'list', name: 'source', message: `enter source (${process.env.source})`, choices: ["temporary", "33mail"],
            default() { return process.env.source },
            filter(value) {
                updateAttributeEnv("source", value)
                return value
            }
        },
        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'input', name: 'email', message: "enter email",
            default() { return process.env.email },
            validate(value) {
                updateAttributeEnv("email", value)
                return true
            },
            when(answers) { return answers.source === "33mail" }
        },
        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'input', name: 'gmailAccount', message: "enter gmailAccount",
            default() { return process.env.gmailAccount },
            validate(value) {
                updateAttributeEnv("gmailAccount", value)
                return true
            },
            when(answers) { return answers.source === "33mail" }
        },
        /////////////////////////////////////////////////////////////////////////////////////////
        {
            type: 'password', name: 'gmailPassword', message: "enter gmailPassword",
            default() { return process.env.gmailPassword },
            validate(value) {
                updateAttributeEnv("gmailPassword", value)
                return true
            },
            when(answers) { return answers.source === "33mail" }
        },


    ]

    return await inquirer.prompt(questions)
}




module.exports = { List, Settings, Confirm, Start, Current }