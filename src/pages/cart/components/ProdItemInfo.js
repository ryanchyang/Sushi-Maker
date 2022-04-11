// cart/components/ProdItemInfo.js(包在開關選單中的交易明細內容)(step2-4 頁中都會有)

import './../Cart.scss';

import config from '../../../Config';
import React, { useState, useEffect } from 'react';

function ProdItemInfo(props) {
  // TODO: 要加商品數量總計算
  // 每個商品物件
  //    {
  //       cart_id:1,
  //        mem_id:1, // token
  //        product_id:1,
  //        img:'',
  //        name: '鮭魚壽司',
  //        orders_value: 300,
  //        orders_amount:1,
  //        orders_print_time:90
  //        orders_category:'cls',
  //    }
  const [itemInfo, setItemInfo] = useState({});
  const [mem_id, setMem_id] = useState(0);
  const [cart_id, setCart_id] = useState(0);
  //-----  交易明細

  // 從父層接 memid 跟 cartid
  useEffect(() => {
    setMem_id(props.mem_id);
    setCart_id(props.cart_id);
  }, [props]);

  useEffect(() => {
    const getItemInfo = async () => {
      const res = await fetch(config.GET_ITEM_INFO + `${mem_id}/${cart_id}`);
      const obj = await res.json();
      // console.log('obj:', obj);
      setItemInfo(obj.data);
    };
    getItemInfo();
  }, [mem_id, cart_id]);
  // console.log('itemInfoCSSSS', itemInfo);
  useEffect(() => {
    // console.log(itemInfo);
  }, [itemInfo]);
  // console.log(
  //   'amount',
  //   itemInfo.cs[0]?.orders_amount +
  //     itemInfo.cm[0]?.orders_amount +
  //     itemInfo.set[0]?.orders_amount
  // );

  return (
    <>
      {itemInfo.set?.map((v, i) => {
        return (
          <div className="prod-item-info ch-cont-14" key={v.cart_id}>
            <div className="row col-24 my-2  d-flex align-items-center align-middle">
              <div className="col-6 col-md-4 text-center">
                <div className="cart-item-img-info text-center">
                  <img
                    alt=""
                    className="img-fluid"
                    src="/img/cart/mealplan-bento.png"
                  />
                </div>
              </div>
              <div
                className={
                  `d-flex ` +
                  `flex-md-row flex-column ` +
                  `col-14 col-md-10 justify-content-md-between text-center ` +
                  `flex-grow-1 align-middle`
                }
              >
                <div className="col-24 col-md-12 align-items-center  ">
                  {v.set_name}
                </div>
                <div className="col-24 col-md-12 align-items-center  ">
                  NT{v.orders_value}
                </div>
              </div>
              <div className="col-4 col-md-4 align-items-center align-middle text-center ">
                X {v.orders_amount}
              </div>
              <div className="col-md-6  align-items-center d-none d-md-flex text-center">
                {v.orders_print_time}秒/個
              </div>
            </div>
          </div>
        );
      })}
      {itemInfo.cs?.map((v, i) => {
        return (
          <div className="prod-item-info ch-cont-14" key={v.cart_id}>
            <div className="row col-24 my-2  d-flex align-items-center align-middle">
              <div className="col-6 col-md-4 text-center">
                <div className="cart-item-img-info text-center">
                  <img
                    alt=""
                    className="img-fluid"
                    src={`http://localhost:3500${v.c_prod_img_path}`}
                  />
                </div>
              </div>
              <div
                className={
                  `d-flex ` +
                  `flex-md-row flex-column ` +
                  `col-14 col-md-10 justify-content-md-between text-center ` +
                  `flex-grow-1 align-middle`
                }
              >
                <div className="col-24 col-md-12 align-items-center  ">
                  {v.c_prod_ch_name}
                </div>
                <div className="col-24 col-md-12 align-items-center  ">
                  NT{v.orders_value}
                </div>
              </div>
              <div className="col-4 col-md-4 align-items-center align-middle text-center ">
                X {v.orders_amount}
              </div>
              <div className="col-md-6  align-items-center d-none d-md-flex text-center">
                {v.orders_print_time}秒/個
              </div>
            </div>
          </div>
        );
      })}
      {itemInfo.cm?.map((v, i) => {
        return (
          <div className="prod-item-info ch-cont-14" key={v.cart_id}>
            <div className="row col-24 my-2  d-flex align-items-center align-middle">
              <div className="col-6 col-md-4 text-center">
                <div className="cart-item-img-info text-center">
                  <img
                    alt=""
                    className="img-fluid"
                    src={`http://localhost:3500${v.cm_prod_img_path}`}
                  />
                </div>
              </div>
              <div
                className={
                  `d-flex ` +
                  `flex-md-row flex-column ` +
                  `col-14 col-md-10 justify-content-md-between text-center ` +
                  `flex-grow-1 align-middle`
                }
              >
                <div className="col-24 col-md-12 align-items-center  ">
                  {v.cm_prod_name}
                </div>
                <div className="col-24 col-md-12 align-items-center  ">
                  NT{v.orders_value}
                </div>
              </div>
              <div className="col-4 col-md-4 align-items-center align-middle text-center ">
                X {v.orders_amount}
              </div>
              <div className="col-md-6  align-items-center d-none d-md-flex text-center">
                {v.orders_print_time}秒/個
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProdItemInfo;
