import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { routes } from './routes';

import 'reflect-metadata';
import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: 'Internal Server Error',
    });
  },
);

export { app };
