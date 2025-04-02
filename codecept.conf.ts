exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true,
      windowSize: '1920x1080',
      video: true
    },
    REST: {
      endpoint: 'https://reqres.in/',
      defaultHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
  },
  include: {
    I: './steps_file',
    loginPage: './src/pages/loginPage',
    productPage: './src/pages/productPage',
    cartPage: './src/pages/cartPage',
    checkoutPage: './src/pages/checkoutPage'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results',
      reportDir: './output/allure-report'
    }
  },
  tests: './tests/**/*_test.ts',
  name: 'msg-automation-suite'
}