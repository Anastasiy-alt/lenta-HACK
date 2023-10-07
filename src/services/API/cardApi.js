import { request } from "../checkResponse";

export const getCardApi = ({ newArray, selectedCategories }) => {
  return request(
    `http://94.131.100.195/api/v1/detail-sales/?store=${newArray}&category=${selectedCategories}`
  );
};
