const Cap_Wrapper = '//*[@text="Verify to continue:"]'
const Cap_Slide = '//*[@text="Drag the puzzle piece into place"]' 
const Cap_Rotate = '//*[@text="Drag the slider to fit the puzzle"]' 
const Cap_Select = '//*[@text="Select 2 objects that are the same shape:"]' 


class Captcha {

    async waitUntilWrapperDisplayed(){
        await (await $(Cap_Wrapper)).waitForDisplayed()
        if (await (await $(Cap_Wrapper)).isDisplayed()) return true
        return false
    }

    async cap_slide(){
        return await $(Cap_Slide)
    }

    async cap_rotate(){
        return await $(Cap_Rotate)
    }

    async cap_select(){
        return await $(Cap_Select) 
    }

}

export default new Captcha()
