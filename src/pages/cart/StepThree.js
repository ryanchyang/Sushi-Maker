//cart/StepThree.js
// import { FaBitcoin, FaCcJcb, FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link, useHistory } from 'react-router-dom';
import CartSum from './CartSum';
import CartDetail from './components/CartDetial';
import CreditCard from './components/CreditCard';

import React, { useState, useEffect } from 'react';

// TODO: 資料庫拿資料
import config from '../../Config';
import { getMemId, getCart } from '../../utils';

function StepThree() {
  // 回上一頁 按鈕
  let history = useHistory();

  const [card, setCard] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    creditcard_holder: '',
    order_num: '',
  });
  // 畫面右側小計
  const [sum, setSum] = useState([]);
  const [mem_id, setMem_id] = useState(0);
  const [cart_id, setCart_id] = useState(0);


  useEffect(() => {
    const getInit = async () => {
      const Mid = getMemId();
      const Cid = await getCart();
      setMem_id(+Mid);
      setCart_id(+Cid.cartid);
    };
    getInit();
  }, []);

  // 右邊sum 用
  useEffect(() => {
    const getSum = async () => {
      const res = await fetch(config.GET_CART_SUM + `${mem_id}/${cart_id}`);
      const obj = await res.json();
      console.log('obj:', obj);
      setSum(obj.data);
    };
    getSum();
  }, [mem_id, cart_id]);
  console.log('sum', sum);

  useEffect(() => {
    console.log(sum);
  }, [sum]);

  // 信用卡資料輸入
  // 提交
  const handleSubmit = e => {
    e.preventDefault();
    console.log(JSON.stringify(card));
    // fetch
    const r = fetch(config.POST_PAY_INFO + `${mem_id}/${cart_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card),
    })
      .then(r => r.json())
      .then(obj => {
        console.log(obj);
        if (obj.success) {
          console.log(obj.success);
          // 有成功更新頁面才轉向
          history.push(`/cart/stepfour/${cart_id
}`);
        } else {
          alert('資料錯誤請重新輸入！');
        }
      });
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Payment Info'} />
          <div className="mycontainer cart  ch-cont-14 min-hi">
            <div className="bread"> <p className="en-title-14-10">
              <Link
                to={'/'}
                style={{ textDecoration: 'none', color: '#575757' }}
              >
                HOME/{' '}
              </Link>
              <Link
                to={'/cart/stepone'}
                style={{ textDecoration: 'none', color: '#b03342' }}
              >
                CART
              </Link>
            </p></div>
            <CartDetail cart_id={cart_id} mem_id={mem_id} />

            <div className="row mt-5">
              <div className="col-md-12">
                {/* TODO: 信用卡 refs */}
                <div className="payment-info">
                  <div className="ch-title-22 my-4">信用卡資訊</div>
                  <CreditCard card={card} setCard={setCard} />
                </div>
              </div>
              <CartSum sum={sum} className="d-none d-md-block" />
              {/* 總計 */}
            </div>
            {/* 下一步 */}
            <div className="row  d-flex justify-content-center justify-content-md-end">
              <div className="  d-flex next-btn my-5">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary primeal-btn-outline-sm  mx-5 mx-md-3"
                  onClick={() => {
                    // 轉至上一頁
                    history.goBack();
                  }}
                >
                  上一步
                </button>
                {/* <Link to="./StepFour"> */}
                <button
                  type="button"
                  className="btn btn-sm btn-primary primeal-btn-sm mx-5 mx-md-3"
                  //onClick={document.querySelector('.creditFor').submit()}
                  //onClick={document.querySelector('.creditBtn').click()}
                  onClick={handleSubmit}
                >
                  確認付款
                </button>
                {/* </Link> */}
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

export default StepThree;
