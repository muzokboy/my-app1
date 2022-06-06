import axios, {  service } from '.';

export default {
  getToken: ({ email, password }) =>
    service.post('/auth/login', { email, password }),
};
