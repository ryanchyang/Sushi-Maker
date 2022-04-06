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
//忘記密碼頁驗證碼驗證API
export const vcodeCheck = (validCode, verify_code) => {
  return fetch(`${BASE_URL}/member/api/revise-pwd-vcode`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      validCode,
      verify_code,
    }),
  }).then(res => res.json());
};
//忘記密碼頁修改密碼API
export const resetPwd = (newPassword, mem_id) => {
  return fetch(`${BASE_URL}/member/api/reset-pwd`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      newPassword,
      mem_id,
    }),
  }).then(res => res.json());
};
//修改密碼頁API
export const indexRevisePwd = (mem_id, revisePwd) => {
  return fetch(`${BASE_URL}/member/api/index-revise-pwd`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      revisePwd,
      mem_id,
    }),
  }).then(res => res.json());
};

//先留著 換頁render用
// export const getMe = () => {
//   const token = getAuthToken();
//   return fetch(`${BASE_URL}/member/api/auth-list/me`, {
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   }).then(res => res.json());
// };

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
export const registerMem = (registerData, verify_code) => {
  return fetch(`${BASE_URL}/member/api/member-register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      registerData,
      verify_code,
    }),
  }).then(res => res.json());
};

//將大頭照資料傳回後端

export const memDoUpload = async fd => {
  return await fetch(`${BASE_URL}/member/api/member-img-upload`, {
    method: 'POST',
    body: fd,
  }).then(res => res.json());
};

//傳輸回後端發送註冊信
export const registerMail = registerData => {
  return fetch(`${BASE_URL}/member/api/member-registermail`, {
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
//傳回活動資訊for member
export const eventsInfo = async () => {
  return await fetch(`${BASE_URL}/member/api/find-eventsInfo`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({}),
  }).then(res => res.json());
};
//傳回會員經典商品收藏
export const memCprodLike = async mem_id => {
  return await fetch(`${BASE_URL}/member/api/find-memlike`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      mem_id,
    }),
  }).then(res => res.json());
};

//傳回歷史訂單明細for member
export const orderInfo = async mem_id => {
  return await fetch(`${BASE_URL}/member/api/historyOrder`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      mem_id,
    }),
  }).then(res => res.json());
};
//傳回歷史訂單明細for memberChart
export const chartInfo = async mem_id => {
  return await fetch(`${BASE_URL}/member/api/orderChart`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      mem_id,
    }),
  }).then(res => res.json());
};

//傳回memshare info
export const memLike = async mem_id => {
  return await fetch(`${BASE_URL}/member/api/member-share`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      mem_id,
    }),
  }).then(res => res.json());
};

// 傳回memSet
export const memSet = async mem_id => {
  return await fetch(`${BASE_URL}/member/api/memset`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      mem_id,
    }),
  }).then(res => res.json());
};
