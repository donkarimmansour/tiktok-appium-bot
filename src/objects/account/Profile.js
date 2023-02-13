const Edit_BTN = '//*[@text="Edit profile"] | //*[@text="Set up profile"]' //'//*[@text="Edit profile"]'
const Bio_BTN = '//*[@text="Bio"]'
const Save_BTN = '//*[@text="Save"]'
const Galary_BTN = '//*[@text="Select from Gallery"]'
const Image_Confirm = '//*[@text="Confirm"]'
const Image_BTN_Back = '//*[@text="Back"]'
const Image_Save = '//*[@text="Save"]'
const Profile_Page = '//*[@text="Upload"]'
const Image_Check = '//*[@index="0"]/android.view.View'
const Bio_TextBox = '//*/android.widget.EditText'
const Image_Select = '//*[@index="0"]/android.widget.ImageView'
const Image_BTN = '//*[@text="Change photo"]/preceding-sibling::android.widget.FrameLayout'

////////////////////////////////////////////////////////////////////////////////////////////
//const Setup_BTN = '//*[@text="Set up profile"]'
//const Back_BTN = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.ImageView'
//const Image_Back = '//*[@resource-id="android.widget.ImageButton[@content-desc="‎‏‎‎‎‎‎‏‎‏‏‏‎‎‎‎‎‏‎‎‏‎‎‎‎‏‏‏‏‏‎‏‏‎‏‏‎‎‎‎‏‏‏‏‏‏‏‎‏‏‏‏‏‎‏‎‎‏‏‎‏‎‎‎‎‎‏‏‏‎‏‎‎‎‎‎‏‏‎‏‏‎‎‏‎‏‎‏‏‏‏‏‎‎Navigate up‎‏‎‎‏‎"]"]'
// const Following = '//*[@resource-id="com.zhiliaoapp.musically:id/c7l"]'
// const Count = '//*[@resource-id="com.zhiliaoapp.musically:id/c7k"]'
////////////////////////////////////////////////////////////////////////////////////////////
    
    



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

    async waitUntilImageDisplayed(){//Image_BTN
        await (await $(Bio_BTN)).waitForDisplayed()
        if (await (await $(Bio_BTN)).isDisplayed()) return true
        return false
    }



    async edit_btn(){
        return await $(Edit_BTN) 
    }
  

    async bio_btn(){
        return await $(Bio_BTN)
    }
   
 
    async save_btn(){
        return await $(Save_BTN)
    }

   

    async galary_btn(){
        return await $(Galary_BTN)
    }

    
    async image_confirm(){
        return await $(Image_Confirm)
    }


    async image_btn_back(){
        return await $(Image_BTN_Back)
    }


    async bio_textBox() {
        return await $(Bio_TextBox)
    }

    async image_select() {
        return await $(Image_Select)

    }

    async image_check() {
        return await $(Image_Check)
    }


    async image_btn() {
        return await $(Image_BTN)
    }
   
    async image_save(){
        return await $(Image_Save)
    }

    // async following() {
    //     return await $(Following)
    // }

    // async count() {
    //     return await $(Count)
    // }

    // async setup_btn() {
    //     return await $(Setup_BTN)
    // }

    // async back_btn() {
    //     return await $(Back_BTN)
    // }

    // async image_back() {
    //     return await $(Image_Back)
    // }

}

export default new Profile()
