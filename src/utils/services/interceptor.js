import axios from 'axios';
const baseOptions = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('api_token'),
  },
};

class Interceptor {
  get(url, options) {
    return axios.get(url, { ...baseOptions, ...options });
  }

  post(url, data, options) {
    return axios.post(url, data, { ...baseOptions, ...options });
  }

  patch(url, data, options) {
    return axios.patch(url, data, { ...baseOptions, ...options });
  }

  delete(url) {
    return axios.delete(url, baseOptions);
  }
}

export default Interceptor;
