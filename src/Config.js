// 前端 API 路徑
// API請寫在自己的分類下方~~~~~

const host = 'http://localhost:3500';

const config = {
  // 首頁
  PROMO_PATH: `${host}/home/api/promo`,

  // 新聞活動
  NEWS_PATH: `${host}/latest-news/api/news`,
  EVNTS_PATH: `${host}/latest-news/api/evnts`,
  NEWSD_PATH: `${host}/latest-news/api/newsdetail/`,
  EVNTSD_PATH: `${host}/latest-news/api/evntsdetail/`,
  POST_SINGUP_PATH: `${host}/latest-news/api/signup`,

  // 經典商品
  GET_INIT_PRODS: `${host}/classic/api/getprods`,
  GET_PROD: `${host}/classic/api/getprod`,
  GET_INIT_MTLS: `${host}/classic/api/getmtls`,
  GET_HISTORYS: `${host}/classic/api/gethistory`,
  ADD_CART: `${host}/classic/api/addcart`,

  // 客製商品
  GET_MTLS: `${host}/customize/api/getmtls`,

  // 套餐

  // 分享牆
  GET_SHARE_PRODS: `${host}/api/share/`,
  GET_PROD_DETAILS: `${host}/api/share/items/`,
  GET_USER_SHARE_PRODS: `${host}/api/share/saves`,
  GET_USER_SHARE_UPLOAD: `${host}/api/share/upload`,
  GET_USER_SHARE_POST: `${host}/api/share/post`,
  GET_USER_SHARE_COMMENT: `${host}/api/share/comment`,
  GET_FILTER_ITEMS: `${host}/api/share/filter`,
  GET_TAGS: `${host}/api/share/filter/tags`,
  HOST: `${host}`,
  //會員
  MEM_PHOTO: `${host}/img/member`,
  ACTIVE_PATH: `${host}/member/api/active`,
  // 購物車
  // 得到購物車清單 stepone
  GET_CART_ORDER: `${host}/api/cart/stepone/`,
  GET_CART_SUM: `${host}/api/cart/sumtotal/`,
};

export default config;
