import { testData } from '../../data/testData';
import loginPage = require('../../src/pages/loginPage');
import productPage = require('../../src/pages/productPage');

Feature('Login');

Before(({ I, loginPage }) => {
  loginPage.open();
  I.waitForElement(loginPage.username, 5);
  I.waitForElement(loginPage.password, 5);
  I.waitForElement(loginPage.loginButton, 5);
});

After(({ I }) => {
  I.clearCookie();
  console.log('Test completed \n');
});

Scenario('Should successfully login with valid credentials', async ({ I }) => {
  await I.login(
      testData.standardUser.username, 
      testData.standardUser.password
  );

  await I.waitForText('Products', 10);
});

Scenario('Should show an error when trying to login with invalid credentials', async ({ I }) => {
  await I.login(
      'Inv@lid_Username', 
      testData.standardUser.password
  );

  await I.waitForElement('[data-test="error"]', 5);
  await I.see(testData.errorMessage.invalidCredentials);
});

Scenario('Should fail when trying to login with locked out user', async ({ I }) => {
  await I.login(
    testData.lockedOutUser.username, 
    testData.lockedOutUser.password
  );
  await I.waitForElement('[data-test="error"]', 5);
  await I.see(testData.errorMessage.lockedOut);
});

Scenario('Should show an error when trying to login with empty password', async ({ I }) => {
  await I.login(testData.standardUser.username, '');
  await I.waitForElement('[data-test="error"]', 5);

  await I.see(testData.errorMessage.passwordRequired);
});

Scenario('Should show an error when trying to login with empty username', async ({ I }) => {
  await I.login(testData.standardUser.username, '');
  await I.waitForElement('[data-test="error"]', 5);

  await I.see(testData.errorMessage.passwordRequired);
});

Scenario('Should be able to click the x button to close the error message', async ({ I }) => {
  await I.login(testData.standardUser.username, '');
  await I.waitForElement('[data-test="error"]', 5);

  await I.click(loginPage.errorCloseButton);

  await I.dontSeeElement(loginPage.errorMessage);
});

Scenario('Should successfully logout', async ({ I }) => {
  await I.login(testData.standardUser.username, testData.standardUser.password);
  await I.waitForText('Products', 10);

  await productPage.logout();

  I.seeInCurrentUrl('/');
});
