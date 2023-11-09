import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/CreateProduct.dto';
import { UpdateProductDTO } from './dto/UpdateProduct.dto';
import { ProductEntity } from './product.entity';
import { randomUUID } from 'crypto';

@Controller('/products')
export class ProductsController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    const productEntity = new ProductEntity();
    productEntity.id = randomUUID();
    productEntity.userId = productData.userId;
    productEntity.name = productData.name;
    productEntity.characteristics = productData.characteristics;
    productEntity.description = productData.description;
    productEntity.value = productData.value;
    productEntity.quantity = productData.quantity;
    productEntity.images = productData.images;
    productEntity.category = productData.category;

    this.productRepository.saveProducts(productEntity);

    return {
      product: productData,
      message: 'Produto criado com sucesso.',
    };
  }

  @Get()
  async listProducts() {
    return this.productRepository.listProducts();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() productsData: UpdateProductDTO,
  ) {
    const updatedProduct = await this.productRepository.update(
      id,
      productsData,
    );

    return {
      message: 'Produto atualizado com sucesso.',
      product: updatedProduct,
    };
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const deletedProduct = await this.productRepository.delete(id);

    return {
      message: 'Produto removido com sucesso.',
      product: deletedProduct,
    };
  }
}
