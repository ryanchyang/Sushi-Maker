// cart/ProdItem.js stepone 可編輯的item
import React, { useState, useRef } from 'react';

import { Button, Modal } from 'react-bootstrap';

function ProdItem(props) {
  // 每個商品物件
  //    {
  //       cart_id:1,
  //        mem_id:1, // token
  //        product_id:1,
  //        img:'',
  //        name: '鮭魚壽司',
  //        orders_value: 300,
  //        orders_amount:1,
  //        orders_print_time:90
  //        orders_category:'cls',
  //    }
  const [countcs, setCountcs] = useState(1);
  const [countcm, setCountcm] = useState(1);
  const [countset, setCountset] = useState(1);

  // const count = useRef();

  const cs = props.cs;
  const cm = props.cm;
  const set = props.set;

  // console.log(list.cs);

  // 套餐光箱
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30 m-3">套餐說明</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ margin: '0 3%' }}>
        <div className="en-cont-14 pb-2">
          加入購物車後，套餐內容不可修改，如需調整，需移除購物車品項，重新下單，謝謝。
        </div>
        <table className="table table-hover">
          <tbody className="">
            <tr>
              <th scope="row" className="en-cont-36">
                1
              </th>
              <td className="en-cont-14">
                <div>
                  鮭魚便當
                  <br />
                  Salmon Sushi Bento
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" className="en-cont-36">
                2
              </th>
              <td className="en-cont-14">
                <div>
                  鮭魚便當
                  <br />
                  Salmon Sushi Bento
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" className="en-cont-36">
                3
              </th>
              <td className="en-cont-14">
                <div>
                  鮭魚便當
                  <br />
                  Salmon Sushi Bento
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" className="en-cont-36">
                4
              </th>
              <td className="en-cont-14">
                <div>
                  鮭魚便當
                  <br />
                  Salmon Sushi Bento
                </div>
              </td>
            </tr>{' '}
            <tr>
              <th scope="row" className="en-cont-36">
                5
              </th>
              <td className="en-cont-14">
                <div>
                  鮭魚便當
                  <br />
                  Salmon Sushi Bento
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" className="en-cont-36">
                6
              </th>
              <td className="en-cont-14">
                <div>
                  鮭魚便當
                  <br />
                  Salmon Sushi Bento
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" className="en-cont-36">
                7
              </th>
              <td className="en-cont-14">
                <div>
                  鮭魚便當
                  <br />
                  Salmon Sushi Bento
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
  // 經典商品品項
  const csItem =
    cs === undefined
      ? ''
      : cs.map((v, i) => {
          return (
            <div className="prod-item ch-cont-14 " key={'cs' + i}>
              <div className="row my-2  d-flex align-items-center ">
                <div className="col-md-24 d-flex">
                  <div className="col-md-2 col-3 align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      ></label>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 align-items-center">
                    <div className="cart-item-img">
                      <img alt="" className="img-fluid" src="{image}" />
                    </div>
                  </div>
                  <div
                    className={
                      `d-flex ` +
                      `flex-md-row flex-column ` +
                      `col-9 col-md-10 justify-content-between ` +
                      `flex-grow-1 align-items-center`
                    }
                  >
                    <div className="col-md-8 my-md-3 align-items-center">
                      {v.c_prod_ch_name}
                    </div>
                    <div className="col-md-8 my-md-3 align-items-center">
                      {v.orders_value}元
                    </div>
                    <div className="col-md-8 my-md-3 align-items-center">
                      <div className="select-count">
                        <button
                          onClick={() => {
                            // 加入判斷條件 不能小於1
                            if (countcs - 1 >= 1) setCountcs(countcs - 1);
                          }}
                        >
                          -
                        </button>
                        <input type="number" value={countcs} />
                        <button
                          onClick={() => {
                            // 加入判斷條件 不能小於1
                            setCountcs(countcs + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 d-none d-md-flex align-items-center">
                    {v.orders_print_time}秒
                  </div>
                  <div className="col-md-2 d-none d-md-flex align-items-center ">
                    小計
                  </div>
                  <div className="col-md-4 col-6 d-flex justify-content-around align-items-center">
                    <div className="prod-item-icon ">
                      <img src="/img/cart/icon-trash.svg" alt="刪除" />
                    </div>

                    <div className="prod-item-icon">
                      <img src="/img/cart/icon-info-none.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        });
  // 客製化品項
  const cmItem =
    cm === undefined
      ? ''
      : cm.map((v, i) => {
          return (
            <div className="prod-item ch-cont-14 " key={'cm' + i}>
              <div className="row my-2  d-flex align-items-center ">
                <div className="col-md-24 d-flex">
                  <div className="col-md-2 col-3 align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      ></label>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 align-items-center">
                    <div className="cart-item-img">
                      <img
                        alt=""
                        className="img-fluid"
                        src={v.cm_prod_img_path}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      `d-flex ` +
                      `flex-md-row flex-column ` +
                      `col-9 col-md-10 justify-content-between ` +
                      `flex-grow-1 align-items-center`
                    }
                  >
                    <div className="col-md-8 my-md-3 align-items-center">
                      {v.cm_prod_name}
                    </div>
                    <div className="col-md-8 my-md-3 align-items-center">
                      {v.orders_value}元
                    </div>
                    <div className="col-md-8 my-md-3 align-items-center">
                      {/* <div className="row"> */}
                      <div className="select-count">
                        <button
                          onClick={() => {
                            // 加入判斷條件 不能小於1
                            if (countcm - 1 >= 1) setCountcm(countcm - 1);
                          }}
                        >
                          -
                        </button>
                        <input type="number" value={countcm} />
                        <button
                          onClick={() => {
                            // 加入判斷條件 不能小於1
                            setCountcm(countcm + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-md-2 d-none d-md-flex align-items-center">
                    {v.orders_print_time}秒
                  </div>
                  <div className="col-md-2 d-none d-md-flex align-items-center ">
                    小計
                  </div>
                  <div className="col-md-4 col-6 d-flex justify-content-around align-items-center">
                    <div className="prod-item-icon ">
                      <img src="/img/cart/icon-trash.svg" alt="刪除" />
                    </div>

                    <div className="prod-item-icon">
                      <img src="/img/cart/icon-info-none.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        });
  // 套餐品項
  const setItem =
    set === undefined
      ? ''
      : set.map((v, i) => {
          return (
            <div className="prod-item ch-cont-14 " key={'set' + i}>
              <div className="row my-2  d-flex align-items-center ">
                <div className="col-md-24 d-flex">
                  <div className="col-md-2 col-3 align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      ></label>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 align-items-center">
                    <div className="cart-item-img">
                      <img alt="" className="img-fluid" src="" />
                    </div>
                  </div>
                  <div
                    className={
                      `d-flex ` +
                      `flex-md-row flex-column ` +
                      `col-9 col-md-10 justify-content-between ` +
                      `flex-grow-1 align-items-center`
                    }
                  >
                    <div className="col-md-8 my-md-3 align-items-center">
                      {v.set_name}
                    </div>
                    <div className="col-md-8 my-md-3 align-items-center">
                      {v.orders_value}元
                    </div>
                    <div className="col-md-8 my-md-3 align-items-center">
                      <div className="select-count">
                        <button
                          onClick={() => {
                            // 加入判斷條件 不能小於1
                            if (countset - 1 >= 1) setCountset(countset - 1);
                          }}
                        >
                          -
                        </button>
                        <input type="number" value={countset} />
                        <button
                          onClick={() => {
                            // 加入判斷條件 不能小於1
                            setCountset(countset + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-md-2 d-none d-md-flex align-items-center">
                    {v.orders_print_time}秒
                  </div>
                  <div className="col-md-2 d-none d-md-flex align-items-center ">
                    小計
                  </div>
                  <div className="col-md-4 col-6 d-flex justify-content-around align-items-center">
                    <div className="prod-item-icon ">
                      <img src="/img/cart/icon-trash.svg" alt="" />
                    </div>

                    {modal}
                    <div className="prod-item-icon" onClick={handleShow}>
                      <img src="/img/cart/icon-info.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        });

  return (
    <>
      {/* 套餐 */}
      {setItem}
      {/* 經典商品 */}
      {csItem}
      {/* 客製化商品 */}
      {cmItem}
    </>
  );
}

export default ProdItem;
