import bcrypt from 'bcrypt-nodejs';

import type { Api } from '../types';
import type { Article } from './article.types';
import type { AuthDecodedToken } from './auth.types';
import type { User, UserApi } from './user.types';

const usersApi: Api<UserApi> = app => {
  const { equalsOrError, existsOrError, notExistsOrError } = app.api.validation;

  const encryptPassword = (password: string) => {
    // Salt seria o "tempero" de caracteres aleatórios para gerar o hash
    const salt = bcrypt.genSaltSync(10);
    // Cifra(cria o hash) a senha
    return bcrypt.hashSync(password, salt);
  };

  return {
    save: async (req, res) => {
      const user = { ...req.body };
      if (req.params.id) user.id = Number(req.params.id);

      if (!req.originalUrl.startsWith('/users')) user.admin = false;
      if (!req.user || !(req.user as AuthDecodedToken)?.admin) user.admin = false;

      try {
        existsOrError(user.name, 'Nome não informado');
        existsOrError(user.email, 'E-mail não informado');
        existsOrError(user.password, 'Senha não informada');
        existsOrError(user.confirmPassword, 'Confirmação de senha não informada');
        equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem');

        if (!user.id) {
          const userFromDB = await app.db<User>('users').where({ email: user.email }).first();

          notExistsOrError(userFromDB, 'Usuário já cadastrado');
        }
      } catch (msg) {
        return res.status(400).send(msg);
      }

      user.password = encryptPassword(user.password);
      delete user.confirmPassword;

      if (user.id) {
        app
          .db<User>('users')
          .update(user)
          .where({ id: user.id })
          .whereNull('deletedAt')
          .then(() => res.status(204).send())
          .catch(err => res.status(500).send(err));
      } else {
        app
          .db<User>('users')
          .insert(user)
          .then(() => res.status(204).send())
          .catch(err => res.status(500).send(err));
      }
    },

    get: (req, res) => {
      app
        .db<User>('users')
        .select('id', 'name', 'email', 'admin')
        .whereNull('deletedAt')
        .then(users => res.json(users))
        .catch(err => res.status(500).send(err));
    },

    getById: (req, res) => {
      const id = Number(req.params.id);
      app
        .db<User>('users')
        .select('id', 'name', 'email', 'admin')
        .where({ id })
        .whereNull('deletedAt')
        .first()
        .then(user => res.json(user))
        .catch(err => res.status(500).send(err));
    },
    remove: async (req, res) => {
      try {
        const articles = await app.db<Article>('articles').where({ userId: Number(req.params.id) });
        notExistsOrError(articles, 'Usuário possui artigos.');

        const rowsUpdated = await app
          .db<User>('users')
          .update({ deletedAt: new Date() })
          .where({ id: Number(req.params.id) });
        existsOrError(rowsUpdated, 'Usuário não foi encontrado.');

        res.status(204).send();
      } catch (msg) {
        res.status(400).send(msg);
      }
    },
  };
};

module.exports = usersApi;
