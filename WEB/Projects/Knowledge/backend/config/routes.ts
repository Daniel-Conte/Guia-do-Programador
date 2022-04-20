import type { ExpressConsign } from '../types';

module.exports = (app: ExpressConsign) => {
  app.route('/users').get(app.api.user.save);
};
