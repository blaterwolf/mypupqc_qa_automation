const { Builder, By, until, WebElement, Button } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-31: Evaluation Analytic Page', () => {
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

    test('Should load the Evaluation Analytics Page', async () => {
        await driver.sleep(5000)

        const medReqHistoXPath ='//*[@id="navbar-nav"]/div[1]/div[2]/div/div/div/li[12]/a/span'  

        await driver.findElement(By.xpath(medReqHistoXPath)).click()
        
        await driver.sleep(5000)
    }, 15000)

    test('Showcase of Evaluation Analytics Page', async () => {
        await driver.sleep(5000)

        /* const monthlyEvalXPath ='//*[@id="chartNumberThree"]/div/canvas'  
        await driver.findElement(By.xpath(monthlyEvalXPath)).click() */

        const elementToScroll = await driver.findElement(By.xpath('//*[@id="layout-wrapper"]/div[3]/div/div/footer/div/div/div[1]/a[2]'))
        await driver.executeScript('arguments[0].scrollIntoView();', elementToScroll)
        
        await driver.sleep(5000)
    }, 15000)

    


})
