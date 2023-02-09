const { config } = require('./main')

config.capabilities = [{
    "appium:platformName": "Android",
    "appium:appPackage": "com.zhiliaoapp.musically",
    //"appium:appPackage": "com.nordvpn.android",
    "appium:appActivity": "com.ss.android.ugc.aweme.splash.SplashActivity",
    //"appium:appActivity": ".MainActivity",
    "appium:automationName": "UiAutomator2",
    "appium:udid": "cc10dca30409",
    //"appium:noReset": true,
    "appium:noReset": false,
    "appium:deviceName": "Redmi 9",
    "appium:autoAcceptAlerts": true,
}]  

config.specs = [ 
    './src/test/account/All.js'
]

exports.config = config

