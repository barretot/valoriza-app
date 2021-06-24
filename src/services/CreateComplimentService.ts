import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { IComplimentRequestDTO } from './ServicesDTO/CreateComplimentDTO';

import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

class CreateComplimentService {
  async executeCreateService({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequestDTO) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories,
    );

    const usersRepositories = getCustomRepository(UsersRepositories);

    if (user_sender === user_receiver) {
      throw new Error('Incorrect User Receiver');
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error('User Receiver dows not exists!');
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
