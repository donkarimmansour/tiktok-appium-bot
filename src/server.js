
const clear = require('clear')
const { welcome } = require('./cli/helper')
const cp = require('child_process')
const { List, Settings, Confirm, Start, Current } = require('./cli/questions')
const appium = require('appium')
const { updateAttributeEnv } = require('./common/helper')
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

        if (start === "New") { }
        else if (start === "Current") {
            const current = await Current()
            updateAttributeEnv("current", current)
        }
        await appium.main({ port: 4723, address: "127.0.0.1" })
        cp.exec('start cmd.exe /K npm run wdio')

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

