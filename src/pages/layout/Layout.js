import { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../imgs/logo.svg';
import { ReactComponent as Hamburger } from '../../imgs/hamburger.svg';
import { ReactComponent as Cart } from '../../imgs/cart.svg';
import { BsTwitter } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { height } from '@mui/system';
import NavPage from './components/NavPage';
import { useWindowScroll } from 'react-use';

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
      <div className="mytitle layout-title navtitle">{props.title}</div>
    </>
  );
}

function AsideLeft(props) {
  // 首頁動態改變背景顏色
  const { changeBG, setChangeBG, pageYOffset } = props;
  useEffect(() => {
    if (pageYOffset <= 3000 || pageYOffset >= 6300) {
      setChangeBG(true);
    } else if (pageYOffset >= 3000) {
      setChangeBG(false);
    }
  }, [pageYOffset]);

  const darkBG = {
    backgroundColor: '#212121',
    color: '#ffffff',
    transition: '1.5s',
  };
  const lightBG = { backgroundColor: '#f7f6f3', transition: '1.5s' };

  return (
    <>
      <aside
        className="col-lg-3 col-md-3 col-3 p-0 mobile-adj aside-fixed"
        style={changeBG ? darkBG : lightBG}
      >
        <div className="aside-left">
          <div className="logo-box">
            <Logo className="logo" />
          </div>
        </div>
      </aside>
    </>
  );
}

function AsideRight(props) {
  const [memberImg, setMemberImg] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const { changeBG, setChangeBG, pageYOffset } = props;

  // 首頁動態改變背景顏色
  useEffect(() => {
    if (pageYOffset <= 3000 || pageYOffset >= 6300) {
      setChangeBG(true);
    } else if (pageYOffset >= 3000) {
      setChangeBG(false);
    }
  }, [pageYOffset]);

  const darkBG = {
    backgroundColor: '#212121',
    color: '#ffffff',
    transition: '1.5s',
  };
  const lightBG = { backgroundColor: '#f7f6f3', transition: '1.5s' };

  return (
    <>
      <aside
        className="col-lg-3 col-md-3 col-3 p-0 mobile-adj aside-fixed"
        style={changeBG ? darkBG : lightBG}
      >
        <div className="aside-right">
          <div className="layout-hamberger-box">
            <Hamburger
              className="layout-hamberger"
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="layout-mem-photo-box">
            <img src={require('./../../imgs/ruka.png')} alt="member-photo" />
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
