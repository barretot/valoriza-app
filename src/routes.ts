import { CreateUserControllerInstance } from './controllers/CreateUserController';
import { CreateTagControllerInstance } from './controllers/CreateTagController';
import { verifyAdmin } from './middlewares/verifyAdmin';

import { Router } from 'express';

const routes = Router();

routes.post('/users', CreateUserControllerInstance.bridge);
routes.post('/tags', verifyAdmin, CreateTagControllerInstance.bridge);

export { routes };
