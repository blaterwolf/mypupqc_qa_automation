const { Builder, By, until } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

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

test ('Under "Announcement System", an "Advisory" tab is expected.', async () => {
        const advisoryLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[6]/a'
        const advisoryLink = await driver.wait(
            until.elementLocated(By.xpath(advisoryLinkXPath)),
            20000
        )
        expect(advisoryLink).toBeDefined()
}, 20000)

test ('Should load the Advisory Page, directly land on "All Advisory" tab and should see the "Add Advisory" button in the upper left corner', async () => {
    const advisoryXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[6]/a'

    await driver.findElement(By.xpath(advisoryXPath)).click()

    const addAdvisoryLinkXPath = '//*[@id="addAdvisoryBtn"]'
    const addAdvisoryLink = await driver.wait(
        until.elementLocated(By.xpath(addAdvisoryLinkXPath)),
        20000
    )
    expect(addAdvisoryLink).toBeDefined()
}, 20000)

test ('Should load all the list of available advisories', async () => {
    const advisoryXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/ul/li[1]/a'

    await driver.findElement(By.xpath(advisoryXPath)).click()

}, 20000)

test ('Staff should be able to click the "Add Advisory" button', async () => {
    const addAdvisoryXPath = '//*[@id="addAdvisoryBtn"]'

    await driver.findElement(By.xpath(addAdvisoryXPath)).click()

}, 20000)

test ('Staff should be able to add a new advisory', async () => {
    const submitAdvisoryXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div[2]/div/div[2]/form/div[5]/div/button[1]'

    await driver.findElement(By.xpath(submitAdvisoryXPath)).click()

    const addAdvisoryXPath = '//*[@id="addAdvisoryBtn"]'

    await driver.findElement(By.xpath(addAdvisoryXPath)).click()
}, 20000)

test ('Should be able to click on "My Advisory" tab.', async () => {
    const myAdvisoryXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/ul/li[2]/a'

    await driver.findElement(By.xpath(myAdvisoryXPath)).click()

}, 20000)

test ('Should load all the list of available advisories exclusively made by the staff', async () => {
    const myAdvisoryList = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/thead/tr/th[1]'
    const myAdvisoryListLink = await driver.wait(
        until.elementLocated(By.xpath(myAdvisoryList)),
        20000
    )
        expect(myAdvisoryListLink).toBeDefined()

}, 20000)

test ('Should be able to see three buttons under "Action": Hide, Edit, and Delete on each announcement respectively.', async () => {
    const hideAdvisoryButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'
    const hideAdvisoryButtonLink = await driver.wait(
        until.elementLocated(By.xpath(hideAdvisoryButton)),
        20000
    )
        expect(hideAdvisoryButtonLink).toBeDefined()
    const editAdvisoryButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[2]'
    const editAdvisoryButtonLink = await driver.wait(
        until.elementLocated(By.xpath(editAdvisoryButton)),
        20000
    )
        expect(editAdvisoryButtonLink).toBeDefined()

    const deleteAdvisoryButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[3]'
    const deleteAdvisoryButtonLink = await driver.wait(
        until.elementLocated(By.xpath(deleteAdvisoryButton)),
        20000
    )
        expect(deleteAdvisoryButtonLink).toBeDefined()
}, 20000)

test ('Should be able to click the "Hide" button on the existing advisory', async () => {
    const hideAdvisoryXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'

    await driver.findElement(By.xpath(hideAdvisoryXPath)).click()

    const deactAdvisoryXPath = '/html/body/div[3]/div/div[6]/button[1]'

    await driver.findElement(By.xpath(deactAdvisoryXPath)).click()
}, 20000)

test ('Should be able to change the status of the advisory to "Hidden" and previous button should be changed into "Publish" button', async () => {
    const hiddenStatus = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[4]/span'
    const hiddenStatusLink = await driver.wait(
        until.elementLocated(By.xpath( hiddenStatus)),
        20000
    )
    expect( hiddenStatusLink).toBeDefined()
    const publishButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'
    const publishButtonLink = await driver.wait(
        until.elementLocated(By.xpath(publishButton)),
        20000
    )
    expect(publishButtonLink).toBeDefined()
}, 20000)

test ('Should be able to click the "Publish" button on the existing advisory', async () => {
    const publishButtonXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'

    await driver.findElement(By.xpath(publishButtonXPath)).click()

    const activateButtonXPath = '/html/body/div[3]/div/div[6]/button[1]'

    await driver.findElement(By.xpath(activateButtonXPath)).click()
}, 20000)

test ('Should be able to change the status of the advisory to "Published" and previous button should be changed into "Hide" button', async () => {
    const publishedStatus = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[4]/span'
    const publishedStatusLink = await driver.wait(
        until.elementLocated(By.xpath( publishedStatus)),
        20000
    )
    expect( publishedStatusLink).toBeDefined()
    const hideButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'
    const hideButtonLink = await driver.wait(
        until.elementLocated(By.xpath(hideButton)),
        20000
    )
    expect(hideButtonLink).toBeDefined()
}, 20000)

test ('Should be able to click the "Edit" button on the existing advisory', async () => {
    const editButtonXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[2]'

    await driver.findElement(By.xpath(editButtonXPath)).click()

}, 20000)

test ('Should be able to see the section for editing the current advisory and load its existing info', async () => {
    const editAdvisoryInfoXPath = '//*[@id="announcement_title"]'
    const editAdvisoryInfoLink = await driver.wait(
        until.elementLocated(By.xpath(editAdvisoryInfoXPath)),
        20000
    )
    expect(editAdvisoryInfoLink).toBeDefined()
}, 20000)

test ('Should be able to click the "Delete button" and the existing advisory should be gone on the list', async () => {
    const deleteAdvisoryXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[3]'

    await driver.findElement(By.xpath(deleteAdvisoryXPath)).click()

    const delAdvisoryXPath = '/html/body/div[3]/div/div[6]/button[1]'

    await driver.findElement(By.xpath(delAdvisoryXPath)).click()
}, 20000)


})
