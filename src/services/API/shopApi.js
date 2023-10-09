import { request } from "../checkResponse";

const url = "http://94.131.100.195/api/v1/";

export const getCityApi = () => {
  return request(`${url}shops/`);
};
