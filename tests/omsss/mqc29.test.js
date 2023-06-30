const { Builder, By, until, WebElement, Button } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-29: Guidance Request Page', () => {
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

    test('Should load the Counseling Request Page', async () => {
        await driver.sleep(5000)

        const CounselingPageXPath ='//*[@id="navbar-nav"]/div[1]/div[2]/div/div/div/li[8]/a/span'  

        await driver.findElement(By.xpath(CounselingPageXPath)).click()
        
        await driver.sleep(5000)
    }, 30000)

    test('Should be able to view the pending Patient Profile when the blue button is clicked below the action', async () => {
        await driver.sleep(5000)

        const viewProfileXPath ='//*[@id="pending_guidance_consultation_table"]/tbody/tr[1]/td[5]/div/button[1]/i'  
        await driver.findElement(By.xpath(viewProfileXPath)).click()

        await driver.sleep(5000)
        
        const closeFormXPath = '//*[@id="viewGuidanceModal"]/div/div/div[1]/button'
        await driver.findElement(By.xpath(closeFormXPath)).click()

        await driver.sleep(5000)
    }, 30000)

    test('Should be able to click and view all Approved Counseling Request', async () => {
        await driver.sleep(5000)

        const approvedByStaffXPath ='//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[2]/div/div/div[1]/div/ul/li[2]/a'  
        await driver.findElement(By.xpath(approvedByStaffXPath)).click()

        await driver.sleep(5000)
    }, 30000)


    test('Should be able to view the approved Patient Profile when the blue button is clicked below the action', async () => {
        await driver.sleep(5000)
        const viewFormXPath ='//*[@id="approved_guidance_consultation_table"]/tbody/tr/td[5]/div/button[1]/i'
        await driver.findElement(By.xpath(viewFormXPath)).click()
        await driver.sleep(5000)

        const closeFormXPath = '//*[@id="viewGuidanceModal"]/div/div/div[1]/button'
        await driver.findElement(By.xpath(closeFormXPath)).click()
        
        await driver.sleep(5000)
    }, 30000)

    test('Should be able to click and view the Done Appointment and give remarks to it', async () => {
        await driver.sleep(5000)
        const viewFormXPath ='//*[@id="approved_guidance_consultation_table"]/tbody/tr/td[5]/div/button[2]/i'
        await driver.findElement(By.xpath(viewFormXPath)).click()

        await driver.sleep(5000)
        const remarks = 'Okay!'
        const remarksXPath ='//*[@id="done_remarks"]'
        await driver.findElement(By.xpath(remarksXPath)).sendKeys(remarks)
        await driver.sleep(5000)

        const finishUpXPath ='//*[@id="doneAppointmentForm"]/div[2]/button'
        await driver.findElement(By.xpath(finishUpXPath)).click()
        await driver.sleep(5000)
        
        const okXPath ='/html/body/div[3]/div/div[6]/button[3]'
        await driver.findElement(By.xpath(okXPath)).click()
        await driver.sleep(5000)
        
        await driver.sleep(5000)
    }, 45000)

})
