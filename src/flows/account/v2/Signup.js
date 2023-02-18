import SignupOBJ from '../../../objects/account/Signup'
import CaptchaOBJ from '../../../objects/account/Captcha'
import { soundPlayer } from 'x-sound-player'
import moment from 'moment'
import { join } from "path";
import Mail from '../../../common/gmail'
import Mail2 from '../../../common/mail'
import { addRow } from '../../../common/helper';

class Signup {

    constructor(Account) {
        this.Account = Account
    }

    async CreateNewAccount() {

        await browser.pause(5000)

        if (await (await SignupOBJ.login_page()).isDisplayed()) {
            await (await SignupOBJ.login_signUp_btn()).click()
        }


        if (await SignupOBJ.waitUntilSignUpPageDisplayed()) {
            await (await SignupOBJ.email_btn()).click()


            if (await SignupOBJ.waitUntilBirthdayFormDisplayed()) {

                const days = []
                const monthes = []
                const years = []

                for (let i = 0; i < 3; i++) {
                    days.push(await SignupOBJ.b_day())
                }


                for (let i = 0; i < 2; i++) {
                    monthes.push(await SignupOBJ.b_month())
                }


                for (let i = 0; i < 6; i++) {
                    years.push(await SignupOBJ.b_year())
                }


                await Promise.all(days)
                await Promise.all(monthes)
                await Promise.all(years)


                const checkDate = async () => {
                    const date = await (await SignupOBJ.birthday_textBox_view()).getAttribute("text")

                    if (moment(Date.now()).diff(new Date(date), "years") > 20) {
                        this.Account.birthday = moment(new Date(date)).format('L')

                        await (await SignupOBJ.submit()).click()

                        //await browser.pause(10000)

                        ////////////////////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////////////////////

                        await this.emailSetp()

                        ////////////////////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////////////////////


                    } else {
                        await SignupOBJ.b_year()
                        await SignupOBJ.b_year()

                        await checkDate()
                    }
                }

                await checkDate()
            }//waitUntilBirthdayFormDisplayed



        }//waitUntilSignUpPageDisplayed

       

    }



    emailSetp = async () => {

        if (await SignupOBJ.waitUntilEmailTapDisplayed()) {
            await (await SignupOBJ.email_tap()).click()


            if (await SignupOBJ.waitUntilEmailFormDisplayed()) {
                await (await SignupOBJ.email_textBox()).setValue(this.Account.email)
                await browser.hideKeyboard()
                await browser.pause(1000)

                /////////////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////////
                await (await SignupOBJ.submit()).click()

                await browser.pause(15000)

                const checkCaptcha = async () => {
                    if (await (await CaptchaOBJ.cap_slide()).isDisplayed()) {
                        await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "..", "sound", "beep.wav") })
                        // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..","..", "sound", "beep.wav") })
                        // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..","..", "sound", "beep.wav") })

                        await browser.pause(20000)

                        if (await (await CaptchaOBJ.cap_slide()).isDisplayed()) {
                            await checkCaptcha()
                        }
                    }

                }

                await checkCaptcha()

                if (await (await SignupOBJ.submit()).isDisplayed()) {
                    await (await SignupOBJ.submit()).click()
                }
                /////////////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////////


