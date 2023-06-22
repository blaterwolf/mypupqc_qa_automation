const { Builder, By, until } = require('selenium-webdriver')
const { loginToStudent } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-23: Guidance Consultation Page', () => {
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

    test('A dropdown with options "Medical Consultation", "Dental Consultation", and "Guidance Consultation" is expected', async () => {
        const appointmentSidebarLinkXPath =
            '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[13]/a'

        await driver.findElement(By.xpath(appointmentSidebarLinkXPath)).click()
    }, 15000)

    test('Should load the Guidance Consultation Page', async () => {
        const guidanceConsultationPageXPath =
            '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[13]/div/ul/li[3]/a'

        await driver.findElement(By.xpath(guidanceConsultationPageXPath)).click()

        await driver.sleep(5000)
    }, 15000)

    test('Should be able to click and choose in "Consultation type"', async () => {
        const consultationTypeXPath = '//*[@id="consultation_type"]'

        await driver.findElement(By.xpath(consultationTypeXPath)).click()

        await driver.sleep(5000)
    }, 15000)

    test('Should be able to choose the "appointment date" ahead of the current date', async () => {
        const dateXpath =
            '/html/body/div/div[3]/div/div/div[2]/div/div/div[2]/form/div[1]/div[2]/div/div/div[2]/div/div[2]/div[32]/button'

        await driver.findElement(By.xpath(dateXpath)).click()

        await driver.sleep(5000)
    }, 15000)

    test('Should be able to add text in the "Reason for Consultation"', async () => {
        const reasonText = 'Bullying... saket sad 😔'
        const consultationReasonXPath = '//*[@id="consultation_reason"]'

        await driver.findElement(By.xpath(consultationReasonXPath)).sendKeys(reasonText)

        await driver.sleep(5000)
    }, 15000)

    test('Should be able to submit Appointment Request', async () => {
        const submitButtonXPath = '//*[@id="addGuidanceAppointment"]'

        await driver.findElement(By.xpath(submitButtonXPath)).click()

        const successMessageXPath = '/html/body/div[2]/div/div[2]/div/div/p'

        const successMessage = await driver.wait(
            until.elementLocated(By.xpath(successMessageXPath)),
            5000
        )

        expect(successMessage).toBeDefined()

        const successMessageText = await successMessage.getText()

        expect(successMessageText).toEqual('You have successfully added a Guidance Case!')
    })
})
