// cart/ProdItem.js stepone 可編輯的item
import React, { useState, useRef, useEffect } from 'react';

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
  const [countcs, setCountcs] = useState([]);
  const [countcm, setCountcm] = useState([]);
  const [countset, setCountset] = useState([]);

  useEffect(() => {
    setCountcs(props.cs);
    setCountcm(props.cm);
    setCountset(props.set);
  }, [props]);
  
  useEffect(() => {
  }, [countcs, countcm, countset]);

  //改變cm數量輸入欄
  const changeCMCount = (count, pid) => {
    const newData = [...countcm];
    const data = newData.find(cm => cm.product_id == pid);
    const index = newData.findIndex(cm => cm.product_id == pid);
    newData.splice(index, 1, {...data, orders_amount: +count});
    setCountcm(newData);
  }

  //減少cm數量(-1)
  const minusCMCount = (pid) => {
    const newData = [...countcm];
    const data = newData.find(cm => cm.product_id == pid);
    const index = newData.findIndex(cm => cm.product_id == pid);
    newData.splice(index, 1, {...data, orders_amount: +data.orders_amount - 1});
    setCountcm(newData);
  }

  //增加cm數量(+1)
  const addCMCount = (pid) => {
    const newData = [...countcm];
    const data = newData.find(cm => cm.product_id == pid);
    const index = newData.findIndex(cm => cm.product_id == pid);
    newData.splice(index, 1, {...data, orders_amount: +data.orders_amount + 1});
    setCountcm(newData);
  }

  //改變cs數量輸入欄
  const changeCSCount = (count, pid) => {
    const newData = [...countcs];
    const data = newData.find(cs => cs.product_id == pid);
    const index = newData.findIndex(cs => cs.product_id == pid);
    newData.splice(index, 1, {...data, orders_amount: +count});
    setCountcs(newData);
  }

  //減少cs數量(-1)
  const minusCSCount = (pid) => {
    const newData = [...countcs];
    const data = newData.find(cs => cs.product_id == pid);
    const index = newData.findIndex(cs => cs.product_id == pid);
    newData.splice(index, 1, {...data, orders_amount: +data.orders_amount - 1});
    setCountcs(newData);
  }

  //增加cs數量(+1)
  const addCSCount = (pid) => {
    const newData = [...countcs];
    const data = newData.find(cs => cs.product_id == pid);
    const index = newData.findIndex(cs => cs.product_id == pid);
    newData.splice(index, 1, {...data, orders_amount: +data.orders_amount + 1});
    setCountcs(newData);
  }

  //改變set數量輸入欄
  const changeSETCount = (count, pid) => {
    const newData = [...countset];
    const data = newData.find(set => set.product_id == pid);
    const index = newData.findIndex(set => set.product_id == pid);
    newData.splice(index, 1, {...data, orders_amount: +count});
    setCountset(newData);
  }

  //減少set數量(-1)
  const minusSETCount = (pid) => {
    const newData = [...countset];
    const data = newData.find(set => set.product_id == pid);
    const index = newData.findIndex(set => set.product_id == pid);
    newData.splice(index, 1, {...data, orders_amount: +data.orders_amount - 1});
    setCountset(newData);
  }

  //增加set數量(+1)
  const addSETCount = (pid) => {
    const newData = [...countset];
    const data = newData.find(set => set.product_id == pid);
    const index = newData.findIndex(set => set.product_id == pid);
    newData.splice(index, 1, {...data, orders_amount: +data.orders_amount + 1});
    setCountset(newData);
  }
  

  // 套餐光箱
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      {countcs?.map((v, i) => {
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
                            minusCSCount(v.product_id);
                          }}
                        >
                          -
                        </button>
                        <input type="number"  value={v.orders_amount} onChange={(e) => {changeCSCount(+e.target.value, v.product_id)}} />
                        <button
                          onClick={() => {
                            // 加入判斷條件 不能小於1
                            addCSCount(v.product_id);
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
        })}
      {countcm?.map((v, i) => {
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
                            // if (countcm - 1 >= 1) setCountcm(countcm - 1);
                            minusCMCount(v.product_id);
                          }}
                        >
                          -
                        </button>
                        <input type="number" value={v.orders_amount} onChange={(e) => {changeCMCount(+e.target.value, v.product_id)}}/>
                        <button
                          onClick={() => {
                            // 加入判斷條件 不能小於1
                            // setCountcm(countcm + 1);
                            addCMCount(v.product_id);
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
        })}
      {countset?.map((v, i) => {
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
                            minusSETCount(v.product_id);
                          }}
                        >
                          -
                        </button>
                        <input type="number" value={v.orders_amount} onChange={(e) => {changeSETCount(+e.target.value, v.product_id)}} />
                        <button
                          onClick={() => {
                            // 加入判斷條件 不能小於1
                            addSETCount(v.product_id);
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
                    
                    {/* //光箱 */}
                    {<Modal show={show} onHide={handleClose}>
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
                      </Modal>}
                    <div className="prod-item-icon" onClick={handleShow}>
                      <img src="/img/cart/icon-info.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  )

}

export default ProdItem;
