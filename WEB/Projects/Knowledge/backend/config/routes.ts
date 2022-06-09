import type { ExpressConsign } from '../types';
import type { RoutesArticles, RoutesAuth, RoutesCategories, RoutesUsers } from './routes.types';

module.exports = (app: ExpressConsign) => {
  app.route<RoutesAuth>('/signup').post(app.api.user.save);
  app.route<RoutesAuth>('/signin').post(app.api.auth.signin);
  app.route<RoutesAuth>('/validateToken').post(app.api.auth.validateToken);

  app
    .route<RoutesUsers>('/users')
    .all(app.config.passport.authenticate())
    .post(app.api.user.save)
    .get(app.api.user.get);
  app
    .route<RoutesUsers>('/users/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.user.save)
    .get(app.api.user.getById);

  app
    .route<RoutesCategories>('/categories')
    .all(app.config.passport.authenticate())
    .get(app.api.category.get)
    .post(app.api.category.save);
  app
    .route<RoutesCategories>('/categories/tree')
    .all(app.config.passport.authenticate())
    .get(app.api.category.getTree);
  app
    .route<RoutesCategories>('/categories/:id')
    .all(app.config.passport.authenticate())
    .get(app.api.category.getById)
    .put(app.api.category.save)
    .delete(app.api.category.remove);

  app
    .route<RoutesArticles>('/articles')
    .all(app.config.passport.authenticate())
    .get(app.api.article.get)
    .post(app.api.article.save);
  app
    .route<RoutesArticles>('/articles/:id')
    .all(app.config.passport.authenticate())
    .get(app.api.article.getById)
    .put(app.api.article.save)
    .delete(app.api.article.remove);
  app
    .route<RoutesArticles>('/categories/:id/articles')
    .all(app.config.passport.authenticate())
    .get(app.api.article.getByCategory);
};
