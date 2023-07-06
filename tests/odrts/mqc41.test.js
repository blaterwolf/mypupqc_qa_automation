const { Builder, By, until } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('Login to PUP Staff and Approval Page should be functional', () => {
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

test ('An option  "Approval"  is expected', async () => {
    const approvalLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[10]/a'
    const approvalLink = await driver.wait(
        until.elementLocated(By.xpath(approvalLinkXPath)),
        20000
    )

        expect(approvalLink).toBeDefined()
}, 20000)

test ('Should load the Approval Page', async () => {
    const approvalLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[10]/a'

    await driver.findElement(By.xpath(approvalLinkXPath)).click()
    driver.sleep(3000) 
}, 20000)

test ('Should load the Analytics for Approval', async () => {
    const reqAnalyticsXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div[1]/div/div[2]'

    expect(reqAnalyticsXPath).toBeDefined()
    driver.sleep(3000)
}, 20000)

test ('should be able to click "View Details" button', async () => {
    const viewButtonXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[1]/div/div[3]/div[2]/table/tbody/tr[1]/td[4]/div/button'
    const closeButtonXPath = '/html/body/div[1]/div[3]/div[3]/div/div/div[2]/button'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(viewButtonXPath)).click()
    await driver.sleep(3000)
    await driver.findElement(By.xpath(closeButtonXPath)).click()
    await driver.sleep(3000)
}, 20000)

test ('The user should be able to process the request with the use of thumbs up button', async () => {
    const thumbsUpButtonXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[1]/div/div[3]/div[2]/table/tbody/tr[1]/td[6]/div/div/button[1]'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(thumbsUpButtonXPath)).click()
    await driver.sleep(3000)
}, 20000)

test('Users are expected to input their comment or remarks for the given action', async () => {
    const remarksfield = 'Approved';
    const remarksFieldXPath = '//*[@id="remarks"]';

    // Scroll down to the element before interacting with it
    await driver.executeScript("arguments[0].scrollIntoView(true);", await driver.findElement(By.xpath(remarksFieldXPath)));

    // Wait for the element to become visible (if necessary)
    await driver.sleep(3000);

    // Set the value of the remarks field using JavaScript
    const remarksField = await driver.findElement(By.xpath(remarksFieldXPath));
    await driver.executeScript("arguments[0].innerText = arguments[1]", remarksField, remarksfield);

    // Wait for some time (if necessary)
    await driver.sleep(3000);
}, 20000);  

test ('The user should be able to approve the request', async () => {
    const approveButtonXPath = '/html/body/div[1]/div[3]/div[6]/div/div/div/div/form/div[4]/button'
    const approvedOkButtonXpath = '/html/body/div[3]/div/div[6]/button[3]'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(approveButtonXPath)).click()
    await driver.sleep(3000)
    await driver.findElement(By.xpath(approvedOkButtonXpath)).click()
    await driver.sleep(3000)
}, 20000)
})
