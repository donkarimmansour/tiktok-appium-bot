const Upload_Page = '//*[@text="Add sound"]'
const Select_Page = '//*[@text="All"]'
const Text_Page = '//*[@text="Allow comments"]'
const Upload_Btn = '//*[@text="Upload"]'
const Feature_Popup = '//*[@text="Adjust clips feature enhanced"]'
const Minutes_Popup = '//*[@text="Introducing 10 minutes video"]'
const ViewFriends_Popup = '//*[@text="View your friends\' posts"]'
const Accept_Popup = '//*[@text="OK"]'
const Save_BTN = '//*[@text="Next"]'
const Video_Tap = '//*[@text="Videos"]'
const textArea = '//*[@text="Describe your post, add hashtags, or mention creators that inspired you"]'
const Option = '//*[@text="More options"]'
const Switch = '//*[@text="Save to device"]'
const Post_BTN = '(//*[@text="Post"])[last()]'
const isUploding = '//*[contains(@text,"%")]'

////////////////////////////////////////////////////////////////////////////////
const Option_Close = '//*[@resource-id="com.zhiliaoapp.musically:id/a0_"]'
const Video_Select = '//*[@resource-id="com.zhiliaoapp.musically:id/e8m"]'
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

    async option_close() {
        return await $(Option_Close)
    }

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


}

export default new Uploader()
