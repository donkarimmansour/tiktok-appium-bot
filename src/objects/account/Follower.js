const SearchBtn = '//*[@text="Search"]'
const UserTap = '//*[@text="Users"]' //00000000-0000-0954-ffff-ffff00000337
const FollowBtn = '//*[@text="Follow"]'
const SelectProfile = '//*[@text="Follow"]'
const SearchBox = '//*/android.widget.EditText'
const SearchIcon = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/*/android.widget.TabHost/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ImageView[2]'
const FollowSec = '//*/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.RelativeLayout'

///////////////////////////////////////////////////////////////////////////////////
// const BackBtn = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.ImageView'
// const BackBtn2 = '//*[@resource-id="com.zhiliaoapp.musically:id/a0e"]'
///////////////////////////////////////////////////////////////////////////////////


class Follower {

    async waitUntilSearchBoxDisplayed() {
        await (await $(SearchBox)).waitForDisplayed()
        if (await (await $(SearchBox)).isDisplayed() && ((await (await $(SearchBox)).getAttribute("focused")))) return true
        return false
    }

    async search_icon() {
        return await $(SearchIcon)
    }

    async search_box(){
        return await $(SearchBox)
    }

    async search_btn(){
        return await $(SearchBtn)
    }

    async user_tap(){
        return await $(UserTap) 
    }

    async follow_sec(){
        return await $(FollowSec)
    }

    async follow_btn(){
        return await $(FollowBtn)
    }

    async select_profile(){
        return await $(SelectProfile)
    }

    // async back_btn(){
    //     return await $(BackBtn)
    // }

    
    // async back_btn2(){
    //     return await $(BackBtn2)
    // }

}

export default new Follower()
