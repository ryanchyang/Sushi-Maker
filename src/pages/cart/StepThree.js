//cart/StepThree.js
import { FaBitcoin, FaCcJcb, FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link, useHistory } from 'react-router-dom';
import CartSum from './CartSum';
import CartDetail from './components/CartDetial';
import CreditCard from './components/CreditCard';
// TODO: A  改 LINK
function StepThree() {
  // 回上一頁 按鈕
  let history = useHistory();
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Payment Info'} />
          <div className="mycontainer cart  ch-cont-14 min-hi">
            <div className="bread">HOME/CART</div>
            <CartDetail />
            <div className="row mt-5">
              <div className="col-md-12">
                {/* TODO: 信用卡 refs */}
                <div className="payment-info">
                  <div className="ch-title-22 my-4">信用卡資訊</div>
                  <CreditCard/>
                </div>
              </div>
              <CartSum className="d-none d-md-block" />
              {/* 總計 */}
            </div>
            {/* 下一步 */}
            <div className="row  d-flex justify-content-center justify-content-md-end">
              <div className="  d-flex next-btn my-5">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary primeal-btn-outline-sm  mx-5 mx-md-3"
                  onClick={() => {
                    // 轉至上一頁
                    history.goBack();
                  }}
                >
                  上一步
                </button>
                <Link to="./StepFour">
                  <button
                    type="button"
                    className="btn btn-sm btn-primary primeal-btn-sm mx-5 mx-md-3"
                  >
                    確認付款
                  </button>
                </Link>
              
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

export default StepThree;
