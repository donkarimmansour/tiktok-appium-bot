import LoginOBJ from '../../../objects/account/Login'

class Login {

    constructor(email, password) {
        this.email = email
        this.password = password
    }


    async LoginToAccount() {

        if (await NavBar.wait_until_home_displayed()) {
            await (await NavBar.profile_icon()).click()


            if (await LoginOBJ.waitUntilInitDisplayed()) {
                await (await LoginOBJ.signup_btn()).click()

                if (await LoginOBJ.waitUntilSignUpPageDisplayed()) {
                    await (await LoginOBJ.login_btn()).click()


                    if (await LoginOBJ.waitUntilLoginPageDisplayed()) {
                        await (await LoginOBJ.email_btn()).click()

                        if (await LoginOBJ.waitUntilTapDisplayed()) {
                            await (await LoginOBJ.email_tap()).click()

                            if (await LoginOBJ.waitUntilLoginFormDisplayed()) {
                                await (await LoginOBJ.email_tap()).click()
                                await (await LoginOBJ.email_textBox()).setValue(this.email)
                                await (await LoginOBJ.pass_textBox()).setValue(this.password)
                                await (await LoginOBJ.submit_btn()).click()


                                await browser.pause(3000)

                                if (await (await LoginOBJ.pass_err()).isDisplayed()) {
                                    console.log("pass_err");
                                    console.log("pass_err");
                                    console.log("pass_err");
                                    console.log("pass_err");
                                    console.log("pass_err");
                                    console.log("pass_err");
                                    console.log("pass_err");
                                    console.log("pass_err");
                                }

                                if (await (await LoginOBJ.email_err()).isDisplayed()) {
                                    console.log("email_err");
                                    console.log("email_err");
                                    console.log("email_err");
                                    console.log("email_err");
                                    console.log("email_err");
                                    console.log("email_err");
                                    console.log("email_err");
                                    console.log("email_err");
                                }



                            }//waitUntilLoginFormDisplayed

                        }//waitUntilTapDisplayed
                    }//waitUntilLoginPageDisplayed


                }//waitUntilSignUpPageDisplayed

            }//waitUntilInitDisplayed

        }//wait_until_home_displayed

    }

}

export default Login
