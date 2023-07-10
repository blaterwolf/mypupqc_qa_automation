const { Builder, By, until} = require('selenium-webdriver');
const { loginToStudent } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')


describe('Login to Student and the History page should be functional', () => {
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

test ('An option "History" is expected', async () => {
        const HisotryLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[14]/a'
        const newRequestLink = await driver.wait(
            until.elementLocated(By.xpath(HisotryLinkXPath)),
            20000
        )
    
            expect(newRequestLink).toBeDefined()
    }, 20000)
    
test ('Should load the History Page', async () => {
        const HisotryLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[14]/a'
    
        await driver.findElement(By.xpath(HisotryLinkXPath)).click()
        driver.sleep(3000)
    }, 20000)

test ('Should load the list history with their control number and status', async () => {
        const controlnumberXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[1]/span'
        const statusXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[6]/div'
        await driver.sleep(3000)
        await driver.findElement(By.xpath(controlnumberXPath))
        await driver.findElement(By.xpath(statusXPath))

        expect(controlnumberXPath).toBeDefined()
        expect(statusXPath).toBeDefined()
    }, 20000)

test ('Should be able to show entries depends on number entered', async () => {
        const showEntriesXPath = '//*[@id="history-datatable_info"]'
        const showEntries = await driver.wait(
            until.elementLocated(By.xpath(showEntriesXPath)),
            20000
        )
    
            expect(showEntries).toBeDefined()
    }, 20000)

test ('Should be able to search entries on the search bar', async () => {
        const searchfield = 'CTRL-3377903362590'
        await driver.sleep(3000)
        const searchfieldXpath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/div/div[2]/div[2]/div/label/input'
        await driver.sleep(3000)
        await driver.findElement(By.xpath(searchfieldXpath)).sendKeys(searchfield)
        await driver.sleep(3000)
        await driver.findElement(By.xpath(searchfieldXpath)).clear()
        await driver.sleep(3000)
    }, 20000)

test ('Should be able to sort by control number, date filed, payment status, details, date released/cancelled, and request status', async () => {
        const controlnumberXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/div/div[3]/div/table/thead/tr/th[1]'
        const datefiledXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/div/div[3]/div/table/thead/tr/th[2]'
        const paymentstatusXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/div/div[3]/div/table/thead/tr/th[3]'
        const detailsXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/div/div[3]/div/table/thead/tr/th[4]'
        const datereleasedcancelledXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/div/div[3]/div/table/thead/tr/th[5]'
        const requeststatusXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/div/div[3]/div/table/thead/tr/th[6]'
        await driver.sleep(3000)

        await driver.findElement(By.xpath(controlnumberXPath)).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath(datefiledXPath)).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath(paymentstatusXPath)).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath(detailsXPath)).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath(datereleasedcancelledXPath)).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath(requeststatusXPath)).click()
        await driver.sleep(1000)
    }, 20000)

test ('Should be able to click the ? Icon to know the meaning of the request status', async () => {
        const questionmarkXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr/td[6]/div/button'
        const questionmarkcloseXPath = '/html/body/div[1]/div[3]/div[2]/div/div/div[1]/button'
        await driver.sleep(3000)
        await driver.findElement(By.xpath(questionmarkXPath)).click()
        await driver.sleep(3000)
        await driver.findElement(By.xpath(questionmarkcloseXPath)).click() 
        await driver.sleep(3000)
    }, 20000)

test ('Should be able to press the view button for viewing the details of the request', async () => {
        const viewbuttonXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr/td[7]/div/button[1]'
        const viewclosebuttonXPath = '/html/body/div[1]/div[3]/div[3]/div/div/div[1]/button'
        await driver.sleep(3000)
        await driver.findElement(By.xpath(viewbuttonXPath)).click()
        await driver.sleep(3000)
        await driver.findElement(By.xpath(viewclosebuttonXPath)).click() 
        await driver.sleep(3000)
    }, 20000)

test ('Should be able to press the Client satisfactory survey to add ratings to the request', async () => {
        const surveybuttonXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr/td[7]/div/button[2]'
        const surveydismissbuttonXPath = '/html/body/div[1]/div[3]/div[4]/div/div/div/div/button'
        await driver.sleep(3000)
        await driver.findElement(By.xpath(surveybuttonXPath)).click()
        await driver.sleep(3000)
        await driver.findElement(By.xpath(surveydismissbuttonXPath)).click() 
        await driver.sleep(3000)
    }, 20000)
})