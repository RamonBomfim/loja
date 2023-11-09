import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { UserListDTO } from './dto/UserList.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDto) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.password = userData.password;
    userEntity.name = userData.name;
    userEntity.id = uuid();

    this.userRepository.save(userEntity);
    return {
      id: new UserListDTO(userEntity.id, userEntity.name),
      message: 'Usuário criado com sucesso.',
    };
  }

  @Get()
  async listUsers() {
    const savedUsers = await this.userRepository.list();
    const userList = savedUsers.map(
      (user) => new UserListDTO(user.id, user.name),
    );

    return userList;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() newData: UpdateUserDTO) {
    const updatedUser = await this.userRepository.update(id, newData);

    return {
      user: updatedUser,
      message: 'Usuário atualizado com sucesso.',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const deletedUser = await this.userRepository.delete(id);

    return {
      user: deletedUser,
      message: 'Usuário removido com sucesso.',
    };
  }
}
