import admin from './admin';

import type { ExpressConsign } from '../types';
import type { RoutesArticles, RoutesAuth, RoutesCategories, RoutesUsers } from './routes.types';

module.exports = (app: ExpressConsign) => {
  app.route<RoutesAuth>('/signup').post(app.api.user.save);
  app.route<RoutesAuth>('/signin').post(app.api.auth.signin);
  app.route<RoutesAuth>('/validateToken').post(app.api.auth.validateToken);

  app
    .route<RoutesUsers>('/users')
    .all(app.config.passport.authenticate())
    .post(admin(app.api.user.save))
    .get(admin(app.api.user.get));
  app
    .route<RoutesUsers>('/users/:id')
    .all(app.config.passport.authenticate())
    .put(admin(app.api.user.save))
    .get(admin(app.api.user.getById));

  app
    .route<RoutesCategories>('/categories')
    .all(app.config.passport.authenticate())
    .get(admin(app.api.category.get))
    .post(admin(app.api.category.save));
  app
    .route<RoutesCategories>('/categories/tree')
    .all(app.config.passport.authenticate())
    .get(app.api.category.getTree);
  app
    .route<RoutesCategories>('/categories/:id')
    .all(app.config.passport.authenticate())
    .get(app.api.category.getById)
    .put(admin(app.api.category.save))
    .delete(admin(app.api.category.remove));

  app
    .route<RoutesArticles>('/articles')
    .all(app.config.passport.authenticate())
    .get(admin(app.api.article.get))
    .post(admin(app.api.article.save));
  app
    .route<RoutesArticles>('/articles/:id')
    .all(app.config.passport.authenticate())
    .get(app.api.article.getById)
    .put(admin(app.api.article.save))
    .delete(admin(app.api.article.remove));
  app
    .route<RoutesArticles>('/categories/:id/articles')
    .all(app.config.passport.authenticate())
    .get(app.api.article.getByCategory);
};
