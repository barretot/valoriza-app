import { CreateUserControllerInstance } from './controllers/CreateUserController';
import { CreateTagControllerInstance } from './controllers/CreateTagController';
import { AuthenticateUserControllerInstance } from './controllers/AuthenticateUserController';
import { CreateComplimentControllerInstance } from './controllers/CreateComplimentController';
import { verifyAdmin } from './middlewares/verifyAdmin';

import { Router } from 'express';

const routes = Router();

routes.post('/users', CreateUserControllerInstance.bridge);
routes.post('/tags', CreateTagControllerInstance.bridge);
routes.post('/sessions', AuthenticateUserControllerInstance.bridge);
routes.post('/compliments', CreateComplimentControllerInstance.bridge);

export { routes };
