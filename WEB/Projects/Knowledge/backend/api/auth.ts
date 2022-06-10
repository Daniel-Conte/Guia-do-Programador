import jwt from 'jwt-simple';
import bcrypt from 'bcrypt-nodejs';

const { authSecret } = require('../.env');
import type { Api } from '../types';
import type { AuthApi } from './auth.types';
import type { User } from './user.types';

const authApi: Api<AuthApi> = app => {
  return {
    signin: async (req, res) => {
      const { email, password } = req.body;

      if (!email || !password) return res.status(400).send('Informe usuário e senha!');

      const user = await app.db<User>('users').where({ email }).first();

      if (!user) return res.status(400).send('Usuário não encontrado!');

      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) return res.status(401).send('Email/senha inválidos!');

      const now = Math.floor(Date.now() / 1000);

      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin,
        iat: now,
        exp: now + 60 * 60 * 24 * 3, // 3 dias
      };

      res.json({
        ...payload,
        token: jwt.encode(payload, authSecret),
      });
    },

    validateToken: async (req, res) => {
      const userData = req.body || null;

      try {
        if (userData) {
          const token = jwt.decode(userData.token, authSecret);

          if (new Date(token.exp * 1000) > new Date()) {
            return res.send(true);
          }
        }
      } catch (error) {}

      res.send(false);
    },
  };
};

module.exports = authApi;
