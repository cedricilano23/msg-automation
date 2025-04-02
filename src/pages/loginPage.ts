const { I } = inject();

class LoginPage {
  username: string;
  password: string;
  loginButton: string;
  errorMessage: string;
  errorCloseButton: string;

  constructor() {
    this.username = '[data-test="username"]';
    this.password = '[data-test="password"]';
    this.loginButton = '[data-test="login-button"]';
    this.errorMessage = '[data-test="error"]';
    this.errorCloseButton = '[data-test="error-button"]';
  }

  async login(username: string, password: string): Promise<void> {
    await I.fillField(this.username, username);
    await I.fillField(this.password, password);
    await I.click(this.loginButton);
  }

  async verifyLoginError(message: string): Promise<void> {
    await I.waitForElement(this.errorMessage);
    await I.see(message, this.errorMessage);
  }

  open(): void {
    I.amOnPage('');
  }
}

export = new LoginPage();