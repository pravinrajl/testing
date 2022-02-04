import axios from 'axios';

export const request = (method, url, data, params, headers = {}) => {
  return new Promise((resolve, reject) =>
    axios({
      method,
      url,
      data,
      params,
      headers
    })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err.response.data))
  );
};

export const configureAxios = () => {
  axios.interceptors.response.use(
    (response) => Promise.resolve(response.data),
    (error) => Promise.reject(error)
  );

  axios.interceptors.request.use(
    (config) => {
      const { token } = store.getState();
      config.headers['Content-Type'] = 'application/json';
      config.headers.Authorization = access_token;
      return config;
    },
    (error) => Promise.reject(error)
  );
};
