import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { UpdateProductDTO } from './dto/UpdateProduct.dto';
import { ProductListDTO } from './dto/ProductList.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(productEntity: ProductEntity) {
    await this.productRepository.save(productEntity);
  }

  async productList() {
    const savedProducts = await this.productRepository.find();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const productList = savedProducts.map((_product) => new ProductListDTO());

    return productList;
  }

  async updateProduct(id: string, productEntity: UpdateProductDTO) {
    await this.productRepository.update(id, productEntity);
  }

  async deleteProduct(id: string) {
    await this.productRepository.delete(id);
  }
}
