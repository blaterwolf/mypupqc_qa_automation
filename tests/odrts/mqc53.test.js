const { Builder, By, until } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('Login to PUP Staff and Adding Document should be functional', () => {
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
    await driver.sleep(2000)
    const documentLink = await driver.wait(
        until.elementLocated(By.xpath(documentLinkXPath)),
        20000
    )

        expect(documentLink).toBeDefined()
}, 20000)

test ('Should load the documents Page', async () => {
    const documentLinkXPath = '/html/body/div[1]/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[9]/a'

    await driver.findElement(By.xpath(documentLinkXPath)).click()
    await driver.sleep(3000)
}, 20000)

test('Should load the list of documents with its documents name and type.', async () => {
    const documentsXPath = '//*[@id="documents-datatable_wrapper"]'
    const documents = await driver.wait(
        until.elementLocated(By.xpath(documentsXPath)),
        20000
    )

    expect(documents).toBeDefined()
}, 20000)

test ('Should be able to edit and Update the signatories but cant doubled with the same signatories.', async () => {
    //Note that the aim of this test is to return an error message that the provided names below should not be able to locate
    //Further illustrations are provided in the test case document QAT-MQC-53_ODRTS
    const editButtonXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/tbody/tr[2]/td[3]/div/button[2]'
    const dropdown2XPath = '/html/body/div[4]/div/div/div[2]/form/div[5]/div/span/span[1]/span/span[2]'
    const dropdownoption1 = 'Gaspara Tejana Ganzon Hontiveros'
    const dropdownoption2 = 'Jefferson Korey Japson Manlangit'
    const approvalworkflowXPath = '/html/body/div[4]/div/div/div[2]/form/div[5]/div/button'
    await driver.sleep(2000)
    await driver.findElement(By.xpath(editButtonXPath)).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath(dropdown2XPath)).click()
    await driver.sleep(2000)
    const dropdownoption1XPath = `//li[contains(text(), '${dropdownoption1}')]`;
    await driver.findElement(By.xpath(dropdownoption1XPath)).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath(dropdown2XPath)).click()
    await driver.sleep(2000)
    const dropdownoption2XPath = `//li[contains(text(), '${dropdownoption2}')]`;
    await driver.findElement(By.xpath(dropdownoption2XPath)).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath(approvalworkflowXPath)).click()
    await driver.sleep(2000)
}, 20000)
})