const tzOffset = 8 * 60 // timezone offset in minutes
const currentDate = new Date(Date.now() + tzOffset * 60 * 1000)
const timestamp = currentDate.toISOString().substr(0, 19).replace(/[-T:]/g, '').replace(/\.\d+/, '')

module.exports = {
    reporters: [
        'default',
        [
            'jest-html-reporter',
            {
                pageTitle: 'Test Report',
                outputPath: `reports/test_report_${timestamp}.html`,
                includeFailureMsg: true,
                includeConsoleLog: true,
            },
        ],
    ],
}
