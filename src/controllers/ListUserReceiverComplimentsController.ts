import { Request, Response } from 'express';
import { ListUserReceiverComplimentsService } from '../services/ListUserReceiverComplimentsService';

class listUserReceiverComplimentsService {
  async bridge(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    const listUserReceiverComplimentsService =
      new ListUserReceiverComplimentsService();

    const compliments =
      await listUserReceiverComplimentsService.executeListService(user_id);

    return response.status(200).json({
      compliments,
    });
  }
}

const ListUserReceiverComplimentsControllerInstance =
  new listUserReceiverComplimentsService();

export { ListUserReceiverComplimentsControllerInstance };
