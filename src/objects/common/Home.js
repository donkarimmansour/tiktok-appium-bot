const FunFriends_Popup = '//*[@text="TikTok is more fun with friends. By syncing your phone contacts, you can find and get discovered by people you know."]'
const Accept_Popup = '//*[@text="OK"]'
const FB_Popup = '//*[@text="Give TikTok access to your Facebook friends list and email? This will be used to improve your experience, including connecting you with friends and personalizing your ads.Learn more in the Help Center"]'
const Deny_FB_Popup = '//*[@text="Don\'t allow"]'
const Swape_Dialog = '//*[@text="Swipe up for more"]'
const FollowFriends_Popup = '//*[@text="Follow your friends"]'
const Google_Popup = '//*[@text="Sign back in to TikTok with Google"]'
//const Deny_FollowFriends_Popup = '//*[@resource-id="com.zhiliaoapp.musically:id/asx"]'



class Home {

    async followfriends_Ppopup() {
        return await $(FollowFriends_Popup)
    }

    async deny_followfriends_popup() {
        // return await $(Deny_FollowFriends_Popup)
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
                options: { ms: 1000 }
            },
            {
                action: 'release',
                options: {}
            }
        ])
    }

    async google_popup() {
        return await $(Google_Popup)
    }

    async deny_google_popup() {[929,1351][992,1483]

       await driver.touchPerform([
        {
            action: 'press',
            options: {
                x: 960,
                y: 1420
            }
        },
        {
            action: 'wait',
            options: { ms: 1000 }
        },
        {
            action: 'release',
            options: {}
        }
    ])
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

    async swape_dialog() {
        return await $(Swape_Dialog)
    }

    async swape_up() {

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
                options: { ms: 1000 }
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

export default new Home()
