import { Request, Response } from 'express';
import { ListUsersService } from '../services/LisUserService';

class ListUsersController {
  async bridge(request: Request, response: Response): Promise<Response> {
    const listUsersService = new ListUsersService();

    const tags = await listUsersService.executeListService();

    return response.status(200).json({
      tags,
    });
  }
}

const ListUsersControllerInstance = new ListUsersController();

export { ListUsersControllerInstance };
