import SplashOBJ from '../../objects/account/Splash'

class Splash {

    async Init() {

        await browser.pause(3000)
        
        if (await SplashOBJ.waitUntiCategoriesDisplayed()) {
            await (await SplashOBJ.skip_btn()).click()

            if (await SplashOBJ.waitUntilSwapeDisplayed()) {
                await (await SplashOBJ.start_btn()).click() 

                await browser.pause(3000)

                if (await (await SplashOBJ.swape_dialog()).isDisplayed()) {
                    await SplashOBJ.swape_up()
                }

            }//waitUntiCategoriesDisplayed

        }//waitUntiCategoriesDisplayed


        return this;
    }

}

export default Splash
