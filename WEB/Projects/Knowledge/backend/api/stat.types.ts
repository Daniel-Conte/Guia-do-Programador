import type { Types, Model } from 'mongoose';

import { Middleware } from '../types';

export interface StatApi {
  Stat: Model<StatSchema>;
  get: Middleware<void, void, Stats>;
}

export type StatSchema = {
  users: number;
  categories: number;
  articles: number;
  createdAt?: Date;
};

export type Stats = StatSchema & {
  _id?: Types.ObjectId;
};
