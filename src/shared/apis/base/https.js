import { instance } from './instance';

export const get = (...args) => instance.get(...args);
export const post = (...args) => instance.post(...args);
export const put = (...args) => instance.put(...args);
export const patch = (...args) => instance.patch(...args);
export const del = (...args) => instance.delete(...args);
