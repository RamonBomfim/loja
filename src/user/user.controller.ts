import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { UserListDTO } from './dto/UserList.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() userData: CreateUserDto) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.password = userData.password;
    userEntity.name = userData.name;
    userEntity.id = uuid();

    this.userService.createUser(userEntity);
    return {
      id: new UserListDTO(userEntity.id, userEntity.name),
      message: 'Usuário criado com sucesso.',
    };
  }

  @Get()
  async listUsers() {
    const savedUsers = await this.userService.userList();

    return savedUsers;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() newData: UpdateUserDTO) {
    const updatedUser = await this.userService.updateUser(id, newData);

    return {
      user: updatedUser,
      message: 'Usuário atualizado com sucesso.',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const deletedUser = await this.userService.deleteUser(id);

    return {
      user: deletedUser,
      message: 'Usuário removido com sucesso.',
    };
  }
}
