import type { Middleware, IdParams, SomePartial } from '../types';

export interface UserApi {
  save: Middleware<IdParams, UserRequest>;
  get: Middleware<void, void, UserMini[]>;
  getById: Middleware<IdParams, void, UserMini>;
  remove: Middleware<IdParams, void>;
}

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  deletedAt?: Date;
};

export type UserRequest = SomePartial<Omit<User, 'deletedAt'>, 'id' | 'admin'> & {
  confirmPassword?: string;
};

export type UserMini = Omit<User, 'password' | 'deletedAt'>;
