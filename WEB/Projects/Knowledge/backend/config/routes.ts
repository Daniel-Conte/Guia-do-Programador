import type { ExpressConsign } from '../types';
import { RoutesCategories, RoutesUsers } from './routes.types';

module.exports = (app: ExpressConsign) => {
  app.route<RoutesUsers>('/users').post(app.api.user.save).get(app.api.user.get);
  app.route<RoutesUsers>('/users/:id').put(app.api.user.save).get(app.api.user.getById);

  app.route<RoutesCategories>('/categories').get(app.api.category.get).post(app.api.category.save);
  app.route<RoutesCategories>('/categories/tree').get(app.api.category.getTree);
  app
    .route<RoutesCategories>('/categories/:id')
    .get(app.api.category.getById)
    .put(app.api.category.save)
    .delete(app.api.category.remove);
};
