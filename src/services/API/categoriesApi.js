import { request } from "../checkResponse";
const url = "http://94.131.100.195/api/v1/";

export const getCategoriesApi = () => {
  return request(`${url}unique-categories/`);
};
