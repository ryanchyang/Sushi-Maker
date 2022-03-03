import react, { useState } from 'react';
import { ReactComponent as Logo } from '../../imgs/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsCart4, BsTwitter } from 'react-icons/bs';
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
  
  function AsideLeft() {
    return (
      <>
        <aside className='col-lg-3 col-md-3 col-3 p-0 mobile-adj'>
          <div className='aside-left'>
            <div className='logo-box'>                
                <Logo className='logo' />
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
        <aside className='col-lg-3 col-md-3 col-3 p-0 mobile-adj'>
          <div className='aside-right'>
          <div className='layout-hamberger-box'>
            <GiHamburgerMenu className='layout-hamberger'/>
          </div>          
          <div className='layout-mem-photo-box'>
              <img src={require('./../../imgs/ruka.png')} alt="member-photo"/>
          </div>
          <div className='layout-cart-btn-box'>
            <BsCart4 className='layout-cart-btn'/>
          </div>          
          </div>
        </aside>
      </>
    );
  }
  
  function Footer() {
    return (
      <>
        <div className='footer'>
          <div>
            <div className='footer-logo-box'>                
              <Logo className='footer-logo' />
            </div>
            <div className='copyright'>
              PRIMEAL COPY RIGHT &nbsp; <BiCopyright /> &nbsp; 2022
            </div>
          </div>
          <div className='footer-icon-box-group'>
            <div className='footer-icon-box'>
              <FaFacebook className='footer-fb'/>
            </div>
            <div className='footer-icon-box'>
              <BsTwitter className='footer-tw'/>
            </div>
            <div className='footer-icon-box'>
              <RiInstagramFill className='footer-in'/>
            </div>
          </div>          
        </div>
      </>
    );
  }
  
  export { Header, AsideLeft, AsideRight, Footer };