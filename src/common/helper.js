const { GoogleSpreadsheet } = require('google-spreadsheet')
const fs = require('fs')
const figlet = require('figlet')
const gradient = require('gradient-string')
const dotenv = require('dotenv')
dotenv.config()

// const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

// function randomInteger(min = 1, max = 999) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }


// function makeHashtag(str) {
//     let wordArray = str.split(' ').filter(char => char !== "")
//     let result = "#"

//     if (wordArray.length === 0) {
//         return false
//     }

//     result = result + wordArray.map(word => {
//         let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
//         return capitalizedWord
//     }).join('')

//     if (result.length > 140) {
//         return false
//     } else {
//         return result
//     }
// }


// const deleteRow = async (keyValue, thisValue) => {

    
//     // spreadsheet key is the long id in the sheets URL
//     const RESPONSES_SHEET_ID = process.env.RESPONSES_SHEET_ID
//     // Create a new document
//     const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID)
//     const CREDENTIALS = JSON.parse(fs.readFileSync(process.env.CREDENTIALS))


//     // use service account creds
//     await doc.useServiceAccountAuth({
//         client_email: CREDENTIALS.client_email,
//         private_key: CREDENTIALS.private_key
//     })

//     await doc.loadInfo()

//     // Index of the sheet
//     let sheet = doc.sheetsByIndex[0]

//     let rows = await sheet.getRows()

//     for (let index = 0 index < rows.length index++) {
//         const row = rows[index]
//         if (row[keyValue] === thisValue) {
//             await rows[index].delete()
//             break
//         }
//     }
// }


const addRow = async (row) => {

    
    // spreadsheet key is the long id in the sheets URL
    const RESPONSES_SHEET_ID = process.env.RESPONSES_SHEET_ID
    // Create a new document
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID)
    const CREDENTIALS = JSON.parse(fs.readFileSync(process.env.CREDENTIALS))

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    })

    await doc.loadInfo()

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0]
    
    await sheet.addRow(row)

}

const getRow = async () => {

    // spreadsheet key is the long id in the sheets URL
    const RESPONSES_SHEET_ID = process.env.RESPONSES_SHEET_ID
    // Create a new document
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID)
    const CREDENTIALS = JSON.parse(fs.readFileSync(process.env.CREDENTIALS))


    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    })

    // load the documents info
    await doc.loadInfo()

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0]

    // Get all the rows
    let rows = await sheet.getRows()

    const row = {}

    for (let index = 0 ; index < rows.length ; index++) {
        if (rows[index]["used"] !== "yes") {
            row = rows[index]
            break
        }

    }

    return row

}

const updateRow = async (id) => {


    // spreadsheet key is the long id in the sheets URL
    const RESPONSES_SHEET_ID = process.env.RESPONSES_SHEET_ID
    // Create a new document
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID)
    const CREDENTIALS = JSON.parse(fs.readFileSync(process.env.CREDENTIALS))


    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    })

    await doc.loadInfo()

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0]

    let rows = await sheet.getRows()

    for (let index = 0 ; index < rows.length ; index++) {
        const row = rows[index]
        if (row["id"] === id) {
            rows[index]["used"] = "yes"
            await rows[index].save()
            break
        }

    }

}




const updateAttributeEnv = function (attrName, newVal) {
    var dataArray = fs.readFileSync(".env", 'utf8').split('\n')

    var replacedArray = dataArray.map((line) => {
        if (line.split('=')[0] == attrName) {
            return attrName + "=" + String(newVal)
        } else {
            return line
        }
    })

     fs.writeFileSync(".env", "")
    for (let i = 0 ; i  < replacedArray.length ; i++) {
        fs.appendFileSync(".env", replacedArray[i] + "\n")
    }
}

// sleep, randomInteger  , deleteRow 

module.exports =  {addRow , getRow  , updateRow, updateAttributeEnv }
