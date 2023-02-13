const HOME_ICON = '//*[@text="Home"]'
const PROFILE_ICON = '//*[@text="Profile"]'
const Home = '//*[@text="For You"]'
const DISCOVER_ICON = '//*[@text="Friends"]' //Friends//Now//discover //00000000-0000-0757-ffff-ffff00000038
const UPLOAD_ICON = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/*/android.widget.TabHost/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[3]/android.widget.ImageView'

class NavBar {

    async wait_until_home_displayed() {
        await (await $(Home)).waitForDisplayed()
        if (await (await $(Home)).isDisplayed()) return true
        return false
    }

    async home_icon() {
        return await $(HOME_ICON)
    }

    async discover_icon() {
        return await $(DISCOVER_ICON)
    }

    async profile_icon() {
        return await $(PROFILE_ICON)
    }

    async upload_icon() {
        return await $(UPLOAD_ICON)
    }



}
export default new NavBar()
