import { ProductCharacteristicDTO } from './ProductCharacteristic.dto';
import { ProductImageDTO } from './ProductImage.dto';

export class ProductListDTO {
  id: string;
  userId: string;
  name: string;
  value: number;
  quantity: number;
  description: string;
  category: string;
  characteristic: ProductCharacteristicDTO[];
  images: ProductImageDTO[];
}
