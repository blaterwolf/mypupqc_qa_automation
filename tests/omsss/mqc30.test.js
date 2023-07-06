const { Builder, By, until, WebElement, Button } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-30: Guidance Request History Page', () => {
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

    test('Should load the Counseling History Page', async () => {
        await driver.sleep(5000)
        const counselHisSideBarXPath ='//*[@id="navbar-nav"]/div[1]/div[2]/div/div/div/li[9]/a/span'  

        await driver.findElement(By.xpath(counselHisSideBarXPath)).click()
        
        await driver.sleep(5000)
    }, 30000)

    test('Should be able to view the Patient Profile when click the blue button below the action', async () => {
        await driver.sleep(5000)

        const viewButtonXPath ='//*[@id="done_appointments_table"]/tbody/tr[1]/td[5]/div/button/i'  
        await driver.findElement(By.xpath(viewButtonXPath)).click()
        await driver.sleep(5000)

        const closeFormXPath = '//*[@id="viewGuidanceModal"]/div/div/div[1]/button'
        await driver.findElement(By.xpath(closeFormXPath)).click()

        await driver.sleep(5000)
    }, 30000)

    test('Should be able to click and view all Cancelled by Staff', async () => {
        await driver.sleep(5000)
        const viewCancelledXPath ='//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[3]/div/div/div[1]/div/ul/li[2]/a'  

        await driver.findElement(By.xpath(viewCancelledXPath)).click()
        
        await driver.sleep(5000)
    }, 30000)

    test('Should be able to view the Patient Profile when click the blue button below the action', async () => {
        await driver.sleep(5000)

        const viewPatientXPath ='//*[@id="cancelled_staff_appointments_table"]/tbody/tr[1]/td[5]/div/button/i'  
        await driver.findElement(By.xpath(viewPatientXPath)).click()
        await driver.sleep(5000)

        const closeFormXPath = '//*[@id="viewGuidanceModal"]/div/div/div[1]/button'
        await driver.findElement(By.xpath(closeFormXPath)).click()

        await driver.sleep(5000)
    }, 30000)


    test('Should be able to click and view all Cancelled by Student', async () => {
        await driver.sleep(5000)
        const viewFormXPath ='//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[3]/div/div/div[1]/div/ul/li[3]/a'
        await driver.findElement(By.xpath(viewFormXPath)).click()

        await driver.sleep(5000)
    }, 30000)

    /* test('Should be able to view the Patient Profile when click the blue button below the action', async () => {
        await driver.sleep(5000)
        const viewFormXPath =''
        await driver.findElement(By.xpath(viewFormXPath)).click()
        await driver.sleep(5000)

        const closeFormXPath = '//*[@id="viewGuidanceModal"]/div/div/div[1]/button'
        await driver.findElement(By.xpath(closeFormXPath)).click()
        
        await driver.sleep(5000)
    }, 30000) */

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
