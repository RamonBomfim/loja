import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  name: string;

  @IsEmail(undefined, { message: 'Insira um e-mail válido.' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  password: string;
}
