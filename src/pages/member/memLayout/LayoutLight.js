import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { ReactComponent as Logo } from '../../../imgs/logo.svg';
import { ReactComponent as Hamburger } from '../../../imgs/hamburger.svg';
import { ReactComponent as Cart } from '../../../imgs/cart.svg';
import { BsTwitter } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { height } from '@mui/system';

function Header() {
  return (
    <>
      <head>HEADER</head>
    </>
  );
}

function Title(props) {
  const { setNavIsOpen, setIsLogin } = props;
  return (
    <>
      <div
        className="mobile-top"
        style={{
          background: '#f7f6f3',
          zIndex: '10',
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          bottom: '90%',
        }}
      >
        <div>
          <div className="logo-box">
            <Logo className="logo" />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-between' }}>
          <div>
            <div className="layout-cart-btn-box-top">
              <Cart className="layout-cart-btn" />
            </div>
          </div>
          <div>
            <div className="layout-hamberger-box">
              <Hamburger
                className="layout-hamberger"
                // style={{ cursor: 'pointer' }}
                onClick={() => {
                  setNavIsOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mytitle layout-title navtitle">{props.title}</div> */}
    </>
  );
}

function AsideLeft() {
  const location = useLocation();

  return (
    <>
      <aside
        className="col-lg-3 col-md-3 col-3 p-0 mobile-adj"
        style={{ position: 'relative' }}
      >
        <div className="aside-left ">
          <div className="logo-box">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <div
            style={{
              width: '12.5%',
              position: 'fixed',
              top: '50%',
            }}
          >
            <div
              className="ch-title-16"
              style={{
                width: '100%',
                height: '40px',
                textAlign: 'center',
                lineHeight: '40px',
                marginBottom: '10px',
                background: location.pathname === '/member' ? '#212121' : '',
              }}
            >
              <Link
                to="/member"
                style={{
                  textDecoration: 'none',
                  color:
                    location.pathname === '/member' ? '#f7f6f3' : '#212121',
                }}
              >
                <p>會員資訊</p>
              </Link>
            </div>
            <div
              className="ch-title-16"
              style={{
                width: '100%',
                height: '40px',
                textAlign: 'center',
                lineHeight: '40px',
                marginBottom: '10px',
                background:
                  location.pathname === '/member/revise' ? '#212121' : '',
              }}
            >
              <Link
                to="/member/revise"
                style={{
                  textDecoration: 'none',
                  color:
                    location.pathname === '/member/revise'
                      ? '#f7f6f3'
                      : '#212121',
                }}
              >
                <p>修改資料</p>
              </Link>
            </div>
            <div
              className="ch-title-16"
              style={{
                width: '100%',
                height: '40px',
                textAlign: 'center',
                lineHeight: '40px',
                marginBottom: '10px',
                background:
                  location.pathname === '/member/analyze' ? '#212121' : '',
              }}
            >
              <Link
                to="/member/analyze"
                style={{
                  textDecoration: 'none',
                  color:
                    location.pathname === '/member/analyze'
                      ? '#f7f6f3'
                      : '#212121',
                }}
              >
                <p>營養分析</p>
              </Link>
            </div>
            <div
              className="ch-title-16"
              style={{
                width: '100%',
                height: '40px',
                textAlign: 'center',
                marginBottom: '10px',
                lineHeight: '40px',

                background:
                  location.pathname === '/member/active' ? '#212121' : '',
              }}
            >
              <Link
                to="/member/active"
                style={{
                  textDecoration: 'none',
                  color:
                    location.pathname === '/member/active'
                      ? '#f7f6f3'
                      : '#212121',
                }}
              >
                <p>活動行程</p>
              </Link>
            </div>
            <div
              className="ch-title-16"
              style={{
                width: '100%',
                height: '40px',
                textAlign: 'center',
                marginBottom: '10px',
                lineHeight: '40px',
                background:
                  location.pathname === '/member/historyorder' ? '#212121' : '',
              }}
            >
              <Link
                to="/member/historyorder"
                style={{
                  textDecoration: 'none',
                  color:
                    location.pathname === '/member/historyorder'
                      ? '#f7f6f3'
                      : '#212121',
                }}
              >
                <p>歷史訂單</p>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function AsideRight(props) {
  const [memberImg, setMemberImg] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const { setNavIsOpen, setIsLogin } = props;
  const mem_id = localStorage.getItem('mem_id');
  const mem_photo = localStorage.getItem('mem_photo');
  const history = useHistory();
  const cart_count = localStorage.getItem('cart_count');

  return (
    <>
      <aside className="col-lg-3 col-md-3 col-3 p-0 mobile-adj aside-fixed">
        <div className="aside-right" style={{ position: 'relative' }}>
          <div className="layout-hamberger-box">
            <Hamburger
              className="layout-hamberger"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setNavIsOpen(true);
              }}
            />
          </div>
          <div className="layout-mem-photo-box">
            {mem_photo ? (
              <img
                src={'http://localhost:3500/img/member/' + '/' + mem_photo}
                alt="member-photo"
              />
            ) : (
              <img
                src={'http://localhost:3500/img/member/member.png'}
                alt="member-photo"
              />
            )}
          </div>
          <div className="layout-cart-btn-box">
            <Link to={'/cart/stepone'}>
              <div className="cart-icon-add">
                <Cart className="layout-cart-btn" />
                {cart_count > 1 ? (
                  <span className="cart-num ">{cart_count}</span>
                ) : (
                  ''
                )}
              </div>
            </Link>
          </div>
          <div
            style={{
              position: 'fixed',
              top: '92%',
              right: '4%',
              display: 'flex',
              textAlign: 'center',
              cursor: 'pointer',
            }}
            onClick={() => {
              localStorage.clear();
              history.push('/');
            }}
          >
            <img src={'http://localhost:3500/img/home/logout.svg'} />
            <p
              className="ml-2 en-title-14-5"
              style={{ lineHeight: '24px', marginBottom: 0 }}
            >
              Logout
            </p>
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
