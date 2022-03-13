import { getAuthToken } from './utils';

const BASE_URL = 'http://localhost:3500';

//登入的API
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

//設定token的API
export const getMe = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/member/api/auth-list/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
};

//傳輸回後端找資料的API
export const findMem = mem_id => {
  return fetch(`${BASE_URL}/member/api/find-member`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      mem_id,
    }),
  }).then(res => res.json());
};
