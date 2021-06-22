import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async bridge(request: Request, response: Response): Promise<Response> {
    const { name, email, admin } = request.body;
    const createUserService = new CreateUserService();

    try {
      const user = await createUserService.executeService({
        name,
        email,
        admin,
      });

      return response.status(200).json({
        message: 'User created',
        user,
      });
    } catch (err) {
      return response
        .status(400)
        .send({ error: err.message || 'Unexpected error' });
    }
  }
}

const CreateUserControllerInstance = new CreateUserController();

export { CreateUserControllerInstance };
