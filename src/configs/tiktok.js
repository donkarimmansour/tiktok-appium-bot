const { config } = require('./main');

config.capabilities = [{
    "appium:platformName": "Android",
    "appium:automationName": "UiAutomator2",
    "appium:udid": "cc10dca30409",
    "appium:deviceName": "Redmi 9",
    "appium:autoGrantPermissions": true,

    // "appium:appPackage": "com.nordvpn.android",
    // "appium:appActivity": ".mobile.main.ControlActivity",
    // "appium:noReset": true,

    "appium:appActivity": "com.ss.android.ugc.aweme.splash.SplashActivity",
    "appium:appPackage": "com.zhiliaoapp.musically",
    "appium:noReset": true,

    //"appium:autoAcceptAlerts": true,

}]

config.specs = [
    './src/bot/v2.js',



    //'./src/bot/v1.js',
    //'./src/bot/v2.js',
    //'./src/bot/v3.js',
]

exports.config = config

