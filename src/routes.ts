import { Router } from 'express';

const routes = Router();

routes.get('/user', (request, response) => {
  return response.send({
    message: 'Hello World',
  });
});

export { routes };
