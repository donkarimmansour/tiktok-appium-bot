import NordVpn from '../../flows/account/NordVpn'

describe(`Account Function for ${browser.capabilities.deviceName}`, () => {

    it('Change Ip NordVpn', async () => {

        await driver.startActivity("com.nordvpn.android" , ".MainActivity")

        const NordVpnTest = new NordVpn()
        await NordVpnTest.ChangeIp()

        await browser.pause(20000)

    });

});
