import allureReporter from '@wdio/allure-reporter'
import Mail from '../common/gmail'
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
import { getRow, updateRow } from '../common/helper';
dotenv.config()

describe(`Account Function for ${browser.capabilities.deviceName}`, () => {

    it('Autmate', async () => {


        let Account = {
            nickname: process.env.nickname,
            //username: process.env.lusername,
            email: process.env.email,
            password: process.env.password,
            country: process.env.country,
            motherAccount: process.env.motherAccount,
            hastages: process.env.hastages,
            bio: process.env.bio,
            limit: process.env.limit,
            //gmailAccount: process.env.gmailAccount,
            //gmailPassword: process.env.gmailPassword,
            type: process.env.type,
            //ip: process.env.ip,
            start: process.env.start,
            current: process.env.current,
            used: "no",
            id: "",
        }


        // allureReporter.addTestId("autmate_001")
        // allureReporter.addSeverity("normal")

        try {
            await isInternetOnline()

            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////

            await browser.pause(3000)
            await browser.startActivity("com.nordvpn.android", ".mobile.main.ControlActivity")

            const NordVpnTest = new NordVpn(Account.country)
            await NordVpnTest.ChangeIp()

            await browser.pause(3000)

            await browser.startActivity("com.zhiliaoapp.musically", "com.ss.android.ugc.aweme.splash.SplashActivity")
            
            if (Account.start === "New") {
                await browser.reset();
            }
        
            await browser.pause(3000)
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////


            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            //const Account = await Mail.generateAccount() 
          

            if (Account.start === "New") {
                if (Account.type === "signup") {

                    const prefex = Mail.makeHash(10)
                    Account = { ...Account, email: `${prefex}${Account.email}`, id : prefex }

                    const SignupTest = new Signup(Account.email, Account.password, Account.nickname, Account)

                    const SignupTest = new Signup(Account)
                    await SignupTest.CreateNewAccount()

                } else if (Account.type === "login") {

                    const account = getRow("nrlhawnr7f@mycpa.33mail.com")
                    Account = { ...Account , email : account.email , password : account.password, id : account.id }

                    const LoginTest = new Login(Account.email, Account.password)
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

            } else if (Account.start === "Current") {
                const HomeTest = new Home()
                await HomeTest.init()

                if (Account.current === "All") {
                    const ProfileTest = new Profile(Account.bio)
                    await ProfileTest.EditAccount()

                    const FollowerTest = new Follower(Account.motherAccount)
                    await FollowerTest.followMotherAccount()

                    const UploaderTest = new Uploader(Account.hastages, Account.limit)
                    await UploaderTest.UploadVideo()
                }
                else if (Account.current === "Upload") {
                    const UploaderTest = new Uploader(Account.hastages, Account.limit)
                    await UploaderTest.UploadVideo()
                }
                else if (Account.current === "Follow") {
                    const FollowerTest = new Follower(Account.motherAccount)
                    await FollowerTest.followMotherAccount()
                }
                else if (Account.current === "Edit") {
                    const ProfileTest = new Profile(Account.bio)
                    await ProfileTest.EditAccount()

                }
            }

            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////

            if (Account.type === "login") {
               updateRow(Account.id , "used", "yes")
            }

            cp.exec('start cmd.exe /K npm start')
            process.exit()

        } catch (error) {
            console.log(error.message);
            console.log("you are offline")
            console.log("you are offline")
            console.log("you are offline")

            console.log(error);
        }

    });


});
