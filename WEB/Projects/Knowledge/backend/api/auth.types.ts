import type { ExpressCallback } from '../types';
import type { User, UserMini } from './user.types';

export interface AuthApi {
  signin: ExpressCallback<void, AuthSigninRequest, string | AuthSigninResponse>;
  validateToken: ExpressCallback<void, AuthValidateTokenRequest, boolean>;
}

type AuthSigninRequest = {
  email: string;
  password: string;
};

type AuthValidateTokenRequest = User & {
  token: string;
};

type AuthSigninResponse = AuthDecodedToken & {
  token: string;
};

export type AuthDecodedToken = UserMini & {
  iat: number;
  exp: number;
};
