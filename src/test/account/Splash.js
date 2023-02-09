import Splash from '../../flows/account/Splash'
import allureReporter from '@wdio/allure-reporter'
import isInternetOnline from '../../common/online';

describe(`Account Function for ${browser.capabilities.deviceName}`, () => {

    it('Splash', async () => {

        allureReporter.addTestId("Splash_001")
        allureReporter.addSeverity("normal")

        try {
            await isInternetOnline()

            const SplashTest = new Splash()
            await SplashTest.Init()

        } catch (error) {
            console.log("you are offline")
        }

    });


});
