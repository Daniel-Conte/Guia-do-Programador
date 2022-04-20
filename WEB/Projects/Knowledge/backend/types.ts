import type { Express, NextFunction, Request, Response } from 'express';
import type { Knex } from 'knex';

export type ExpressConsignFunc<ApiKeys extends string> = (
  app: ExpressConsign
) => Record<ApiKeys, ExpressCallback>;

export interface ExpressConsign extends Express {
  db: Knex;
  api: {
    user: Record<ApiUserKeys, ExpressCallback>;
  };
}

export type ApiUserKeys = 'save';

export type ExpressCallback = (req: Request, res: Response, next: NextFunction) => void;
