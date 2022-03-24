import './navpage.scss';
import { Link } from 'react-router-dom';

function NavPage(props) {
  const { navIsOpen, setNavIsOpen } = props;
  return (
    <>
      <div
        className="navbar"
        style={
          navIsOpen ? { opacity: 1, zIndex: 200 } : { opacity: 0, zIndex: -100 }
        }
      >
        <div
          className="close-btn"
          onClick={() => {
            setNavIsOpen(false);
          }}
        >
          <img
            src={`http://localhost:3500/img/home/navbar-close.svg`}
            alt="close"
          />
        </div>
        {/*<div className="nav-bottom">
          <img
            className="login-icon"
            src={`http://localhost:3500/img/home/login.svg`}
            alt="login"
          />
          <img
            className="cart-icon"
            src={`http://localhost:3500/img/home/cart.svg`}
            alt="login"
          />
        </div>*/}
        <div className="navbar-content">
          <div className="nav-img">
            <img
              src={`http://localhost:3500/img/home/nav-machine-0.5.svg`}
              alt="navbar-img"
            />
          </div>
          <div className="nav-area">
            <Link
              to={'/'}
              className="nav-content"
              style={{ textDecoration: 'none', color: '#ffffff' }}
              onClick={() => {
                setNavIsOpen(false);
              }}
            >
              <p className="en-title-20 en-txt">About us</p>
              <p className="ch-title-22 ch-txt">關於我們</p>
            </Link>
            <Link
              to={'/classic'}
              className="nav-content"
              style={{ textDecoration: 'none', color: '#ffffff' }}
              onClick={() => {
                setNavIsOpen(false);
              }}
            >
              <p className="en-title-20 en-txt">Classic Product</p>
              <p className="ch-title-22 ch-txt">經典產品</p>
            </Link>
            <Link
              to={'/customize'}
              className="nav-content"
              style={{ textDecoration: 'none', color: '#ffffff' }}
              onClick={() => {
                setNavIsOpen(false);
              }}
            >
              <p className="en-title-20 en-txt">Customized Product</p>
              <p className="ch-title-22 ch-txt">客製產品</p>
            </Link>
            <Link
              to={'/setorder/stepstart'}
              className="nav-content"
              style={{ textDecoration: 'none', color: '#ffffff' }}
              onClick={() => {
                setNavIsOpen(false);
              }}
            >
              <p className="en-title-20 en-txt">Meal Plan</p>
              <p className="ch-title-22 ch-txt">套餐規劃</p>
            </Link>
            <Link
              to={'/share'}
              className="nav-content"
              style={{ textDecoration: 'none', color: '#ffffff' }}
              onClick={() => {
                setNavIsOpen(false);
              }}
            >
              <p className="en-title-20 en-txt">Sharing Wall</p>
              <p className="ch-title-22 ch-txt">分享牆</p>
            </Link>
            <Link
              to={'/latest-news/news'}
              className="nav-content"
              style={{ textDecoration: 'none', color: '#ffffff' }}
              onClick={() => {
                setNavIsOpen(false);
              }}
            >
              <p className="en-title-20 en-txt">Latest News</p>
              <p className="ch-title-22 ch-txt">最新消息</p>
            </Link>
            <Link
              to={'/member'}
              className="nav-content"
              style={{ textDecoration: 'none', color: '#ffffff' }}
              onClick={() => {
                setNavIsOpen(false);
              }}
            >
              <p className="en-title-20 en-txt">Member</p>
              <p className="ch-title-22 ch-txt">會員中心</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavPage;
