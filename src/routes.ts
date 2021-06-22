import { Router } from 'express';
import { CreateUserControllerInstance } from './controllers/CreateUserController';

const routes = Router();

routes.post('/users', CreateUserControllerInstance.bridge);

export { routes };
