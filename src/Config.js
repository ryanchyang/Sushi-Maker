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
  GET_LIKE: `${host}/classic/api/checklike`,
  HANDLE_LIKE: `${host}/classic/api/handlelike`,
  GET_REL_SHARE: `${host}/classic/api/getrelshare`,

  // 客製商品
  GET_MTLS: `${host}/customize/api/getmtls`,
  POST_CUS_DATA: `${host}/customize/api/postcusdata`,
  GET_CUS_DATA: `${host}/customize/api/getcusprod`,
  POST_FINAL_DATA: `${host}/customize/api/postfinaldata`,
  CUS_TO_CART: `${host}/customize/api/custocart`,

  // 套餐
  GET_SET_COMPARE: `${host}/api/setorder/answer`,
  GET_SET_SENDLIST: `${host}/api/setorder/sendlist`,
  // 分享牆
  GET_SHARE_PRODS: `${host}/api/share/`,
  GET_PROD_DETAILS: `${host}/api/share/items/`,
  GET_USER_SHARE_PRODS: `${host}/api/share/saves/`,
  GET_USER_SHARE_UPLOAD: `${host}/api/share/upload/`,
  GET_USER_SHARE_POST: `${host}/api/share/post/`,
  GET_USER_SHARE_COMMENT: `${host}/api/share/comment/`,
  GET_FILTER_ITEMS: `${host}/api/share/filter`,
  GET_TAGS: `${host}/api/share/filter/tags`,
  TOGGLE_SAVE: `${host}/api/share/toggle/save`,
  UPLOAD_POST: `${host}/api/share/upload/post`,
  UPDATE_POST: `${host}/api/share/update/post`,
  UPLOAD_COMMENT: `${host}/api/share/upload/comment`,
  UPDATE_COMMENT: `${host}/api/share/update/comment`,
  DELETE_COMMENT: `${host}/api/share/delete/comment`,
  HOST: `${host}`,
  //會員
  MEM_PHOTO: `${host}/img/member`,
  ACTIVE_PATH: `${host}/member/api/active/`,
  CANCEL_ACTIVE_PATH: `${host}/member/api/active/cancel`,
  // 購物車
  // 得到購物車清單 stepone
  GET_CUR_CART: `${host}/api/cart/getcurcart/`,
  GET_CART_ORDER: `${host}/api/cart/stepone/`,
  GET_CART_DISCOUNT: `${host}/api/cart/getdiscount/`,
  POST_CART_SUMMARY: `${host}/api/cart/setsum/`,
  GET_CART_SUM: `${host}/api/cart/sumtotal/`,
  POST_CART_INFO: `${host}/api/cart/setinfo/`,
  GET_CART_INFO: `${host}/api/cart/getinfo/`,
  POST_PAY_INFO: `${host}/api/cart/setpayinfo/`,
  GET_ITEM_INFO: `${host}/api/cart/iteminfo/`,
  DELETE_CART_PROD: `${host}/api/cart/delete/`,
  GET_FIN_CART: `${host}/api/cart/getfincart/`,
  GET_FIN_ITEM_INFO: `${host}/api/cart/iteminfofin/`,
};

export default config;
