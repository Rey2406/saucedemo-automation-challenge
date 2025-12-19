# saucedemo-automation-challenge

Application under test:
https://www.saucedemo.com/

# Pre-requisites

* Install NodeJS and NPM package manager.
* Visual Studio Code
* GIT Client (for remote tracking)
* GIT Bash terminal (for Windows)

# Setup

* Clone git repo
* Navigate to folder and open terminal
* Run `npm install` to install the framework dependencies
* `npx cypress open` to open the cypress test runner and choose `E2E Testing` which will create cypress config, support and fixture folders.
* Choose Chrome as a browser
* Click on "Start E2E Testing in Chrome"
* Click on HomeSauceDemo.cy.js to start running the testing

# Running tests

* [Command Line]
* `npx cypress open` will open the cypress test runner so you can run the tests from it
* `npx cypress run` will run the test spec files located within `cypress/e2e` folder.
* Following custom test scripts are setup in `package.json` to run specific test suites in headless format:
  * `npm run cy:run`
  * `npm run cy:open`
  * `npm run cy:run-ci`

# Screenshots

* They are located in screnshots folder

# Environment variable

* There is an environment variable located in `cypress.config.js` called "baseUrl" that contains the URL of the page to test.

# POM

* The Project Structure is like this:
* `HomeSauceDemo.cy.js` file located in e2e folder, that is the home run file.
* The other js files are located in pages folder.

# Continuous Integration CI

The Project is configured to run Cypress in Continuous Integration.

# Jenkins Integration

* This framework supports the Continous Integration CI with Jenkins, and offers fully customize execution with support for:
  * Jenkinsfile Pipeline Script
  * Build with Parameters
    * Allows to select test specs, browser, browser mode, tags, environment, dashboard recording.
  * Publishes Mochawesome HTML report via HTML Publisher Plugin
  * Parses JUnit XML results to display a summary and trends of test results
  * Sends a Slack Notification with test results summary, link to test report, and job.
* See the [Jenkinsfile](./Jenkinsfile) to see how the pipeline is configured.