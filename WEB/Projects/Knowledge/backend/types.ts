import { Express, NextFunction, Request, Response } from 'express';

export type ExpressConsignFunc<ApiKeys extends string> = (
  app: ExpressConsign
) => Record<ApiKeys, ExpressCallback>;

export interface ExpressConsign extends Express {
  api: {
    user: Record<ApiUserKeys, ExpressCallback>;
  };
}

export type ApiUserKeys = 'save';

export type ExpressCallback = (req: Request, res: Response, next: NextFunction) => void;
