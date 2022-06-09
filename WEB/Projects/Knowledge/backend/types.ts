import type { Express, NextFunction, Request, Response } from 'express';
import type { Knex } from 'knex';
import type { ArticleApi } from './api/article.types';
import type { AuthApi } from './api/auth.types';
import type { CategoryApi } from './api/category.types';
import type { UserApi } from './api/user.types';
import type { ValidationApi } from './api/validation.types';

export type ExpressConsignFunc<Api> = (app: ExpressConsign) => Api;

export interface ExpressConsign extends Express {
  db: Knex;
  api: {
    auth: AuthApi;
    user: UserApi;
    category: CategoryApi;
    article: ArticleApi;
    validation: ValidationApi;
  };
}

export type ExpressCallback<Params = any, ReqBody = any, ResBody = any> = (
  req: Request<Params, ResBody, ReqBody>,
  res: Response<ResBody>,
  next: NextFunction
) => void;

export type IdParams = {
  id: string;
};

export type ListResponse<Data> = {
  data: Data[];
  count: number;
  limit: number;
};

export type ListParams = {
  page: number;
};

export type SomePartial<T, K extends keyof T> = Partial<T> & Pick<T, Exclude<keyof T, K>>;
