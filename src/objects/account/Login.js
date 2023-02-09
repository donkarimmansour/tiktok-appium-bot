const SignUp_Init = '//*[@text="Sign up for an account"]'
const SignUp_BTN = '//*[@text="Sign up"]'
const SignUp_Page = '//*[@text="Sign up for TikTok"]'
const LOGIN_BTN = '//*[@text="Already have an account? Log in"]'
const Login_Page = '//*[@text="Log in to TikTok"]' 
const Email_BTN = '//*[@text="Use phone / email / username"]'
const Email_Tap = '//*[@text="Email / Username"]'
const Login_Form = '//*[@text="Forgot password?"]'
const Email_TextBox = '//*[@text="Email or username"]'
const Pass_TextBox = '//*[@text="Password"]'
const Submit_BTN = '(//*[@text="Log in"])[last()]'
const Email_Err = '//*[contains(@text,"many")]'
const Pass_Err = '//*[@text="Incorrect account or password"]'


class Login {


    async waitUntilInitDisplayed() {
        await (await $(SignUp_Init)).waitForDisplayed()
        if (await (await $(SignUp_Init)).isDisplayed()) return true
        return false
    }

    async waitUntilSignUpPageDisplayed() {
        await (await $(SignUp_Page)).waitForDisplayed()
        if (await (await $(SignUp_Page)).isDisplayed()) return true
        return false
    }

    async waitUntilLoginPageDisplayed() {
        await (await $(Login_Page)).waitForDisplayed()
        if (await (await $(Login_Page)).isDisplayed()) return true
        return false
    }

    async waitUntilTapDisplayed() {
        await (await $(Email_Tap)).waitForDisplayed()
        if (await (await $(Email_Tap)).isDisplayed()) return true
        return false
    }


    async waitUntilLoginFormDisplayed() {
        await (await $(Login_Form)).waitForDisplayed()
        if (await (await $(Login_Form)).isDisplayed()) return true
        return false
    }



    async signup_btn() {
        return await $(SignUp_BTN)
    }

    async login_btn() {
        return await $(LOGIN_BTN)
    }

    async email_btn() {
        return await $(Email_BTN)
    }

    async email_tap() {
        return await $(Email_Tap)
    }

    async email_textBox() {
        return await $(Email_TextBox)
    }

    async pass_textBox() {
        return await $(Pass_TextBox)
    }

    async submit_btn() {
        return await $(Submit_BTN)
    }

    async email_err() {
        return await $(Email_Err)
    }

    async pass_err() {
        return await $(Pass_Err)
    }

}

export default new Login()
