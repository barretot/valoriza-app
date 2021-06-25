import { Request, Response } from 'express';
import { ListTagsService } from '../services/ListTagsService';

class ListTagsController {
  async bridge(request: Request, response: Response): Promise<Response> {
    const listTagsService = new ListTagsService();

    const tags = await listTagsService.executeListService();

    return response.status(200).json({
      tags,
    });
  }
}

const ListTagsControllerInstance = new ListTagsController();

export { ListTagsControllerInstance };
