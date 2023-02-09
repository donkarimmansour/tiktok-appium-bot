import Signup from '../../flows/account/Signup'
import allureReporter from '@wdio/allure-reporter'
//import Mail from '../../common/mail'
import Mail from '../../common/gmail'
import isInternetOnline from '../../common/online';

describe(`Account Function for ${browser.capabilities.deviceName}`, () => {

    it('Signup', async () => {

        allureReporter.addTestId("Signup_001")
        allureReporter.addSeverity("normal")

        try {
            await isInternetOnline()

            //const Account = await Mail.generateAccount()
            const Account = Mail.makeHash(10)

            const SignupTest = new Signup(`${Account}@mycpa2023.33mail.com`, "mmmm@1111", "Fortnite")
            await SignupTest.CreateNewAccount()

        } catch (error) {
            console.log("you are offline")
        }

    });


});
