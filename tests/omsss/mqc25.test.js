const { Builder, By, until, WebElement, Button } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-25: Medical Request Page', () => {
    let driver

    beforeAll(async () => {
        driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
    })

    afterAll(async () => {
        await driver.quit()
    })

    test('Should be able to Login to Staff', async () => {
        await loginToStaff(driver)

        // Check if the login was successful by looking for an element that should be present after logging in
        const loggedInElementXPath = '/html/body/div/div[3]/div/div/div[1]/div/div'
        const loggedInElement = await driver.wait(
            until.elementLocated(By.xpath(loggedInElementXPath)),
            5000
        )

        expect(loggedInElement).toBeDefined()
    }, 30000)

    test('Should load the Medical Request Page', async () => {
        await driver.sleep(5000)

        const requestsSidebarXPath ='//*[@id="navbar-nav"]/div[1]/div[2]/div/div/div/li[10]/a'  

        await driver.findElement(By.xpath(requestsSidebarXPath)).click()
        
        await driver.sleep(5000)
    }, 15000)

    test('Should load the all pending Medical Request at the table', async () => {
        await driver.sleep(5000)

        const pendingRequestsSidebarXPath ='//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[3]/div/div/div[1]/div/ul/li[1]/a'  

        await driver.findElement(By.xpath(pendingRequestsSidebarXPath)).click()
        
        await driver.sleep(5000)
    }, 15000)

    test('Should be able to click and view all Approved by Staff Medical Request Tab', async () => {
        await driver.sleep(5000)

        const pendingRequestsXPath ='//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[3]/div/div/div[1]/div/ul/li[2]/a'  

        await driver.findElement(By.xpath(pendingRequestsXPath)).click()
        
        await driver.sleep(5000)
    }, 15000)

    test('Should be able to click and view the patient profile/case details in Approved tab', async () => {
        await driver.sleep(5000)

        const approvedRequestsXPath ='//*[@id="approved-datatables"]/tbody/tr[1]/td[5]/div/button'  

        await driver.findElement(By.xpath(approvedRequestsXPath)).click()
        await driver.sleep(5000)
        
        const closeRequestXPath ='//*[@id="viewApprovedRequest"]/div/div/div[3]/button'
        await driver.findElement(By.xpath(closeRequestXPath)).click()
        await driver.sleep(5000)
    }, 30000)

    test('Should be able to click view and close in requests and leave a remark', async () => {
        await driver.sleep(5000)
        await driver.executeScript("arguments[0].scrollIntoView(true);", footer);
        const pickUpFormXPath ='//*[@id="readyForPickupRequestForm"]/div[2]/button'
        await driver.findElement(By.xpath(pickUpFormXPath)).click()

        const remarks = 'Approved!'
        const remarksXPath ='//*[@id="remarks"]'
        await driver.findElement(By.xpath(remarksXPath)).sendKeys(remarks) 

        
        await driver.sleep(5000)
    }, 15000)

})
