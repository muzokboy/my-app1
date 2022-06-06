import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const service = axios.create({ baseURL });

service.interceptors.response.use(
  (res) => res.data,
  (error) => {
    if (error.response.status === 401) {
      window.location.replace('/logout');
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

service.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  // eslint-disable-next-line no-param-reassign
  // config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export function execute(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
}

export { service };
