import queries from './queries';
import type { ExpressConsignFunc } from '../types';
import type { Article, ArticleApi } from './article.types';
import { CategoryRaw } from './category.types';

const apiArticles: ExpressConsignFunc<ArticleApi> = app => {
  const { existsOrError } = app.api.validation;

  const limit = 10;

  return {
    save: (req, res) => {
      const article = { ...req.body };

      try {
        existsOrError(article.name, 'Nome não informado');
        existsOrError(article.description, 'Descrição não informada');
        existsOrError(article.categoryId, 'Categoria não informada');
        existsOrError(article.userId, 'Autor não informado');
        existsOrError(article.content, 'Conteúdo não informado');
      } catch (msg) {
        res.status(400).send(msg);
      }

      if (article.id) {
        app
          .db<Article>('articles')
          .update(article)
          .where({ id: article.id })
          .then(() => res.status(204).send())
          .catch(err => res.status(500).send(err));
      } else {
        app
          .db<Article>('articles')
          .insert(article)
          .then(() => res.status(204).send())
          .catch(err => res.status(500).send(err));
      }
    },

    remove: async (req, res) => {
      try {
        const rowsDeleted = await app
          .db<Article>('articles')
          .where({ id: Number(req.params.id) })
          .del();

        try {
          existsOrError(rowsDeleted, 'Artigo não foi encontrado');
        } catch (msg) {
          return res.status(400).send(msg);
        }

        res.status(204).send();
      } catch (error) {
        res.status(500).send(error);
      }
    },

    get: async (req, res) => {
      const page = Number(req.params.page) || 1;

      const result: any = await app.db<Article>('articles').count('id').first();
      const count = Number(result.count);

      app
        .db<Article>('articles')
        .select('id', 'name', 'description')
        .limit(limit)
        .offset(page * limit - limit)
        .then(articles => res.json({ data: articles, count, limit }))
        .catch(err => res.status(500).send(err));
    },

    getById: (req, res) => {
      app
        .db<Article>('articles')
        .where({ id: Number(req.params.id) })
        .first()
        .then(article => {
          if (article) article.content = article.content.toString(); // Transformando binário em string

          return res.json(article);
        })
        .catch(err => res.status(500).send(err));
    },

    getByCategory: async (req, res) => {
      const categoryId = req.params.id;
      const page = req.params.page || 1;
      const categories: CategoryRaw[] = await app.db.raw(queries.categoryWithChildren, categoryId);
      const ids = categories.map(categ => categ.id);

      app
        .db({ a: 'articles', u: 'users' })
        .select('a.id', 'a.name', 'a.description', 'a.imageUrl', { author: 'u.name' })
        .limit(limit)
        .offset(page * limit - limit)
        .whereRaw('?? = ??', ['u.id', 'a.userId'])
        .whereIn('categoryId', ids)
        .orderBy('a.id', 'desc')
        .then(articles => res.json(articles))
        .catch(err => res.status(500).send(err));
    },
  };
};

module.exports = apiArticles;
