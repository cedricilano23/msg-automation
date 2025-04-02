const { I } = inject();

interface ProductDetails {
  name: string;
  description: string;
  price: string;
}

class ProductPage {
  productDetails: ProductDetails;
  addToCartButton: string;
  removeButton: string;
  shoppingCartBadge: string;
  shoppingCartLink: string;
  sortDropdown: string;
  burgerMenu: string;
  logoutButton: string;

  constructor() {
    this.productDetails = {
      name: '[data-test="inventory-item-name"]',
      description: '[data-test="inventory-item-desc"]',
      price: '[data-test="inventory-item-price"]'
    };
    this.addToCartButton = '[data-test^="add-to-cart-"]';
    this.removeButton = '[data-test^="remove-"]';
    this.shoppingCartBadge = '[data-test="shopping-cart-badge"]';
    this.shoppingCartLink = '[data-test="shopping-cart-link"]';
    this.sortDropdown = '[data-test="product-sort-container"]';
    this.burgerMenu = '#react-burger-menu-btn';
    this.logoutButton = '[data-test="logout-sidebar-link"]';
  }
  async addToCart(itemName: string) {
    const formattedItemName = itemName.toLowerCase().replace(/\s+/g, '-');
    await I.click(`[data-test="add-to-cart-${formattedItemName}"]`);
  }

  async removeFromCart() {
    await I.click(this.removeButton);
  }

  async addAllItemsToCart() {
    const buttons = await I.grabAttributeFromAll(this.addToCartButton, 'id');
    for (const buttonId of buttons) {
      const escapedLocator = `[data-test="${buttonId.replace(/"/g, '\\"')}"]`; 
      await I.click(escapedLocator);
    }

    console.log('All items added to cart');
  }
  async clickOnItem(itemName: string) {
    await I.click(this.productDetails.name);
  }

  async sortBy(sortOption: string) {
    console.log(`Sorting by: ${sortOption}`); 
    await I.selectOption(this.sortDropdown, sortOption);
    await I.wait(1); 
  }

  async logout() {
    await I.waitForElement(this.burgerMenu);
    await I.click(this.burgerMenu);
    await I.wait(1); 
    await I.waitForElement(this.logoutButton, 5); 
    await I.click(this.logoutButton);
  }
}

export = new ProductPage();