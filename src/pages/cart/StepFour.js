//cart/StepFour.js
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import CartDetail from './CartDetial';
// TODO: A  改 LINK
function StepFour() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Confirmation❤'} />
          <br />
          <div className="container cart">
            <div className="bread">HOME/CART</div>
            <div className="row"></div>
            {/* 先切手機 */}
            <div className="confirmation">
              <div className="row ch-cont-14">
                <div className="my-3 col-24 col-md-12 ch-cont-24">
                  您的訂單已成立
                </div>

                <div className="my-5 col-24 col-md-13">
                  感謝您的預訂，請至信箱收取訂單明細，
                  取貨時，請於機台前出示並掃描右方QR Code，以利完成取貨手續。
                </div>
                <div className="my-5 col-24 col-md-11 d-flex justify-content-between">
                  <div>
                    <p>送達資訊</p>
                    <p>Miles Teng </p>
                    <p>新北市</p>
                    <p>汐止區</p>
                    <p>讚讚門市</p>
                  </div>
                  <div className="qrcode">
                    <img src="/imgs/cart/qrcode.svg" alt=""></img>
                  </div>
                </div>

                <div className="my-5 col-24 d-block d-md-flex justify-content-md-between">
                  <div className="col-24 col-md-16 my-3">
                    如欲查詢訂單詳情與進度，請至 會員中心{'>'} 歷史訂單 查詢
                  </div>
                  {/* ＢＴＮ 返回按鈕 */}
                  <div className="col-24 col-md-8 my-3">
                    <button
                      type="button"
                      className="btn btn-primary  btn-block "
                    >
                      繼續購物
                    </button>{' '}
                  </div>
                </div>
              </div>
            </div>
            {/* TODO:進度條 */}
            <div className="process-bar">
              <div class="animated-progress progress-red">
                <span data-progress="45"></span>
              </div>
            </div>
            {/* TODO: 商品詳細清單 */}
            <CartDetail />
          </div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default StepFour;
