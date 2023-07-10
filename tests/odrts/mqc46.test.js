const { Builder, By, until } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('Login to PUP Staff and adding signatories to a document should be functional', () => {
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

test ('An option  "Documents"  is expected', async () => {
    const documentLinkXPath = '/html/body/div[1]/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[9]/a'
    await driver.sleep(3000)
    const documentLink = await driver.wait(
        until.elementLocated(By.xpath(documentLinkXPath)),
        20000
    )

        expect(documentLink).toBeDefined()
}, 20000)

test ('Should load the documents Page', async () => {
    const documentLinkXPath = '/html/body/div[1]/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[9]/a'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(documentLinkXPath)).click() 
}, 20000)

test('Should load the list of documents with its documents name and type.', async () => {
    const documentlistXPath = '//*[@id="documents-datatable_wrapper"]'
    const documentlist = await driver.wait(
        until.elementLocated(By.xpath(documentlistXPath)),
        20000
    )

    expect(documentlist).toBeDefined()
}, 20000)

test ('PUP Staff is expected to view the signatories within the documents.', async () => {
    const signatoriesXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[3]/div/button[1]'
    const exitsignatories = '/html/body/div[3]/div/div/div[3]/button'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(signatoriesXPath)).click()
    await driver.sleep(3000)
    await driver.findElement(By.xpath(exitsignatories)).click()
    await driver.sleep(3000)
}, 20000)

test ('Should be able to edit and update the signatories.', async () => {
    const editXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[3]/div/button[2]'
    const deletesignatory = '/html/body/div[4]/div/div/div[2]/form/ul/li[1]/a/i'
    const submitXPath = '/html/body/div[4]/div/div/div[2]/form/button'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(editXPath)).click()
    await driver.sleep(3000)
    await driver.findElement(By.xpath(deletesignatory)).click()
    await driver.sleep(3000)
    await driver.findElement(By.xpath(submitXPath)).click()
    await driver.sleep(3000)
}, 20000)
})
