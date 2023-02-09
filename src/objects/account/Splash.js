const Dialog = '//*[@text="Agree and continue"]'
const Categories_Page = '//*[@text="Choose your interests"]'
const Skip_BTN = '//*[@text="Skip"]'
const Swape_PAGE = '//*[@text="Swipe up"]'
const Start_BTN = '//*[@text="Start watching"]'
const Swape_Dialog = '//*[@text="Swipe up for more"]'
// const DIALOG_PAGE = '//*[@text="..."]'
// const CLOSE_BTN = '//*[@text="..."]'
// const TELE_PAGE = '//*[@text="..."]'
// const NO_BTN = '//*[@text="..."]'



class Splash {
    async  waitUntiCategoriesDisplayed(){
        await (await $(Categories_Page)).waitForDisplayed()
        if (await (await $(Categories_Page)).isDisplayed()) return true
        return false
    }

    async  waitUntilSwapeDisplayed(){
        await (await $(Swape_PAGE)).waitForDisplayed()
        if (await (await $(Swape_PAGE)).isDisplayed()) return true
        return false
    }
  

    async dialog(){
        return await $(Dialog)
    }

    async skip_btn(){
        return await $(Skip_BTN)
    }

    async start_btn(){
        return await $(Start_BTN)
    }

    async swape_dialog(){
        return await $(Swape_Dialog)
    }

    async swape_up(){

        await driver.touchPerform([
                {
                    action: 'press',
                    options: {
                        x: 500,
                        y: 1700
                    }
                },
                {
                    action: 'wait',
                    options: {ms: 1000}
                },
                {
                    action: 'moveTo',
                    options: {
                        x: 500,
                        y: 300
                    }
                },
                {
                    action: 'release',
                    options: {}
                }
            ])

    }


}
export default new Splash()
