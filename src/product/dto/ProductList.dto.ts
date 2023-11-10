import { ProductEntity } from '../product.entity';
// import { ProductCharacteristicDTO } from './ProductCharacteristic.dto';
// import { ProductImageDTO } from './ProductImage.dto';

export class ProductListDTO {
  constructor(readonly product: ProductEntity) {}
}
