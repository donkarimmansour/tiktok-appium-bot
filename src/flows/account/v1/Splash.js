import SplashOBJ from '../../../objects/account/Splash'

class Splash {

    async Init() {

        await browser.pause(1000)
        
        if (await (await SplashOBJ.dialog()).isDisplayed()) {
            await (await SplashOBJ.dialog()).click()
        }
       
        if (await SplashOBJ.waitUntiCategoriesDisplayed()) { 
            await (await SplashOBJ.skip_btn()).click()

            if (await SplashOBJ.waitUntilSwapeDisplayed()) {
                await (await SplashOBJ.start_btn()).click()

                await browser.pause(3000)
                
                let counter = 1

                const checkSlider = async () => {
                    if (counter >= 5) {
                      return
                    } else if (await (await SplashOBJ.swape_dialog()).isDisplayed()) {
                        await SplashOBJ.swape_up()
                    } else {
                        counter++
                        await browser.pause(3000)
                        await checkSlider()
                    }
                }

                await checkSlider()

            }//waitUntiCategoriesDisplayed

        }//waitUntiCategoriesDisplayed


        return this;
    }

}

export default Splash
