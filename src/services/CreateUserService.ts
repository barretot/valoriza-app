import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';

import { UsersRepositories } from '../repositories/UsersRepositories';
import { ICreateUserRequestDTO } from './ServicesDTO/CreateUserDTO';

class CreateUserService {
  async executeCreateService({
    name,
    email,
    admin = false,
    password,
  }: ICreateUserRequestDTO) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const validationFields = Yup.object().shape({
      name: Yup.string().required().min(2),
      email: Yup.string().email().required(),
      password: Yup.string(),
    });

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    const user = usersRepository.create({
      name,
      email,
      admin,
      password,
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
