import NavBar from '../../../objects/common/NavBar'
import ProfileOBJ from '../../../objects/account/Profile'
 
class Profile {

    constructor(bio) {
        this.bio = bio
    }

    async EditAccount() {

        if (await NavBar.wait_until_home_displayed()) {
            await (await NavBar.profile_icon()).click()


            if (await ProfileOBJ.waitUntilProfileDisplayed()) {
               // await (await ProfileOBJ.setup_btn()).click()
                //await (await ProfileOBJ.edit_btn()).click()

                await (await ProfileOBJ.bio_btn()).click()

                if (await ProfileOBJ.waitUntilBioDisplayed()) {
                    await (await ProfileOBJ.bio_textBox()).click()
                    await (await ProfileOBJ.bio_textBox()).setValue(this.bio)
                    await (await ProfileOBJ.save_btn()).click()


                    if (await ProfileOBJ.waitUntilImageDisplayed()) {
                        await (await ProfileOBJ.image_btn()).click()
                        await (await ProfileOBJ.galary_btn()).click()
                        await (await ProfileOBJ.image_select()).click()
                        await (await ProfileOBJ.image_btn_back()).click()

                        await (await ProfileOBJ.image_check()).click()

                        await (await ProfileOBJ.image_confirm()).click()
                        await (await ProfileOBJ.image_save()).click()

                        // await (await ProfileOBJ.image_back()).click()

                    }

                    await (await ProfileOBJ.back_btn()).click()

                }

            }

        }

        return this;
    }

}

export default Profile
