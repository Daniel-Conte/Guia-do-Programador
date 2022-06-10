import passport from 'passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

const { authSecret } = require('../.env');

import type { Api } from '../types';
import type { AuthDecodedToken } from '../api/auth.types';
import type { User } from '../api/user.types';
import type { PassportMiddleware } from './passport.types';

const passportMiddleware: Api<PassportMiddleware> = app => {
  const params: StrategyOptions = {
    secretOrKey: authSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  };

  const strategy = new Strategy(params, (payload: AuthDecodedToken, done) => {
    app
      .db<User>('users')
      .where({ id: payload.id })
      .first()
      .then(user => done(null, user ? { ...payload } : false))
      .catch(err => done(err, false));
  });

  passport.use(strategy);

  return {
    authenticate: () => passport.authenticate('jwt', { session: false }),
  };
};

module.exports = passportMiddleware;
