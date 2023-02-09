import Profile from '../../flows/account/Profile'
import allureReporter from '@wdio/allure-reporter'

describe(`Account Function for ${browser.capabilities.deviceName}`, () => {

    it('Edit Profile', async () => {
        allureReporter.addTestId("Profile_001")
        allureReporter.addSeverity("normal")
 
       // await browser.pause(20000)


        const ProfileTest = new Profile("mmmmmmmmmmmmmm1m")
        await ProfileTest.EditAccount()


          //  .verify_follow_successfully()

    });

    
});
