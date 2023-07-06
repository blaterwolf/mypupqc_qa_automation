const { Builder, By, until } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('Login to PUP Staff and History Page should be functional', () => {
    let driver

    beforeAll(async() => {
        driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
        await driver.manage().window().maximize()
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
        driver.sleep(3000)
    }, 30000)

test ('An option  "history"  is expected', async () => {
    const historyLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[11]/a'
    const historyLink = await driver.wait(
        until.elementLocated(By.xpath(historyLinkXPath)),
        20000
    )

        expect(historyLink).toBeDefined()
}, 20000)

test ('Should load the history Page', async () => {
    const historyLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[11]/a'

    await driver.findElement(By.xpath(historyLinkXPath)).click() 
}, 20000)

test ('Should load the Analytics for History', async () => {
    const reqAnalyticsXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div[1]/div'

    expect(reqAnalyticsXPath).toBeDefined()
    driver.sleep(3000)
}, 20000)

test ('Should be able to sort the data in Control Number by clicking the "Control Number" in the History data table', async () => {
    const sortControlNumberXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/table/thead/tr/th[1]'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(sortControlNumberXPath)).click()
    await driver.sleep(3000)
}, 20000)

test ('Should be able to sort the data in Student by clicking the "Student" in the History data table', async () => {
    const sortStudentXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/table/thead/tr/th[2]'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(sortStudentXPath)).click()
    await driver.sleep(3000)
}, 20000)

test ('Should be able to sort the data in Date Filed by clicking the "Date Filed" in the History data table', async () => {
    const sortDateFieldXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/table/thead/tr/th[3]'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(sortDateFieldXPath)).click()
    await driver.sleep(3000)
}, 20000)

test ('Should be able to sort the data in Payment Status by clicking the "Payment Status" in the History data table', async () => {
    const sortPaymentStatusXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/table/thead/tr/th[4]'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(sortPaymentStatusXPath)).click()
    await driver.sleep(3000)
}, 20000)

test ('Should be able to sort the data in Details by clicking the "Details" in the History data table', async () => {
    const sortDetailsXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/table/thead/tr/th[5]'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(sortDetailsXPath)).click()
    await driver.sleep(3000)
}, 20000)

test ('Should be able to sort the data in Request Status by clicking the "Request Status" in the History data table', async () => {
    const sortRequestStatusXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/table/thead/tr/th[6]'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(sortRequestStatusXPath)).click()
    await driver.sleep(3000)
}, 20000)

test ('Should be able to search for History data using the search field', async () => {
    const searchfield = 'CTRL-3376959843332'
    await driver.sleep(3000)
    const searchFieldXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[2]/label/input'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(searchFieldXPath)).sendKeys(searchfield)
    await driver.sleep(3000)
    await driver.findElement(By.xpath(searchFieldXPath)).clear()
    await driver.sleep(3000)
}, 25000)

test ('Should be able to see a button on the History Action table: for View', async () => {
    const viewButtonXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/table/tbody/tr[1]/td[7]/button'
    const closeButtonXPath = '/html/body/div[1]/div[3]/div[3]/div/div/div[1]/button'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(viewButtonXPath)).click()
    await driver.sleep(3000)
    await driver.findElement(By.xpath(closeButtonXPath)).click()
    await driver.sleep(3000)
}, 25000)

test ('Should be able to view an Process Status Flow by clicking the the"?" button under the "Request Status" column ', async () => {
    const viewProcessStatusFlowXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/table/tbody/tr/td[6]/div/button'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(viewProcessStatusFlowXPath)).click()
    await driver.sleep(3000)
}, 25000)

test ('Should be able to close the view modal by clicking the "Close" button', async () => {
    const closeProcessButtonXPath = '/html/body/div[1]/div[3]/div[2]/div/div/div[1]/button'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(closeProcessButtonXPath)).click()
    await driver.sleep(3000)
}, 25000)
})