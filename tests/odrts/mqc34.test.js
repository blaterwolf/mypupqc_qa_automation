const { Builder, By, until} = require('selenium-webdriver');
const { loginToStudent } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('Login to Student and should be able to request document/s', () => {
    let driver

    beforeAll(async () => {
        driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
        await driver.manage().window().maximize()
    })

    afterAll(async () => {
        await driver.quit()
    },20000)

    test('should successfully login to student portal', async () => {
        await loginToStudent(driver)

        // Check if the login was successful by looking for an element that should be present after logging in
        const loggedInElementXPath = '/html/body/div/div[3]/div/div/div[1]/div/div'
        const loggedInElement = await driver.wait(
            until.elementLocated(By.xpath(loggedInElementXPath)),
            5000
        )

        expect(loggedInElement).toBeDefined()
    }, 30000)

test ('An option "New Request" is expected', async () => {
    const newRequestLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[13]/a'
    const newRequestLink = await driver.wait(
        until.elementLocated(By.xpath(newRequestLinkXPath)),
        20000
    )

        expect(newRequestLink).toBeDefined()
}, 20000)

test ('Should load the New Request Page', async () => {
    const newRequestLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[13]/a'

    await driver.findElement(By.xpath(newRequestLinkXPath)).click()
    driver.sleep(3000)
}, 20000)

test ('Should load the program / course of the student ', async () => {
    const programXPath = '//*[@id="course_when_admitted"]'

    expect(programXPath).toBeDefined()
    driver.sleep(3000)
}, 20000)

test ('Should load the types of documents to be requested', async () => {
    const documentTypeXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/form/div/div[3]/ul'

    expect(documentTypeXPath).toBeDefined()
    driver.sleep(3000)
}, 20000)

test ('Should be able to change types of docuements', async () => {
    const documentType2XPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/form/div/div[3]/ul/li[2]/a'
    const documentType3XPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/form/div/div[3]/ul/li[3]/a'
    const documentType4XPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/form/div/div[3]/ul/li[4]/a'
    await driver.sleep(3000)

    await driver.findElement(By.xpath(documentType2XPath)).click()
    driver.sleep(3000)
    await driver.findElement(By.xpath(documentType3XPath)).click()
    driver.sleep(3000)
    await driver.findElement(By.xpath(documentType4XPath)).click()
    driver.sleep(3000)
}, 20000)

test('Should be able to check or uncheck the checkboxes on the document types', async () => {
    const documentCheckboxValue = 'e1f4c9ec-0c5a-4d34-9ba7-83f704bc959a';
    await driver.sleep(3000);

    const checkboxElement = await driver.findElement(By.id(documentCheckboxValue));
    await driver.executeScript('arguments[0].scrollIntoView()', checkboxElement);

    await driver.wait(until.elementLocated(By.id(documentCheckboxValue)), 10000);
    await driver.wait(async () => await checkboxElement.isDisplayed(), 10000);

    await checkboxElement.click();
    await driver.sleep(10000);

    await checkboxElement.click();
    await driver.sleep(10000);
}, 30000);

test ('Should be able to use the filter option for description', async () => {
    const filterDescriptionXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/form/div/div[3]/div/div[4]/table/thead/tr/th[1]'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(filterDescriptionXPath)).click()
    driver.sleep(3000)
}, 20000)

test ('Should be able to use the view details button', async () => {
    const viewDetailsXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/form/div/div[3]/div/div[4]/table/tbody/tr[1]/td[1]/div/div[2]/div/button'
    const closebuttonXPath = '/html/body/div[1]/div[3]/div[2]/div/div/div[3]/button'
    await driver.sleep(8000)
    await driver.findElement(By.xpath(viewDetailsXPath)).click()
    driver.sleep(10000)
    await driver.findElement(By.xpath(closebuttonXPath)).click()
    driver.sleep(10000)
}, 20000)
/*
test ('Should be able to increase the quantity of the document', async () => {
    const increaseQuantityXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div/div/div[2]/form/div/div[3]/div/div[4]/table/tbody/tr[1]/td[2]/div/button[2]'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(increaseQuantityXPath)).click()
    driver.sleep(3000)
}, 20000) */
})
