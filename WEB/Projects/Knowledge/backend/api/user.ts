import { ApiUserKeys, ExpressCallback, ExpressConsignFunc } from '../types';

const apiUsers: ExpressConsignFunc<ApiUserKeys> = app => {
  const save: ExpressCallback = (req, res) => {
    res.send('user save');
  };

  return { save };
};

module.exports = apiUsers;
