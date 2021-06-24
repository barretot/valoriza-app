import { Request, Response } from 'express';
import { CreateTagService } from '../services/CreateTagService';

class CreateTagController {
  async bridge(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const createTagService = new CreateTagService();

    const tag = await createTagService.executeCreateService({
      name,
    });

    return response.status(200).json({
      message: 'Tag created',
      tag,
    });
  }
}

const CreateTagControllerInstance = new CreateTagController();

export { CreateTagControllerInstance };
