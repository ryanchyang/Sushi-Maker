// CartList.js   購物車空白
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
// import SetInfoDetails from './SetInfoDetail';
import './Cart.scss';
import { Link, useHistory } from 'react-router-dom';

// import { Button, Modal } from 'bootstrap';
import React, { useState } from 'react';

function CartList() {
  // 回上一頁 按鈕
  let history = useHistory();
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Shopping Cart'} />
          <div className="mycontainer cart min-hi ch-cont-14">
            <div className="bread">HOME/CART</div>

            <div className="row">
              <div className="col-24 col-md-24">
                <div className="empty text-center">
                  <h3 className="ch-title-22">購物車</h3>
                  <div>購物車中沒有商品 - 請選購商品！</div>
                  <div className="empty-img mx-auto">
                    <img src="/img/cart/empty-cart-md.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5 d-flex justify-content-center justify-content-md-end ">
              <div className="col-24 col-md-8 my-3 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary  primeal-btn "
                  onClick={() => {
                    // 轉至上一頁
                    history.goBack();
                  }}
                >
                  繼續購物
                </button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default CartList;
