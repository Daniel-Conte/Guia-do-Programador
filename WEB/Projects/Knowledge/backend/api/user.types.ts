import type { ExpressCallback, IdParams, SomePartial } from '../types';

export interface UserApi {
  save: ExpressCallback<IdParams, UserRequest>;
  get: ExpressCallback<any, any, UserListItem[]>;
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

export type UserListItem = Omit<User, 'password'>;
