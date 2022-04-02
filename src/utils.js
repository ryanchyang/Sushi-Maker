import config from './Config';
const TOKEN_NAME = 'token';
const MEM_ID = 'mem_id';
const BASE_URL = 'http://localhost:3500';

export const setAuthToken = token => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export const setMemId = mem_id => {
  return localStorage.setItem(MEM_ID, mem_id);
};

//取memID
export const getMemId = () => {
  return localStorage.getItem(MEM_ID);
};

//取購物車資料
export const getCart = async () => {
  const isLogin = localStorage.getItem(MEM_ID) !== null;
  if (isLogin) {
    //會員有登入
    const res = await fetch(config.GET_CUR_CART + localStorage.getItem(MEM_ID));
    const obj = await res.json();
    return obj;
  } else {
    //會員無登入
    return {
      hasCurCart: false,
      cartid: 0,
      cartCount: 0,
    };
  }
};

//取購物車未結帳數量

export const getCartCount = async mem_id => {
  await fetch(`${BASE_URL}/member/api/get-cart-count`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      mem_id,
    }),
  })
    .then(res => res.json())
    .then(obj => {
      localStorage.setItem('cart_count', obj.cart_count);
    });
};
