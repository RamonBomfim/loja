import { Controller, Body, Post, Get } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/CreateProduct.dto';

@Controller('/products')
export class ProductsController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    this.productRepository.saveProducts(productData);
    return productData;
  }

  @Get()
  async listProducts() {
    return this.productRepository.listProducts();
  }
}
