// const allure = require('allure-commandline');

exports.config = {
    runner: 'local',
    port: 4723,
    hostname: '127.0.0.1',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 60000000000
    },
    waitforTimeout: 60000000000,
    maxInstances: 1,
    sync: true,

    // specs: [
    //     './src/test_scripts/account/TC_001_Login.js'
    // ],


    // reporters: [
    //     ['allure', {
    //         outputDir: 'allure-results',
    //         disableWebdriverStepsReporting: true,
    //         disableMochaHooks: true,
    //         issueLinkTemplate: "https://mybug-tracker/{}",
    //         tmsLinkTemplate: "https://my-tms/{}"
    //     }]
    // ],


    // onComplete: function () {
    //     const reportError = new Error('Could not generate Allure report')
    //     const generation = allure(['generate', 'allure-results', '--clean'])
    //     return new Promise((resolve, reject) => {
    //         const generationTimeout = setTimeout(
    //             () => reject(reportError),
    //             10000)

    //         generation.on('exit', function (exitCode) {
    //             clearTimeout(generationTimeout)

    //             if (exitCode !== 0) {
    //                 return reject(reportError)
    //             }

    //             console.log('Allure report successfully generated')
    //             resolve()
    //         })
    //     })
    // },

    // afterTest: function (test, context, { error, result, duration, passed, retries }) {
    //     if(error){
    //         browser.takeScreenshot()
    //     }
    // }
}
