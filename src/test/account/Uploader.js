import Uploader from '../../flows/account/Uploader'
import allureReporter from '@wdio/allure-reporter'

describe(`Account Function for ${browser.capabilities.deviceName}`, () => {

    it('Upload Video', async () => {
        allureReporter.addTestId("Uploader_001")
        allureReporter.addSeverity("normal")
 

        const UploaderTest = new Uploader("#123" , 3)
        await UploaderTest.UploadVideo()


    });

    
});
