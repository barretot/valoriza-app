import { CreateUserControllerInstance } from './controllers/CreateUserController';
import { CreateTagControllerInstance } from './controllers/CreateTagController';
import { AuthenticateUserControllerInstance } from './controllers/AuthenticateUserController';
import { CreateComplimentControllerInstance } from './controllers/CreateComplimentController';
import { ListUserReceiverComplimentsControllerInstance } from './controllers/ListUserReceiverComplimentsController';
import { ListUserSendComplimentsControllerInstance } from './controllers/ListUserSendComplimentsController';
import { ListTagsControllerInstance } from './controllers/ListTagsController';
import { ListUsersControllerInstance } from './controllers/ListUserController';
import { verifyAdmin } from './middlewares/verifyAdmin';
import { authToken } from './middlewares/authToken';

import { Router } from 'express';

const routes = Router();

routes.post('/users', CreateUserControllerInstance.bridge);
routes.post(
  '/tags',
  authToken,
  verifyAdmin,
  CreateTagControllerInstance.bridge,
);
routes.post('/sessions', AuthenticateUserControllerInstance.bridge);
routes.post(
  '/compliments',
  authToken,
  CreateComplimentControllerInstance.bridge,
);

routes.get(
  '/users/compliments/send',
  authToken,
  ListUserSendComplimentsControllerInstance.bridge,
);

routes.get(
  '/users/compliments/receive',
  authToken,
  ListUserReceiverComplimentsControllerInstance.bridge,
);

routes.get('/tags', authToken, ListTagsControllerInstance.bridge);

routes.get('/users', authToken, ListUsersControllerInstance.bridge);

export { routes };
