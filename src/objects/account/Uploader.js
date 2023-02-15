const Upload_Page = '//*[@text="Add sound"]'
const Select_Page = '//*[@text="All"]'
const Text_Page = '//*[@text="Allow comments"]'
const Upload_Btn = '//*[@text="Upload"]'
const Feature_Popup = '//*[@text="Adjust clips feature enhanced"]'
const Minutes_Popup = '//*[@text="Introducing 10 minutes video"]'
const ViewFriends_Popup = '//*[@text="View your friends\' posts"]'
const Publicly_Popup = '//*[@text="Post video publicly?"]'
const Publicly_BTN = '//*[@text="Post Now"]'
const Accept_Popup = '//*[@text="OK"]'
const Save_BTN = '//*[@text="Next"]'
const Video_Tap = '//*[@text="Videos"]'
const textArea = '//*[@text="Describe your post, add hashtags, or mention creators that inspired you"]'
const Option = '//*[@text="More options"]'
const Switch = '//*[@text="Save to device"]'
const Switch_BTN = '//*[@text="Save to device"]/following-sibling::android.widget.FrameLayout/android.widget.Switch[@text="‎‏‎‎‎‎‎‏‎‏‏‏‎‎‎‎‎‏‎‎‏‎‎‎‎‏‏‏‏‎‎‏‏‏‎‏‎‏‏‏‎‎‏‎‏‏‎‏‎‏‏‎‏‎‏‏‎‎‏‎‏‏‎‎‏‏‎‎‎‏‏‎‎‎‎‏‏‏‎‏‎‎‎‎‎‏‎‎‏‎OFF‎‏‎‎‏‎"]'
const Post_BTN = '(//*[@text="Post"])[last()]'
const isUploding = '//*[contains(@text,"%")]'
const Video_Select = '//*[@index="0"]/android.view.View'

//ON‎‏‎‎‏‎ != ON


////////////////////////////////////////////////////////////////////////////////
//const Option_Close = '//*[@resource-id="com.zhiliaoapp.musically:id/dgd"]'
////////////////////////////////////////////////////////////////////////////////


class Uploader {

    async waitUntilUploadDisplayed() {
        await (await $(Upload_Page)).waitForDisplayed()
        if (await (await $(Upload_Page)).isDisplayed()) return true
        return false
    }

    async waitUntilSelectDisplayed() {
        await (await $(Select_Page)).waitForDisplayed()
        if (await (await $(Select_Page)).isDisplayed()) return true
        return false
    }


    async waitUntilTextDisplayed() {
        await (await $(Text_Page)).waitForDisplayed()
        if (await (await $(Text_Page)).isDisplayed()) return true
        return false
    }

    async waitUntilSwitchDisplayed() {
        await (await $(Switch)).waitForDisplayed()
        if (await (await $(Switch)).isDisplayed()) return true
        return false
    }


    async textarea() {
        return await $(textArea)
    }

    async option() {
        return await $(Option)
    }

    async switch() {
        return await $(Switch)
    }

    async switch_btn() {
        return await $(Switch_BTN)
    }

    // async option_close() {
    //     return await $(Option_Close)
    // }

    async save_btn() {
        return await $(Save_BTN)
    } 

    async isUploding() {
        return await $(isUploding)
    }

    async upload_btn() {
        return await $(Upload_Btn)
    }

    async feature_popup() {
        return await $(Feature_Popup)
    }

    async minutes_popup() {
        return await $(Minutes_Popup)
    }

    async accept_popup() {
        return await $(Accept_Popup)
    }

    async viewfriends_popup() {
        return await $(ViewFriends_Popup)
    }

    async video_tap() {
        return await $(Video_Tap)
    }

    async post_btn() {
        return await $(Post_BTN)
    }

    async video_select() {
        return await $(Video_Select)
    }


    async publicly_popup() {
        return await $(Publicly_Popup)
    }

    
    async publicly_btn() {
        return await $(Publicly_BTN)
    }
    
    
    async swape_to_top() {
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: 500,
                    y: 1500
                }
            },
            {
                action: 'wait',
                options: { ms: 500 }
            },
            {
                action: 'moveTo',
                options: {
                    x: 500,
                    y: 200
                }
            },
            {
                action: 'release',
                options: {}
            }
        ])

    }



}

export default new Uploader()
