import NordVpnOBJ from '../../objects/account/NordVpn'

class NordVpn {

    constructor(country){
       this.country = country
    }

    async ChangeIp() {

        if (await (await NordVpnOBJ.conected(this.country)).isDisplayed()) {
            console.log("conected");
            console.log("conected");
            console.log("conected");
            console.log("conected");

            await browser.pause(5000)

        }else {

            const findCountry = async () => {
                await browser.pause(2000)

                if (await (await NordVpnOBJ.conected(this.country)).isDisplayed()) {
                    await browser.pause(5000)

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
