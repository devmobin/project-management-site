class UserService {
  id = 0;
  shop = null;
  shop2 = null;

  constructor(product, product2) {
    this.id = Math.random();
    this.shop = product;
    this.shop2 = product2;
  }

  signup() {
    console.log("user signing in the app", this.id);
    console.log(this.shop);
    console.log(this.shop2);
  }
}

exports.UserService = UserService;
