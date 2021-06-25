import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/CreateComplimentService';

class CreateComplimentController {
  async bridge(request: Request, response: Response): Promise<Response> {
    const { tag_id, user_receiver, message } = request.body;
    const { user_id } = request;
    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.executeCreateService({
      tag_id,
      user_sender: user_id,
      user_receiver,
      message,
    });

    return response
      .status(200)
      .json({ message: 'Compliment Created', compliment });
  }
}

const CreateComplimentControllerInstance = new CreateComplimentController();

export { CreateComplimentControllerInstance };
