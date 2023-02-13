const FunFriends_Popup = '//*[@text="TikTok is more fun with friends. By syncing your phone contacts, you can find and get discovered by people you know."]'
const Accept_Popup = '//*[@text="OK"]'
const FB_Popup = '//*[@text="Give TikTok access to your Facebook friends list and email? This will be used to improve your experience, including connecting you with friends and personalizing your ads.Learn more in the Help Center"]'
const Deny_FB_Popup = '//*[@text="Don\'t allow"]'
const Deny_FollowFriends_Popup = '//*[@resource-id="com.zhiliaoapp.musically:id/asx"]'

//const FollowFriends_Popup = '//*[@text=Follow your friends"]'

class Home {

    async followfriends_Ppopup() {
        //return await $(FollowFriends_Popup)
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: 950,
                    y: 444
                }
            },
            {
                action: 'wait',
                options: {ms: 1000}
            },
            {
                action: 'release',
                options: {}
            }
        ])

    }

    async deny_followfriends_popup() {
        return await $(Deny_FollowFriends_Popup)
    }

    async accept_popup() {
        return await $(Accept_Popup)
    }

    async funfriends_popup() {
        return await $(FunFriends_Popup)
    }

    async fb_popup() {
        return await $(FB_Popup)
    }

    async deny_fb_popup() {
        return await $(Deny_FB_Popup)
    }

}

export default new Home()
