const url = "";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};

export const loginUserApi = (form) => {
  return request(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
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
