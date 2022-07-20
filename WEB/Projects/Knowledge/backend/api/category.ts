import type { Api } from '../types';
import type { Category, CategoryApi, CategoryRaw, CategoryTree } from './category.types';

const categoriesApi: Api<CategoryApi> = app => {
  const { existsOrError, notExistsOrError } = app.api.validation;

  const withPath = (categories: CategoryRaw[]): Category[] => {
    const getParent = (categories: CategoryRaw[], parentId: number) => {
      const parent = categories.find(category => category.id === parentId);

      return parent || null;
    };

    const categoriesWithPath = categories.map(category => {
      let path = category.name;
      let parent = getParent(categories, category.parentId);

      while (parent) {
        path = `${parent.name} > ${path}`;
        parent = getParent(categories, parent.parentId);
      }

      return { ...category, path };
    });

    categoriesWithPath.sort((a, b) => {
      if (a.path < b.path) return -1;
      if (a.path > b.path) return 1;
      return 0;
    });

    return categoriesWithPath;
  };

  const toTree = (categories: CategoryRaw[], tree?: CategoryTree[]) => {
    if (!tree) tree = categories.filter(it => !it.parentId);

    tree = tree.map(parentCateg => {
      parentCateg.children = toTree(
        categories,
        categories.filter(it => it.parentId === parentCateg.id)
      );

      return parentCateg;
    });

    return tree;
  };

  return {
    save: (req, res) => {
      const category = {
        id: req.body.id,
        name: req.body.name,
        parentId: req.body.parentId,
      };

      if (req.params.id) category.id = Number(req.params.id);

      try {
        existsOrError(category.name, 'Nome não informado');
      } catch (error) {
        return res.status(400).send(error);
      }

      if (category.id) {
        app
          .db<Category>('categories')
          .update(category)
          .where({ id: category.id })
          .then(() => res.status(204).send())
          .catch(err => res.status(500).send(err));
      } else {
        app
          .db<Category>('categories')
          .insert(category)
          .then(() => res.status(204).send())
          .catch(err => res.status(500).send(err));
      }
    },

    remove: async (req, res) => {
      try {
        existsOrError(req.params.id, 'Código da categoria não informado');
        const id = Number(req.params.id);

        const subcategory = await app.db<Category>('categories').where({ parentId: id });
        notExistsOrError(subcategory, 'Categoria possui subcategorias');

        const articles = await app.db('articles').where({ id });
        notExistsOrError(articles, 'Categoria possui artigos');

        const rowsDeleted = await app.db<Category>('categories').where({ id }).del();
        existsOrError(rowsDeleted, 'Categoria não foi encontrada');

        res.status(204).send();
      } catch (error) {
        res.status(400).send(error);
      }
    },

    get: (req, res) => {
      app
        .db<CategoryRaw>('categories') // Só passar a tabela já faz um select
        .then(resp => res.json(withPath(resp)))
        .catch(err => res.status(500).send(err));
    },

    getById: (req, res) => {
      app
        .db<CategoryRaw>('categories')
        .where({ id: Number(req.params.id) })
        .first()
        .then(resp => res.json(resp))
        .catch(err => res.status(500).send(err));
    },

    getTree: (req, res) => {
      app
        .db<CategoryRaw>('categories')
        .then(categories => res.json(toTree(categories)))
        .catch(err => res.status(500).send(err));
    },
  };
};

module.exports = categoriesApi;
