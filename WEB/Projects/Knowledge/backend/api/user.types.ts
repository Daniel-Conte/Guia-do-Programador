import type { ExpressCallback, IdParams, SomePartial } from '../types';

export interface UserApi {
  save: ExpressCallback<IdParams, UserRequest>;
  get: ExpressCallback<void, void, UserMini[]>;
  getById: ExpressCallback<IdParams, void, UserMini>;
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
};

export type UserRequest = SomePartial<Omit<User, 'admin'>, 'id'> & {
  confirmPassword?: string;
};

export type UserMini = Omit<User, 'password'>;
