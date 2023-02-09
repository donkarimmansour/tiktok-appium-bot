const SearchBtn = '//*[@text="Search"]'
const UserTap = '//*[@text="Users"]' //00000000-0000-0954-ffff-ffff00000337
const FollowBtn = '//*[@text="Follow"]'
const SelectProfile = '//*[@text="Follow"]'
const BackBtn = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.ImageView'
const BackBtn2 = '//*[@resource-id="com.zhiliaoapp.musically:id/a0e"]'

///////////////////////////////////////////////////////////////////////////////////
const SearchBox = '//*[@resource-id="com.zhiliaoapp.musically:id/brw"]'
const SearchIcon = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/X.TxU/android.widget.TabHost/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ImageView[2]'
const FollowSec = '//*[@resource-id="com.zhiliaoapp.musically:id/gah"]'
///////////////////////////////////////////////////////////////////////////////////





class Follower {

    async waitUntilSearchBoxDisplayed() {
        await (await $(SearchBox)).waitForDisplayed()
        if (await (await $(SearchBox)).isDisplayed() && ((await (await $(SearchBox)).getAttribute("focused")))) return true
        return false
    }

    async search_icon() {
        console.log("search_icon : ", $(SearchIcon))

        return await $(SearchIcon)
    }

    async search_box(){
        console.log("search_box : " , $(SearchBox))

        return await $(SearchBox)
    }

    async search_btn(){
        console.log("search_btn : " , $(SearchBtn))

        return await $(SearchBtn)
    }

    async user_tap(){
        console.log("user_tap : " , $(UserTap))

        return await $(UserTap) 
    }

    async follow_sec(){
        console.log("follow_sec : " , $(FollowSec))

        return await $(FollowSec)
    }

    async follow_btn(){
        console.log("follow_btn : " , $(FollowBtn))

        return await $(FollowBtn)
    }

    async select_profile(){
        console.log("select_profile : " , $(SelectProfile))

        return await $(SelectProfile)
    }

    async back_btn(){
        console.log("back_btn : " , $(BackBtn))

        return await $(BackBtn)
    }

    
    async back_btn2(){
        console.log("back_btn2 : " , $(BackBtn2))

        return await $(BackBtn2)
    }

}

export default new Follower()