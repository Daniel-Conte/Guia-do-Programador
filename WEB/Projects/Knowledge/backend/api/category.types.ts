import type { ExpressCallback, IdParams, SomePartial } from '../types';

export interface CategoryApi {
  save: ExpressCallback<IdParams, CategoryRequest>;
  remove: ExpressCallback<IdParams>;
  get: ExpressCallback<void, void, Category[]>;
  getById: ExpressCallback<IdParams, void, CategoryRaw>;
  getTree: ExpressCallback<void, void, CategoryTree[]>;
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
