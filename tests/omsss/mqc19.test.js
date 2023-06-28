const { Builder, By, until } = require('selenium-webdriver')
const { loginToStudent } = require('../../home/login')
const firefoxOptions = require('../../helpers/firefoxOptions')

describe('MQC-19: Patient Information Page', () => {
    let driver

    beforeAll(async () => {
        driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
    })

    afterAll(async () => {
        await driver.quit()
    })

    test('should successfully login to student portal', async () => {
        await loginToStudent(driver)

        // Check if the login was successful by looking for an element that should be present after logging in
        const loggedInElementXPath = '/html/body/div/div[3]/div/div/div[1]/div/div'
        const loggedInElement = await driver.wait(
            until.elementLocated(By.xpath(loggedInElementXPath)),
            10000
        )

        expect(loggedInElement).toBeDefined()
    }, 30000)

    test('A dropdown with options "Patient Information" and "Health History" is expected', async () => {
        const healthInfoSidebarXPath =
            '/html/body/div/div[1]/div[2]/div[1]/div[2]/div/div/div/div/ul/div[1]/div[2]/div/div/div/li[16]'  

        await driver.findElement(By.xpath(healthInfoSidebarXPath)).click()
    }, 30000)

    test('Should load the Patient Information Page', async () => {
        const patientoInfoPageXPath =
            '//*[@id="sidebarHealthInfo"]/ul/li[1]/a'

        await driver.findElement(By.xpath(patientoInfoPageXPath)).click()
        await driver.sleep(10000)
    }, 30000)

    test('Should load the data of the student at the side of the form', async () => {
        const studentFormTypeXPath = '//*[@id="layout-wrapper"]/div[3]/div[1]/div/div[3]/div[1]/div/div/div'

        await driver.findElement(By.xpath(studentFormTypeXPath)).click()
        await driver.sleep(10000)
    }, 30000)

    test('Users are expected to input their patient information', async () => {
        
        const contactPerson = 'Dobert Rodomal'
        const contactNumber = '09629437813'
        const email = 'dobertrodomal@gmail.com'
        const address = 'New York Street San Rafael Talisay Cebu VI'
        const philInfo = '123'
        const fileInput = await driver.findElement(By.xpath(fileInputXPath));

        const contactPersonXPath = '//*[@id="emergency_contact_name"]'
        const contactNumberXPath = '//*[@id="emergency_contact_number"]'
        const emailXPath = '//*[@id="emergency_contact_email"]'
        const addressXPath = '//*[@id="emergency_contact_address"]'
        const philInfoXPath = '//*[@id="philhealth_number"]'
        const fileInputXPath = '//*[@id="filepond--drop-label-maq8ug8y0"]'
        
        await driver.findElement(By.xpath(contactPersonXPath)).sendKeys(contactPerson)
        await driver.findElement(By.xpath(contactNumberXPath)).sendKeys(contactNumber)
        await driver.findElement(By.xpath(emailXPath)).sendKeys(email)
        await driver.findElement(By.xpath(addressXPath)).sendKeys(address)
        await driver.findElement(By.xpath(philInfoXPath)).sendKeys(philInfo)
        await driver.get('https://2.bp.blogspot.com/-POt1ik4WGVw/VtWlmzbrasI/AAAAAAAABAc/gWTVx0Rg3GA/s640/Philhealth.jpg').sendKeys(fileInput)

        await driver.sleep(10000)
    }, 30000)

    test('Should be able to Update Patient Information', async () => {
        const updateButtonXPath = '//*[@id="update_patient_information"]'

        await driver.findElement(By.xpath(updateButtonXPath)).click()

        await driver.sleep(10000)
    }, 30000)

    test('Should be able to see two buttons on the Philhealth ID section: one for viewing and deleting', async () => {
        const twoButtonsXPath = '//*[@id="philhealth_id_content"]'

        await driver.findElement(By.xpath(twoButtonsXPath))

        await driver.sleep(10000)
    }, 30000)

    test('Should be able to delete the currently uploaded philhealth ID using the delete button and buttons on the Philhealth ID should be gone.', async () => {
        const deleteIDXPath = '//*[@id="show_philhealth_button"]/button[2]'

        await driver.findElement(By.xpath(deleteIDXPath))

        await driver.sleep(10000)
    }, 30000)

    test('Should be able to click and view Currently Uploaded Philhealth ID', async () => {
        const viewIDXPath = '//*[@id="show_philhealth_button"]/button[1]'

        await driver.findElement(By.xpath(viewIDXPath)).click()

        await driver.sleep(10000)
    }, 30000)

    test('Should be able to click on Immunization', async () => {
        const ImmunizationXPath = '/html/body/div/div[3]/div[1]/div/div[3]/div[2]/div/div[1]/ul/li[2]/a'

        await driver.findElement(By.xpath(ImmunizationXPath)).click()

        await driver.sleep(10000)
    }, 30000)

    test('Should be able to upload Immunization Card', async () => {
        const uploadImmunizationXPath = '//*[@id="consultation_reason"]'

        const fileInput = await driver.findElement(By.xpath(fileInputXPath));
        const fileInputXPath = '//*[@id="filepond--drop-label-zrge5crqf"]'

        await driver.findElement(By.xpath(uploadImmunizationXPath).get('https://www.gannett-cdn.com/presto/2021/03/08/NSTN/52a9d0b0-3497-48f9-a5b1-f5c87f3c9e0f-GROCERY1.jpg?crop=2559,1440,x0,y130&width=2559&height=1440&format=pjpg&auto=webp')).sendKeys(fileInput)

        
        await driver.sleep(10000)
    }, 30000)

    test('Should be able to see two buttons on the Immunization section: one for viewing and deleting', async () => {
        const reasonText = 'Bullying... saket sad 😔'
        const consultationReasonXPath = '//*[@id="consultation_reason"]'

        await driver.findElement(By.xpath(consultationReasonXPath)).sendKeys(reasonText)

        await driver.sleep(10000)
    }, 30000)

    test('Should be able to click and view Currently Uploaded Vaccination Card', async () => {
        const reasonText = 'Bullying... saket sad 😔'
        const consultationReasonXPath = '//*[@id="consultation_reason"]'

        await driver.findElement(By.xpath(consultationReasonXPath)).sendKeys(reasonText)

        await driver.sleep(10000)
    }, 30000)

    test('Should be able to delete the currently uploaded Vaccination Card using the delete button and buttons on the Vaccination Card should be gone.', async () => {
        const reasonText = 'Bullying... saket sad 😔'
        const consultationReasonXPath = '//*[@id="consultation_reason"]'

        await driver.findElement(By.xpath(consultationReasonXPath)).sendKeys(reasonText)

        await driver.sleep(10000)
    }, 30000)

    test('Should be able to Update Patient Information', async () => {
        const submitButtonXPath = '//*[@id="addGuidanceAppointment"]'

        await driver.findElement(By.xpath(submitButtonXPath)).click()

        const successMessageXPath = '/html/body/div[2]/div/div[2]/div/div/p'

        const successMessage = await driver.wait(
            until.elementLocated(By.xpath(successMessageXPath)),
            10000
        )

        expect(successMessage).toBeDefined()

        const successMessageText = await successMessage.getText()

        expect(successMessageText).toEqual('You have successfully added a Guidance Case!')
    })
})
