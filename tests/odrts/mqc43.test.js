const { Builder, By, until } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('Login to PUP Staff and PS should not be able to approve requests without remarks/comments ', () => {
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

test ('An option  "Requests"  is expected', async () => {
    const requestLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[10]/a'
    const requestLink = await driver.wait(
        until.elementLocated(By.xpath(requestLinkXPath)),
        20000
    )

        expect(requestLink).toBeDefined()
}, 20000)

test ('Should load the Requests Page', async () => {
    const requestLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[10]/a'

    await driver.findElement(By.xpath(requestLinkXPath)).click()
    await driver.sleep(3000) 
}, 20000)

test ('The PUP Staff is expected to see the list of request under request for approval', async () => {
    const requestForApprovalXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[1]/div/div[3]/div[2]/table/tbody/tr/td[1]/span'
    const requestForApproval = await driver.wait(
        until.elementLocated(By.xpath(requestForApprovalXPath)),
        20000
    )

    expect(requestForApproval).toBeDefined()
}, 20000)

test ('The PUP Staff is not allowed to approved the request without inserting any remarks/ comments', async () => {
    const reqapproveButtonXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[1]/div/div[3]/div[2]/table/tbody/tr/td[6]/div/button[1]'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(reqapproveButtonXPath)).click()
    await driver.sleep(3000)
}, 20000)

test ('the PUP Staff should received an error message to insert a comment ', async () => {
    const approveButtonXPath = '/html/body/div[1]/div[3]/div[5]/div/div/div/div/form/div[2]/button'
    const errorMessageXPath = '/html/body/div[1]/div[3]/div[5]/div/div/div/div/form/div[1]/div'
    const dismissButtonXPath = '/html/body/div[1]/div[3]/div[5]/div/div/div/div/button'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(approveButtonXPath)).click()
    await driver.sleep(3000)
    const errorMessage = await driver.wait(
        until.elementLocated(By.xpath(errorMessageXPath)),
        20000
    )
    expect(errorMessage).toBeDefined()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(dismissButtonXPath)).click()
    await driver.sleep(1000)
}, 20000)

test ('The user should be able to see the realtime update through "View details"', async () => {
    const viewDetailsXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[1]/div/div[3]/div[2]/table/tbody/tr/td[4]/div/button'
    const realtimeUpdateXPath = '//*[@id="pending_for_clearance_datetime"]'
    await driver.sleep(1000)
    await driver.findElement(By.xpath(viewDetailsXPath)).click()
    await driver.sleep(1000)
    const realtimeUpdate = await driver.wait(
        until.elementLocated(By.xpath(realtimeUpdateXPath)),
        20000
    )
    expect(realtimeUpdate).toBeDefined()
    await driver.sleep(1000)
}, 20000)
})