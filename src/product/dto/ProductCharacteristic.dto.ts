import { IsNotEmpty, IsString } from 'class-validator';

export class ProductCharacteristicDTO {
  @IsString()
  @IsNotEmpty({ message: 'Preencha o campo com o nome da característica.' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Faça uma descrição rápida dessa característica.' })
  description: string;
}
