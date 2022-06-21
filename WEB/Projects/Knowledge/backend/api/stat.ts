import type { Api } from '../types';
import type { StatApi, Stats, StatSchema } from './stat.types';

const statApi: Api<StatApi> = app => {
  const Stat = app.mongoose.model<StatSchema>(
    'Stat',
    new app.mongoose.Schema({
      users: Number,
      categories: Number,
      articles: Number,
      createdAt: Date,
    })
  );

  return {
    Stat,
    get: (req, res) => {
      // Pega o último registro
      Stat.findOne({}, {}, { sort: { createdAt: -1 } }).then(stat => {
        const defaultStat: Stats = {
          articles: 0,
          categories: 0,
          users: 0,
        };

        res.json(stat || defaultStat);
      });
    },
  };
};

module.exports = statApi;
