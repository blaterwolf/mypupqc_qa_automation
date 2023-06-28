const { Builder, By, until } = require('selenium-webdriver')
const { loginToStudent } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-19: Patient Information Page', () => {
    let driver

    beforeAll(async () => {
        driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
    })

    afterAll(async () => {
        await driver.quit()
    })

    test('should successfully login to student portal', async () => {
        await loginToStudent(driver)

        // Check if the login was successful by looking for an element that should be present after logging in
        const loggedInElementXPath = '/html/body/div/div[3]/div/div/div[1]/div/div'
        const loggedInElement = await driver.wait(
            until.elementLocated(By.xpath(loggedInElementXPath)),
            5000
        )

        expect(loggedInElement).toBeDefined()
    }, 30000)

    test('A dropdown with options "Patient Information" and "Health History" is expected', async () => {
        const healthHistorySidebarXPath ='/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[16]'  

        await driver.findElement(By.xpath(healthHistorySidebarXPath)).click()
        
        await driver.sleep(5000)
    }, 30000)

    test('Should load the Health History Page', async () => {
        const healthHistoryPageXPath =
            '//*[@id="sidebarHealthInfo"]/ul/li[2]/a'

        await driver.findElement(By.xpath(healthHistoryPageXPath)).click()

        await driver.sleep(5000)
    }, 30000)

})
