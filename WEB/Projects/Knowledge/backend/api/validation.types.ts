export type ValidationApi = {
  existsOrError: (value: any, msg: string) => void;
  notExistsOrError: (value: any, msg: string) => void;
  equalsOrError: (valueA: any, valueB: any, msg: string) => void;
};
