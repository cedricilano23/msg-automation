export const testData = {
  standardUser: {
    firstName: 'John',
    lastName: 'Doe',
    postalCode: '12345',
    username: 'standard_user',
    password: 'secret_sauce'
  },
  lockedOutUser: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },
  problemUser: {
    username: 'problem_user',
    password: 'secret_sauce'
  },
  errorMessage: {
    lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
    invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
    usernameRequired: 'Epic sadface: Username is required',
    passwordRequired: 'Epic sadface: Password is required'
  },
  orderConfirmationMessage: {
    thankYou: 'Thank you for your order!',
    orderDispatched: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
  },
  sortOptions: {
    nameAscending: 'az',
    nameDescending: 'Name (Z to A)',
    priceAscending: 'Price (low to high)',
    priceDescending: 'Price (high to low)'
  }
};

export const delays = new DataTable(['delay']);
delays.add(['0']);
delays.add(['3']);
