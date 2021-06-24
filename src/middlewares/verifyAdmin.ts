import { Request, Response, NextFunction } from 'express';

export function verifyAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const admin: boolean = false;

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: 'User is not admin',
  });
}
