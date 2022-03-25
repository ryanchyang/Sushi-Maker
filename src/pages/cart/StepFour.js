//cart/StepFour.js
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import CartDetail from './components/CartDetial';
import { Link, useHistory } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
// TODO: 資料庫拿資料
import config from '../../Config';

// TODO: A  改 LINK
function StepFour() {
  // 回上一頁 按鈕
  let history = useHistory();

  const [fincart, setFincart] = useState([]);
  // TODO:  member id =1 鮮血死 測試用
  const mem_id = 1;

  useEffect(() => {
    const getfincart = async () => {
      const res = await fetch(config.GET_FIN_CART + `${mem_id}`);
      const obj = await res.json();
      console.log('obj:', obj);
      setFincart(obj.data);
    };
    getfincart();
  }, []);
  console.log('fincart', fincart);
  useEffect(() => {
    console.log(fincart);
    console.log(fincart[0]?.mem_name);
  }, [fincart]);
  // console.log(fincart?.mem_name);

// GET_FIN_ITEM_INFO

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Confirmation'} />
          <div className="mycontainer cart min-hi">
            <div className="bread">HOME/CART</div>
            <div className="row"></div>
            {/* 先切手機 */}
            <div className="confirmation">
              <div className="row ch-cont-14">
                <div className="my-3 col-24 col-md-12  ch-title-22">
                  您的訂單已成立
                </div>

                <div className="my-5 col-24 col-md-13">
                  感謝您的預訂，請至信箱收取訂單明細，
                  取貨時，請於機台前出示並掃描右方QR Code，以利完成取貨手續。
                </div>
                <div className="my-5 col-24 col-md-11 d-flex justify-content-between">
                  <div>
                    <p>送達資訊</p>
                    <p>Miles Teng </p>
                    <p>新北市</p>
                    <p>汐止區</p>
                    <p>讚讚門市</p>
                  </div>
                  <div className="qrcode">
                    <img src="/img/cart/qrcode.svg" alt=""></img>
                  </div>
                </div>

                <div className="my-5 col-24 d-block d-md-flex justify-content-md-between">
                  <div className="col-24 col-md-16 my-3">
                    如欲查詢訂單詳情與進度，請至 會員中心{'>'} 歷史訂單 查詢
                  </div>
                  {/* ＢＴＮ 返回按鈕 */}
                  <div className="col-24 col-md-8 my-3 d-flex justify-content-md-end justify-content-center ">
                    <Link to="./CartList">
                      <button
                        type="button"
                        className="btn btn-primary primeal-btn "
                      >
                        繼續購物
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* TODO:進度條 */}
            {/* <div className="process-bar">
              <div class="animated-progress progress-red">
                <span data-progress="45"></span>
              </div>
            </div> */}
            <div className="processBar">
              <div class="progress">
                <div
                  className="process-bar "
                  // role="progressbar"
                  // style={{ width: '30%' }}
                  // aria-valuenow="10"
                  // aria-valuemin="0"
                  // aria-valuemax="100"
                ></div>
              </div>
              <div className="d-flex justify-content-between my-3">
                <span>訂單已成立</span>
                <span>壽司列印中</span>
                <span>準備出貨</span>
                <span>已出貨</span>
                <span>請至門市取貨</span>
              </div>
            </div>
            {/* TODO: 商品詳細清單 */}
            <CartDetail />
          </div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default StepFour;
