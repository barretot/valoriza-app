import { IAuthenticateRequestDTO } from './ServicesDTO/AuthenticateDTO';
import { UsersRepositories } from '../repositories/UsersRepositories';

import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

class AuthenticateUserService {
  async executeAuthenticateService({
    email,
    password,
  }: IAuthenticateRequestDTO) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new Error('Email/Password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect');
    }

    const secret = '2e0a4575774d2bd2b46ccae27de15a8d';

    const token = sign(
      {
        email: user.email,
      },
      secret,
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return token;
  }
}

export { AuthenticateUserService };
