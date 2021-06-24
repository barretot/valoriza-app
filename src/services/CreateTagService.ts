import { getCustomRepository } from 'typeorm';

import * as Yup from 'yup';

import { TagsRepositories } from '../repositories/TagsRepositories';
import { ICreateTagRequestDTO } from './ServicesDTO/CreateTagDTO';

class CreateTagService {
  async executeCreateService({ name }: ICreateTagRequestDTO) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const validationFields = Yup.object().shape({
      name: Yup.string().required().min(1),
    });

    const tagAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error('Tag already exists!');
    }

    const tag = await tagsRepositories.create({
      name,
    });

    if (!(await validationFields.isValid(tag))) {
      throw new Error('Invalid fields');
    }

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };
