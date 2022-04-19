import { json } from 'express';
import cors from 'cors';

import { ExpressConsign } from '../types';

// Para usar a cadeia de middlewares no consign, deve-se exportar uma função que recebe o app e adicionar as funções middlewares
module.exports = (app: ExpressConsign) => {
  app.use(cors());
  app.use(json());
};
