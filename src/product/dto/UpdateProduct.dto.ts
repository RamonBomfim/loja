import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { ProductCharacteristicDTO } from './ProductCharacteristic.dto';
import { ProductImageDTO } from './ProductImage.dto';
import { Type } from 'class-transformer';

export class UpdateProductDTO {
  @IsUUID(undefined, { message: 'ID do produto inválido' })
  id: string;

  @IsUUID(undefined, { message: 'ID de usuário inválido' })
  userId: string;

  @IsString()
  @IsNotEmpty({ message: 'Informe o nome do produto.' })
  @IsOptional()
  name: string;

  @IsPositive({ message: 'O valor do produto precisa ser maior que zero.' })
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @IsOptional()
  value: number;

  @IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
  @IsOptional()
  quantity: number;

  @IsString()
  @IsNotEmpty({ message: 'Descrição do produto não pode ser vazia' })
  @MaxLength(1000, {
    message: 'Descrição não pode ter mais que 1000 caracteres.',
  })
  @IsOptional()
  description: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => ProductCharacteristicDTO)
  @IsOptional()
  characteristics: ProductCharacteristicDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImageDTO)
  @IsOptional()
  images: ProductImageDTO[];

  @IsString()
  @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia.' })
  @IsOptional()
  category: string;
}
