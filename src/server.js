
const clear = require('clear')
const { welcome } = require('./cli/helper')
const cp = require('child_process')
const { List, Settings, Confirm, Start, Current } = require('./cli/questions')
const appium = require('appium')
const { updateAttributeEnv } = require('./common/helper')
const dotenv = require('dotenv')
dotenv.config()

// const clui = require('clui')
// const chalk = require('chalk')

welcome("tiktok bot")

const main = async choose => {

    if (choose?.list === "settings") {
        await Settings()

        clear()
        choose = await List()
        await main(choose)
    } else if (choose?.list === "clear") {
        clear()
        welcome("tiktok bot")
        choose = await List()
        await main(choose)
    } else if (choose?.list === "start") {
          
        const start = await Start()
        updateAttributeEnv("start", start)

        if (start === "new") { }
        else if (start === "current") {
            const current = await Current()
            updateAttributeEnv("current", current)
        }
        a//wait appium.main({ port: 4723, address: "127.0.0.1" })

        if(process.env.version == 1){
             cp.exec('start cmd.exe /K appium --address 127.0.0.1 --port 4723  && npm run v1')

            //cp.exec('npm run v1')
        }else if(process.env.version == 2){
            cp.exec('start cmd.exe /K appium --address 127.0.0.1 --port 4723  && npm run v2')

            //cp.exec('npm run v2')
        }

        //cp.exec('start cmd.exe /K appium --address 127.0.0.1 --port 4723  && npm run wdio')

        clear()
        choose = await List(["end" , "clear"])
        await main(choose)

    } else if (choose?.list === "end") {
         const confirm =  await Confirm()//.end

        if(confirm){
            cp.exec('npx kill-port 4723')
            clear()
            choose = await List()
            await main(choose)
        } else{

            clear()
            choose = await List(["end" , "clear"])
            await main(choose)
        }
        
    }

}


List().then(choose => {
    main(choose)
})

