import NavBar from '../../objects/common/NavBar'
import FollowerOBJ from '../../objects/account/Follower'
import allureReporter from '@wdio/allure-reporter'
import { soundPlayer } from 'x-sound-player'
import { join } from "path";


class Follower {

    constructor(motherAccount) {
        this.motherAccount = motherAccount
    }

    async followMotherAccount() {
        allureReporter.addStep(`go to search section`)


        if (await NavBar.wait_until_home_displayed()) {
            await (await FollowerOBJ.search_icon()).click()

            if (await FollowerOBJ.waitUntilSearchBoxDisplayed()) {
                await (await FollowerOBJ.search_box()).clearValue()
                await (await FollowerOBJ.search_box()).setValue(this.motherAccount)
                await (await FollowerOBJ.search_btn()).click()
                await (await FollowerOBJ.user_tap()).click()


                let counter = 1


                async function repeater() {

                    if (counter === 1) {
                        await (await FollowerOBJ.follow_btn()).click()
                        await (await FollowerOBJ.follow_sec()).click()

                        //if ((await (await FollowerOBJ.select_profile())?.getAttribute("text")) === "Follow") {
                        if (await (await FollowerOBJ.select_profile()).isDisplayed()) {
                            counter++
                            await repeater()
                        } else {
                            await browser.back()
                            await browser.back()
                            await browser.back()
                            await browser.back()
                            return
                        }

                    } else {
                        if (counter > 2) {
                            await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "sound", "alert.wav") })
                           // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "sound", "alert.wav") })
                           // await soundPlayer.playAsync({ soundPath: join(__dirname, "..", "..", "sound", "alert.wav") })

                           await browser.back()
                           await browser.back()
                           await browser.back()
                           await browser.back()
                           
                           await browser.pause(3000)
           
                           // await (await FollowerOBJ.back_btn()).click()
                           // await (await FollowerOBJ.back_btn2()).click()
                           // await (await FollowerOBJ.back_btn2()).click()

                            console.log('"""""""""""""""""""""""""""');
                            console.log('"""""""""""""""""""""""""""');
                            console.log('"""""""""""""""""""""""""""');
                            console.log('"""""""""""""""""""""""""""');
                            console.log('"""""""""""""""""""""""""""');
                            console.log('"""""""""""""""""""""""""""');
                            console.log('"""""""""""""""""""""""""""');
                            return
                        } else {
                          //  await (await FollowerOBJ.back_btn()).click()
                            await browser.back()

                            await (await FollowerOBJ.follow_sec()).click()
                            await (await FollowerOBJ.select_profile()).click()

                           // await (await FollowerOBJ.back_btn()).click()
                            await browser.back()

                            await (await FollowerOBJ.follow_sec()).click()

                            //if ((await (await FollowerOBJ.select_profile())?.getAttribute("text")) === "Follow") {
                            if (await (await FollowerOBJ.select_profile()).isDisplayed()) {
                                counter++
                                await repeater()
                            } else {
                                return
                            }
                        }
                    }

                }

                await repeater()


            }
        }


        return this;
    }

}

export default Follower
