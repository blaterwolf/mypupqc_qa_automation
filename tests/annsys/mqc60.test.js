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
test ('Under "Announcement System", a "News" tab is expected.', async () => {
        const newsLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[8]/a'
        const newsLink = await driver.wait(
            until.elementLocated(By.xpath(newsLinkXPath)),
            20000
        )
        expect(newsLink).toBeDefined()
}, 20000)

test ('Should load the News Page, directly land on "All News" tab and should see the "Add News" button in the upper left corner', async () => {
    const newsXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[8]/a'

    await driver.findElement(By.xpath(newsXPath)).click()

    const addNewsLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[8]/a'
    const addNewsLink = await driver.wait(
        until.elementLocated(By.xpath(addNewsLinkXPath)),
        20000
    )
    expect(addNewsLink).toBeDefined()
}, 20000)

test ('Should load all the list of available news', async () => {
    const newsXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/ul/li[1]/a'

    await driver.findElement(By.xpath(newsXPath)).click()

}, 20000)

test ('Staff should be able to click the "Add News" button', async () => {
    const addNewsXPath = '//*[@id="addNewsBtn"]'

    await driver.findElement(By.xpath(addNewsXPath)).click()

}, 20000)

test ('Staff should be able to add a new announcement', async () => {
    const submitNewsXPath = '/html/body/div[1]/div[3]/div/div/div[2]/div/div[2]/div/div[2]/form/div[5]/div/button[1]'

    await driver.findElement(By.xpath(submitNewsXPath)).click()

    const addNewsXPath = '//*[@id="addNewsBtn"]'

    await driver.findElement(By.xpath(addNewsXPath)).click()
}, 20000)

test ('Should be able to click on "My News" tab', async () => {
    const myNewsXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/ul/li[2]/a'

    await driver.findElement(By.xpath(myNewsXPath)).click()

}, 20000)

test ('Should load all the list of available news exclusively made by the staff', async () => {
    const myNewsList = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/thead/tr/th[1]'
    const myNewsListLink = await driver.wait(
        until.elementLocated(By.xpath(myNewsList)),
        20000
    )
        expect(myNewsListLink).toBeDefined()

}, 20000)

test ('Should be able to see three buttons under "Action": Hide, Edit, and Delete on each announcement respectively.', async () => {
    const hideNewsButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'
    const hideNewsButtonLink = await driver.wait(
        until.elementLocated(By.xpath(hideNewsButton)),
        20000
    )
        expect(hideNewsButtonLink).toBeDefined()
    const editNewsButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[2]'
    const editNewsButtonLink = await driver.wait(
        until.elementLocated(By.xpath(editNewsButton)),
        20000
    )
        expect(editNewsButtonLink).toBeDefined()

    const deleteNewsButton = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[3]'
    const deleteNewsButtonLink = await driver.wait(
        until.elementLocated(By.xpath(deleteNewsButton)),
        20000
    )
        expect(deleteNewsButtonLink).toBeDefined()
}, 20000)

test ('Should be able to click the "Hide" button on the existing news', async () => {
    const hideNewsXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'

    await driver.findElement(By.xpath(hideNewsXPath)).click()

    const deactNewsXPath = '/html/body/div[3]/div/div[6]/button[1]'

    await driver.findElement(By.xpath(deactNewsXPath)).click()
}, 20000)

test ('Should be able to change the status of the news to "HIDDEN" and previous button should be changed into "PUBLISHED" button', async () => {
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

test ('Should be able to click the "Publish" button on the existing news', async () => {
    const publishButtonXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'

    await driver.findElement(By.xpath(publishButtonXPath)).click()

    const activateButtonXPath = '/html/body/div[3]/div/div[6]/button[1]'

    await driver.findElement(By.xpath(activateButtonXPath)).click()
}, 20000)

test ('Should be able to change the status of the news to "Published" and previous button should be changed into "Hide Button"', async () => {
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

test ('Should be able to click the "Edit" button on the existing news', async () => {
    const editButtonXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[2]'

    await driver.findElement(By.xpath(editButtonXPath)).click()

}, 20000)

test ('Should be able to see the section for editing the current news and load its existing info', async () => {
    const editNewsInfoXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[7]/a/span'
    const editNewsInfoLink = await driver.wait(
        until.elementLocated(By.xpath(editNewsInfoXPath)),
        20000
    )
    expect(editNewsInfoLink).toBeDefined()
}, 20000)

test ('Should be able to save current changes (if there is any) in the existing news', async () => {
    const submitButtonXPath = '//*[@id="announcement_title"]'

    await driver.findElement(By.xpath(submitButtonXPath)).click()

}, 20000)

test ('Should be able to click the "Delete button" and the existing news should be gone on the list', async () => {
    const deleteNewsXPath = '/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[3]'

    await driver.findElement(By.xpath(deleteNewsXPath)).click()

    const delNewsXPath = '/html/body/div[3]/div/div[6]/button[1]'

    await driver.findElement(By.xpath(delNewsXPath)).click()
}, 20000)


})