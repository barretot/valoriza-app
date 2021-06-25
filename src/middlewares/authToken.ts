import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function authToken(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error: 'Token not provider' });
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(
      token,
      '2e0a4575774d2bd2b46ccae27de15a8d',
    ) as IPayload;
    request.user_id = sub;
  } catch (err) {
    return response.status(401).json({ error: 'Invalid token' });
  }

  return next();
}
