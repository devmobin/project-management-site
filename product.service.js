class ProductService {
  price = 0;

  constructor() {
    this.price = Math.random();
  }

  buy() {
    console.log('buy has done', this.price);
  }
}

exports.ProductService = ProductService;