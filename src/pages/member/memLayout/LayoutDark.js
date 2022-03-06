import { useState } from 'react';
import { ReactComponent as Logo } from '../../../imgs/logoLight.svg';
import { ReactComponent as Hamburger } from '../../../imgs/hamburgerLight.svg';
import { ReactComponent as Cart } from '../../../imgs/cartLight.svg';
import { BsTwitter } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';

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
      <mytitle className="layout-title navtitle">{props.title}</mytitle>
    </>
  );
}

function AsideLeft() {
  return (
    <>
      <aside className="col-lg-3 col-md-3 col-3 p-0 mobile-adj">
        <div className="aside-left" style={{ border: 'none' }}>
          <div className="logo-box">
            <Logo className="logo" />
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
        <div className="aside-right" style={{ border: 'none' }}>
          <div className="layout-hamberger-box">
            <Hamburger className="layout-hamberger" />
          </div>

          <div className="layout-cart-btn-box">
            <AiOutlineUser
              style={{
                display: 'block',
                margin: '0 auto',
                fontSize: '25px',
                fill: '#f7f6f3',
              }}
            ></AiOutlineUser>
          </div>

          {/* <div className="layout-mem-photo-box"> */}
          {/* <img src={require('../../../imgs/ruka.png')} alt="member-photo" /> */}
          {/* </div> */}

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
