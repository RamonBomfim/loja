import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { IsEmailUnique } from '../validation/email-is-unique.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'Insira um e-mail válido.' })
  @IsEmailUnique({ message: 'Já existe um usuário com este e-mail' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  @IsOptional()
  password: string;
}
