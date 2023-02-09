import Login from '../../flows/account/Login'
import allureReporter from '@wdio/allure-reporter'

describe(`Account Function for ${browser.capabilities.deviceName}`, () => {

    it('Login', async () => {
        allureReporter.addTestId("Login_001")
        allureReporter.addSeverity("normal")
 

        const LoginTest = new Login("don@gm.cpm" , "123")
        await LoginTest.LoginToAccount()


    });

    
});
