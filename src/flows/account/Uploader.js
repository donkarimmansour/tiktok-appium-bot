import NavBar from '../../objects/common/NavBar'
import UploaderOBJ from '../../objects/account/Uploader'

class Uploader {

    constructor(hastags, limit) {
        this.hastags = hastags
        this.limit = limit
        this.counter = 1
    }

    async UploadVideo() {

        if (this.counter <= this.limit) {

            if (await NavBar.wait_until_home_displayed()) {
                await (await NavBar.upload_icon()).click()

                await browser.pause(3000)


                if (await (await UploaderOBJ.feature_popup()).isDisplayed()) {//
                    await (await UploaderOBJ.accept_popup()).click()
                    await this.UploadVideo()
                    return
                }

                if (await (await UploaderOBJ.minutes_popup()).isDisplayed()) {//
                    await (await UploaderOBJ.accept_popup()).click()
                    await this.UploadVideo()
                    return
                }


                if (await UploaderOBJ.waitUntilUploadDisplayed()) {
                    await (await UploaderOBJ.upload_btn()).click()

                    if (await UploaderOBJ.waitUntilSelectDisplayed()) {
                        await (await UploaderOBJ.video_tap()).click()
                        await (await UploaderOBJ.video_select()).click()
                        await (await UploaderOBJ.save_btn()).click()

                        await browser.pause(1000)
                        await (await UploaderOBJ.save_btn()).click()


                        await browser.pause(3000)

                        if (await (await UploaderOBJ.feature_popup()).isDisplayed()) {//
                            await (await UploaderOBJ.accept_popup()).click()
                            await this.UploadVideo()
                            return
                        }



                        if (await UploaderOBJ.waitUntilTextDisplayed()) {
                            await (await UploaderOBJ.textarea()).setValue(this.hastags)
                            await browser.pause(2000)

                            if (this.counter === 1) {
                                await UploaderOBJ.swape_to_top()
                                await (await UploaderOBJ.option()).click()

                                if (await UploaderOBJ.waitUntilSwitchDisplayed()) {
                                    await (await UploaderOBJ.switch()).click()
                                    //await (await UploaderOBJ.option_close()).click()
                                    await browser.back()
                                }//waitUntilSwitchDisplayed
                            }

                            await (await UploaderOBJ.post_btn()).click()

                            if (await (await UploaderOBJ.publicly_popup()).isDisplayed()) {//
                                await (await UploaderOBJ.publicly_btn()).click()
                            }


                            await browser.pause(3000)

                            if (await (await UploaderOBJ.viewfriends_popup()).isDisplayed()) {//
                                await (await UploaderOBJ.accept_popup()).click()
                            }
            
                            await (await NavBar.discover_icon()).click()

                            
                            const isUploading = async() => {
                                if (await (await UploaderOBJ.isUploding()).isDisplayed()) {

                                    console.log("is Uploding");
                                    console.log("is Uploding");
                                    console.log("is Uploding");
                                    console.log("is Uploding");
                                    console.log("is Uploding");
                                    console.log("is Uploding");

                                    await browser.pause(5000)
                                    await isUploading()
                                    
    
                                } else {
                                    await (await NavBar.home_icon()).click()
                                    await browser.pause(2000)
                                    this.counter++
                                    
                                    await this.UploadVideo()
                                }
                            }

                            await isUploading()

                        }//waitUntilTextDisplayed
                    }//waitUntilSelectDisplayed
                }//waitUntilUploadDisplayed
            }//wait_until_home_displayed

        }else{
            await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "sound", "success.wav") })
            // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "sound", "success.wav") })
            // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "sound", "alert.wav") })
            await browser.pause(5000)
        }
    }

}

export default Uploader
