// CartList.js   購物車空白
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function CartList() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Shopping Cart'} />
          <br />
          <div className="container cart">
            <div className="bread">HOME/CART</div>

            <div className="row">
              <div className="col-24 col-md-24">
                <div className="empty text-center">
                  <h3>購物車</h3>
                  <div>購物車中沒有商品 - 請選購商品！</div>
                  <div className="empty-img">
                    <img src="/imgs/cart/empty-cart-md.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5 ">
              <div className=" col-md-18"></div>
              <div className="col-md-6 justify-content-center">
                <button
                  type="button"
                  class="btn btn-primary btn-lg ch-title-14"
                >
                  前往結帳
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default CartList;
