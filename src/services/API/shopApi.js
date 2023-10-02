// import { request } from "./userApi";

const url = "http://94.131.100.195/api/v1/";

const checkResponse = async (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};

export const getCityApi = () => {
  return request(`${url}shops/`);
};
