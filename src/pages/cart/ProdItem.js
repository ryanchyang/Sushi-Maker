// cart/ProdItem.js stepone 可編輯的item
import React, { useState } from 'react';
import './Cart.scss';

import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

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
  const [count, setCount] = useState(1);
  const [info, setInfo] = useState(1);

  //解構
  // const {
  //   id,
  //   name,
  //   category,
  //   image,
  //   price,
  //   count,
  //   setCount,
  //   handleDelete,
  //   handleSetInfo,
  // } = props;

  // 套餐光箱
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30">套餐說明</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="en-cont-14">
          加入購物車後，套餐內容不可修改，如需調整，需移除購物車品項，重新下單，謝謝。
        </div>
        <table class="table table-hover">
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
            </tr>{' '}
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
            </tr>{' '}
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
          className="btn btn-sm btn-primary primeal-btn-sm mx-5"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <div className="prod-item ch-cont-14 ">
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
            <div className="col-md-8 my-md-3 align-items-center">商品名稱</div>
            <div className="col-md-8 my-md-3 align-items-center">
              單價 元單價 元
            </div>
            <div className="col-md-8 my-md-3 align-items-center">
              {/* <div className="row"> */}
              <div className="select-count">
                <button
                  onClick={() => {
                    // 加入判斷條件 不能小於1
                    if (count - 1 >= 1) setCount(count - 1);
                  }}
                >
                  -
                </button>
                <input type="number" value={count} />
                <button
                  onClick={() => {
                    // 加入判斷條件 不能小於1
                    setCount(count + 1);
                  }}
                >
                  +
                </button>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="col-md-2 d-none d-md-flex align-items-center">
            印製時間 分鐘
          </div>
          <div className="col-md-2 d-none d-md-flex align-items-center ">
            {' '}
            小計
          </div>
          <div className="col-md-4 col-6 d-flex justify-content-around align-items-center">
            {/* <div className="col-md-2 text-center"> */}
            <div className="prod-item-icon ">
              <img src="/img/cart/icon-trash.svg" alt="" />
            </div>
            {/* </div> */}
            {/* <div className="col-md-2 text-center"> */}
            {modal}
            <div className="prod-item-icon" onClick={handleShow}>
              <img src="/img/cart/icon-info.svg" alt="" />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdItem;
