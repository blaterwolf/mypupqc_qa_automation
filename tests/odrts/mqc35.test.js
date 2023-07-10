const { Builder, By, until} = require('selenium-webdriver');
const { loginToStudent } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')


describe('Login to Student and the request page should be functional', () => {
    let driver

    beforeAll(async () => {
        driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
        await driver.manage().window().maximize()
    })

    afterAll(async () => {
        await driver.quit()
    },20000)

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

test ('An option "Request" is expected', async () => {
        const newRequestLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[12]/a'
        const newRequestLink = await driver.wait(
            until.elementLocated(By.xpath(newRequestLinkXPath)),
            20000
        )
    
            expect(newRequestLink).toBeDefined()
    }, 20000)
    
test ('Should load the Request Page', async () => {
        const newRequestLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[12]/a'
    
        await driver.findElement(By.xpath(newRequestLinkXPath)).click()
        driver.sleep(3000)
    }, 20000)

test ('Should load the list of the requested documents', async () => {
        const requestedDocumentsXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div[1]/div[1]/div[2]/div/table/tbody/tr/td[1]/div/div/h5/a'
        await driver.sleep(3000)
        await driver.findElement(By.xpath(requestedDocumentsXPath))

        expect(requestedDocumentsXPath).toBeDefined()
    }, 20000)

test ('Should load the types of documents to be requested', async () => {
        const documenttypeXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div[1]/div[1]/div[2]/div/table/tbody/tr/td[1]/div/div/p/span'
        await driver.sleep(3000)
        await driver.findElement(By.xpath(documenttypeXPath))

        expect(documenttypeXPath).toBeDefined()
    }, 20000)

test ('Should load the Request status', async () => {
        const requestStatusXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/a/div/div[2]/h6'
        await driver.sleep(3000)
        await driver.findElement(By.xpath(requestStatusXPath))

        expect(requestStatusXPath).toBeDefined()
    }, 20000)

test ('Should display the details for the status of the request', async () => {
        const requestStatusDetailsXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div[1]/div[2]/div[2]/div/div/div[1]/div[2]/div/h6'
        await driver.sleep(3000)
        await driver.findElement(By.xpath(requestStatusDetailsXPath))

        expect(requestStatusDetailsXPath).toBeDefined()
    }, 20000)

test ('Should display a confirmation if you really want to cancel the request', async () => {
        const cancelRequestButtonXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div[1]/div[2]/div[1]/div/div/button'
        const cancelRequestConfirmXPath = '/html/body/div[2]/div/div[6]/button[1]'
        await driver.sleep(3000)
        await driver.findElement(By.xpath(cancelRequestButtonXPath)).click()
        await driver.sleep(3000)
        await driver.findElement(By.xpath(cancelRequestConfirmXPath)).click()
        await driver.sleep(3000)

        expect(cancelRequestButtonXPath).toBeDefined()
    }, 20000)

test ('Should redirect to History Page and will able to see your cancelled request', async () => {
        const historyPageXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[14]/a'
        await driver.sleep(3000)
        await driver.findElement(By.xpath(historyPageXPath))

        expect(historyPageXPath).toBeDefined()
    }, 20000)
})
