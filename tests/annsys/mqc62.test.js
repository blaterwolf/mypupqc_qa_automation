const { Builder, By, until } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('Login to PUP Staff and Document Page should be functional', () => {
    let driver

    beforeAll(async() => {
        driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
    })

    afterAll(async () => {
        await driver.quit()
    })

test ('Should be able to Login to Student', async () => {
        await loginToStudent(driver)

        // Check if the login was successful by looking for an element that should be present after logging in
        const loggedInElementXPath = '/html/body/div/div[3]/div/div/div[1]/div/div'
        const loggedInElement = await driver.wait(
            until.elementLocated(By.xpath(loggedInElementXPath)),
            20000
        )

        expect(loggedInElement).toBeDefined()
    }, 20000)

test ('Under "Menu", a "Dashboard" page is expected.', async () => {
        const dashboardLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[2]/a'
        const dashboardLink = await driver.wait(
            until.elementLocated(By.xpath(dashboardLinkXPath)),
            20000
        )
        expect(dashboardLink).toBeDefined()
}, 20000)



})