import schedule from 'node-schedule';

import type { ExpressConsign } from '../types';
import type { Article } from '../api/article.types';
import type { Category } from '../api/category.types';
import type { User } from '../api/user.types';

module.exports = (app: ExpressConsign) => {
  schedule.scheduleJob('*/1 * * * *', async () => {
    const usersCount = await app.db<User>('users').count('id').first();
    const categoriesCount = await app.db<Category>('categories').count('id').first();
    const articlesCount = await app.db<Article>('articles').count('id').first();

    const { Stat } = app.api.stat;

    const lastStat = await Stat.findOne({}, {}, { sort: { createdAt: -1 } });

    const stat = new Stat({
      users: usersCount?.count,
      categories: categoriesCount?.count,
      articles: articlesCount?.count,
      createdAt: new Date(),
    });

    const changedUsers = !lastStat || stat.users !== lastStat.users;
    const changedCategories = !lastStat || stat.categories !== lastStat.categories;
    const changedArticles = !lastStat || stat.articles !== lastStat.articles;

    if (changedUsers || changedCategories || changedArticles) {
      stat.save().then(() => console.log('[Stats] Estatísticas atualizadas!'));
    }
  });
};
