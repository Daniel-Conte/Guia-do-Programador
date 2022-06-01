import { ExpressCallback, IdParams, ListParams, ListResponse, SomePartial } from '../types';

export interface ArticleApi {
  save: ExpressCallback<IdParams, ArticleRequest>;
  remove: ExpressCallback<IdParams>;
  get: ExpressCallback<ListParams, void, ListResponse<ArticleMini>>;
  getById: ExpressCallback<IdParams, void, Article>;
  getByCategory: ExpressCallback<IdParams & ListParams, void>;
}

export type Article = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  content: any;
  userId: number;
  categoryId: number;
};

export type ArticleMini = Pick<Article, 'id' | 'name' | 'description'>;

export type ArticleRequest = SomePartial<Article, 'id'>;
