import NordVpnOBJ from '../../objects/account/NordVpn.js'
import * as dotenv from 'dotenv' 
dotenv.config()

class NordVpn {

    constructor(country){
       this.country = country
    }

    async ChangeIp() {

        if (process.env.ip === "same" && await (await NordVpnOBJ.conected(this.country)).isDisplayed()) {
            console.log("conected");
            console.log("conected");
            console.log("conected");

            await browser.pause(5000)

        }else {

            let unique = false
            const findCountry = async () => {
                await browser.pause(2000)

                if (((unique && process.env.ip === "unique") || process.env.ip === "same") 
                     && (await NordVpnOBJ.conected(this.country)).isDisplayed()) {
                    console.log("conected");
                    console.log("conected");
                    console.log("conected");
                    
                    await browser.pause(5000)

                } else if (await (await NordVpnOBJ.conecting()).isDisplayed()) {
                    unique = true
                    await findCountry()

                } else if (await (await NordVpnOBJ.conect_err()).isDisplayed()) {
                    await (await NordVpnOBJ.conect_try_again()).click()
                    unique = true
                    await findCountry()

                } else if (await (await NordVpnOBJ.conect_country(this.country)).isDisplayed()) {
                    await (await NordVpnOBJ.conect_country(this.country)).click()
                    unique = true
                    await findCountry()

                } else {
                    await NordVpnOBJ.swape_to_top()
                    unique = true
                    await findCountry()
                }

            }

            await findCountry()

        }
    }

}

export default NordVpn
