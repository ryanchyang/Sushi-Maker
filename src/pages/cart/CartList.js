// CartList.js   購物車空白
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './Cart.scss';
import { Link, useHistory } from 'react-router-dom';
import NavPage from '../layout/components/NavPage';

import React, { useState } from 'react';

function CartList(props) {
  // 回上一頁 按鈕
  let history = useHistory();
  // NAV BAR 使用 蓋版漢堡
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構
  return (
    <>
      <Header />{' '}
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'Shopping Cart'} setNavIsOpen={setNavIsOpen} />
            <div className="mycontainer cart min-hi ch-cont-14">
              <div className="breadcart">
                <p className="en-title-14-10">
                  <Link
                    to={'/'}
                    style={{ textDecoration: 'none', color: '#575757' }}
                  >
                    HOME/
                  </Link>
                  <Link
                    to={'/cart/stepone'}
                    style={{ textDecoration: 'none', color: '#b03342' }}
                  >
                    CART
                  </Link>
                </p>
              </div>

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
                  <Link to="/classic">
                    <button
                      type="button"
                      className="btn btn-primary primeal-btn"
                    >
                      繼續購物
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default CartList;
