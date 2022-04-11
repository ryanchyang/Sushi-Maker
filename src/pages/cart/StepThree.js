//cart/StepThree.js
// import { FaBitcoin, FaCcJcb, FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link, useHistory } from 'react-router-dom';
import CartSum from './CartSum';
import CartDetail from './components/CartDetial';
import CreditCard from './components/CreditCard';
import NavPage from '../layout/components/NavPage';
import React, { useState, useEffect, useRef } from 'react';

// TODO: 資料庫拿資料
import config from '../../Config';
import { getMemId, getCart } from '../../utils';

function StepThree(props) {
  // 回上一頁 按鈕
  let history = useHistory();
  //card用
  const btnRef = useRef();
  // NAV BAR 使用 蓋版漢堡
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構
  const [btnSend, setBtnSend] = useState(false); // 去card

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

    // console.log(btnRef.current.click());
    btnRef.current.click(); // 去點到子元件的btn
    if (!btnSend) {
      // 判斷當回傳false 時 會停下
      return;
    }
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
          history.push(`/cart/stepfour/${cart_id}`);
        } else {
          alert('資料錯誤請重新輸入！');
        }
      });
  };

  return (
    <>
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <div className="cart-asideLeft-nav d-lg-block d-none ch-title-16 ">
            <div className="cart-asL-nav-item">
              <div
                className="cart-asL-nav-text"
                style={{ color: '#212121' }}
              >
                我的購物清單
              </div>
              <div className="cart-asL-nav-square"></div>
            </div>

            <div className="cart-asL-nav-item">
              <div
                className="cart-asL-nav-text"
                style={{ color: '#212121' }}
              >
                填寫訂購資訊
              </div>
              <div className="cart-asL-nav-square"></div>
            </div>

            <div className="cart-asL-nav-item">
              <div
                className="cart-asL-nav-text"
                style={{ color: '#212121' }}
              >
                輸入信用卡資料
              </div>
              <div className="cart-asL-nav-square"></div>
            </div>

            <div className="cart-asL-nav-item">
              <div
                className="cart-asL-nav-text"
                style={{ color: '#C4C4C4' }}
              >
                完成訂單
              </div>
              <div className="cart-asL-nav-square-white"></div>
            </div>
          </div>

          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'Payment Info'} setNavIsOpen={setNavIsOpen} />
            <div className="mycontainer cart  ch-cont-14 min-hi">
              <div className="breadcart">
                {' '}
                <p className="en-title-14-10">
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
                </p>
              </div>
              <CartDetail cart_id={cart_id} mem_id={mem_id} />

              <div className="row mt-5">
                <div className="col-md-12">
                  {/* TODO: 信用卡 refs */}
                  <div className="payment-info">
                    <div className="ch-title-22 my-4">信用卡資訊</div>
                    <CreditCard
                      card={card}
                      setCard={setCard}
                      ref={btnRef}
                      btnSend={btnSend}
                      setBtnSend={setBtnSend}
                    />
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
                    className="btn btn-sm btn-outline-primary primeal-btn-outline-sm  mx-4 mx-md-3"
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
                    className="btn btn-sm btn-primary primeal-btn-sm mx-4 mx-md-3"
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
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default StepThree;
