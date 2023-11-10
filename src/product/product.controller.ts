import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/CreateProduct.dto';
import { UpdateProductDTO } from './dto/UpdateProduct.dto';
import { ProductEntity } from './product.entity';
import { randomUUID } from 'crypto';
import { ProductService } from './product.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

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

    this.productService.createProduct(productEntity);

    return {
      product: productData,
      message: 'Produto criado com sucesso.',
    };
  }

  @Get()
  async listProducts() {
    return this.productService.productList();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() productsData: UpdateProductDTO,
  ) {
    const updatedProduct = await this.productService.updateProduct(
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
    const deletedProduct = await this.productService.deleteProduct(id);

    return {
      message: 'Produto removido com sucesso.',
      product: deletedProduct,
    };
  }
}
