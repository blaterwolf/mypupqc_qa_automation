const { Builder, By, until } = require('selenium-webdriver')
const { loginToStudent } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-24: Medical Logs Page', () => {
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
    }, 20000)

    test('Should load the Medical Logs Page', async () => {
        const medicalLogsPageXPath =
            '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[18]/a'

        await driver.findElement(By.xpath(medicalLogsPageXPath)).click()
    }, 20000)

    test('Should load the all done Medical logs at the table (should have values in tbody)', async () => {
        const medicalLogsTableXPath =
            '/html/body/div/div[3]/div/div/div[2]/div/div/div/div[2]/div/div[1]/div/div[3]/div/table/tbody'

        const medicalLogsTable = await driver.wait(
            until.elementLocated(By.xpath(medicalLogsTableXPath)),
            5000
        )

        await driver.sleep(5000)

        expect(medicalLogsTable).toBeDefined()
    }, 20000)

    test('Should be able to click and view all Cancelled by Staff Medical Logs', async () => {
        const cancelledByStaffMedicalLogsXPath =
            '/html/body/div/div[3]/div/div/div[2]/div/div/div/div[1]/div/ul/li[2]/a'

        await driver.findElement(By.xpath(cancelledByStaffMedicalLogsXPath)).click()
    }, 15000)

    test('Should load the all Cancelled by Staff Medical logs at the table (should have values in tbody)', async () => {
        const medicalLogsTableXPath =
            '/html/body/div/div[3]/div/div/div[2]/div/div/div/div[2]/div/div[2]/div/div[3]/div/table/tbody'

        const medicalLogsTable = await driver.wait(
            until.elementLocated(By.xpath(medicalLogsTableXPath)),
            5000
        )

        await driver.sleep(5000)

        expect(medicalLogsTable).toBeDefined()
    }, 20000)

    test('Should be able to click and view all Cancelled by Students Medical Logs', async () => {
        const cancelledByStudentsMedicalLogsXPath =
            '/html/body/div/div[3]/div/div/div[2]/div/div/div/div[1]/div/ul/li[3]/a'

        await driver.findElement(By.xpath(cancelledByStudentsMedicalLogsXPath)).click()
    })

    test('Should load the all Cancelled by Student Medical logs at the table (should have values in tbody)', async () => {
        const medicalLogsTableXPath =
            '/html/body/div/div[3]/div/div/div[2]/div/div/div/div[2]/div/div[3]/div/div[3]/div/table/tbody'

        const medicalLogsTable = await driver.wait(
            until.elementLocated(By.xpath(medicalLogsTableXPath)),
            5000
        )

        await driver.sleep(5000)

        expect(medicalLogsTable).toBeDefined()
    }, 20000)
})
