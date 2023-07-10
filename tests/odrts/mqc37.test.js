const { Builder, By, until } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('Login to PUP Staff and Document Page should be functional', () => {
    let driver

    beforeAll(async() => {
        driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
        await driver.manage().window().maximize()
    })

    afterAll(async () => {
        await driver.quit()
    })

test ('Should be able to Login to Employee', async () => {
        await loginToStaff(driver)

        // Check if the login was successful by looking for an element that should be present after logging in
        const loggedInElementXPath = '/html/body/div/div[3]/div/div/div[1]/div/div'
        const loggedInElement = await driver.wait(
            until.elementLocated(By.xpath(loggedInElementXPath)),
            20000
        )

        expect(loggedInElement).toBeDefined()
    }, 20000)

test ('An option  "Documents"  is expected', async () => {
        const documentsLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[9]/a'
        const documentsLink = await driver.wait(
            until.elementLocated(By.xpath(documentsLinkXPath)),
            20000
        )

        expect(documentsLink).toBeDefined()
}, 20000)

test ('Should load the Documents Page', async () => {
    const documentsLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[9]/a'
    await driver.sleep(3000)

    await driver.findElement(By.xpath(documentsLinkXPath)).click() 
}, 20000)

test ('Should load the data of the Documents Names', async () => {
    const documentNameXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[1]/a'
    await driver.sleep(3000)
    const documentName = await driver.wait(
        until.elementLocated(By.xpath(documentNameXPath)),
        20000
    )

    expect(documentName).toBeDefined()
}, 20000)

test ('Should load the data of the Documents Types', async () => {
    const documentTypeXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[2]/div'
    await driver.sleep(3000)
    const documentType = await driver.wait(
        until.elementLocated(By.xpath(documentTypeXPath)),
        20000
    )

    expect(documentType).toBeDefined()
}, 20000)

test ('Should be able to sort the data in Document Name by clicking the "Document Name', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/thead/tr/th[1]')).click()
},20000)

test ('Should be able to sort the data in Document Type by clicking the "Document Type', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/thead/tr/th[2]')).click()
},20000)

test ('Should be able to view the sub-details of the selected doucument by clicking the view button in the Action column', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[3]/div/button[1]')).click()
    await driver.sleep(3000)
    driver.findElement(By.xpath('/html/body/div[3]/div/div/div[3]/button')).click()
    await driver.sleep(3000)
},20000)
/*
test ('Should be able to go to a specific page number by clicking the the selected page number at the bottom', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/div[4]/ul/li[4]/a')).click()
},20000)

test ('Should be able to go to the next page by clicking the "Next" button', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/div[4]/ul/li[6]/a')).click()
},20000)

test ('Should be able to go to the next page by clicking the "Previous" button', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/div[4]/ul/li[1]/a')).click()
},20000)
*/
test ('Should be able to see and click the "Add Document" button', async () => {
    const addDocumentButtonXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[1]/button'
    const exitDocumentButtonXPath = '/html/body/div[2]/div/div/div[1]/button'
    await driver.sleep(3000)

    driver.findElement(By.xpath(addDocumentButtonXPath)).click()
    driver.findElement(By.xpath(exitDocumentButtonXPath)).click()

    expect(exitDocumentButtonXPath).toBeDefined()
}, 20000)

test('Should be able to add document by clicking the "Add Document" button', async () => {
    const dropdownArrow1XPath = '/html/body/div[2]/div/div/div[2]/form/div[2]/span/span[1]/span/span[2]';
    const dropdownOptionText = 'Certifications'; // Match the desired option text
    const dropdownArrow2XPath = '/html/body/div[2]/div/div/div[2]/form/div[4]/div/span/span[1]/span/span[2]';
    const dropdownReqOptionText = 'Prince Makaroo Dela Cruz'; // Match the desired option text
    const approvalworkflowXPath = '/html/body/div[2]/div/div/div[2]/form/div[4]/div/button';
    const submitButtonXPath = '/html/body/div[2]/div/div/div[2]/form/button';

    // Input the document name
    await driver.findElement(By.id('document_name')).sendKeys('Test 8');

    // Wait for some time (if necessary)
    await driver.sleep(3000);

    // Click the dropdown arrow to expand the options
    await driver.findElement(By.xpath(dropdownArrow1XPath)).click();

    // Wait for some time (if necessary)
    await driver.sleep(3000);

    // Select the dropdown option
    const dropdown1XPath = `//li[contains(text(), '${dropdownOptionText}')]`;
    await driver.findElement(By.xpath(dropdown1XPath)).click();

    // Wait for some time (if necessary)
    await driver.sleep(3000);

    //Input Document Details
    await driver.findElement(By.id('document_details')).sendKeys('Gusion')

    // Wait for some time (if necessary)
    await driver.sleep(3000);

    // Click the 2nd dropdown arrow to expand the options
    await driver.findElement(By.xpath(dropdownArrow2XPath)).click();

    // Wait for some time (if necessary)
    await driver.sleep(3000);

    // Select the dropdown option
    const dropdown2XPath = `//li[contains(text(), '${dropdownReqOptionText}')]`;
    await driver.findElement(By.xpath(dropdown2XPath)).click();

    // Wait for some time (if necessary)
    await driver.sleep(3000);

    // Click the "Selected Signatory" button
    await driver.findElement(By.xpath(approvalworkflowXPath)).click();

    // Wait for some time (if necessary)
    await driver.sleep(3000);

    // Click the "Submit" button
    await driver.findElement(By.xpath(submitButtonXPath)).click();

    // Wait for some time (if necessary)
    await driver.sleep(3000);
}, 30000);

test ('Should be able to search for document using the search field', async () => {
    const searchfield = 'Test 8'
    await driver.sleep(3000)
    const searchFieldXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/div[2]/label/input'
    await driver.sleep(3000)
    await driver.findElement(By.xpath(searchFieldXPath)).sendKeys(searchfield)
    await driver.sleep(3000)
    await driver.findElement(By.xpath(searchFieldXPath)).clear()
    await driver.sleep(3000)
}, 25000)
})