import axios, { AxiosResponse } from 'axios';

const baseURL =  'https://pandasushi.pro/api'

const axiosRequest = axios.create({
  baseURL,
  timeout: 5 * 60 * 1000,
});


axiosRequest.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error) => {
    if (error.request && error.request.status === 400) {
      return Promise.reject(error)
    }
  }
);

export const request = axiosRequest
