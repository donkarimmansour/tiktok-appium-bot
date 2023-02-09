const Per_Con_Message = '//*[@text="Allow TikTok to access your contacts?"]'
const Per_Ved_Message = '//*[@text="Allow TikTok to take pictures and record video?"]'
const Per_Aud_Message = '//*[@text="Allow TikTok to record audio?"]'
const Per_Img_Message = '//*[@text="Allow TikTok to access photos, media, and files on your device?"]'
const Per_Allow = '//*[@text="Allow"]'
const Per_Deny = '//*[@text="Deny"]'

class Permission {

    async waitUntilConMessageDisplayed() {
        await (await $(Per_Con_Message)).waitForDisplayed()
        if (await (await $(Per_Con_Message)).isDisplayed()) return true
        return false
    }

    async waitUntilVedMessageDisplayed() {
        await (await $(Per_Ved_Message)).waitForDisplayed()
        if (await (await $(Per_Ved_Message)).isDisplayed()) return true
        return false
    }

    async waitUntilAudMessageDisplayed() {
        await (await $(Per_Aud_Message)).waitForDisplayed()
        if (await (await $(Per_Aud_Message)).isDisplayed()) return true
        return false
    }

    async waitUntilImgMessageDisplayed() {
        await (await $(Per_Img_Message)).waitForDisplayed()
        if (await (await $(Per_Img_Message)).isDisplayed()) return true
        return false
    }

    async per_allow() {
        return await $(Per_Allow)
    }

    async per_deny() {
        return await $(Per_Deny)
    }


}

export default new Permission()
