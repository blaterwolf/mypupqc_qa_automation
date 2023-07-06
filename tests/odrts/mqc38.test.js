const { Builder, By, until } = require('selenium-webdriver')
const { loginToStaff } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('Login to PUP Staff and Requests Page should be functional', () => {
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
            20000
        )

        expect(loggedInElement).toBeDefined()
        driver.sleep(5000)
    }, 20000)

test ('An option  "Requests"  is expected', async () => {
        const documentsLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[10]/a'
        const documentsLink = await driver.wait(
            until.elementLocated(By.xpath(documentsLinkXPath)),
            20000
        )

        expect(documentsLink).toBeDefined()
        driver.sleep(5000)
}, 20000)

test ('Should load the Requests Page', async () => {
    const documentsLinkXPath = '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[10]/a'

    await driver.findElement(By.xpath(documentsLinkXPath)).click() 
    driver.sleep(5000)
}, 20000)

test ('Should load the Analytics for Request', async () => {
    const reqAnalyticsXPath = '/html/body/div/div[3]/div[1]/div/div[2]/div[1]/div/div[2]/div/div[2]'

    await driver.findElement(By.xpath(reqAnalyticsXPath)).click()
    driver.sleep(5000)
}, 20000)

test ('Should be able to search for data using the search field in Pending Tab', async () => {
    driver.findElement(By.xpath('/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div[2]/label/input')).sendKeys('CTRL-3375767161822')
}, 20000)

test ('Should be able to sort the data in Control Number by clicking the "Control Number" in Pending Tab', async () => {
    driver.findElement(By.xpath('/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div[3]/div[1]/div/table/thead/tr/th[1]')).click()
    driver.sleep(5000)
})

test ('Should be able to sort the data in Student by clicking the "Student" in Pending Tab', async () => {
    driver.findElement(By.xpath('/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div[3]/div[1]/div/table/thead/tr/th[2]')).click()
    driver.sleep(5000)
})

test ('Should be able to sort the data in Date Filed by clicking the "Date Filed" in Pending Tab', async () => {
    driver.findElement(By.xpath('/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div[3]/div[1]/div/table/thead/tr/th[3]')).click()
    driver.sleep(5000)
})

test ('Should be able to sort the data in Details by clicking the "Details" in Pending Tab', async () => {
    driver.findElement(By.xpath('/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div[3]/div[1]/div/table/thead/tr/th[5]')).click()
    driver.sleep(5000)
})

test ('Should be able to sort the data in Request Status by clicking the "Request Status" in Pending Tab', async () => {
    driver.findElement(By.xpath('/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div[3]/div[1]/div/table/thead/tr/th[6]')).click()
    driver.sleep(5000)
})

test ('Should be able to see two buttons on the Request Action table: for Approve and Cancel in Pending Tab', async () => {
    const pendingButtonXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[1]/div/ul/li[1]/a'
    const approvedButtonXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[1]/div/ul/li[2]/a'

    expect(pendingButtonXPath).toBeDefined()
    expect(approvedButtonXPath).toBeDefined()
    driver.sleep(5000)
})
/*
test ('Should be able to view an specific details  by clicking the the "View Details" button under the "Details" column in Pending Tab', async () => {
    const approvedButtonXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[1]/div/ul/li[2]/a'
    const viewDetailsButtonXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div[3]/div[2]/table/tbody/tr[1]/td[5]/div'
    driver.sleep(5000)
    driver.findElement(By.xpath(approvedButtonXPath)).click()
    driver.findElement(By.xpath(viewDetailsButtonXPath)).click()

    expect(viewDetailsButtonXPath).toBeDefined()
    driver.sleep(5000)
}, 20000)
*/
test ('Should be able to view the approved request(s) by clicking the "Approved" Tab', async () => {
    const approvedButtonXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[1]/div/ul/li[2]/a'

    driver.findElement(By.xpath(approvedButtonXPath)).click()

    expect(approvedButtonXPath).toBeDefined()
    driver.sleep(5000)
})

test ('Should be able to view an specific details  by clicking the the "View Details" button under the "Details" column in Approved Tab', async () => {
    const viewDetailsButtonXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div[3]/div[2]/table/tbody/tr[1]/td[5]/div/button'

    driver.findElement(By.xpath(viewDetailsButtonXPath)).click()

    expect(viewDetailsButtonXPath).toBeDefined()
    driver.sleep(5000)
},20000)

test ('Should be able to go to a specific page number by clicking the the selected page number at the bottom', async () => {
    driver.findElement(By.xpath('/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div[5]/ul/li[2]/a')).click()
},20000)   

test ('Should be able to go to the next page by clicking the "Next" button', async () => {
    driver.findElement(By.xpath('/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div[5]/ul/li[3]/a')).click()
},20000)

test ('Should be able to go to the previous page by clicking the "Previous" button', async () => {
    driver.findElement(By.xpath('/html/body/div/div[3]/div[1]/div/div[3]/div/div/div[2]/div/div[2]/div/div[5]/ul/li[1]/a')).click()
},20000)
})


