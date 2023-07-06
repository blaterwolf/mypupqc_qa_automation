const { Builder, By, until, WebElement, Button } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-26: Medical Request History Page', () => {
    let driver

    beforeAll(async () => {
        driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
        await driver.manage().window().maximize()
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

    test('Should load the Medical Request History Page', async () => {
        await driver.sleep(5000)

        const medReqHistoXPath ='//*[@id="navbar-nav"]/div[1]/div[2]/div/div/div/li[11]/a/span'  

        await driver.findElement(By.xpath(medReqHistoXPath)).click()
        
        await driver.sleep(5000)
    }, 15000)

    test('Should load the all Done Medical Request History at the table', async () => {
        await driver.sleep(5000)

        const medReqHisXPath ='//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[3]'  

        await driver.findElement(By.xpath(medReqHisXPath)).click()
        
        await driver.sleep(5000)
    }, 15000)

    test('Should be able to click and view all Cancelled by Staff in Medical Request Tab', async () => {
        await driver.sleep(5000)

        const cancelledByStaffXPath ='//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[3]'  
        await driver.findElement(By.xpath(cancelledByStaffXPath)).click()
        
        const elementToScroll = await driver.findElement(By.xpath('//*[@id="staff-history-datatable_next"]/a'))
        await driver.executeScript('arguments[0].scrollIntoView();', elementToScroll)

        await driver.sleep(5000)
    }, 15000)


    test('Should be able to click and view the patient profile/case details in Approved tab', async () => {
        await driver.sleep(5000)
        const viewFormXPath ='//*[@id="staff-history-datatable"]/tbody/tr[9]/td[7]/button'
        await driver.findElement(By.xpath(viewFormXPath)).click()

        await driver.sleep(5000)
        const closeFormXPath ='//*[@id="viewRequestDetails"]/div/div/div[3]/button'
        await driver.findElement(By.xpath(closeFormXPath)).click()
        
        await driver.sleep(5000)
    }, 30000)

    test('Should be able to successfully log out of the system', async () => {
        
        const dropDownXPath = '//*[@id="full_name"]'
        await driver.findElement(By.xpath(dropDownXPath)).click()
        await driver.sleep(5000)

        const logoutXPath = '//*[@id="page-topbar"]/div/div/div[2]/div/div/a[4]/span'
        await driver.findElement(By.xpath(logoutXPath)).click()
        await driver.sleep(5000)
        
        const confirmLogoutXPath = '/html/body/div[2]/div/div[6]/button[1]'
        await driver.findElement(By.xpath(confirmLogoutXPath)).click()
        await driver.sleep(5000)
    }, 30000)

})
