import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async bridge(request: Request, response: Response): Promise<Response> {
    const { name, email, admin } = request.body;
    const createUserService = new CreateUserService();

    const user = await createUserService.executeService({
      name,
      email,
      admin,
    });

    return response.status(200).json({
      message: 'User created',
      user,
    });
  }
}

const CreateUserControllerInstance = new CreateUserController();

export { CreateUserControllerInstance };