                if (await (await SignupOBJ.account_exist()).isDisplayed() || await (await SignupOBJ.form_err()).isDisplayed()) {
                    if (await (await SignupOBJ.account_exist()).isDisplayed()) {
                        console.log("account_exist");
                        console.log("account_exist");
                        console.log("account_exist");
                        
                    } else if (await (await SignupOBJ.form_err()).isDisplayed()) {
                        console.log("form_err");
                        console.log("form_err");
                        console.log("form_err");
                    }


 
                } else {

                    // if (await (await SignupOBJ.suggest()).isDisplayed()) {
                    //     await SignupOBJ.click_on_screan()
                    // }


                    if (await SignupOBJ.waitUntilPassFormDisplayed()) {
                        await (await SignupOBJ.pass_textBox()).setValue(this.Account.password)
                        await browser.hideKeyboard()
                        await browser.pause(1000)


                        /////////////////////////////////////////////////////////////////////////////////////////////
                        /////////////////////////////////////////////////////////////////////////////////////////////
                        /////////////////////////////////////////////////////////////////////////////////////////////
                        await (await SignupOBJ.submit()).click()

                        await browser.pause(30000)

                        const checkCaptcha2 = async () => {
                            if (await (await CaptchaOBJ.cap_rotate()).isDisplayed()) {
                                await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "..", "sound", "beep.wav") })
                                // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..","..", "sound", "beep.wav") })
                                // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..","..", "sound", "beep.wav") })

                                await browser.pause(20000)

                                if (await (await CaptchaOBJ.cap_rotate()).isDisplayed()) {
                                    await checkCaptcha2()
                                }
                            }

                        }

                        await checkCaptcha2()

                        if (await (await SignupOBJ.submit()).isDisplayed()) {
                            await (await SignupOBJ.submit()).click()
                        }
                        /////////////////////////////////////////////////////////////////////////////////////////////
                        /////////////////////////////////////////////////////////////////////////////////////////////
                        /////////////////////////////////////////////////////////////////////////////////////////////



                        if (await (await SignupOBJ.confirm_email()).isDisplayed()) {

                            await browser.pause(30000)

                            const checkCode = async () => {
                                try {

                                    let code = ""

                                    if (this.Account.source === "33mail") {

                                           code = await Mail.getVerificationCode(this.Account.gmailAccount, this.Account.gmailPassword)

                                    } else if (this.Account.source === "temporary") {
                                           code = await Mail2.getVerificationCode(this.Account.email, this.Account.password)
                                    }

                                    if (code !== "") {

                                        console.log("code ", code);
                                        console.log("code ", code);
                                        console.log("code ", code);
                                        console.log("code ", code);
                                        console.log("code ", code);
                                        console.log("code ", code);
                                        console.log("code ", code);

                                        if (await SignupOBJ.waitUntilConfirmCodeDisplayed()) {

                                            // await (await SignupOBJ.confirm_code()).setValue(code)
                                            //        await browser.pause(1000)

                                            await (await SignupOBJ.confirm_code()).addValue(code[0])
                                            await browser.pause(1000)

                                            await (await SignupOBJ.confirm_code()).addValue(code[1])
                                            await browser.pause(1000)

                                            await (await SignupOBJ.confirm_code()).addValue(code[2])
                                            await browser.pause(1000)

                                            await (await SignupOBJ.confirm_code()).addValue(code[3])
                                            await browser.pause(1000)

                                            await (await SignupOBJ.confirm_code()).addValue(code[4])
                                            await browser.pause(1000)

                                            await (await SignupOBJ.confirm_code()).addValue(code[5])
                                          
                                            await browser.hideKeyboard()
                                            await browser.pause(3000)

                                            if (await (await SignupOBJ.err_confirm_email()).isDisplayed()) {
                                                await browser.pause(30000)

                                                await (await SignupOBJ.send_Confirm_email()).click()
                                                await browser.pause(30000)

                                                await checkCode()

                                            } else {

                                                //////////////////////////////////////////////////////////////
                                                //////////////////////////////////////////////////////////////
                                                //////////////////////////////////////////////////////////////

                                                this.username()

                                                //////////////////////////////////////////////////////////////
                                                //////////////////////////////////////////////////////////////
                                                //////////////////////////////////////////////////////////////

                                            }



                                        } else {
                                            console.log("code error");
                                            console.log("code error");
                                            console.log("code error");
                                            console.log("code error");
                                            console.log("code error");
                                        }//waitUntilConfirmCodeDisplayed



                                    }//if
                                    else {
                                        await checkCode()
                                    }




                                } catch (error) {
                                    await checkCode()
                                }
                            }

                            await checkCode()

                        } else {

                            //////////////////////////////////////////////////////////////
                            //////////////////////////////////////////////////////////////
                            //////////////////////////////////////////////////////////////

                            this.username()

                            //////////////////////////////////////////////////////////////
                            //////////////////////////////////////////////////////////////
                            //////////////////////////////////////////////////////////////

                        }


                    }//waitUntilPassFormDisplayed
                }

            }//waitUntilEmailFormDisplayed

        }//waitUntilEmailTapDisplayed

    }



    saveAccount = async () => {
        await addRow(this.Account)
    }

    username = async () => {

        await browser.pause(3000)

        if (await (await SignupOBJ.username_form()).isDisplayed()) {

            await (await SignupOBJ.username_textBox()).setValue(this.Account.username)
            await browser.hideKeyboard()
            await browser.pause(1000)
            await (await SignupOBJ.confirm_signup()).click()

            await browser.pause(3000)

            if (await (await SignupOBJ.skip_btn()).isDisplayed()) {
                await (await SignupOBJ.skip_btn()).click()
            }

        }

        if (await (await SignupOBJ.nickname_form()).isDisplayed()) {

            await (await SignupOBJ.nickname_textBox()).setValue(this.Account.nickname)
            await browser.hideKeyboard()
            await browser.pause(1000)
            await (await SignupOBJ.confirm_btn()).click()
        }


        
        this.Account.created_at = moment(Date.now()).format('L')
        await this.saveAccount()

        await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "..", "sound", "success.wav") })
        // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "..", "sound", "success.wav") })
        // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "..", "sound", "success.wav") })
        await browser.pause(1000)
    }

}




export default Signup
