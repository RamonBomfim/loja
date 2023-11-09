import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private products = [];

  async saveProducts(products) {
    this.products.push(products);
  }

  async listProducts() {
    return this.products;
  }
}
