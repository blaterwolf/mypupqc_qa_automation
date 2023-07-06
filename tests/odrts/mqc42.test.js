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
    const documentLink = await driver.wait(
        until.elementLocated(By.xpath(documentLinkXPath)),
        20000
    )

        expect(documentLink).toBeDefined()
}, 20000)

test ('Should load the documents Page', async () => {
    const documentLinkXPath = '/html/body/div[1]/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[9]/a'

    await driver.findElement(By.xpath(documentLinkXPath)).click() 
}, 20000)

test('Should be able to add document by clicking the "Add Document" button', async () => {
    //note this part is currently not working entirely and I am not able to fully complete the test

    const addDocumentXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[1]/button';
    const dropdownArrowXPath = '//span[@class="select2-selection__arrow"]';
    const dropdownOptionText = 'Certifications'; // Match the desired option text
    //const dropdownReqXPath = '//span[@class="select2-selection__arrow"]';
    //const dropdownReqOptionText = 'Andrea Botez II'; // Match the desired option text


    // Click the "Add Document" button
    await driver.findElement(By.xpath(addDocumentXPath)).click();

    // Wait for the page to load or the dropdown to appear (if necessary)
    await driver.sleep(3000);

    // Input the document name
    await driver.findElement(By.id('document_name')).sendKeys('6 test');

    // Wait for some time (if necessary)
    await driver.sleep(3000);

    // Click the dropdown arrow to expand the options
    await driver.findElement(By.xpath(dropdownArrowXPath)).click();

    // Wait for some time (if necessary)
    await driver.sleep(3000);

    // Select the dropdown option
    const dropdownOptionXPath = `//li[contains(text(), '${dropdownOptionText}')]`;
    await driver.findElement(By.xpath(dropdownOptionXPath)).click();

    // Wait for some time (if necessary)
    await driver.sleep(3000);

    //Input Document Details
    await driver.findElement(By.id('document_details')).sendKeys('GusionLodicakes')

    // Wait for some time (if necessary)
    await driver.sleep(3000);

    //close the modal
    await driver.findElement(By.xpath('/html/body/div[2]/div/div/div[1]/button')).click();

    // Wait for some time (if necessary)
    await driver.sleep(3000);
/* 
    // Click the dropdown arrow to expand the options
    await driver.findElement(By.xpath(dropdownReqXPath)).click();

    // Wait for some time (if necessary)
    await driver.sleep(3000);

    // Select the dropdown option
    const dropdownReqOptionXPath = `//li[contains(text(), '${dropdownReqOptionText}')]`;
    await driver.findElement(By.xpath(dropdownReqOptionXPath)).click();

    // Wait for some time (if necessary)
    await driver.sleep(3000);
*/
}, 20000);

test('Should be able to search for document using  the search field', async () => {
    const searchfield = 'honorable dismissal'
    await driver.sleep(3000)
    const searchFieldXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/div[2]/label/input'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(searchFieldXPath)).sendKeys(searchfield)
    await driver.sleep(3000)
    await driver.findElement(By.xpath(searchFieldXPath)).clear()
    await driver.sleep(3000)
}, 25000)
})