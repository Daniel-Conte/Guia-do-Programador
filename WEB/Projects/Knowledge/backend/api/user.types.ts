import type { Middleware, IdParams, SomePartial } from '../types';

export interface UserApi {
  save: Middleware<IdParams, UserRequest>;
  get: Middleware<void, void, UserMini[]>;
  getById: Middleware<IdParams, void, UserMini>;
}

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  admin: boolean;
};

export type UserRequest = SomePartial<Omit<User, 'admin'>, 'id'> & {
  confirmPassword?: string;
};

export type UserMini = Omit<User, 'password'>;
