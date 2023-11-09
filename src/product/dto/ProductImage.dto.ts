import { IsNotEmpty, IsUrl, IsString } from 'class-validator';

export class ProductImageDTO {
  @IsUrl(undefined, { message: 'URL para imagem inválida.' })
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'Faça uma breve descrição sobre a imagem.' })
  description: string;
}
