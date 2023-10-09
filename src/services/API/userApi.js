import { request } from "../checkResponse";

export const url = "http://94.131.100.195/api/v1/auth/";

export const loginUserApi = (form) => {
  return request(`${url}token/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;",
    },
    body: JSON.stringify({
      email: form.email,
      password: form.password,
    }),
  });
};

export function logoutUserApi(refreshToken) {
  return request(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  });
}
