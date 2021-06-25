import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

import { classToPlain } from 'class-transformer';

class ListUsersService {
  async executeListService() {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.find();
    return classToPlain(user);
  }
}

export { ListUsersService };
