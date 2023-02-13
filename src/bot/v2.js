import allureReporter from '@wdio/allure-reporter'
import Mail from '../common/gmail'
import Mail2 from '../common/mail'
import isInternetOnline from '../common/online';
import Uploader from '../flows/account/Uploader';
import Follower from '../flows/account/Follower';
import NordVpn from '../flows/account/NordVpn';
import Profile from '../flows/account/v2/Profile';
import Splash from '../flows/account/v2/Splash';
import Login from '../flows/account/v2/Login';
import Signup from '../flows/account/v2/Signup'
import Home from '../flows/account/home';
import cp from 'child_process'
import * as dotenv from 'dotenv'
import fs from 'fs'
import { getRow, updateRow } from '../common/helper';
import moment from 'moment';
dotenv.config()

describe(`Account Function for ${browser.capabilities.deviceName}`, () => {

    it('Autmate', async () => {


        let Account = {
            nickname: process.env.nickname,
            email: process.env.email,
            password: process.env.password,
            country: process.env.country,
            motherAccount: process.env.motherAccount,
            hastages: process.env.hastages,
            bio: process.env.bio,
            limit: process.env.limit,
            type: process.env.type,
            start: process.env.start,
            current: process.env.current,
            source: process.env.source,
            vpn: process.env.vpn,
            used: "no",
            id: "",
            ///////////////////////////////////////////////////////
            username: process.env.lusername,
            ip: process.env.ip,
            gmailAccount: process.env.gmailAccount,
            gmailPassword: process.env.gmailPassword,
            ///////////////////////////////////////////////////////
        }


        // allureReporter.addTestId("autmate_001")
        // allureReporter.addSeverity("normal")

        try {
            await isInternetOnline()

            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////

            await browser.pause(3000)

             if (Account.type === "login") {
                const loginAccount = await getRow()
                Account = { ...Account , ...loginAccount }
            }

            if(Account.vpn === "nordvpn"){
                await browser.startActivity("com.nordvpn.android", ".mobile.main.ControlActivity")

                const NordVpnTest = new NordVpn(Account.country)
                await NordVpnTest.ChangeIp()
            }
          
            await browser.pause(3000)

            await browser.startActivity("com.zhiliaoapp.musically", "com.ss.android.ugc.aweme.splash.SplashActivity")
            
            if (Account.start === "new") {
                await browser.reset();
            }
        
            await browser.pause(3000)
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////


            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
          

            if (Account.start === "new") {
                if (Account.type === "signup") {
                    const prefex = Mail.makeHash(10)

                    if (Account.source === "33mail") {
                        Account = { ...Account, email: `${prefex}${Account.email}`, id: prefex }

                    } else if (Account.source === "temporary") {
                        const account = await Mail2.generateAccount()
                        Account = { ...Account, email: account.data.username, id: prefex }
                    }

                    const SignupTest = new Signup(Account)
                    await SignupTest.CreateNewAccount()

                } else if (Account.type === "login") {

                    const LoginTest = new Login(Account)
                    await LoginTest.LoginToAccount()

                }

                const SplashTest = new Splash()
                await SplashTest.Init()

                const HomeTest = new Home()
                await HomeTest.init()

                const ProfileTest = new Profile(Account.bio)
                await ProfileTest.EditAccount()

                const FollowerTest = new Follower(Account.motherAccount)
                await FollowerTest.followMotherAccount()

                const UploaderTest = new Uploader(Account.hastages, Account.limit)
                await UploaderTest.UploadVideo()

            } else if (Account.start === "current") {
                const HomeTest = new Home()
                await HomeTest.init()

                if (Account.current === "all") {
                    const ProfileTest = new Profile(Account.bio)
                    await ProfileTest.EditAccount()

                    const FollowerTest = new Follower(Account.motherAccount)
                    await FollowerTest.followMotherAccount()

                    const UploaderTest = new Uploader(Account.hastages, Account.limit)
                    await UploaderTest.UploadVideo()
                }
                else if (Account.current === "upload") {
                    const UploaderTest = new Uploader(Account.hastages, Account.limit)
                    await UploaderTest.UploadVideo()
                }
                else if (Account.current === "follow") {
                    const FollowerTest = new Follower(Account.motherAccount)
                    await FollowerTest.followMotherAccount()
                }
                else if (Account.current === "edit") {
                    const ProfileTest = new Profile(Account.bio)
                    await ProfileTest.EditAccount()

                }
            }

            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////

            if (Account.type === "login") {
              await updateRow(Account.id , "used", "yes")
            }

            cp.exec('start cmd.exe /K npm start')
            process.exit()

        } catch (error) {
            console.log(error.message);
            console.log("you are offline")
            console.log(error)

            const date =  moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')

            fs.appendFileSync("./errors/messages.txt", error.message + "\n" + date + "\n")
            fs.appendFileSync("./errors/logs.txt", error + "\n" + date + "\n")

        }

    });


});
