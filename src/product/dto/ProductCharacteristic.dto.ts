import { IsNotEmpty, IsString } from 'class-validator';
import { ProductEntity } from '../product.entity';

export class ProductCharacteristicDTO {
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'Preencha o campo com o nome da característica.' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Faça uma descrição rápida dessa característica.' })
  description: string;

  product: ProductEntity;
}
