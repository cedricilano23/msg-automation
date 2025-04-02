const { I } = inject();

class ItemPage {
  itemName: string;
  itemDescription: string;
  itemPrice: string;
  itemImage: string;
  addToCartButton: string;
  removeButton: string;
  shoppingCartBadge: string;
  shoppingCartLink: string;
  backToProductsButton: string;
  burgerMenu: string;
  logoutButton: string;

  constructor() {
    this.itemName = '[data-test="inventory-item-name"]';
    this.itemDescription = '[data-test="inventory-item-desc"]';
    this.itemPrice = '[data-test="inventory-item-price"]';
    this.itemImage = '[data-test*="-img"]';
    this.addToCartButton = '[data-test="add-to-cart"]';
    this.removeButton = '[data-test="remove"]';
    this.backToProductsButton = '[data-test="back-to-products"]';
    this.shoppingCartBadge = '[data-test="shopping-cart-badge"]';
    this.shoppingCartLink = '[data-test="shopping-cart-link"]';
    this.burgerMenu = '#react-burger-menu-btn';
    this.logoutButton = '[data-test="logout-sidebar-link"]';
  }

  async addToCart(itemName: string) {
    await I.click(this.addToCartButton);
  }

  async removeFromCart() {
    await I.click(this.removeButton);
  }

  async backToProducts() {
    await I.click(this.backToProductsButton);
  }

  async logout() {
    await I.waitForElement(this.burgerMenu);
    await I.click(this.burgerMenu);
    await I.wait(1); 
    await I.waitForElement(this.logoutButton, 5); 
    await I.click(this.logoutButton);
  }
}

export = new ItemPage();