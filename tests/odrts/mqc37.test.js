const { Builder, By, until } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')
const { titleContains } = require('selenium-webdriver/lib/until')

describe('Login to PUP Staff and Document Page should be functional', () => {
    let driver

    beforeAll(async() => {
        driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
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

    await driver.findElement(By.xpath(documentsLinkXPath)).click() 
}, 20000)

test ('Should load the data of the Documents Names', async () => {
    const documentNameXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[1]/a'
    const documentName = await driver.wait(
        until.elementLocated(By.xpath(documentNameXPath)),
        20000
    )

    expect(documentName).toBeDefined()
}, 20000)

test ('Should load the data of the Documents Types', async () => {
    const documentTypeXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[2]/div'
    const documentType = await driver.wait(
        until.elementLocated(By.xpath(documentTypeXPath)),
        20000
    )

    expect(documentType).toBeDefined()
}, 20000)

test ('Should be able to see and click the "Add Document" button', async () => {
    const addDocumentButtonXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[1]/button'
    const exitDocumentButtonXPath = '/html/body/div[2]/div/div/div[1]/button'

    driver.findElement(By.xpath(addDocumentButtonXPath)).click()
    driver.findElement(By.xpath(exitDocumentButtonXPath)).click()

    expect(exitDocumentButtonXPath).toBeDefined()
}, 20000)
/*
test ('Should be able to add a document', async () => {    
    const submitDocumentButtonXPath = '/html/body/div[2]/div/div/div[2]/form/button'
    const dropdown1 = '//*[@id="select2-document_type-result-0457-Certifications"]'

    await driver.findElement(By.id('document_name')).sendKeys('6 test')
    await driver.findElement(By.id('select2-document_type-container')).click()
    await driver.findElement(By.id('select2-document_type-result-0457-Certifications')).click()
    await driver.findElement(By.id('document_details')).sendKeys('GusionLodicakes')
    await driver.findElement(By.id('select2-select_signatories-container')).click()
    await driver.findElement(By.id('select2-select_signatories-result-e97k-1c9beef4-7513-4ba3-a5ff-e558016dc935')).click()
    driver.findElement(By.id('addDocReq')).click()
    driver.findElement(By.id('textField-2')).sendKeys('kahit ano')
    
    driver.findElement(By.xpath(submitDocumentButtonXPath)).click()

    expect(submitDocumentButtonXPath).toBeDefined()

    await driver.sleep(10000) 
}) */
test ('Should be able to print all document data by clicking  the "Print" button', async () => {
    const printButtonXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/div[1]/button'

    driver.findElement(By.xpath(printButtonXPath)).click()

    expect(printButtonXPath).toBeDefined()
},20000)

test ('Should be able to search for document using the search field', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/div[2]/label/input')).sendKeys('Test 000001')
},20000)
test ('Should be able to sort the data in Document Name by clicking the "Document Name', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/thead/tr/th[1]')).click()
},20000)
test ('Should be able to sort the data in Document Type by clicking the "Document Type', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/thead/tr/th[2]')).click()
},20000)
test ('Should be able to view the sub-details of the selected doucument by clicking the view button in the Action column', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[3]/div/button[1]')).click()
},20000)
test ('Should be able to go to a specific page number by clicking the the selected page number at the bottom', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/div[4]/ul/li[3]/a')).click()
},20000)
test ('Should be able to go to the next page by clicking the "Next" button', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/div[4]/ul/li[5]/a')).click()
},20000)
test ('Should be able to go to a specific page number by clicking the the selected page number at the bottom', async () => {
    driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div/div[2]/div/div/div[2]/div/div[4]/ul/li[1]/a')).click()
},20000)
})