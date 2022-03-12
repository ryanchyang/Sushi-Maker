import { getAuthToken } from './utils';

const BASE_URL = 'http://localhost:3500';

export const login = (mem_account, mem_pwd) => {
  return fetch(`${BASE_URL}/member/api/auth-list`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      mem_account,
      mem_pwd,
    }),
  }).then(res => res.json());
};

export const getMe = () => {
  const token = getAuthToken;
  return fetch(`${BASE_URL}/member/api/auth-list/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
};
