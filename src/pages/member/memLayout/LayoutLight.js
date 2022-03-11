import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { ReactComponent as Logo } from '../../../imgs/logo.svg';
import { ReactComponent as Hamburger } from '../../../imgs/hamburger.svg';
import { ReactComponent as Cart } from '../../../imgs/cart.svg';
import { BsTwitter } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

function Header() {
  return (
    <>
      <head>HEADER</head>
    </>
  );
}

function Title(props) {
  return (
    <>
      <div className="mobile-top">
        <div>
          <div className="logo-box">
            <Logo className="logo" />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <div className="layout-cart-btn-box-top">
              <Cart className="layout-cart-btn" />
            </div>
          </div>
          <div>
            <div className="layout-hamberger-box">
              <Hamburger className="layout-hamberger" />
            </div>
          </div>
        </div>
      </div>
      <mytitle className="mytitle layout-title navtitle">{props.title}</mytitle>
    </>
  );
}

function AsideLeft() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <aside className="col-lg-3 col-md-3 col-3 p-0 mobile-adj">
        <div className="aside-left">
          <div className="logo-box">
            <Logo className="logo" />
          </div>
          <div
            style={{
              width: '100%',
              marginTop: '100%',
            }}
          >
            <div
              className="ch-title-16"
              style={{
                width: '100%',
                height: '40px',
                textAlign: 'center',
                lineHeight: '40px',
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
                    location.pathname === '/member/historyorder'
                      ? '#212121'
                      : '',
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
                  <p>我的訂單</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function AsideRight() {
  const [memberImg, setMemberImg] = useState('');
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <aside className="col-lg-3 col-md-3 col-3 p-0 mobile-adj">
        <div className="aside-right">
          <div className="layout-hamberger-box">
            <Hamburger className="layout-hamberger" />
          </div>
          <div className="layout-mem-photo-box">
            <img src={require('../../../imgs/ruka.png')} alt="member-photo" />
          </div>
          <div className="layout-cart-btn-box">
            <Cart className="layout-cart-btn" />
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
