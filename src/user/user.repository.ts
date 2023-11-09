import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async emailExist(email: string) {
    const possibleUser = this.users.find((user) => user.email === email);

    return possibleUser !== undefined;
  }

  private searchForId(id: string) {
    const possibleUser = this.users.find((savedUser) => savedUser.id === id);

    if (!possibleUser) {
      throw new Error('Usuário não existe');
    }

    return possibleUser;
  }

  async update(id: string, updatingData: Partial<UserEntity>) {
    const user = this.searchForId(id);

    Object.entries(updatingData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      user[key] = value;
    });

    return user;
  }

  async delete(id: string) {
    const user = this.searchForId(id);
    this.users = this.users.filter((savedUser) => savedUser.id !== id);

    return user;
  }
}
