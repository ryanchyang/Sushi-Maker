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

  // 客製商品

  // 套餐

  // 分享牆
  GET_SHARE_PRODS: `${host}/api/share/`,
  GET_PROD_DETAILS: `${host}/api/share/items/`,
  HOST: `${host}`,
  //會員
  MEM_PHOTO: `${host}/img/member`,
};

export default config;
