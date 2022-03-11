//cart/StepThree.js
import { FaBitcoin, FaCcJcb, FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import CartSum from './CartSum';
import CartDetail from './CartDetial';
// TODO: A  改 LINK
function StepThree() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Payment Info'} />
          <br />
          <div className="mycontainer cart">
            <div className="bread">HOME/CART</div>
            <CartDetail />
            <div className="row">
              <div className="col-md-12">
                {/* TODO: 信用卡 refs */}
                <div className="payment-info">
                  <div className="ch-title-22 my-4">信用卡資訊</div>
                  <div class="card-wrapper"></div>
                  <div
                    className="payment-card"
                    style={{
                      width: '80%',
                      height: '80px',
                      backgroundColor: 'black',
                    }}
                  ></div>
                  {/* TODO: Form className='needs-validation ' 表單驗證*/}
                  <div className="mb-3">
                    <label className="form-label ch-cont-14">訂購人姓名</label>
                    <input
                      type="text"
                      className="form-control ch-cont-14 "
                      placeholder="name"
                    />{' '}
                    <div class="invalid-feedback">
                      Example invalid input group feedback
                    </div>
                  </div>

                  <div className=" mt-5">
                    <div className="form-group">
                      <label htmlFor="credit-card" className="credit-card">
                        請輸入信用卡卡號
                      </label>
                      &nbsp;&nbsp;
                      <FaCcVisa
                        className="mx-1"
                        style={{ fontSize: '1.5rem' }}
                      />
                      {/* <i
                        className="fab fa-cc-visa"
                        style={{ fontSize: '1.2rem' }}
                      ></i> */}
                      <FaCcMastercard
                        className="mx-1"
                        style={{ fontSize: '1.5rem' }}
                      />
                      {/* <i
                        className="fab fa-cc-mastercard"
                        style={{ fontSize: '1.2rem' }}
                      ></i> */}
                      <FaCcJcb
                        className="mx-1"
                        style={{ fontSize: '1.5rem' }}
                      />
                      {/* <i
                        className="fab fa-cc-jcb"
                        style={{ fontSize: '1.2rem' }}
                      ></i> */}
                      <FaBitcoin
                        className="mx-1"
                        style={{ fontSize: '1.5rem' }}
                      />
                      {/* <i
                        className="fab fa-bitcoin"
                        style={{ fontSize: '1.2rem' }}
                      ></i> */}
                      <div className="d-flex mt-3">
                        <input
                          type="text"
                          className="form-control"
                          id="column_1"
                          maxLength="4"
                          size="4"
                          value=""
                          name="column_1"
                          onKeyUp="setBlur(this,'column_2');"
                        />
                        <div className="mx-1"></div>
                        <input
                          type="text"
                          className="form-control"
                          id="column_2"
                          maxLength="4"
                          size="4"
                          value=""
                          name="column_2"
                          onKeyUp="setBlur(this,'column_3');"
                        />
                        <div className="mx-1"></div>
                        <input
                          type="text"
                          className="form-control"
                          id="column_3"
                          maxLength="4"
                          size="4"
                          value=""
                          name="column_3"
                          onKeyUp="setBlur(this,'column_4');"
                        />
                        <div className="mx-1"></div>
                        <input
                          type="text"
                          className="form-control"
                          id="column_4"
                          maxLength="4"
                          size="4"
                          value=""
                          name="column_4"
                        />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <div className="col d-flex justify-content-between">
                        <div>
                          <label htmlFor="expire-date" className="expire-date">
                            有效月
                          </label>
                          <select
                            className="custom-select mt-3"
                            aria-label="Default select example"
                            name="month"
                            // className="month"
                            id="month"
                          >
                            <option value="01">01</option>
                            <option value="01">02</option>
                            <option value="01">03</option>
                            <option value="01">04</option>
                            <option value="01">05</option>
                            <option value="01">06</option>
                            <option value="01">07</option>
                            <option value="01">08</option>
                            <option value="01">09</option>
                            <option value="01">10</option>
                            <option value="01">11</option>
                            <option value="01">12</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="expire-date" className="expire-date">
                            有效年
                          </label>
                          <select
                            className="custom-select mt-3"
                            aria-label="Default select example"
                            name="year"
                            // className="year"
                            id="year"
                          >
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                          </select>
                        </div>
                        <div className="div">
                          <label htmlFor="cvc" className="cvc">
                            驗證碼
                          </label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            maxLength="3"
                            size="15"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CartSum className="d-none d-md-block" />
              {/* 總計 */}
              {/* <div className="col-12">
                <div className="summary-right  pt-3">
                  <div className="row "></div>
                  <div className="row print-time my-4">
                    <div className="col-12 ch-cont-14">印製時間</div>
                    <div className="col-8 text-right ch-cont-14">35分鐘</div>
                  </div>
                  <div className="row price my-4">
                    <div className="col-12 ch-cont-14">訂單金額</div>
                    <div className="col-8 text-right ch-cont-14">NT 3000</div>
                  </div>
                  <div className="row discount my-4">
                    <div className="col-12 ch-cont-14">折抵金額</div>
                    <div className="col-8 text-right ch-cont-14">NT 100</div>
                  </div>

                  <div className="row price my-4">
                    <div className="col-12 ch-cont-14">結帳金額</div>
                    <div className="col-8 text-right ch-cont-14">NT 2900</div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* 下一步 */}
            <div className="row  d-flex justify-content-center justify-content-md-end">
              <div className="  d-flex next-btn my-5">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary primeal-btn-outline-sm  mx-5"
                >
                  上一步
                </button>
                <a
                  type="button"
                  className="btn btn-sm btn-primary primeal-btn-sm mx-5"
                  href="./StepFour"
                >
                  確認付款
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

export default StepThree;
