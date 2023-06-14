const { Builder, By, until } = require('selenium-webdriver')
const { loginToStudent } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('View and Update Patient Information', () => {
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
    }, 15000)

    test('should successfully navigate to patient information page', async () => {
        // click health information on the sidebar
        const healthInformationXPath =
            '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[16]/a'
        const healthInformation = await driver.wait(
            until.elementLocated(By.xpath(healthInformationXPath)),
            3000
        )
        await healthInformation.click()

        // click patient information
        const patientInformationXPath =
            '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[16]/div/ul/li[1]/a'
        const patientInformation = await driver.wait(
            until.elementLocated(By.xpath(patientInformationXPath)),
            3000
        )
        await patientInformation.click()

        await driver.sleep(5000)
    }, 15000)

    test('should successfully fillout and update patient information', async () => {
        // fillout
        const contactPersonValue = 'Jhenny Jobart'
        const contactPersonXpath = '//*[@id="emergency_contact_name"]'
        const primaryContactNumberValue = '09123456789'
        const primaryContactNumberXpath = '//*[@id="emergency_contact_number"]'
        const emailValue = 'jhennyjobart@gmail.com'
        const emailXpath = '//*[@id="emergency_contact_email"]'
        const checkSameAddressXpath = '//*[@id="formCheck1"]'
        const philHealthNumberValue = '01-025131564-2'
        const philHealthNumberXpath = '//*[@id="philhealth_number"]'
        const agreeToTermsXpath = '//*[@id="privacy"]'

        // fillout contact person using xpath no need to use until
        await driver.findElement(By.xpath(contactPersonXpath)).sendKeys(contactPersonValue)
        await driver
            .findElement(By.xpath(primaryContactNumberXpath))
            .sendKeys(primaryContactNumberValue)
        await driver.findElement(By.xpath(emailXpath)).sendKeys(emailValue)
        await driver.findElement(By.xpath(checkSameAddressXpath)).click()
        await driver.findElement(By.xpath(philHealthNumberXpath)).sendKeys(philHealthNumberValue)
        // await driver.findElement(By.xpath(agreeToTermsXpath)).click()

        await driver.sleep(10000)
    }, 15000)
})
