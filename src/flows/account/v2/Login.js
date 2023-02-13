import LoginOBJ from '../../../objects/account/Login'
import CaptchaOBJ from '../../../objects/account/Captcha'

class Login {

    constructor(Account) {
        this.Account = Account
    }


    async LoginToAccount() {


        if (await LoginOBJ.waitUntilLoginPageDisplayed()) {
            await (await LoginOBJ.email_btn()).click()

            if (await LoginOBJ.waitUntilTapDisplayed()) {
                await (await LoginOBJ.email_tap()).click()

                if (await LoginOBJ.waitUntilLoginFormDisplayed()) {
                    await (await LoginOBJ.email_tap()).click()
                    await (await LoginOBJ.email_textBox()).setValue(this.Account.email)
                    await (await LoginOBJ.pass_textBox()).setValue(this.Account.password)
                    await (await LoginOBJ.submit_btn()).click()


                    await browser.pause(15000)

                    const checkCaptcha = async () => {
                        if (await (await CaptchaOBJ.cap_slide()).isDisplayed()) {
                            await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "sound", "beep.wav") })
                            // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "sound", "beep.wav") })
                            // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "sound", "beep.wav") })

                            await browser.pause(20000)

                            if (await (await CaptchaOBJ.cap_slide()).isDisplayed()) {
                                await checkCaptcha()
                            }
                        }

                    }



                    await checkCaptcha()

                    if (await (await LoginOBJ.pass_err()).isDisplayed()) {
                        console.log("pass_err");
                        console.log("pass_err");
                        console.log("pass_err");
                        console.log("pass_err");
                        console.log("pass_err");
                        console.log("pass_err");
                        console.log("pass_err");
                        console.log("pass_err");
                    } else if (await (await LoginOBJ.email_err()).isDisplayed()) {
                        console.log("email_err");
                        console.log("email_err");
                        console.log("email_err");
                        console.log("email_err");
                        console.log("email_err");
                        console.log("email_err");
                        console.log("email_err");
                        console.log("email_err");
                    } else {

                        if (await (await LoginOBJ.submit()).isDisplayed()) {
                            await (await LoginOBJ.submit()).click()
                        }




                        if (await (await LoginOBJ.account_exist()).isDisplayed() || await (await LoginOBJ.form_err()).isDisplayed()) {

                            if (await (await LoginOBJ.form_err()).isDisplayed()) {
                                console.log("form_err");
                                console.log("form_err");
                                console.log("form_err");

                            } else if (await (await LoginOBJ.account_exist()).isDisplayed()) {
                                console.log("account_exist");
                                console.log("account_exist");
                                console.log("account_exist");

                                await (await LoginOBJ.login_form()).click()

                                await browser.pause(1000)
                                await (await LoginOBJ.email_pupup()).click()


                                if (await LoginOBJ.waitUntilResetFormDisplayed()) {
                                    await (await LoginOBJ.reset_btn()).click()

                                    if (await LoginOBJ.waitUntilConfirmEmailDisplayed()) {

                                        await browser.pause(30000)

                                        const checkCode = async () => {
                                            try {

                                                const code = await Mail.getVerificationCode("mycpa2023@gmail.com", "tkorczgupdhvwaks")

                                                console.log("code ", code);
                                                console.log("code ", code);
                                                console.log("code ", code);
                                                console.log("code ", code);
                                                console.log("code ", code);
                                                console.log("code ", code);
                                                console.log("code ", code);

                                                if (await LoginOBJ.waitUntilConfirmCodeDisplayed()) {

                                                    // await (await LoginOBJ.confirm_code()).setValue(code)
                                                    //        await browser.pause(1000)

                                                    await (await LoginOBJ.confirm_code()).addValue(code[0])
                                                    await browser.pause(1000)

                                                    await (await LoginOBJ.confirm_code()).addValue(code[1])
                                                    await browser.pause(1000)

                                                    await (await LoginOBJ.confirm_code()).addValue(code[2])
                                                    await browser.pause(1000)

                                                    await (await LoginOBJ.confirm_code()).addValue(code[3])
                                                    await browser.pause(1000)

                                                    await (await LoginOBJ.confirm_code()).addValue(code[4])
                                                    await browser.pause(1000)

                                                    await (await LoginOBJ.confirm_code()).addValue(code[5])

                                                    await browser.pause(3000)

                                                    if (await (await LoginOBJ.err_confirm_email()).isDisplayed()) {
                                                        await browser.pause(30000)

                                                        await (await LoginOBJ.send_Confirm_email()).click()
                                                        await browser.pause(30000)

                                                        await checkCode()

                                                    } else {

                                                        ////////////////////////////////////////////////////////////////////////////////////////
                                                        ////////////////////////////////////////////////////////////////////////////////////////
                                                        ////////////////////////////////////////////////////////////////////////////////////////

                                                        console.log("okey");
                                                        console.log("okey");
                                                        console.log("okey");
                                                        console.log("okey");
                                                        console.log("okey");
                                                        console.log("okey");

                                                        ////////////////////////////////////////////////////////////////////////////////////////
                                                        ////////////////////////////////////////////////////////////////////////////////////////
                                                        ////////////////////////////////////////////////////////////////////////////////////////

                                                    }



                                                } else {
                                                    console.log("code error");
                                                    console.log("code error");
                                                    console.log("code error");
                                                    console.log("code error");
                                                    console.log("code error");
                                                }//waitUntilConfirmCodeDisplayed



                                                // } else {
                                                //     await checkCode()
                                                // }
                                            } catch (error) {
                                                await checkCode()
                                            }
                                        }

                                        await checkCode()

                                    }//waitUntilConfirmEmailDisplayed

                                }//waitUntilResetFormDisplayed

                            }

                        } else {

                            ////////////////////////////////////////////////////////////////////////////////////////
                            ////////////////////////////////////////////////////////////////////////////////////////
                            ////////////////////////////////////////////////////////////////////////////////////////


                            console.log("okey");
                            console.log("okey");
                            console.log("okey");
                            console.log("okey");
                            console.log("okey");
                            console.log("okey");

                            ////////////////////////////////////////////////////////////////////////////////////////
                            ////////////////////////////////////////////////////////////////////////////////////////
                            ////////////////////////////////////////////////////////////////////////////////////////

                        }

                    }

                }//waitUntilLoginFormDisplayed

            }//waitUntilTapDisplayed
        }//waitUntilLoginPageDisplayed

    }

}

export default Login
