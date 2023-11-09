import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  async saveProducts(products: ProductEntity) {
    this.products.push(products);

    return products;
  }

  async listProducts() {
    return this.products;
  }

  private searchForId(id: string) {
    const possibleProduct = this.products.find((product) => product.id === id);

    if (!possibleProduct) {
      throw new Error('Produto não existe');
    }

    return possibleProduct;
  }

  async update(id: string, productData: Partial<ProductEntity>) {
    const nonUpdatingData = ['id', 'userId'];
    const product = this.searchForId(id);

    Object.entries(productData).forEach(([key, value]) => {
      if (nonUpdatingData.includes(key)) {
        return;
      }

      product[key] = value;
    });

    return product;
  }

  async delete(id: string) {
    const deletedProduct = this.searchForId(id);
    this.products = this.products.filter((product) => product.id !== id);

    return deletedProduct;
  }
}
