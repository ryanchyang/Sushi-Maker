const BASE_URL = 'http://localhost:3500/address-book/api/list';

export const login = (account, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'allication/json',
    },
    body: JSON.stringify({
      account,
      password,
    }),
  }).then(res => res.json());
};
