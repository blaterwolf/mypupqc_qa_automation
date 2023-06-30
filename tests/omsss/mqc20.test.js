const { Builder, By, until, WebElement } = require('selenium-webdriver')
const { loginToStudent } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-20: Health History Page', () => {
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
        await driver.sleep(5000)

        const healthHistorySidebarXPath ='/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[16]'  

        await driver.findElement(By.xpath(healthHistorySidebarXPath)).click()
        
        await driver.sleep(5000)
    }, 15000)

    test('Should load the Health History Page', async () => {
        await driver.sleep(5000)

        const healthHistoryPageXPath =
            '//*[@id="sidebarHealthInfo"]/ul/li[2]/a'

        await driver.findElement(By.xpath(healthHistoryPageXPath)).click()

        await driver.sleep(5000)
    }, 15000)

    test('Should be able to click and choose in "Medical History"', async () => {
        
        const checkboxXPath = '//*[@id="#medical_history"]'
        const checkbox = await driver.findElement(By.xpath(checkboxXPath))
        await checkbox.click()

        await driver.sleep(5000)
    }, 30000) 

    test('Should be able to click and choose in "Social History"', async () => {
        
        const checkboxXPath = '//*[@id="alcohol_history"]'

        const checkbox = await driver.findElement(By.xpath(checkboxXPath))
        await checkbox.click()

        await driver.sleep(5000)
    }, 30000) 
    
    test('Should be able to add text in "Allergy"', async () => {

    const allergy = 'wasp/bee stings'
        const allergyXPath =
            '//*[@id="allergy"]'
        
        await driver.findElement(By.xpath(allergyXPath)).sendKeys(allergy)

        await driver.sleep(5000)
    }, 15000)

    test('Should be able to add text in "Family History"', async () => {

        const familyHistory = 'Asthma'
        const familyHistoryXPath ='//*[@id="family_history"]'
            
        await driver.findElement(By.xpath(familyHistoryXPath)).sendKeys(familyHistory)
        await driver.sleep(5000)
    }, 15000)

    test('Should be able to add text in "Medication"', async () => {

        const medications = 'Cocaine'
        const medicationsXPath ='//*[@id="medications"]'
            
        await driver.findElement(By.xpath(medicationsXPath)).sendKeys(medications)
        await driver.sleep(5000)

        const checkboxXPath = '//*[@id="privacy"]';
        const checkbox = await driver.findElement(By.xpath(checkboxXPath));

        await driver.executeScript("arguments[0].scrollIntoView(true);", checkbox)
        await driver.sleep(5000)

        await checkbox.click()
        await driver.sleep(5000)
    }, 30000)
    
    
})
