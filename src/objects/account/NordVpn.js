const Conect_Err = '//*[@text="It’s taking a bit longer than usual"]'
const Conecting = '//*[@text="Finding the best server…"]'
const Conect_Try_Again = '//*[@text="TRY AGAIN"]'

// const Conect_Country = '//*[@text="Ireland"]'
// const Conected = '//*[contains(@text,"Connected to Ireland")]'

class NordVpn {

    async swape_to_top() {
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: 500,
                    y: 2000
                }
            },
            {
                action: 'wait',
                options: { ms: 500 }
            },
            {
                action: 'moveTo',
                options: {
                    x: 500,
                    y: 200
                }
            },
            {
                action: 'release',
                options: {}
            }
        ])

    }

    async conected(country) {
        return await $(`//*[contains(@text,"Connected to ${country}")]`)
    }

    async conect_country(country) {
        return await $(`//*[@text="${country}"]`)
    }

    async conect_err() {
        return await $(Conect_Err)
    }

    async conecting() {
        return await $(Conecting)
    }

    async conect_try_again() {
        return await $(Conect_Try_Again)
    }

}

export default new NordVpn()
