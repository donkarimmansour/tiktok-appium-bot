import HomeOBJ from '../../objects/common/Home'

class Home {
    async init() {

        if (await (await HomeOBJ.followfriends_Ppopup()).isDisplayed()) {//
            await (await HomeOBJ.deny_followfriends_popup()).click()
        }


        if (await (await HomeOBJ.funfriends_popup()).isDisplayed()) {//
            await (await HomeOBJ.accept_popup()).click()
        }

        
        if (await (await HomeOBJ.fb_popup()).isDisplayed()) {//
            await (await HomeOBJ.deny_fb_popup()).click()
        }
    }

}

export default Home
