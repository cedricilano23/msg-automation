/// <reference types='codeceptjs' />

type steps_file = typeof import('./steps_file');
type LoginPage = typeof import('./src/pages/loginPage');
type ProductPage = typeof import('./src/pages/productPage');

declare namespace CodeceptJS {
  interface SupportObject { 
    I: I, current: any, 
    loginPage: LoginPage, 
    productPage: ProductPage,
    cartPage: CartPage,
    checkoutPage: CheckoutPage,
    itemPage: ItemPage
  }
  interface Methods extends Playwright, REST{}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
