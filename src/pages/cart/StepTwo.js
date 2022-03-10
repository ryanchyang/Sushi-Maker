//cart/StepTwo.js

import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import CartSum from './CartSum';
import CartDetail from './CartDetial';
// TODO: A  改 LINK
function StepTwo() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Shipping Info'} />
          <br />
          <div className="row"></div>
          <div className="mycontainer cart">
            <div className="bread">HOME/CART</div>
            {/* 訂單資訊 可以摺疊*/}
            <CartDetail />
            <div className="row mt-5">
              <div className="col-md-12 col-24">
                <div className="shipping-info ch-cont-14">
                  {/* TODO: Form className='needs-validation ' 表單驗證*/}
                  <div className="my-4">
                    <div className="d-flex justify-content-between">
                      <label className="form-label ">訂購人姓名</label>
                      <label className="form-label text-primary ch-cont-12">
                        必填
                      </label>
                    </div>
                    <input
                      type="text"
                      className="form-control  "
                      placeholder="name"
                      required
                    />
                    <div class="invalid-feedback">
                      Example invalid input group feedback
                    </div>
                  </div>
                  <div className="my-4">
                    <div className="d-flex justify-content-between">
                      <label className="form-label ">連絡電話</label>
                      <label className="form-label text-primary ch-cont-12">
                        必填
                      </label>
                    </div>

                    <input
                      type="text"
                      className="form-control "
                      placeholder="phone"
                      required
                    />
                    <div class="invalid-feedback">
                      Example invalid input group feedback
                    </div>
                  </div>
                  <div className="my-4">
                    <label className="form-label ">取貨人姓名</label>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="name"
                    />
                    <div className="form-check d-flex">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label ">同訂購人</label>
                    </div>
                  </div>
                  <div className="my-4">
                    <label
                      for="exampleFormControlTextarea1 "
                      className="form-label ch-cont-14"
                    >
                      訂單特殊備註
                    </label>
                    <textarea
                      className="form-control textarea"
                      id="exampleFormControlTextarea1"
                      maxRows="5"
                    ></textarea>
                  </div>
                  {/* TODO: map 光箱 */}
                  <a
                    type="button"
                    className="btn btn-sm btn-outline-primary btn-block px-5 my-5 ch-title-14"
                    href="#/"
                  >
                    選擇取貨門市
                  </a>
                </div>
              </div>
              <CartSum className="d-none d-md-block" />
              {/* 總計 */}
              {/* <div className="col-md-12 d-none d-md-block">
                <div className="summary-right  pt-3">
                  <div className="row "></div>
                  <div className="row print-time my-4">
                    <div className="col-md-12 ch-cont-14">印製時間</div>
                    <div className="col-md-8 text-right ch-cont-14">35分鐘</div>
                  </div>
                  <div className="row price my-4">
                    <div className="col-md-12 ch-cont-14">訂單金額</div>
                    <div className="col-md-8 text-right ch-cont-14">
                      NT 3000
                    </div>
                  </div>
                  <div className="row discount my-4">
                    <div className="col-md-12 ch-cont-14">折抵金額</div>
                    <div className="col-md-8 text-right ch-cont-14">NT 100</div>
                  </div>

                  <div className="row price my-4">
                    <div className="col-md-12 ch-cont-14">結帳金額</div>
                    <div className="col-md-8 text-right ch-cont-14">
                      NT 2900
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>

            {/* 下一步 */}
            <div className="row  d-flex justify-content-center justify-content-md-end">
              <div className="  d-flex next-btn my-5">
                <button
                  type="button"
                  className="btn btn-sm btn-primary primeal-btn-outline-sm  mx-5"
                >
                  上一步
                </button>
                <a
                  type="button"
                  className="btn btn-sm btn-primary primeal-btn-sm mx-5"
                  href="./StepThree"
                >
                  下一步
                </a>
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

export default StepTwo;
