import NavBar from '../../objects/common/NavBar'
import ProfileOBJ from '../../objects/account/Profile' 
 
class Profile {

    constructor(bio) {
        this.bio = bio
    }

    async EditAccount() {

        if (await NavBar.wait_until_home_displayed()) {
            await (await NavBar.profile_icon()).click()
  

            // if (await (await ProfileOBJ.languages_popup()).isDisplayed()) {//
            //     await (await ProfileOBJ.image_confirm()).click()
            // }

            
            if (await ProfileOBJ.waitUntilProfileDisplayed()) {
                //await (await ProfileOBJ.setup_btn()).click()
                await (await ProfileOBJ.edit_btn()).click()


                await (await ProfileOBJ.bio_btn()).click()

                if (await ProfileOBJ.waitUntilBioDisplayed()) {
                    await (await ProfileOBJ.bio_textBox()).click()
                    await (await ProfileOBJ.bio_textBox()).setValue(this.bio)
                    
                    await (await ProfileOBJ.save_btn()).click()

                    if(await (await ProfileOBJ.save_btn()).isDisplayed()){
                        await browser.back()
                        await browser.back()
                    }


                    if (await ProfileOBJ.waitUntilImageDisplayed()) {
                        await (await ProfileOBJ.image_btn()).click()
                        await (await ProfileOBJ.galary_btn()).click()
                        await (await ProfileOBJ.image_select()).click()
                        //await (await ProfileOBJ.image_btn_back()).click()
                        await browser.back()

                        await (await ProfileOBJ.image_check()).click()

                        await (await ProfileOBJ.image_confirm()).click()

                        await browser.pause(3000)

                        if (await (await ProfileOBJ.story_btn()).isDisplayed()) {//
                            await (await ProfileOBJ.story_checkbox()).click()

                            await browser.pause(1000)
                            await (await ProfileOBJ.image_save()).click()

                        }else{
                            await (await ProfileOBJ.image_save()).click()
                        }

                        await browser.pause(2000)

                        if (await (await ProfileOBJ.image_save()).isDisplayed()) {//
                            await (await ProfileOBJ.image_save()).click()
                        }

                        //await (await ProfileOBJ.back_btn()).click()
                        await browser.back()
                        await browser.pause(1000)
                        
                        await browser.back()
                        await browser.pause(1000)

                        await (await NavBar.home_icon()).click()

                        // if(await (await NavBar.home_icon()).isDisplayed()){
                        //      await (await NavBar.home_icon()).click()
                        // }else{
                        //     await browser.back()
                        //     await browser.pause(1000)
                        //     await (await NavBar.home_icon()).click()
                        // }
                       

                        // await (await ProfileOBJ.image_back()).click()

                    }


                }

            }

        }

        return this;
    }

}

export default Profile
