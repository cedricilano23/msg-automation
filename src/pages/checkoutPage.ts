const { I } = inject();

class CheckoutPage {
  firstName: string;
  lastName: string;
  postalCode: string;
  continueButton: string;
  continueShoppingButton: string;
  cancelButton: string;
  errorMessage: string;
  finishButton: string;
  burgerMenu: string;
  logoutButton: string;

  constructor() {
    this.firstName = '[data-test="firstName"]';
    this.lastName = '[data-test="lastName"]';
    this.postalCode = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';
    this.continueShoppingButton = '[data-test="continue-shopping"]';
    this.cancelButton = '[data-test="cancel"]';
    this.errorMessage = '[data-test="error"]';
    this.finishButton = '[data-test="finish"]';
    this.burgerMenu = '#react-burger-menu-btn';
    this.logoutButton = '[data-test="logout-sidebar-link"]';

}
  async checkout(firstName: string, 
    lastName: string, 
    postalCode: string): Promise<void> {
    await I.fillField(this.firstName, firstName);
    await I.fillField(this.lastName, lastName);
    await I.fillField(this.postalCode, postalCode);
    await I.click(this.continueButton);
  }

  async verifyCheckoutError(message: string): Promise<void> {
    await I.waitForElement(this.errorMessage);
    await I.see(message, this.errorMessage);
  }

  async logout() {
    await I.waitForElement(this.burgerMenu);
    await I.click(this.burgerMenu);
    await I.wait(1); 
    await I.waitForElement(this.logoutButton, 5); 
    await I.click(this.logoutButton);
  }
}

export = new CheckoutPage();