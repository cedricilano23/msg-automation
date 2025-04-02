import { testData } from '../../data/testData';
import productPage = require('../../src/pages/productPage');
import itemPage = require('../../src/pages/itemPage');

Feature('Shopping Cart');

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

Scenario('Should remove an item from the cart and checkout successfully', async ({ I, cartPage, checkoutPage }) => {
  await I.login(testData.standardUser.username, testData.standardUser.password);
  await I.waitForText('Products', 10);

  await productPage.addAllItemsToCart();
  
  await I.click(productPage.shoppingCartLink);

  const cartItemNames = await cartPage.getCartItemNames();
  const thirdItemName = cartItemNames[2];
  await cartPage.removeItem(thirdItemName);

  const updatedCartCount = await cartPage.getCartItemNames();
  const initialCartCount = cartItemNames.length;
  I.assertEqual(updatedCartCount.length, initialCartCount - 1);
  I.dontSee(thirdItemName);

  await cartPage.proceedToCheckout();

  await checkoutPage.checkout(
    testData.standardUser.firstName, 
    testData.standardUser.lastName, 
    testData.standardUser.postalCode
  );
  await I.click(checkoutPage.finishButton);

  I.see(testData.orderConfirmationMessage.thankYou);
  I.see(testData.orderConfirmationMessage.orderDispatched);
});

Scenario('Should add an item to the cart from the item page', async ({ I, }) => {
  await I.login(testData.problemUser.username, testData.problemUser.password);
  await I.waitForText('Products', 10);

  await productPage.clickOnItem('Sauce Labs Backpack');

  await itemPage.addToCart('Sauce Labs Backpack');

  await I.click(itemPage.shoppingCartLink);

  I.see('Sauce Labs Backpack');
});

Scenario(`Should sort products by name in ascending order`, async ({ I }) => {
  await I.login(testData.standardUser.username, testData.standardUser.password);
  await I.waitForText('Products', 10);

  const beforeSort = await I.grabTextFromAll(productPage.productDetails.name);

  await productPage.sortBy(testData.sortOptions.nameAscending);

  const afterSort = await I.grabTextFromAll(productPage.productDetails.name);
  const expectedSort = [...beforeSort].sort();

  I.assertEqual(JSON.stringify(afterSort), JSON.stringify(expectedSort));
});