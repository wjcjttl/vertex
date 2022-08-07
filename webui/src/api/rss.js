import { get, post } from '../util/axios';

export default {
  list: async () => {
    const url = '/api/rss/list';
    return await get(url);
  },
  modify: async (rss) => {
    const url = '/api/rss/' + (rss.id ? 'modify' : 'add');
    return await post(url, rss);
  },
  delete: async (id) => {
    const url = '/api/rss/delete';
    return await post(url, { id });
  }
};