import { useState } from 'react';
import { ReactComponent as Hamburger } from '../../imgs/hamburger.svg';
import { ReactComponent as Cart } from '../../imgs/cart.svg';

function AsideRight() {
    const [memberImg, setMemberImg] = useState('');
    const [cartCount, setCartCount] = useState(0);
  
    return (
      <>
        <aside className="col-lg-3 col-md-3 col-3 p-0 mobile-adj aside-fixed">
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

  export default AsideRight;