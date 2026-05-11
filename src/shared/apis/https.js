import { instance } from "./instance";

export const get = (...args) => {
  return instance.get(...args);
};

export const post = (...args) => {
  return instance.post(...args);
};

export const put = (...args) => {
  return instance.put(...args);
};

export const patch = (...args) => {
  return instance.patch(...args);
};

export const del = (...args) => {
  return instance.delete(...args);
};
