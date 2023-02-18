import NavBar from '../../objects/common/NavBar'
import UploaderOBJ from '../../objects/account/Uploader'
import { soundPlayer } from 'x-sound-player'
import { join } from "path";

class Uploader {

    constructor(hastags, limit) {
        this.hastags = hastags
        this.limit = limit
        this.counter = 1
    }

    async UploadVideo() {

        if (this.counter < this.limit) {

           // if (await NavBar.wait_until_home_displayed()) {

                await browser.pause(3000)
                await (await NavBar.upload_icon()).click()
                
                if (await UploaderOBJ.waitUntilUploadDisplayed()) {
                    await (await UploaderOBJ.upload_btn()).click()


                    if (await UploaderOBJ.waitUntilSelectDisplayed()) {


                        //await browser.pause(3000)

                        ///////////////////////////////////////////////////////////////////////
                        // if (await (await UploaderOBJ.feature_popup()).isDisplayed()) {//
                        //     await (await UploaderOBJ.accept_popup()).click()
                        //     // await this.UploadVideo()
                        //     // return
                        //     await browser.pause(1000)

                        // }

                        // if (await (await UploaderOBJ.minutes_popup()).isDisplayed()) {//
                        //     await (await UploaderOBJ.accept_popup()).click()
                        //     // await this.UploadVideo()
                        //     // return
                        //     await browser.pause(1000)

                        // }

                        // if (await (await UploaderOBJ.feature_popup()).isDisplayed()) {//
                        //     await (await UploaderOBJ.accept_popup()).click()
                        //     // await this.UploadVideo()
                        //     // return
                        //     await browser.pause(1000)

                        // }
                        ///////////////////////////////////////////////////////////////////////

                        await (await UploaderOBJ.video_tap()).click()
                        await (await UploaderOBJ.video_select()).click()
                        await (await UploaderOBJ.save_btn()).click()



                        await browser.pause(3000)
                        if (await (await UploaderOBJ.save_btn()).isDisplayed()) {
                            await (await UploaderOBJ.save_btn()).click()
                        }

                        


                        if (await UploaderOBJ.waitUntilTextDisplayed()) {
                            await (await UploaderOBJ.textarea()).setValue(this.hastags)
                            await browser.pause(2000)

                            if (this.counter === 1) {
                                await UploaderOBJ.swape_to_top()
                                await (await UploaderOBJ.option()).click()

                                if (await UploaderOBJ.waitUntilSwitchDisplayed()) {

                                    if (await (await UploaderOBJ.switch_btn()).isDisplayed()) {
                                        await browser.back()
                                    }else{
                                        //await (await UploaderOBJ.switch_btn()).click()
                                        // await (await UploaderOBJ.option_close()).click()
                                        await (await UploaderOBJ.switch()).click()
                                        await browser.back()
                                    }

                                }//waitUntilSwitchDisplayed
                            }

                            await (await UploaderOBJ.post_btn()).click()

                            ///////////////////////////////////////////////////////////////////////
                            // if (await (await UploaderOBJ.publicly_popup()).isDisplayed()) {//
                            //     await (await UploaderOBJ.publicly_btn()).click()
                            // }


                           
                            // if (await (await UploaderOBJ.viewfriends_popup()).isDisplayed()) {//
                            //     await (await UploaderOBJ.accept_popup()).click()
                            // }

                            ///////////////////////////////////////////////////////////////////////

                            await browser.pause(2000)

                            //await (await NavBar.home_icon()).click()

                            this.counter++

                            await this.UploadVideo()

                        }//waitUntilTextDisplayed
                    }//waitUntilSelectDisplayed
                }//waitUntilUploadDisplayed
           
           
           // }//wait_until_home_displayed

        }else{
            await (await NavBar.discover_icon()).click()

            const isUploading = async() => {
                if (await (await UploaderOBJ.isUploding()).isDisplayed()) {

                    console.log("is Uploding");
                    console.log("is Uploding");
                    console.log("is Uploding");
                    console.log("is Uploding");
                    console.log("is Uploding");
                    console.log("is Uploding");

                    await browser.pause(3000)
                    await isUploading()


                } else {

                    await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "sound", "success.wav") })
                    // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "sound", "success.wav") })
                    // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "sound", "alert.wav") })
                }
            }

            await isUploading()



          
        }
    }

}

export default Uploader
