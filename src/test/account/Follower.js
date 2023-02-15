import Follower from '../../flows/account/Follower'
// import allureReporter from '@wdio/allure-reporter'

describe(`Account Function for ${browser.capabilities.deviceName}`, () => {

    it('Follow Mother Account', async () => {
        // allureReporter.addTestId("follow_001")
        // allureReporter.addSeverity("normal")
 
       // await browser.pause(20000)


        const FollowerTest = new Follower("@kings_coins")
        await FollowerTest.followMotherAccount()


          //  .verify_follow_successfully()

    });

    
});
