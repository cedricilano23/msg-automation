const { I } = inject();

class CartPage {
  list : string;
  item : string;
  name : string;
  price : string;
  description : string;
  quantity : string;
  removeButton : string;
  checkoutButton : string;
  continueShoppingButton : string;
  burgerMenu: string;
  logoutButton: string;

  constructor() {
      this.list = '[data-test="cart-list"]'
      this.item = '[data-test="inventory-item"]'
      this.name = '[data-test="inventory-item-name"]'
      this.price = '[data-test="inventory-item-price"]'
      this.description = '[data-test="inventory-item-desc"]'
      this.quantity = '[data-test="item"]'
      this.removeButton = '[data-test^="remove-"]'
      this.checkoutButton = '[data-test="checkout"]'
      this.continueShoppingButton = '[data-test="continue-shopping"]'
      this.burgerMenu = '#react-burger-menu-btn';
      this.logoutButton = '[data-test="logout-sidebar-link"]';
    };

  async getCartItemNames(): Promise<any[]> {
    const itemNames = await I.grabTextFromAll(this.name);

    return itemNames;
  }

  async proceedToCheckout(): Promise<void> {
    await I.click(this.checkoutButton);
    console.log('Proceeding to checkout');
  }

  async continueShopping(): Promise<void> {
    await I.click(this.continueShoppingButton);
  }

  async removeItem(itemName: string): Promise<void> {
    const formattedItemName = itemName.toLowerCase().replace(/\s+/g, '-');
    await I.click(`[data-test="remove-${formattedItemName}"]`);
    console.log(`Removed ${itemName} from cart`);
  }

  async logout() {
    await I.waitForElement(this.burgerMenu);
    await I.click(this.burgerMenu);
    await I.wait(1); 
    await I.waitForElement(this.logoutButton, 5); 
    await I.click(this.logoutButton);
  }
}

export = CartPage;