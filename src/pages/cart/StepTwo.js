//cart/StepTwo.js

import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link, useHistory } from 'react-router-dom';
import CartSum from './CartSum';
import CartDetail from '././components/CartDetial';

import React, { useState } from 'react';
import StepMap from '././components/StepMap';
import { Button, Modal } from 'react-bootstrap';

function StepTwo() {
  // 套餐光箱
  const [map, setMap] = useState(false);
  const handleClose = () => setMap(false);
  const handleShow = () => setMap(true);
  // 回上一頁 按鈕
  let history = useHistory();
  // const modal = (
  //   <Modal show={map} onHide={handleClose}>
  //     <Modal.Header closeButton>
  //       <Modal.Title className="en-cont-30 m-3">選擇取貨門市</Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body style={{ margin: '0 3%' }}>
  //       <>
  //         <StepMap />
  //       </>
  //     </Modal.Body>
  //     <Modal.Footer>
  //       <Button
  //         variant="secondary"
  //         className="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2"
  //         onClick={handleClose}
  //       >
  //         取消
  //       </Button>
  //       {/*TODO: 確認門市要送出表單並存到DB mem */}
  //       <Button
  //         variant="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2 m-3"
  //         onClick={handleClose}
  //       >
  //         確認門市
  //       </Button>
  //     </Modal.Footer>
  //   </Modal>
  // );

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Shipping Info'} />
          {/* <div className="row"></div> */}
          <div className="mycontainer cart min-hi">
            <div className="bread">HOME/CART</div>
            {/* 訂單資訊 可以摺疊*/}
            <CartDetail />
            <div className="row mt-5">
              <div className="col-md-12 col-24">
                <div className="shipping-info ch-cont-14">
                  <form>
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
                      <div className="invalid-feedback">
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
                      <div className="invalid-feedback">
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
                        htmlFor="exampleFormControlTextarea1 "
                        className="form-label ch-cont-14"
                      >
                        訂單特殊備註
                      </label>
                      <textarea
                        className="form-control textarea"
                        id="exampleFormControlTextarea1"
                        // maxRows="5"
                      ></textarea>
                    </div>
                    <div className="my-4 mx-5">
                      {/* TODO: map 光箱 */}
                      {
                        <Modal show={map} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title className="en-cont-30 m-3">
                              選擇取貨門市
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body style={{ margin: '0 3%' }}>
                            <>
                              <StepMap />
                            </>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              className="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2"
                              onClick={handleClose}
                            >
                              取消
                            </Button>
                            {/*TODO: 確認門市要送出表單並存到DB mem */}
                            <Button
                              variant="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2 m-3"
                              onClick={handleClose}
                            >
                              確認門市
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      }
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary btn-block px-5 my-5 ch-title-14"
                        onClick={handleShow}
                      >
                        選擇取貨門市
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* 右側 統計 summary */}
              <CartSum
                className="d-none d-md-block"
                // style={{ position: 'fixed' }}
              />
              {/* ----summary-end */}
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
                <Link to="./StepThree">
                  <button
                    type="button"
                    className="btn btn-sm btn-primary primeal-btn-sm mx-5 mx-md-3"
                  >
                    下一步
                  </button>
                </Link>
                {/* <a
                  type="button"
                  className="btn btn-sm btn-primary primeal-btn-sm mx-5 mx-md-3"
                  href="./StepThree"
                >
                  下一步
                </a> */}
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
