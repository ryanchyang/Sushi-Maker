import './navpage.scss';

function NavPage() {
  return (
    <>
      <div className="navbar">
        <div className="close-btn">
          <img src="/img/home/navbar-close.svg" alt="close" />
        </div>
        <div className="nav-bottom">
          <img className="login-icon" src="/img/home/login.svg" alt="login" />
          <img className="cart-icon" src="/img/home/cart.svg" alt="login" />
        </div>
        <div className="navbar-content">
          <div className="nav-img">
            <img src="/img/home/nav-machine-0.5.svg" alt="navbar-img" />
          </div>
          <div className="nav-area">
            <div className="nav-content">
              <p className="en-title-14-5 en-txt">About us</p>
              <p className="ch-title-14 ch-txt">關於我們</p>
            </div>
            <div className="nav-content">
              <p className="en-title-14-5 en-txt">Classic Product</p>
              <p className="ch-title-14 ch-txt">經典產品</p>
            </div>
            <div className="nav-content">
              <p className="en-title-14-5 en-txt">Customized Product</p>
              <p className="ch-title-14 ch-txt">客製產品</p>
            </div>
            <div className="nav-content">
              <p className="en-title-14-5 en-txt">Meal Plan</p>
              <p className="ch-title-14 ch-txt">套餐規劃</p>
            </div>
            <div className="nav-content">
              <p className="en-title-14-5 en-txt">Sharing Wall</p>
              <p className="ch-title-14 ch-txt">分享牆</p>
            </div>
            <div className="nav-content">
              <p className="en-title-14-5 en-txt">Member</p>
              <p className="ch-title-14 ch-txt">會員中心</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavPage;
