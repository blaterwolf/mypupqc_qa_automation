const firefox = require('selenium-webdriver/firefox')

const firefoxOptions = new firefox.Options()
firefoxOptions.setPreference('browser.download.folderList', 2)
firefoxOptions.setPreference('browser.download.manager.showWhenStarting', false)
firefoxOptions.setPreference('browser.download.dir', 'DOWNLOAD DIRECTORY PATH')
firefoxOptions.setPreference(
    'browser.helperApps.neverAsk.saveToDisk',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
)

module.exports = firefoxOptions
