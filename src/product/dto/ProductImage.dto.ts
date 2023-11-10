import { IsNotEmpty, IsUrl, IsString } from 'class-validator';
import { ProductEntity } from '../product.entity';

export class ProductImageDTO {
  id: string;

  @IsUrl(undefined, { message: 'URL para imagem inválida.' })
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'Faça uma breve descrição sobre a imagem.' })
  description: string;

  product: ProductEntity;
}
