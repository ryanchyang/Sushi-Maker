//cart/StepFour.js
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import CartDetail from './components/CartDetial';
import { Link, useHistory, useParams } from 'react-router-dom';
// import QRCode from 'qrcode.react';
import { QRCode } from 'react-qrcode-logo';
import React, { useState, useEffect } from 'react';
import NavPage from '../layout/components/NavPage';
// 資料庫拿資料
import config from '../../Config';
import { getMemId, getCart, getCartCount } from '../../utils';

// TODO: 第4部要清空 cartcount localstorage
function StepFour(props) {
  // NAV BAR 使用 蓋版漢堡
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構
  // 回上一頁 按鈕
  // let history = useHistory();

  const [fincart, setFincart] = useState([]);
  const [mem_id, setMem_id] = useState(0);
  const [changeCartCount, setChangeCartCount] = useState(0); // 要知道什麼時候更改購物車的數量

  //QRCODE
  const [qrC, setQrC] = useState('');
  //
  console.log('qrC01', qrC);
  const { cid } = useParams();

  useEffect(() => {
    const getInit = async () => {
      const Mid = getMemId();
      setMem_id(+Mid);
      await getCartCount(+localStorage.getItem('mem_id')); // cartcount 數字改變
      setChangeCartCount(changeCartCount + 1); // 狀態要改變
    };
    getInit();
  }, []);

  useEffect(() => {
    const getfincart = async () => {
      console.log('mid==============================' + mem_id);
      const res = await fetch(config.GET_FIN_CART + `${mem_id}/${cid}`);
      const obj = await res.json();
      console.log('obj:', obj);
      setFincart(obj.data);
      setQrC(obj.data[0]?.order_num);
    };
    if (mem_id !== 0) {
      //第一次為0不准fetch，會壞掉
      getfincart();
    }
  }, [mem_id]);
  console.log('fincart', fincart);
  useEffect(() => {
    console.log(fincart);
    console.log('36****', fincart[0]?.cart_order_date);
  }, [fincart]);

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
              <div className="cart-asL-nav-text" style={{ color: '#212121' }}>
                填寫訂購資訊
              </div>
              <div className="cart-asL-nav-square"></div>
            </div>

            <div className="cart-asL-nav-item">
              <div className="cart-asL-nav-text" style={{ color: '#212121' }}>
                輸入信用卡資料
              </div>
              <div className="cart-asL-nav-square"></div>
            </div>

            <div className="cart-asL-nav-item">
              <div className="cart-asL-nav-text" style={{ color: '#212121' }}>
                完成訂單
              </div>
              <div className="cart-asL-nav-square"></div>
            </div>
          </div>

          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'Confirmation'} setNavIsOpen={setNavIsOpen} />
            <div className="mycontainer cart min-hi">
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
                      <p>{fincart[0]?.mem_name} </p>
                      <p>{fincart[0]?.store_city}</p>
                      <p>{fincart[0]?.store_area}</p>
                      <p>{fincart[0]?.store_name}門市</p>
                    </div>
                    <div className="qrcode">
                      <QRCode
                        id="qrc"
                        value="http://localhost:3000/member/historyorder"
                        //value={qrC} //value引數為生成二維碼的連結 我這裡是由後端返回
                        size={150} //二維碼的寬高尺寸
                        fgColor="#000000" //二維碼的顏色
                        logoImage="/img/cart/logo.svg" // 加入logo
                        logoOpacity="1"
                        removeQrCodeBehindLogo
                      />
                      {/* <img src="/img/cart/qrcode.svg" alt=""></img> */}
                    </div>
                  </div>

                  <div className="my-5 col-24 d-block d-md-flex justify-content-md-between">
                    <div className="col-24 col-md-16 my-3">
                      如欲查詢訂單詳情與進度，請至 會員中心 / 歷史訂單 查詢
                    </div>
                    {/* ＢＴＮ 返回按鈕 */}
                    <div className="col-24 col-md-8 my-3 d-flex justify-content-md-end justify-content-center ">
                      <Link to="/classic">
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
              <CartDetail cart_id={cid} mem_id={mem_id} />
            </div>
            <Footer />
          </div>
          <AsideRight
            setNavIsOpen={setNavIsOpen}
            changeCartCount={changeCartCount} // 購物車數量狀態改變
          />
        </div>
      </div>
    </>
  );
}

export default StepFour;
