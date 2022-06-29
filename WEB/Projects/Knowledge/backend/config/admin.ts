import type { Middleware } from '../types';

const admin = (middleware: Middleware): Middleware => {
  return (req, res, next) => {
    if ((req.user as any)?.admin) {
      middleware(req, res, next);
    } else {
      res.status(401).send('Usuário não é administrador');
    }
  };
};

export default admin;
