import bcrypt from 'bcrypt-nodejs';

import type { ExpressConsignFunc } from '../types';
import type { User, UserApi } from './user.types';

const apiUsers: ExpressConsignFunc<UserApi> = app => {
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
      if (req.params.id) user.id = req.params.id;

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
        .then(users => res.json(users))
        .catch(err => res.status(500).send(err));
    },
  };
};

module.exports = apiUsers;
