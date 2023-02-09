import NavBar from '../../objects/common/NavBar'
import LoginOBJ from '../../objects/account/Login'
import CaptchaOBJ from '../../objects/account/Captcha'

class Login {

    constructor(email, password) {
        this.email = email
        this.password = password
    }


    async LoginToAccount() {


        if (await LoginOBJ.waitUntilLoginPageDisplayed()) {
            await (await LoginOBJ.email_btn()).click()

            if (await LoginOBJ.waitUntilTapDisplayed()) {
                await (await LoginOBJ.email_tap()).click()

                if (await LoginOBJ.waitUntilLoginFormDisplayed()) {
                    await (await LoginOBJ.email_tap()).click()
                    await (await LoginOBJ.email_textBox()).setValue(this.email)
                    await (await LoginOBJ.pass_textBox()).setValue(this.password)
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


                        // if (await (await SignupOBJ.submit()).isDisplayed()) {
                        //     await (await SignupOBJ.submit()).click()
                        // }


                        // if (await (await SignupOBJ.confirm_email()).isDisplayed()) {


                        //     await browser.pause(30000)

                        //     const checkCode = async () => {
                        //         try {

                        //             const code = await Mail.getVerificationCode("mycpa2023@gmail.com", "tkorczgupdhvwaks")

                        //             console.log("code ", code);
                        //             console.log("code ", code);
                        //             console.log("code ", code);
                        //             console.log("code ", code);
                        //             console.log("code ", code);
                        //             console.log("code ", code);
                        //             console.log("code ", code);

                        //             if (await SignupOBJ.waitUntilConfirmCodeDisplayed()) {

                        //                 // await (await SignupOBJ.confirm_code()).setValue(code)
                        //                 //        await browser.pause(1000)

                        //                 await (await SignupOBJ.confirm_code()).addValue(code[0])
                        //                 await browser.pause(1000)

                        //                 await (await SignupOBJ.confirm_code()).addValue(code[1])
                        //                 await browser.pause(1000)

                        //                 await (await SignupOBJ.confirm_code()).addValue(code[2])
                        //                 await browser.pause(1000)

                        //                 await (await SignupOBJ.confirm_code()).addValue(code[3])
                        //                 await browser.pause(1000)

                        //                 await (await SignupOBJ.confirm_code()).addValue(code[4])
                        //                 await browser.pause(1000)

                        //                 await (await SignupOBJ.confirm_code()).addValue(code[5])

                        //                 await browser.pause(3000)

                        //                 if (await (await SignupOBJ.err_confirm_email()).isDisplayed()) {
                        //                     await browser.pause(30000)

                        //                     await (await SignupOBJ.send_Confirm_email()).click()
                        //                     await browser.pause(30000)

                        //                     await checkCode()

                        //                 } else {

                        //                     ////////////////////////////////////////////////////////////////////////////////////////
                        //                     ////////////////////////////////////////////////////////////////////////////////////////
                        //                     ////////////////////////////////////////////////////////////////////////////////////////

                        //                     console.log("okey");
                        //                     console.log("okey");
                        //                     console.log("okey");
                        //                     console.log("okey");
                        //                     console.log("okey");
                        //                     console.log("okey");

                        //                     ////////////////////////////////////////////////////////////////////////////////////////
                        //                     ////////////////////////////////////////////////////////////////////////////////////////
                        //                     ////////////////////////////////////////////////////////////////////////////////////////

                        //                 }



                        //             } else {
                        //                 console.log("code error");
                        //                 console.log("code error");
                        //                 console.log("code error");
                        //                 console.log("code error");
                        //                 console.log("code error");
                        //             }//waitUntilConfirmCodeDisplayed



                        //             // } else {
                        //             //     await checkCode()
                        //             // }
                        //         } catch (error) {
                        //             await checkCode()
                        //         }
                        //     }

                        //     await checkCode()

                        // } else {

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

                      //  }



                    }



                }//waitUntilLoginFormDisplayed

            }//waitUntilTapDisplayed
        }//waitUntilLoginPageDisplayed

    }

}

export default Login
