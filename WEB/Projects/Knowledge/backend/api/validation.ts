import type { ExpressConsign } from '../types';

module.exports = (app: ExpressConsign) => {
  function existsOrError(value: any, msg: string) {
    if (!value) throw msg;
    if (Array.isArray(value) && !value.length) throw msg;
    if (typeof value === 'string' && !value.trim()) throw msg;
  }

  function notExistsOrError(value: any, msg: string) {
    try {
      existsOrError(value, msg);
    } catch (errorMsg) {
      return;
    }

    throw msg;
  }

  function equalsOrError(valueA: any, valueB: any, msg: string) {
    if (valueA !== valueB) throw msg;
  }

  return { existsOrError, notExistsOrError, equalsOrError };
};
