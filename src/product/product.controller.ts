import { Controller, Body, Post, Get } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Controller('/products')
export class ProductsController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData) {
    this.productRepository.saveProducts(productData);
    return productData;
  }

  @Get()
  async listProducts() {
    return this.productRepository.listProducts();
  }
}
