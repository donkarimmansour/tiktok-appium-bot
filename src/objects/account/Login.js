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

//////////////////////////////////////////////////////////////////////////////////////
// const Account_Exist = '//*[@text="You’ve already signed up"]' 
// const Email_Pupup = '//*[@text="Email"]'
// const Reset_Form = '//*[@text="Forgot password"]'
// const Reset_BTN = '//*[@text="Reset"]' 
// const Confirm_Email = '//*[@text="Enter 6-digit code"]'
// const Confirm_Code = '//*/android.widget.EditText'
// const Err_Confirm_Email = '//*[@text="Email verification code error"]'
// const Send_Confirm_Email = '//*[@text="Resend code"]' 
//////////////////////////////////////////////////////////////////////////////////////

class Login {


    // async waitUntilInitDisplayed() {
    //     await (await $(SignUp_Init)).waitForDisplayed()
    //     if (await (await $(SignUp_Init)).isDisplayed()) return true
    //     return false
    // }

    // async waitUntilSignUpPageDisplayed() {
    //     await (await $(SignUp_Page)).waitForDisplayed()
    //     if (await (await $(SignUp_Page)).isDisplayed()) return true
    //     return false
    // }

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

    // async waitUntilResetFormDisplayed() {
    //     await (await $(Reset_Form)).waitForDisplayed()
    //     if (await (await $(Reset_Form)).isDisplayed()) return true
    //     return false
    // }

    // async waitUntilConfirmEmailDisplayed() {
    //     await (await $(Confirm_Email)).waitForDisplayed()
    //     if (await (await $(Confirm_Email)).isDisplayed()) return true
    //     return false
    // }

    // async waitUntilConfirmCodeDisplayed() {
    //     await (await $(Confirm_Code)).waitForDisplayed()
    //     if (await (await $(Confirm_Code)).isDisplayed()) return true
    //     return false
    // }


    async signup_page() {
        return await $(SignUp_Page)
    }
    

    // async signup_btn() {
    //     return await $(SignUp_BTN)
    // }

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

    
    // async account_exist() {
    //     return await $(Account_Exist)
    // }

    // async send_Confirm_email() {
    //     return await $(Send_Confirm_Email)
    // }

    // async err_confirm_email() { 
    //     return await $(Err_Confirm_Email)
    // }

    // async confirm_code() {
    //     return await $(Confirm_Code)
    // }

    // async reset_btn() {
    //     return await $(Reset_BTN)
    // }

    // async email_pupup() {
    //     return await $(Email_Pupup)
    // }

    // async login_form() {
    //     return await $(Login_Form)
    // }


}

export default new Login()
