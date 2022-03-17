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
//忘記密碼頁帳號驗證API
export const accountCheck = mem_account => {
  return fetch(`${BASE_URL}/member/api/accountCheck`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      mem_account,
    }),
  }).then(res => res.json());
};

//先留著 換頁render用
export const getMe = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/member/api/auth-list/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
};

//token拿資料步驟2 : 傳輸回後端找資料的API
export const findMem = mem_id => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/member/api/find-member`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      mem_id,
    }),
  }).then(res => res.json());
};

//傳輸回後端註冊會員
export const registerMem = registerData => {
  return fetch(`${BASE_URL}/member/api/member-register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      registerData,
    }),
  }).then(res => res.json());
};

//傳回後端修改資料
export const reviseMem = (memInfo, mem_id) => {
  return fetch(`${BASE_URL}/member/api/member-revise`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      memInfo,
      mem_id,
    }),
  }).then(res => res.json());
};
