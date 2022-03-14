// CartList.js   購物車空白
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
// import SetInfoDetails from './SetInfoDetail';

//
// import { Button, Modal } from 'bootstrap';
import React, { useState } from 'react';

function CartList() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Shopping Cart'} />
          <div className="container cart">
            <div className="bread">HOME/CART</div>

            <div className="row">
              <div className="col-24 col-md-24">
                <div className="empty text-center">
                  <h3>購物車</h3>
                  <div>購物車中沒有商品 - 請選購商品！</div>
                  <div className="empty-img mx-auto">
                    <img src="/img/cart/empty-cart-md.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5 d-flex justify-content-center justify-content-md-end ">
              <div className="col-24 col-md-8 my-3 d-flex justify-content-center">
                <button type="button" className="btn btn-primary  primeal-btn ">
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
