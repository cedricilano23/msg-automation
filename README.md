# MSG Automation Suite

This repository contains an automated testing framework for web and API testing using CodeceptJS with Playwright and REST helpers.

## Table of Contents
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Project Structure](#project-structure)
- [Features](#features)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
cd <project-directory>
npm install
```

## Running Tests

Run all tests with Allure reporting:
```bash
npm run test
```

Run tests without Allure:
```bash
npm run test:codecept
```

Run tests with verbose output:
```bash
npm run test:verbose
```

## Reporting

Generate Allure report:
```bash
npm run allure:report
```

Open Allure report:
```bash
npm run allure:open
```

## Project Structure

```
├── data/                   # Test data
│   ├── httpCode.ts         # HTTP status codes
│   └── testData.ts         # Test data and fixtures
├── src/
│   └── pages/              # Page objects
│       ├── loginPage.ts    # Login page interactions
│       ├── productPage.ts  # Product page interactions
│       ├── cartPage.ts     # Cart page interactions
│       ├── checkoutPage.ts # Checkout page interactions
│       └── itemPage.ts     # Item details page interactions
├── tests/
│   ├── API/                # API tests
│   │   └── users_test.ts   # User API tests
│   └── Web/                # Web UI tests
│       ├── login_test.ts   # Login tests
│       └── cart_test.ts    # Cart functionality tests
├── utils/
│   └── apiHelper.ts        # API helper functions
├── codecept.conf.ts        # CodeceptJS configuration
├── steps_file.ts           # Custom steps
└── tsconfig.json           # TypeScript configuration
```

## Framework Features

- **Page Object Model**: Organized page interactions
- **API Testing**: REST API testing capabilities
- **Data-Driven Testing**: Support for parameterized tests
- **Reporting**: Allure reporting integration
- **TypeScript**: Type-safe test automation
- **Custom Helpers**: Reusable test functions

## Test Types / Cases

### Web UI Tests
- Login functionality
- Logout Functionality
- Product browsing and sorting
- Cart operations
- Checkout process
- Removing items from cart
- Viewing item details
- Error handling


### API Tests
- User data retrieval
- User creation and updates
- Response validation
- Performance testing with delays
- Error handling
- Data validation
- Single user and multiple users retrieval

## Configuration

The framework is configured to run against:
- Web UI: https://www.saucedemo.com
- API: https://reqres.in/

## Conclusion
API and Web UI Tests are implemented in this project. I chose to create a single repository for both automated tests (Web and API) for the sake of simplicity and organization. Configuration for both can be found in a single file. 
Tests run in Chromium with video recording enabled.
