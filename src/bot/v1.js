import allureReporter from '@wdio/allure-reporter'
import Mail from '../common/gmail'
import isInternetOnline from '../common/online';
import Uploader from '../flows/account/Uploader';
import Follower from '../flows/account/Follower';
import NordVpn from '../flows/account/NordVpn';
import * as dotenv from 'dotenv'
dotenv.config()

import Profile from '../flows/account/v1/Profile';
import Splash from '../flows/account/v1/Splash';
import Login from '../flows/account/v1/Login';
import Signup from '../flows/account/v1/Signup'


describe(`Account Function for ${browser.capabilities.deviceName}`, () => {

    it('Autmate', async () => {


     
        let Account = {
            nickname: process.env.nickname,
            username: process.env.lusername,
            email: process.env.email,
            password: process.env.password,
            country: process.env.country,
            motherAccount: process.env.motherAccount,
            hastages: process.env.hastages,
            bio: process.env.bio,
            limit: process.env.limit,
            gmailAccount: process.env.gmailAccount,
            gmailPassword: process.env.gmailPassword,
       }
       
        

        allureReporter.addTestId("autmate_001")
        allureReporter.addSeverity("normal")

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
            await browser.reset();

            await browser.pause(3000)
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////

            // const LoginTest = new Login("nrlhawnr7f@mycpa.33mail.com", "mmmm@11111")
            // await LoginTest.LoginToAccount()

        
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            //const Account = await Mail.generateAccount() 
            const prefex = Mail.makeHash(10)
            Account = {...Account , email: `${prefex}${Account.email}`}

            //const SignupTest = new Signup(Account.email, Account.password, Account.nickname , Account)

            const SplashTest = new Splash()
            await SplashTest.Init()

            const SignupTest = new Signup(Account)
            await SignupTest.CreateNewAccount()

            const ProfileTest = new Profile(Account.bio)
            await ProfileTest.EditAccount()

            const FollowerTest = new Follower(Account.motherAccount)
            await FollowerTest.followMotherAccount()

            const UploaderTest = new Uploader(Account.hastages , Account.limit)
            await UploaderTest.UploadVideo()
             /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////

        } catch (error) {
            console.log(error.message);
            console.log(error.message);
            console.log("you are offline")
            console.log("you are offline")
            console.log("you are offline")

            console.log(error);
        }

    });


});
