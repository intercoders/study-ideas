import axios from '$api-client/axios';

export default {
  getAll: async () => (await axios.get('/ideas')).data,
};
