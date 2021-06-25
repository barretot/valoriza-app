import { Request, Response } from 'express';
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsUserService';

class ListUserSendComplimentsController {
  async bridge(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    const listUserSendComplimentsService = new ListUserSendComplimentsService();

    const compliments = await listUserSendComplimentsService.executeListService(
      user_id,
    );

    return response.status(200).json({
      compliments,
    });
  }
}

const ListUserSendComplimentsControllerInstance =
  new ListUserSendComplimentsController();

export { ListUserSendComplimentsControllerInstance };
