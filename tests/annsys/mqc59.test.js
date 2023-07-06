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

test ('Under Announcement System, an "Announcement" tab is expected.', async () => {
        const announcementLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[7]/a/span'
        const announcementLink = await driver.wait(
            until.elementLocated(By.xpath(announcementLinkXPath)),
            20000
        )
        expect(announcementLink).toBeDefined()
}, 20000)

test ('Should load the Announcement Page, directly land on "All Announcement" tab and should see the "Add Announcement" button in the upper left corner.', async () => {
        const announcementXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[7]/a'

        await driver.findElement(By.xpath(announcementXPath)).click()

        const addAnnouncementLinkXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div[1]/div/button'
        const addAnnouncementLink = await driver.wait(
            until.elementLocated(By.xpath(addAnnouncementLinkXPath)),
            20000
        )
        expect(addAnnouncementLink).toBeDefined()
}, 20000)

test ('Should load all the list of available announcements', async () => {
        const announcementXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/ul/li[1]/a'

        await driver.findElement(By.xpath(announcementXPath)).click()
    
}, 20000)

test ('Staff should be able to click the "Add Announcement" button', async () => {
    const addAnnouncementXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div[1]/div/button'

    await driver.findElement(By.xpath(addAnnouncementXPath)).click()

}, 20000)

test ('Staff should be able to add a new announcement', async () => {
    const submitAnnouncementXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div[2]/div/div[2]/form/div[4]/div/button[1]'

    await driver.findElement(By.xpath(submitAnnouncementXPath)).click()

    const addAnnouncementXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div[1]/div/button'

    await driver.findElement(By.xpath(addAnnouncementXPath)).click()
}, 20000)

test ('Should be able to click on "My Announcement" tab', async () => {
    const myAnnouncementXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/ul/li[2]/a'

    await driver.findElement(By.xpath(myAnnouncementXPath)).click()

}, 20000)

test ('Should load all the list of available announcements exclusively made by the staff', async () => {
    const myAnnouncementList = '/html/body/div[1]/div[3]/div/div/div[2]/div/div[1]/div/button'
    const myAnnouncementListLink = await driver.wait(
        until.elementLocated(By.xpath(myAnnouncementList)),
        20000
    )
        expect(myAnnouncementListLink).toBeDefined()

}, 20000)

test ('Should be able to see three buttons under "Action": Hide, Edit, and Delete on each announcement respectively.', async () => {
    const hideAnnouncementButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'
    const hideAnnouncementButtonLink = await driver.wait(
        until.elementLocated(By.xpath(hideAnnouncementButton)),
        20000
    )
        expect(hideAnnouncementButtonLink).toBeDefined()
    const editAnnouncementButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[2]'
    const editAnnouncementButtonLink = await driver.wait(
        until.elementLocated(By.xpath(editAnnouncementButton)),
        20000
    )
        expect(editAnnouncementButtonLink).toBeDefined()

    const deleteAnnouncementButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[3]'
    const deleteAnnouncementButtonLink = await driver.wait(
        until.elementLocated(By.xpath(deleteAnnouncementButton)),
        20000
    )
        expect(deleteAnnouncementButtonLink).toBeDefined()
}, 20000)

test ('Should be able to click the "Hide" button on the existing announcement', async () => {
    const hideAnnouncementXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'

    await driver.findElement(By.xpath(hideAnnouncementXPath)).click()

    const deactAnnouncementXPath = '/html/body/div[3]/div/div[6]/button[1]'

    await driver.findElement(By.xpath(deactAnnouncementXPath)).click()
}, 20000)

test ('Should be able to change the status of the announcement to "Hidden" and previous button should be changed into "Publish" button', async () => {
    const hiddenStatus = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[2]/td[4]/span'
    const hiddenStatusLink = await driver.wait(
        until.elementLocated(By.xpath( hiddenStatus)),
        20000
    )
    expect( hiddenStatusLink).toBeDefined()
    const publishButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[2]/td[5]/div/button[1]'
    const publishButtonLink = await driver.wait(
        until.elementLocated(By.xpath(publishButton)),
        20000
    )
    expect(publishButtonLink).toBeDefined()
}, 20000)

test ('Should be able to click the "Publish" button on the existing announcement', async () => {
    const publishButtonXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[2]/td[5]/div/button[1]'

    await driver.findElement(By.xpath(publishButtonXPath)).click()

    const activateButtonXPath = '/html/body/div[3]/div/div[6]/button[1]'

    await driver.findElement(By.xpath(activateButtonXPath)).click()
}, 20000)

test ('Should be able to change the status of the announcement to "Published" and previous button should be changed into "Hide" button', async () => {
    const publishedStatus = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[2]/td[4]/span'
    const publishedStatusLink = await driver.wait(
        until.elementLocated(By.xpath( publishedStatus)),
        20000
    )
    expect( publishedStatusLink).toBeDefined()
    const hideButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[2]/td[5]/div/button[1]'
    const hideButtonLink = await driver.wait(
        until.elementLocated(By.xpath(hideButton)),
        20000
    )
    expect(hideButtonLink).toBeDefined()
}, 20000)

test ('Should be able to click the "Edit" button on the existing announcement.', async () => {
    const editButtonXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[2]'

    await driver.findElement(By.xpath(editButtonXPath)).click()

}, 20000)

test ('Should be able to see the section for editing the current announcement and load its existing info', async () => {
    const editAnnouncementInfoXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[7]/a/span'
    const editAnnouncementInfoLink = await driver.wait(
        until.elementLocated(By.xpath(editAnnouncementInfoXPath)),
        20000
    )
    expect(editAnnouncementInfoLink).toBeDefined()
}, 20000)

test ('Should be able to save current changes (if there is any) in the existing announcement', async () => {
    const submitButtonXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div[2]/div/div[2]/form/div[4]/div/button[1]'

    await driver.findElement(By.xpath(submitButtonXPath)).click()

}, 20000)

test ('Should be able to click the "Delete button" and the existing announcement should be gone on the list', async () => {
    const deleteAnnouncementXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[3]'

    await driver.findElement(By.xpath(deleteAnnouncementXPath)).click()

    const delAnnouncementXPath = '/html/body/div[3]/div/div[6]/button[1]'

    await driver.findElement(By.xpath(delAnnouncementXPath)).click()
}, 20000)

})
            
        