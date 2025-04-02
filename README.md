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

## Test Types

### Web UI Tests
- Login functionality
- Product browsing and sorting
- Cart operations
- Checkout process

### API Tests
- User data retrieval
- User creation and updates
- Response validation
- Performance testing with delays

## Configuration

The framework is configured to run against:
- Web UI: https://www.saucedemo.com
- API: https://reqres.in/

Tests run in Chromium with video recording enabled.
