import NordVpnOBJ from '../../objects/account/NordVpn.js'
import * as dotenv from 'dotenv' 
dotenv.config()

class NordVpn {
 
    constructor(country){
       this.country = country
    }


    async ChangeIp() {
        
        if ( (process.env.start === "current" || process.env.ip === "same") && await (await NordVpnOBJ.conected(this.country)).isDisplayed()) {
            console.log("conected");
            console.log("conected");
            console.log("conected");

        }if (process.env.ip === "unique" && await (await NordVpnOBJ.conected(this.country)).isDisplayed()) {
           
            await (await NordVpnOBJ.disconnect_btn()).click()
            await browser.pause(3000)

            this.ChangeIp()
            return

        }else {

            const findCountry = async () => {
                await browser.pause(2000)

                if (await (await NordVpnOBJ.conected(this.country)).isDisplayed()) {
                    console.log("conected");
                    console.log("conected");
                    console.log("conected");
                    
                } else if (await (await NordVpnOBJ.conecting()).isDisplayed()) {
                    await findCountry()

                } else if (await (await NordVpnOBJ.conect_err()).isDisplayed()) {
                    await (await NordVpnOBJ.conect_try_again()).click()
                    await findCountry()

                } else if (await (await NordVpnOBJ.conect_country(this.country)).isDisplayed()) {
                    await (await NordVpnOBJ.conect_country(this.country)).click()
                    await findCountry()

                } else {
                    await NordVpnOBJ.swape_to_top()
                    await findCountry()
                }

            }

            await findCountry()

        }
    }

}

export default NordVpn
