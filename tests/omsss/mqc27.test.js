const { Builder, By, until, WebElement, Button } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-27: Dental Requests Page', () => {
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

    test('Should be able to navigate to the Dental Requests page and  view Pending dental consultations', async () => {
        await driver.sleep(5000)

        const dentalRequestsXPath ='//*[@id="navbar-nav"]/div[1]/div[2]/div/div/div/li[8]/a/span'  

        await driver.findElement(By.xpath(dentalRequestsXPath)).click()
        
        await driver.sleep(5000)
    }, 15000)

    /* test('Should be able to click view button and see patient profile', async () => {
        await driver.sleep(5000)

        const viewDentalReqXPath ='//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[3]'  

        await driver.findElement(By.xpath(viewDentalReqXPath)).click()
        
        await driver.sleep(5000)
    }, 15000) */

    /* test('Should be able to click "View Philhealth ID" button in the patient profile to view Philhealth card', async () => {
        await driver.sleep(5000)

        const elementToScroll = await driver.findElement(By.xpath('//*[@id="staff-history-datatable_next"]/a'))
        await driver.executeScript('arguments[0].scrollIntoView();', elementToScroll)

        const cancelledByStaffXPath ='//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[3]'  
        await driver.findElement(By.xpath(cancelledByStaffXPath)).click()
        

        await driver.sleep(5000)
    }, 15000) */


    /* test('Should be able to click "View Vaccination Card" button in the patient profile to view Vaccination card', async () => {
        await driver.sleep(5000)
        const viewFormXPath ='//*[@id="staff-history-datatable"]/tbody/tr[9]/td[7]/button'
        await driver.findElement(By.xpath(viewFormXPath)).click()

        await driver.sleep(5000)
        const closeFormXPath ='//*[@id="viewRequestDetails"]/div/div/div[3]/button'
        await driver.findElement(By.xpath(closeFormXPath)).click()
        
        await driver.sleep(5000)
    }, 30000) */

    /* test('Should be able to click "Approve" button and see a confirmation modal for the request', async () => {
        await driver.sleep(5000)
        const viewFormXPath ='//*[@id="staff-history-datatable"]/tbody/tr[9]/td[7]/button'
        await driver.findElement(By.xpath(viewFormXPath)).click()

        await driver.sleep(5000)
        const closeFormXPath ='//*[@id="viewRequestDetails"]/div/div/div[3]/button'
        await driver.findElement(By.xpath(closeFormXPath)).click()
        
        await driver.sleep(5000)
    }, 30000) */

    test('Should be able to look up students with using search function', async () => {
        await driver.sleep(5000)

        const searchButton = 'Jobart M. Xavier III'
        const searchButtonXpath ='//*[@id="pending_dental_consultation_table_filter"]/label/input'  
        await driver.findElement(By.xpath(searchButtonXpath)).sendKeys(searchButton)
        
        await driver.sleep(5000)
    }, 15000)

    test('Should be able to click Approved tab to navigate to approved requests page', async () => {
        await driver.sleep(5000)

        const dentalRequestsXPath ='//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[2]/div/div/div[1]/div/ul/li[2]/a'  
        await driver.findElement(By.xpath(dentalRequestsXPath)).click()
        
        await driver.sleep(5000)
    }, 15000)

    test('Should be able to click view button and see patient profile', async () => {
        await driver.sleep(5000)

        const viewDentalRequestsXPath ='//*[@id="approved_dental_consultation_table"]/tbody/tr/td[5]/div/button[1]/i'  
        await driver.findElement(By.xpath(viewDentalRequestsXPath)).click()
        await driver.sleep(5000)

        const elementToScrollXPath = '/html/body/div[1]/div[3]/div[2]/div/div/div[2]/div[2]/div[2]/table[3]/tbody/tr[1]/td[2]/a'
        const elementToScroll = await driver.findElement(By.xpath(elementToScrollXPath))
        await driver.executeScript('arguments[0].scrollIntoView();', elementToScroll)
        await driver.sleep(5000)

        const firstTabHandle = await driver.getWindowHandle();
        await driver.sleep(5000)

        const viewPhilhealthIDXPath ='//*[@id="view_philhealth_id"]/a'  
        await driver.findElement(By.xpath(viewPhilhealthIDXPath)).click()
        await driver.sleep(5000)

        const viewVaxCardIDXPath ='//*[@id="view_vaccination_card"]/a'  
        await driver.findElement(By.xpath(viewVaxCardIDXPath)).click()
        await driver.sleep(5000)

        await driver.switchTo().window(firstTabHandle);
        await driver.sleep(5000)
        
        const scrolltoDentalXPath = '//*[@id="viewDentalModal"]/div/div/div[1]/button'
        const scrolltoDental = await driver.findElement(By.xpath(scrolltoDentalXPath))
        await driver.executeScript('arguments[0].scrollIntoView();', scrolltoDental)
        await driver.sleep(5000)

        const closeFormXPath = '//*[@id="viewDentalModal"]/div/div/div[1]/button'
        await driver.findElement(By.xpath(closeFormXPath)).click()
        
        await driver.sleep(5000)
    }, 50000)

    test('Should be able to click button to mark appointment as done', async () => {
        await driver.sleep(5000)

        const markAppointmentDoneXPath ='//*[@id="approved_dental_consultation_table"]/tbody/tr/td[5]/div/button[2]'  
        await driver.findElement(By.xpath(markAppointmentDoneXPath)).click()

        const doneRemarks = 'Good!'
        const doneRemarksXpath ='//*[@id="done_remarks"]'  
        await driver.findElement(By.xpath(doneRemarksXpath)).sendKeys(doneRemarks)

        /* const remarkTextbox = 'Jobart M. Xavier III'
        const remarkTextboxXpath ='//*[@id="done_remarks"]' */  
        
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
