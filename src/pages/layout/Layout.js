import { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../imgs/logo.svg';
import { ReactComponent as Hamburger } from '../../imgs/hamburger.svg';
import { ReactComponent as HamburgerLight } from '../../imgs/hamburgerLight.svg';
import { ReactComponent as Cart } from '../../imgs/cart.svg';
import { ReactComponent as CartLight } from '../../imgs/cartLight.svg';
import { BsTwitter } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { height } from '@mui/system';
import { useWindowScroll } from 'react-use';
import { Link } from 'react-router-dom';

const cart_count = localStorage.getItem('cart_count'); // 登入後會抓取目前購物車內的商品數量
console.log('nav cart_count', cart_count);

function Header() {
  return (
    <>
      <head>HEADER</head>
    </>
  );
}
// <Logo className="logo" />
// <Cart className="layout-cart-btn" />
// <Hamburger className="layout-hamberger" />
function Title(props) {
  const { changeBG, setNavIsOpen } = props;
  const cart_num = cart_count;
  return (
    <>
      <div className="mobile-top">
        <div>
          <div className="logo-box">
            {changeBG ? (
              <Link to={'/'}>
                <img
                  src={`http://localhost:3500/img/home/logoLight.svg`}
                  alt="logo"
                />
              </Link>
            ) : (
              <Link to={'/'}>
                <img
                  src={`http://localhost:3500/img/home/logo.svg`}
                  alt="logo"
                />
              </Link>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-between' }}>
          <div>
            <div className="layout-cart-btn-box-top">
              {changeBG ? (
                <Link to={'/cart/stepone'}>
                  <div className="cart-icon-add">
                    <CartLight className="layout-cart-btn" />
                    {cart_count > 1 ? (
                      <span class="cart-num ">{cart_count}</span>
                    ) : (
                      ''
                    )}
                  </div>
                </Link>
              ) : (
                <Link to={'/cart/stepone'}>
                  <div className="cart-icon-add">
                    <Cart className="layout-cart-btn" />
                    {cart_count > 1 ? (
                      <span class="cart-num ">{cart_count}</span>
                    ) : (
                      ''
                    )}
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div>
            <div className="layout-hamberger-box">
              {changeBG ? (
                <HamburgerLight
                  className="layout-hamberger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setNavIsOpen(true);
                  }}
                />
              ) : (
                <Hamburger
                  className="layout-hamberger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setNavIsOpen(true);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mytitle layout-title navtitle">{props.title}</div>
    </>
  );
}

function AsideLeft(props) {
  // 動態改變首頁的背景顏色
  const { changeBG } = props;

  const darkBG = {
    backgroundColor: '#212121',
    color: '#ffffff',
    transition: '1s',
  };
  const lightBG = { backgroundColor: '#f7f6f3', transition: '1s' };

  return (
    <>
      <aside className="col-lg-3 col-md-3 col-3 p-0 mobile-adj aside-fixed">
        <div className="aside-left" style={changeBG ? darkBG : lightBG}>
          <div className="logo-box">
            {changeBG ? (
              <Link to={'/'}>
                <img
                  src={`http://localhost:3500/img/home/logoLight.svg`}
                  alt="logo"
                />
              </Link>
            ) : (
              <Link to={'/'}>
                <img
                  src={`http://localhost:3500/img/home/logo.svg`}
                  alt="logo"
                />
              </Link>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

function AsideRight(props) {
  const [memberImg, setMemberImg] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const { changeBG, setNavIsOpen } = props;
  const mem_id = localStorage.getItem('mem_id');
  const mem_photo = localStorage.getItem('mem_photo');

  const darkBG = {
    backgroundColor: '#212121',
    color: '#ffffff',
    transition: '1s',
  };
  const lightBG = { backgroundColor: '#f7f6f3', transition: '1s' };

  return (
    <>
      <aside className="col-lg-3 col-md-3 col-3 p-0 mobile-adj aside-fixed">
        <div className="aside-right" style={changeBG ? darkBG : lightBG}>
          <div className="layout-hamberger-box">
            {changeBG ? (
              <HamburgerLight
                className="layout-hamberger"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setNavIsOpen(true);
                }}
              />
            ) : (
              <Hamburger
                className="layout-hamberger"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setNavIsOpen(true);
                }}
              />
            )}
          </div>

          {mem_id ? (
            <Link to={'/member'}>
              <div
                className="layout-mem-photo-box"
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={'http://localhost:3500/img/member/' + '/' + mem_photo}
                  alt="member-photo"
                />
              </div>
            </Link>
          ) : (
            <Link to={'/member/login'}>
              <div
                className="layout-mem-photo-box"
                style={{
                  cursor: 'pointer',
                  width: '28px',
                  height: '28px',
                  right: '5%',
                  top: '10%',
                }}
              >
                <img
                  width="100%"
                  height="100%"
                  src={'http://localhost:3500/img/home/login.svg'}
                  alt="member-photo"
                />
              </div>
            </Link>
          )}

          <div className="layout-cart-btn-box" style={{ cursor: 'pointer' }}>
            {changeBG ? (
              <Link to={'/cart/stepone'}>
                <div className="cart-icon-add">
                  <CartLight className="layout-cart-btn" />
                  {cart_count > 1 ? (
                    <span class="cart-num ">{cart_count}</span>
                  ) : (
                    ''
                  )}
                </div>
              </Link>
            ) : (
              <Link to={'/cart/stepone'}>
                <div className="cart-icon-add">
                  <Cart className="layout-cart-btn" />
                  {cart_count > 1 ? (
                    <span class="cart-num ">{cart_count}</span>
                  ) : (
                    ''
                  )}
                </div>
              </Link>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <div className="footer-logo-box">
            <Logo className="footer-logo" />
          </div>
          <div className="copyright">
            PRIMEAL COPY RIGHT &nbsp; <BiCopyright /> &nbsp; 2022
          </div>
        </div>
        <div className="footer-icon-box-group">
          <div className="footer-icon-box">
            <FaFacebook className="footer-fb" />
          </div>
          <div className="footer-icon-box">
            <BsTwitter className="footer-tw" />
          </div>
          <div className="footer-icon-box">
            <RiInstagramFill className="footer-in" />
          </div>
        </div>
      </div>
    </>
  );
}

export { Header, Title, AsideLeft, AsideRight, Footer };
