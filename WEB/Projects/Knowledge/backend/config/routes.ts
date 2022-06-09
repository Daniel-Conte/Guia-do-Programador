import type { ExpressConsign } from '../types';
import { RoutesArticles, RoutesAuth, RoutesCategories, RoutesUsers } from './routes.types';

module.exports = (app: ExpressConsign) => {
  app.route<RoutesAuth>('/signup').post(app.api.user.save);
  app.route<RoutesAuth>('/signin').post(app.api.auth.signin);
  app.route<RoutesAuth>('/validateToken').post(app.api.auth.validateToken);

  app.route<RoutesUsers>('/users').post(app.api.user.save).get(app.api.user.get);
  app.route<RoutesUsers>('/users/:id').put(app.api.user.save).get(app.api.user.getById);

  app.route<RoutesCategories>('/categories').get(app.api.category.get).post(app.api.category.save);
  app.route<RoutesCategories>('/categories/tree').get(app.api.category.getTree);
  app
    .route<RoutesCategories>('/categories/:id')
    .get(app.api.category.getById)
    .put(app.api.category.save)
    .delete(app.api.category.remove);

  app.route<RoutesArticles>('/articles').get(app.api.article.get).post(app.api.article.save);
  app
    .route<RoutesArticles>('/articles/:id')
    .get(app.api.article.getById)
    .put(app.api.article.save)
    .delete(app.api.article.remove);
  app.route<RoutesArticles>('/categories/:id/articles').get(app.api.article.getByCategory);
};
