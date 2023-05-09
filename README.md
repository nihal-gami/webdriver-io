# eBay Test Automation Framework

This test automation framework is built to test the search functionality of the eBay website. It uses JavaScript, WebDriverIO, and Mocha as the test framework. The framework supports multiple test data and is easily configurable.

## Getting Started

To get started with this framework, you need to follow the steps below:

1. Clone the repository to your local machine
2. Navigate to the project folder and run `npm install` to install all the dependencies.
3. To run the tests, run `npm test` in your terminal.

## Configurations

The configuration file `wdio.conf.js` is located in the project's root directory. This file contains all the configuration settings for the WebDriverIO framework, such as the browser to use, timeouts, and reporters.

## Test Data

The test data is stored in the `data.js` file located in the `data` folder. The data is stored as an object with keys representing the categories and values as an array of objects with the test data for that category.

## Running the Tests

The command to run the tests using the configuration file is :

`wdio.conf.js`

We can also customize the command by adding options. For example, to run only a specific test file, you can use the --spec option like this:

`npx wdio wdio.conf.js --spec ./test/specs/myTest.spec.js`

To run a specific test suite or test case, you can use the --suite and --grep options respectively. Here are some examples:

Run the "smoke" test suite
`npx wdio wdio.conf.js --suite smoke`

Run only the test case that contains the string "login"
`npx wdio wdio.conf.js --grep "login"`



## Test Cases

### Search for products on eBay

The `productSearch.js` file located in the `test/specs` directory contains the test cases for searching for products on eBay. The test cases use the test data stored in the `data.js` file to search for products in different categories.

### Product search with filters on eBay

The `multipleFilters.test.js` file located in the `test/specs` directory contains the test cases for searching for products on eBay with filters. The test cases use the test data stored in the `data.js` file to search for products in different categories with different filter configurations.

## Conclusion

This test automation framework provides a scalable and configurable solution for testing the search functionality of the eBay website. It is easy to use, and new test data and configurations can be added with ease.
