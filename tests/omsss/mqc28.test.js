const { Builder, By, until, WebElement, Button } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-28: PUP Staff for Dental Requests History Page', () => {
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

    test('Should be able to navigate to "Dental Request History"', async () => {
        await driver.sleep(5000)

        const dentalRequestsXPath ='//*[@id="navbar-nav"]/div[1]/div[2]/div/div/div/li[9]/a/span'  

        await driver.findElement(By.xpath(dentalRequestsXPath)).click()
        
        await driver.sleep(5000)
    }, 15000)

    test('Should be able to click view button and see patient appointment information', async () => {
        await driver.sleep(5000)

        const viewDoneAppointmentXpath ='//*[@id="done_appointments_table"]/tbody/tr[1]/td[5]/div/button/i'
        await driver.findElement(By.xpath(viewDoneAppointmentXpath)).click()
        await driver.sleep(5000)

        const closeDentalModalXpath ='//*[@id="viewDentalModal"]/div/div/div[1]/button'
        await driver.findElement(By.xpath(closeDentalModalXpath)).click()

        await driver.sleep(5000)
    }, 30000)

    test('Should be able to look up students with done requests using search function', async () => {
        await driver.sleep(5000)
        
        const searchButton = 'Jobart M. Xavier III'
        const searchButtonXpath ='//*[@id="done_appointments_table_filter"]/label/input'
        await driver.findElement(By.xpath(searchButtonXpath)).click()
        await driver.findElement(By.xpath(searchButtonXpath)).sendKeys(searchButton)

        await driver.sleep(5000)
    }, 15000)
    

    test('Should be able to view table of appointments marked as "Cancelled by Staff"', async () => {
        await driver.sleep(5000)

        const viewTabStaffXPath ='//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[3]/div/div/div[1]/div/ul/li[2]/a'  
        await driver.findElement(By.xpath(viewTabStaffXPath)).click()

        /* const viewDoneAppointmentXpath ='//*[@id="done_appointments_table"]/tbody/tr[1]/td[5]/div/button/i'
        await driver.findElement(By.xpath(viewDoneAppointmentXpath)).click()

        const closeDentalModalXpath ='//*[@id="viewDentalModal"]/div/div/div[1]/button'
        await driver.findElement(By.xpath(closeDentalModalXpath)).click() */
        
        await driver.sleep(5000)
    }, 15000)

    test('Should be able to view table of appointments marked as "Cancelled by Student"', async () => {
        await driver.sleep(5000)

        const viewTabStudentXPath ='//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[3]/div/div/div[1]/div/ul/li[3]/a'  
        await driver.findElement(By.xpath(viewTabStudentXPath)).click()

        const viewDoneAppointmentXpath ='//*[@id="cancelled_student_appointments_table"]/tbody/tr[1]/td[5]/div/button'
        await driver.findElement(By.xpath(viewDoneAppointmentXpath)).click()

        const closeDentalModalXpath ='//*[@id="viewDentalModal"]/div/div/div[1]/button'
        await driver.findElement(By.xpath(closeDentalModalXpath)).click()
        
        await driver.sleep(5000)
    }, 15000)
    
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
