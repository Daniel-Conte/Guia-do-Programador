import type { Middleware, IdParams, SomePartial } from '../types';

export interface CategoryApi {
  save: Middleware<IdParams, CategoryRequest>;
  remove: Middleware<IdParams>;
  get: Middleware<void, void, Category[]>;
  getById: Middleware<IdParams, void, CategoryRaw>;
  getTree: Middleware<void, void, CategoryTree[]>;
}

export type Category = CategoryRaw & {
  path: string;
};

export type CategoryRaw = {
  id: number;
  name: string;
  parentId: number;
};

export type CategoryRequest = SomePartial<CategoryRaw, 'id'>;

export type CategoryTree = CategoryRaw & {
  children?: CategoryTree[];
};
