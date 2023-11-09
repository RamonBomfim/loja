import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsEmailUnique } from '../validation/email-is-unique.validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  name: string;

  @IsEmail(undefined, { message: 'Insira um e-mail válido.' })
  @IsEmailUnique({ message: 'Já existe um usuário com este e-mail' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  password: string;
}
