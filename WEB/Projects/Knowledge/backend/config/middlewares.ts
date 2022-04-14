import { json, Express } from 'express';
import cors from 'cors';

// Para usar a cadeia de middlewares no consign, deve-se exportar(padrão) uma função que recebe o app e adicionar as funções middlewares
export default (app: Express) => {
  app.use(cors());
  app.use(json());
};
