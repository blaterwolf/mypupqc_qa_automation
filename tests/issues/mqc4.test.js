const { Builder, By, until } = require('selenium-webdriver')
const { loginToStudent } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-4: Logout Upon Change of Password', () => {
    let driver

    beforeAll(async () => {
        driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
    })

    afterAll(async () => {
        await driver.quit()
    })

    test('should successfully login to student portal', async () => {
        await loginToStudent(driver)

        // Check if the login was successful by looking for an element that should be present after logging in
        const loggedInElementXPath = '/html/body/div/div[3]/div/div/div[1]/div/div'
        const loggedInElement = await driver.wait(
            until.elementLocated(By.xpath(loggedInElementXPath)),
            5000
        )

        expect(loggedInElement).toBeDefined()
    }, 20000)

    test('Should be able to click the top right side of the menu that has a dropdown with the Profile option on there', async () => {
        const profileDropdownXPath = '//*[@id="page-header-user-dropdown"]'

        await driver.findElement(By.xpath(profileDropdownXPath)).click()
    }, 20000)

    test('Should be able to navigate to profile page', async () => {
        const profileOptionXPath = '/html/body/div/header/div/div/div[2]/div/div/a[1]'
        
        await driver.findElement(By.xpath(profileOptionXPath)).click()
    }, 20000)

    test('Should be able to click "Edit Profile" and navigate to that page', async () => {
        const editProfileButtonXPath = '/html/body/div/div[3]/div/div/div[2]/div[2]/div/div/div/div/div/a'

        await driver.findElement(By.xpath(editProfileButtonXPath)).click()
    }, 20000)

    test('Should be able to navigate to Change Password Tab', async () => {
        const changePasswordTab = '/html/body/div/div[3]/div/div/div[2]/div/div/div[1]/ul/li[2]/a'

        await driver.findElement(By.xpath(changePasswordTab)).click()
    }, 20000)

    test('Should be able to change password', async () => {
        const oldPasswordXPath = '//*[@id="old-password-input"]'
        const newPasswordXPath = '//*[@id="password-input"]'
        const confirmPasswordXPath = '//*[@id="confirm-password-input"]'

        await driver.findElement(By.xpath(oldPasswordXPath)).sendKeys('student@123')
        await driver.findElement(By.xpath(newPasswordXPath)).sendKeys('student@1234')
        await driver.findElement(By.xpath(confirmPasswordXPath)).sendKeys('student@1234')

        const changePasswordButtonXPath = '/html/body/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[2]/form/div/div[5]/div/button'

        await driver.findElement(By.xpath(changePasswordButtonXPath)).click()

        await driver.sleep(15000)
    }, 30000)

    test('When password is changed, the user must be logged out back to the /login page', async () => {
        const loginUrl = 'http://localhost/myPUPQC/signin'

        console.log(await driver.getCurrentUrl())

        expect(await driver.getCurrentUrl()).toBe(loginUrl)
    })
})