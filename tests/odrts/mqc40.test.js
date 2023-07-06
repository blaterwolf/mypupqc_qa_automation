const { Builder, By, until } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('Login to PUP Staff and Evaluation Page should be functional', () => {
    let driver

    beforeAll(async() => {
        driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
    })

    afterAll(async () => {
        driver.quit()  
    })

test ('Should be able to Login to Employee', async () => {
        await loginToStaff(driver)

        // Check if the login was successful by looking for an element that should be present after logging in
        const loggedInElementXPath = '/html/body/div/div[3]/div/div/div[1]/div/div'
        const loggedInElement = await driver.wait(
            until.elementLocated(By.xpath(loggedInElementXPath)),
            30000
        )

        expect(loggedInElement).toBeDefined()
        driver.sleep(5000)
    }, 30000)

test ('An option  "Evaluations"  is expected', async () => {
    const evaluationLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[12]/a'
    const evaluationLink = await driver.wait(
        until.elementLocated(By.xpath(evaluationLinkXPath)),
        20000
    )

        expect(evaluationLink).toBeDefined()
}, 20000)

test ('Should load the Evaluation Page', async () => {
    const evaluationLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[12]/a'

    await driver.findElement(By.xpath(evaluationLinkXPath)).click() 
}, 20000)

test ('Should load the Analytics for Evaluation', async () => {
    const reqAnalyticsXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div[1]/div/div[2]'

    expect(reqAnalyticsXPath).toBeDefined()
    driver.sleep(3000)
}, 20000)

})