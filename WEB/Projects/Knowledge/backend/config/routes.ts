import type { ExpressConsign } from '../types';

module.exports = (app: ExpressConsign) => {
  app.route('/users').post(app.api.user.save).get(app.api.user.get);
  app.route('/users/:id').put(app.api.user.save).get(app.api.user.getById);
};
