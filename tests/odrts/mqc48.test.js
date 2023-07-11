const { Builder, By, until } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('Login to PUP Staff and approvals should only appear with ongoing status', () => {
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
        driver.sleep(2000)
    }, 30000)

test ('An option  "Approvals"  is expected', async () => {
    const approvalsLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[6]/a'
    await driver.sleep(2000)
    const approvalsLink = await driver.wait(
        until.elementLocated(By.xpath(approvalsLinkXPath)),
        20000
    )

        expect(approvalsLink).toBeDefined()
}, 20000)

test ('Should load the approvals Page', async () => {
    const approvalsLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[6]/a'
    await driver.sleep(2000)
    await driver.findElement(By.xpath(approvalsLinkXPath)).click()
    await driver.sleep(2000)
}, 20000)

test('Should load the list of documents to be approved', async () => {
    const approvalslistXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[1]/div/div[3]/div[2]/table/tbody/tr[1]/td[1]/span'
    const approvalslist = await driver.wait(
        until.elementLocated(By.xpath(approvalslistXPath)),
        20000
    )

    expect(approvalslist).toBeDefined()
}, 20000)

test ('View details of the document', async () => {
    const viewdetailsXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[1]/div/div[3]/div[2]/table/tbody/tr[1]/td[4]/div/button'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(viewdetailsXPath)).click()
    await driver.sleep(3000)
}, 20000)

test ('Should be able to see the ongoing status on the current logged staff', async () => {
    const ongoingstatus1XPath = '/html/body/div[1]/div[3]/div[3]/div/div/div[1]/div[1]/div/div[2]/div/div[2]/div/a/div/div[3]/span'
    const closebuttonXPath = '/html/body/div[1]/div[3]/div[3]/div/div/div[2]/button'
    await driver.sleep(3000)
    const ongoingstatus = await driver.wait(
        until.elementLocated(By.xpath(ongoingstatus1XPath)),
        20000
    )

    expect(ongoingstatus).toBeDefined()
    await driver.sleep(3000)
    await driver.findElement(By.xpath(closebuttonXPath)).click()
    await driver.sleep(3000)
}, 20000)

test ('All pending requests should have "ongoing status" when viewing it', async () => {
    const viewdetails2XPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[1]/div/div[3]/div[2]/table/tbody/tr[2]/td[4]/div/button'
    const viewdetails3XPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[1]/div/div[3]/div[2]/table/tbody/tr[3]/td[4]/div/button'
    const ongoingstatus2XPath = '/html/body/div[1]/div[3]/div[3]/div/div/div[1]/div[1]/div/div[2]/div/div[1]/div/a/div/div[3]/span'
    const ongoingstatus3XPath = '/html/body/div[1]/div[3]/div[3]/div/div/div[1]/div[1]/div/div[6]/div/div[2]/div/a/div/div[3]/span'
    const closebutton2XPath = '/html/body/div[1]/div[3]/div[3]/div/div/div[2]/button'
    const closebutton3XPath = '/html/body/div[1]/div[3]/div[3]/div/div/div[2]/button'
    await driver.sleep(1000)
    await driver.findElement(By.xpath(viewdetails2XPath)).click()
    await driver.sleep(1000)
    const ongoingstatus2 = await driver.wait(
        until.elementLocated(By.xpath(ongoingstatus2XPath)),
        20000
    )

    expect(ongoingstatus2).toBeDefined()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(closebutton2XPath)).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(viewdetails3XPath)).click()
    await driver.sleep(1000)
    const ongoingstatus3 = await driver.wait(
        until.elementLocated(By.xpath(ongoingstatus3XPath)),
        20000
    )

    expect(ongoingstatus3).toBeDefined()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(closebutton3XPath)).click()
    await driver.sleep(1000)
}, 20000)
})