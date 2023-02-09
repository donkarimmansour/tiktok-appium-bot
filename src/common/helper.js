import { GoogleSpreadsheet } from 'google-spreadsheet'
import fs from 'fs'
import * as dotenv from 'dotenv'
dotenv.config()

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

function randomInteger(min = 1, max = 999) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function makeHashtag(str) {
    let wordArray = str.split(' ').filter(char => char !== "");
    let result = "#";

    if (wordArray.length === 0) {
        return false;
    };

    result = result + wordArray.map(word => {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        return capitalizedWord;
    }).join('');

    if (result.length > 140) {
        return false;
    } else {
        return result;
    };
};



const addRow = async (row) => {

    
    // spreadsheet key is the long id in the sheets URL
    const RESPONSES_SHEET_ID = process.env.RESPONSES_SHEET_ID;
    // Create a new document
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    const CREDENTIALS = JSON.parse(fs.readFileSync(process.env.CREDENTIALS));

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];
    
    await sheet.addRow(row);

    // for (let index = 0; index < rows.length; index++) {
    //     const row = rows[index];
    //     await sheet.addRow(row);
    // }
};

const getRow = async (email) => {

    // spreadsheet key is the long id in the sheets URL
    const RESPONSES_SHEET_ID = process.env.RESPONSES_SHEET_ID;
    // Create a new document
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    const CREDENTIALS = JSON.parse(fs.readFileSync(process.env.CREDENTIALS));


    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    // Get all the rows
    let rows = await sheet.getRows();

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        if (row.email == email) {
            console.log(row.user_name);
            console.log(row.password);
        }
    };
};

const updateRow = async (keyValue, oldValue, newValue) => {


    // spreadsheet key is the long id in the sheets URL
    const RESPONSES_SHEET_ID = process.env.RESPONSES_SHEET_ID;
    // Create a new document
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    const CREDENTIALS = JSON.parse(fs.readFileSync(process.env.CREDENTIALS));


    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    let rows = await sheet.getRows();

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        if (row[keyValue] === oldValue) {
            rows[index][keyValue] = newValue;
            await rows[index].save();
            break;
        }
    };
};


const deleteRow = async (keyValue, thisValue) => {

    
    // spreadsheet key is the long id in the sheets URL
    const RESPONSES_SHEET_ID = process.env.RESPONSES_SHEET_ID;
    // Create a new document
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    const CREDENTIALS = JSON.parse(fs.readFileSync(process.env.CREDENTIALS));


    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    let rows = await sheet.getRows();

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        if (row[keyValue] === thisValue) {
            await rows[index].delete();
            break;
        }
    };
};


// let rows = [{
//     email: 'email@email.com',
//     user_name: 'ramesh',
//     password: 'abcd@1234'
// }, {
//     email: 'email@gmail.com',
//     user_name: 'dilip',
//     password: 'abcd@1234'
// }];

//await addRow(rows);

//await updateRow('email', 'email@gmail.com', 'ramesh@ramesh.com')

//await deleteRow('email', 'ramesh@ramesh.com')

// const list = await getRow('email@email.com')

// console.log(list);

export { sleep, randomInteger , addRow , getRow  , updateRow , deleteRow }
