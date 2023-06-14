# myPUPQC QA Automation Testing with Jest and Selenium

This project demonstrates QA Automation Testing for myPUPQC using Selenium WebDriver and Jest for testing.

## Project Overview

|                  |                                                                                                                                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**  | This project is for fullfillment of requirements in subject Capstone Project. This is for the QA Team.                                                                                                                                                  |
| **Date Started** | April 6, 2023                                                                                                                                                                                                                                           |
| **Developers**   | <ul><li>[Defiesta, Kim John](https://github.com/Moonkeyk666)</li><li>[Lupo, Albert Angelo](https://github.com/blaterwolf)</li><li>[Tulod, James Paul](https://github.com/polekstulod)</li><li>[Villaruz, Micah](https://github.com/micahvllz)</li></ul> |
| **QA Team**      | <ul><li>[Fallesgon, Josiah Alether](https://github.com/Josayah32)</li></ul>                                                                                                                                                                             |

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone the project using VSCode on Source Control (Ctrl+Shift+G) and find this project. Make sure you are a Contributor and ask for the [Project Manager](https://github.com/blaterwolf)'s approval.
3. Once cloned, you can run `npm install` as this already contains the `package.json`. The following packages for this project are used:
    - [jest](https://www.npmjs.com/package/jest)
    - [jest-html-reporter](https://www.npmjs.com/package/jest-html-reporter)
    - [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)
4. You will be provided a value of the `.env` files so ask for it.

## Running Tests

Run the tests using Jest: `npm test`

This command will generate an HTML test report in the `reports` directory. See Reports section below.

If you want to run a specific Test Suite (i.e., a specific test file), you will use the command `npm test tests/[filename].test.js`

Assuming that there are multiple directories in the `tests` folder, you could run a batch of Test Suites by also running `npm test tests/[folderName]` if all your test files are there.

**Alternative**: Install [IntelliJ (Ultimate Edition)](https://www.jetbrains.com/idea/download/#section=windows) to specifically run test cases. Very convinient.
## Reports

After running the tests, you can view the test report by opening the HTML file in the `reports` directory. This is indicated in the `jest.config.js` let me know if you want to change something here that is beneficial to the project.

A report is named always as: `test_report_YYYYMMDD_HHmmss` where the time indicated there is the time that is finished generating.

By default, reports are only generated locally. Do not change the `.gitignore` file for this.
