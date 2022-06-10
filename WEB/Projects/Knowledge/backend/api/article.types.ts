import { Middleware, IdParams, ListParams, ListResponse, SomePartial } from '../types';

export interface ArticleApi {
  save: Middleware<IdParams, ArticleRequest>;
  remove: Middleware<IdParams>;
  get: Middleware<ListParams, void, ListResponse<ArticleMini>>;
  getById: Middleware<IdParams, void, Article>;
  getByCategory: Middleware<IdParams & ListParams, void>;
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
