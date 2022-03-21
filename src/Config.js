// 前端 API 路徑
// API請寫在自己的分類下方~~~~~

const host = 'http://localhost:3500';

const config = {
  // 首頁

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

  // 客製商品

  // 套餐

  // 分享牆
  GET_SHARE_PRODS: `${host}/api/share/`,
  HOST: `${host}`,
  //會員
  MEM_PHOTO: `${host}+/img/member`,

  // 購物車
  // 得到購物車清單 stepone
  GET_CART: `${host}/api/cart/stepone/`,
};

export default config;
