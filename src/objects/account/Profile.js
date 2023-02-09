const Edit_BTN = '//*[@text="Edit profile"]'
const Setup_BTN = '//*[@text="Set up profile"]'
const Bio_BTN = '//*[@text="Bio"]'
const Save_BTN = '//*[@text="Save"]'
const Galary_BTN = '//*[@text="Select from Gallery"]'
const Image_Confirm = '//*[@text="Confirm"]'
const Image_BTN_Back = '//*[@text="Back"]'
const Image_Save = '//*[@text="Save"]'
const Profile_Page = '//*[@text="Upload"]'
const Back_BTN = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.ImageView'

////////////////////////////////////////////////////////////////////////////////////////////
const Image_Check = '//*[@resource-id="com.zhiliaoapp.musically:id/am8"]'
const Bio_TextBox = '//*[@resource-id="com.zhiliaoapp.musically:id/brp"]'
const Image_BTN = '//*[@resource-id="com.zhiliaoapp.musically:id/cjo"]'
const Image_Select = '//*[@resource-id="com.zhiliaoapp.musically:id/e8k"]'
////////////////////////////////////////////////////////////////////////////////////////////

//const Image_Back = '//*[@resource-id="android.widget.ImageButton[@content-desc="‎‏‎‎‎‎‎‏‎‏‏‏‎‎‎‎‎‏‎‎‏‎‎‎‎‏‏‏‏‏‎‏‏‎‏‏‎‎‎‎‏‏‏‏‏‏‏‎‏‏‏‏‏‎‏‎‎‏‏‎‏‎‎‎‎‎‏‏‏‎‏‎‎‎‎‎‏‏‎‏‏‎‎‏‎‏‎‏‏‏‏‏‎‎Navigate up‎‏‎‎‏‎"]"]'
// const Following = '//*[@resource-id="com.zhiliaoapp.musically:id/c7l"]'
// const Count = '//*[@resource-id="com.zhiliaoapp.musically:id/c7k"]'


class Profile {

  async  waitUntilProfileDisplayed(){
        await (await $(Profile_Page)).waitForDisplayed()
        if (await (await $(Profile_Page)).isDisplayed()) return true
        return false
    }

   async waitUntilBioDisplayed(){
        await (await $(Bio_TextBox)).waitForDisplayed()
        if (await (await $(Bio_TextBox)).isDisplayed()) return true
        return false
    }

    async waitUntilImageDisplayed(){
        await (await $(Image_BTN)).waitForDisplayed()
        if (await (await $(Image_BTN)).isDisplayed()) return true
        return false
    }


    // async following(){
    //     console.log("following : " , $(Following))

    //     return await $(Following)
    // }

    // async count(){
    //     console.log("count : " , $(Count))

    //     return await $(Count)
    // }

    async edit_btn(){
        return await $(Edit_BTN) 
    }


    async setup_btn(){
        return await $(Setup_BTN) 
    }


    async bio_btn(){
        return await $(Bio_BTN)
    }

    async bio_textBox(){
        return await $(Bio_TextBox)
    }
 
    async save_btn(){
        return await $(Save_BTN)
    }

    async image_btn(){
        return await $(Image_BTN)
    }

    async galary_btn(){
        return await $(Galary_BTN)
    }

    async back_btn(){
        return await $(Back_BTN)
    }

    
    // async image_back(){
    //     console.log("back_btn : " , $(Image_Back))

    //     return await $(Image_Back)
    // }


    
    async image_select(){
        return await $(Image_Select)
    }


    
    async image_confirm(){
        return await $(Image_Confirm)
    }


     
    async image_btn_back(){
        return await $(Image_BTN_Back)
    }

    async image_check(){
        return await $(Image_Check)
    }

    async image_save(){
        return await $(Image_Save)
    }

}

export default new Profile()
