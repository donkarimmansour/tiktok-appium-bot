const { config } = require('./main');

config.capabilities = [{
    "appium:platformName": "Android",
    "appium:automationName": "UiAutomator2",
    "appium:udid": "cc10dca30409",
    "appium:deviceName": "Redmi 9",
    "appium:autoGrantPermissions": true,
    "appium:dontStopAppOnReset": true,
    "appium:appActivity": "com.ss.android.ugc.aweme.splash.SplashActivity",
    "appium:appPackage": "com.zhiliaoapp.musically",
    "appium:noReset": true,
}]

config.specs = [
    './src/bot/v2.js'
]

exports.config = config

