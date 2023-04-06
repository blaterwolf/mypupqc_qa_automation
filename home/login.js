const { By } = require('selenium-webdriver')
const dotenv = require('dotenv')

dotenv.config()

async function loginToStudent(driver) {
    await driver.get(process.env.ENTRY_POINT)
    const loginXPath = '/html/body/div[2]/nav/div/div/div/a'
    await driver.findElement(By.xpath(loginXPath)).click()

    await driver.sleep(2000)

    const usernoXPath = '//*[@id="user_no"]'
    const passwordXPath = '//*[@id="password"]'
    const signinXPath = '/html/body/div/div[2]/div/div[2]/div/div[1]/div/div[2]/form/div[4]/button'

    await driver.findElement(By.xpath(usernoXPath)).sendKeys(process.env.USERNO_STUDENT)
    await driver.findElement(By.xpath(passwordXPath)).sendKeys(process.env.PASSWORD_STUDENT)
    await driver.findElement(By.xpath(signinXPath)).click()

    console.log('Logging to Student...')
    await driver.sleep(3000)
}

async function loginToStaff(driver) {
    await driver.get(process.env.ENTRY_POINT)
    const loginXPath = '/html/body/div[2]/nav/div/div/div/a'
    await driver.findElement(By.xpath(loginXPath)).click()

    await driver.sleep(2000)

    const usernoXPath = '//*[@id="user_no"]'
    const passwordXPath = '//*[@id="password"]'
    const signinXPath = '/html/body/div/div[2]/div/div[2]/div/div[1]/div/div[2]/form/div[4]/button'

    await driver.findElement(By.xpath(usernoXPath)).sendKeys(process.env.USERNO_STAFF)
    await driver.findElement(By.xpath(passwordXPath)).sendKeys(process.env.PASSWORD_STAFF)
    await driver.findElement(By.xpath(signinXPath)).click()

    console.log('Logging to Staff...')
    await driver.sleep(3000)
}

async function logintoAdmin(driver) {
    await driver.get(process.env.ENTRY_POINT)
    const loginXPath = '/html/body/div[2]/nav/div/div/div/a'
    await driver.findElement(By.xpath(loginXPath)).click()

    await driver.sleep(2000)

    const usernoXPath = '//*[@id="user_no"]'
    const passwordXPath = '//*[@id="password"]'
    const signinXPath = '/html/body/div/div[2]/div/div[2]/div/div[1]/div/div[2]/form/div[4]/button'

    await driver.findElement(By.xpath(usernoXPath)).sendKeys(process.env.USERNO_ADMIN)
    await driver.findElement(By.xpath(passwordXPath)).sendKeys(process.env.PASSWORD_ADMIN)
    await driver.findElement(By.xpath(signinXPath)).click()

    console.log('Logging to Admin...')
    await driver.sleep(3000)
}

module.exports = {
    loginToStudent,
    loginToStaff,
    logintoAdmin,
}
