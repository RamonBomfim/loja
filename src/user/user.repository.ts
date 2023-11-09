import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async save(users) {
    this.users.push(users);
  }

  async list() {
    return this.users;
  }

  async emailExist(email: string) {
    const possibleUser = this.users.find((user) => user.email === email);

    return possibleUser !== undefined;
  }
}
