import { ProductCharacteristicDTO } from './dto/ProductCharacteristic.dto';
import { ProductImageDTO } from './dto/ProductImage.dto';

export class ProductEntity {
  id: string;
  userId: string;
  name: string;
  value: number;
  quantity: number;
  description: string;
  characteristics: ProductCharacteristicDTO[];
  images: ProductImageDTO[];
  category: string;
}
