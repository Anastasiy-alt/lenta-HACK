import { request } from "../checkResponse";

export const getCardApi = ({ currentStoreArr, selectedCategories }) => {
  return request(
    `http://94.131.100.195/api/v1/detail-sales/?store=${currentStoreArr}&category=${selectedCategories}`
  );
};

export const getStatisicApi = ({ currentCardName, currentStoreArr }) => {
  return request(
    `http://94.131.100.195/api/v1/sales/?store=${currentStoreArr}&sku=${currentCardName}`
  );
};

export const getForecastApi = ({ currentCardName, currentStoreArr }) => {
  return request(
    `http://94.131.100.195/api/v1/forecast/?store=${currentStoreArr}&sku=${currentCardName}`
  );
};
