import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';

import { UsersRepositories } from '../repositories/UsersRepositories';
import { ICreateUserRequestDTO } from './CreateUserDTO';

class CreateUserService {
  async executeService({ name, email, admin }: ICreateUserRequestDTO) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const validationFields = Yup.object().shape({
      name: Yup.string().required().min(2),
      email: Yup.string().email().required(),
    });

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    const user = usersRepository.create({
      name,
      email,
      admin,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    if (!(await validationFields.isValid(user))) {
      throw new Error('Invalid fields');
    }

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
