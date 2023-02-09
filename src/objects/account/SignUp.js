const SignUp_Init = '//*[@text="Sign up for an account"]'
const SignUp_BTN = '//*[@text="Sign up"]'
const SignUp_Page = '//*[@text="Sign up for TikTok"]'
const Email_BTN = '//*[@text="Use phone or email"]'
const Email_Tap = '//*[@text="Email"]'
const Email_Form = '//*[contains(@text,"you agree to TikTok’s")]'
const Email_TextBox = '//*[@text="Email address"]'
const Pass_Form = '//*[@text="Create password"]'
const Pass_TextBox = '//*[@text="Enter password"]'
const Birthday_Form = '//*[@text="When’s your birthday?"]'
const Birthday_TextBox = '//*[@text="Birthday"]'
const Submit = '//*[@text="Next"]'
const Nickname_Form = '//*[@text="Create nickname"]'
const Nickname_TextBox = '//*[@text="Add your nickname"]'
const Username_Form = '//*[@text="Create username"]'
const Username_TextBox = '//*[@text="Username"]'
const Confirm_Signup = '//*[@text="Sign up"]'
const Confirm_BTN = '//*[@text="Confirm"]'
const Skip_BTN = '//*[@text="Skip"]'
const Account_Exist = '//*[@text="You’ve already signed up"]'
const Confirm_Email = '//*[@text="Enter 6-digit code"]'
const Send_Confirm_Email = '//*[@text="Resend code"]'
const Err_Confirm_Email = '//*[@text="Email verification code error"]'
const Form_Err = '//*[contains(@text,"many")]'
const Suggest = '//*[@text="Suggest strong password"]'

////////////////////////////////////////////////////////////////////////////////////
const Birthday_TextBox_View = '//*[@resource-id="com.zhiliaoapp.musically:id/cyv"]'
const Confirm_Code = '//*[@resource-id="com.zhiliaoapp.musically:id/cyc"]'
// b_day => y
// b_month => y
// b_year => y
////////////////////////////////////////////////////////////////////////////////////

const Login_Page = '//*[@text="Log in to TikTok"]'
const Login_SignUp_BTN = '//*[@text="Don’t have an account? Sign up"]'


class Signup {

    async waitUntilLoginPageDisplayed() {
        await (await $(Login_Page)).waitForDisplayed()
        if (await (await $(Login_Page)).isDisplayed()) return true
        return false
    }

    async login_signUp_btn() {
        return await $(Login_SignUp_BTN)
    }



    async waitUntilConfirmCodeDisplayed() {
        await (await $(Confirm_Code)).waitForDisplayed()
        if (await (await $(Confirm_Code)).isDisplayed()) return true
        return false
    }

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

    async waitUntilEmailTapDisplayed() {
        await (await $(Email_Tap)).waitForDisplayed()
        if (await (await $(Email_Tap)).isDisplayed()) return true
        return false
    }


    async waitUntilEmailFormDisplayed() {
        await (await $(Email_Form)).waitForDisplayed()
        if (await (await $(Email_Form)).isDisplayed()) return true
        return false
    }


    async waitUntilPassFormDisplayed() {
        await (await $(Pass_Form)).waitForDisplayed()
        if (await (await $(Pass_Form)).isDisplayed()) return true
        return false
    }

    async waitUntilBirthdayFormDisplayed() {
        await (await $(Birthday_Form)).waitForDisplayed()
        if (await (await $(Birthday_Form)).isDisplayed()) return true
        return false
    }

    async waitUntilUsernameFormDisplayed() {
        await (await $(Username_Form)).waitForDisplayed()
        if (await (await $(Username_Form)).isDisplayed()) return true
        return false
    }

    async waitUntilNicknameFormDisplayed() {
        await (await $(Nickname_Form)).waitForDisplayed()
        if (await (await $(Nickname_Form)).isDisplayed()) return true
        return false
    }



    async form_err() {
        return await $(Form_Err)
    }

    async signup_btn() {
        return await $(SignUp_BTN)
    }

    async email_btn() {
        return await $(Email_BTN)
    }


    async b_day() {
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: 280,
                    y: 1650
                }
            },
            {
                action: 'wait',
                options: { ms: 1000 }
            },
            {
                action: 'moveTo',
                options: {
                    x: 280,
                    y: 2070
                }
            },
            {
                action: 'release',
                options: {}
            }
        ])
    }

    async b_month() {
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: 540,
                    y: 1650
                }
            },
            {
                action: 'wait',
                options: { ms: 1000 }
            },
            {
                action: 'moveTo',
                options: {
                    x: 540,
                    y: 2070
                }
            },
            {
                action: 'release',
                options: {}
            }
        ])
    }

    async b_year() {
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: 840,
                    y: 1650
                }
            },
            {
                action: 'wait',
                options: { ms: 1000 }
            },
            {
                action: 'moveTo',
                options: {
                    x: 840,
                    y: 2070
                }
            },
            {
                action: 'release',
                options: {}
            }
        ])
    }

    async click_on_screan() {
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: 500,
                    y: 1000
                }
            },
            {
                action: 'wait',
                options: { ms: 500 }
            },
            {
                action: 'release',
                options: {}
            }
        ])
    }


    async birthday_textBox() {
        return await $(Birthday_TextBox)
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


    async username_textBox() {
        return await $(Username_TextBox)
    }


    async nickname_textBox() {
        return await $(Nickname_TextBox)
    }

    async submit() {
        return await $(Submit)
    }

    async birthday_textBox_view() {
        return await $(Birthday_TextBox_View)
    }

    async account_exist() {
        return await $(Account_Exist)
    }

    async confirm_email() {
        return await $(Confirm_Email)
    }
    async send_Confirm_email() {
        return await $(Send_Confirm_Email)
    }

    async err_confirm_email() { 
        return await $(Err_Confirm_Email)
    }

    async confirm_code() {
        return await $(Confirm_Code)
    }

    async confirm_btn() {
        return await $(Confirm_BTN)
    }

    async confirm_signup() {
        return await $(Confirm_Signup)
    }

    async skip_btn() {
        return await $(Skip_BTN)
    }

    async suggest() {
        return await $(Suggest)
    }
}

export default new Signup()
