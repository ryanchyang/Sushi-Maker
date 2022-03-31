// cart/ProdItem.js stepone 可編輯的item
import React, { useState, useRef, useEffect } from 'react';
import config from '../../../Config';
import { getCart } from '../../../utils';
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
  const setList = props.setList;
  const initController = useRef(1);
  const deleteProdCS = props.deleteProd;

  // 計算單品數量
  const [countcs, setCountcs] = useState([]);
  const [countcm, setCountcm] = useState([]);
  const [countset, setCountset] = useState([]);

  // console.log(countcs);
  // console.log(countcm);

  useEffect(() => {
    if (initController.current <= 6) {
      console.log(props);
      setCountcs(props.cs);
      setCountcm(props.cm);
      setCountset(props.set);
      initController.current += 1;
    }
  }, [props]);

  // TODO: ASK 新德救命!!!!
  useEffect(() => {
    if (initController.current > 6) {
      const newData = { ...props.list };
      newData.cs = countcs;
      props.setList(newData);
    }
  }, [countcs]);

  useEffect(() => {
    if (initController.current > 6) {
      const newData = { ...props.list };
      newData.cm = countcm;
      props.setList(newData);
    }
  }, [countcm]);

  useEffect(() => {
    if (initController.current > 6) {
      const newData = { ...props.list };
      newData.set = countset;
      props.setList(newData);
    }
  }, [countset]);

  useEffect(() => {

  }, [deleteProdCS]);

  // 計算小計金額

  const [subtotalcs, setSubtotalcs] = useState();
  const [subtotalcm, setSubtotalcm] = useState('');
  const [subtotalset, setSubtotalset] = useState('');

  //改變cm數量輸入欄
  const changeCMCount = (count, pid) => {
    // 先拷貝一層
    const newData = [...countcm];
    // 找出要的/點到的pid 跟 map 出來的484 同一個
    const data = newData.find(cm => cm.product_id == pid);
    // 找出 點到的product_id 是在 陣列中的第幾個 (在 cm 的陣列中 可能會有多個商品)
    const index = newData.findIndex(cm => cm.product_id == pid);
    // newData 用splice 去分割 抓到是第幾個index 淺層拷貝並覆寫
    newData.splice(index, 1, { ...data, orders_amount: +count });
    setCountcm(newData);
  };

  //減少cm數量(-1)
  const minusCMCount = pid => {
    /*
    const newData = [...countcm];
    const data = newData.find(cm => cm.product_id == pid);
    const index = newData.findIndex(cm => cm.product_id == pid);
    newData.splice(index, 1, {
      ...data,
      orders_amount: +data.orders_amount - 1,
    });
    */
    // 新德的寫法
    //
    const newData = [...countcm];
    //
    const newData2 = newData.map(v => {
      //
      if (pid === v.product_id) {
        //
        if (v.orders_amount > 1) {
          //
          return { ...v, orders_amount: +v.orders_amount - 1 };
        }
      }
      //
      return { ...v };
    });

    setCountcm(newData2);
  };

  //增加cm數量(+1)
  const addCMCount = pid => {
    const newData = [...countcm];
    const data = newData.find(cm => cm.product_id == pid);
    const index = newData.findIndex(cm => cm.product_id == pid);
    newData.splice(index, 1, {
      ...data,
      orders_amount: +data.orders_amount + 1,
    });
    setCountcm(newData);
  };

  //改變cs數量輸入欄
  const changeCSCount = (count, pid) => {
    const newData = [...countcs];
    const data = newData.find(cs => cs.product_id == pid);
    const index = newData.findIndex(cs => cs.product_id == pid);
    newData.splice(index, 1, { ...data, orders_amount: +count });
    setCountcs(newData);
  };

  //減少cs數量(-1)
  const minusCSCount = pid => {
    // const newData = [...countcs];
    // const data = newData.find(cs => cs.product_id == pid);
    // const index = newData.findIndex(cs => cs.product_id == pid);
    // newData.splice(index, 1, {
    //   ...data,
    //   orders_amount: +data.orders_amount - 1,
    // });

    const newData = [...countcs];
    const newData2 = newData.map(v => {
      if (pid === v.product_id) {
        if (v.orders_amount > 1) {
          return { ...v, orders_amount: +v.orders_amount - 1 };
        }
      }
      return { ...v };
    });

    setCountcs(newData2);
  };

  //增加cs數量(+1)
  const addCSCount = pid => {
    const newData = [...countcs];
    const data = newData.find(cs => cs.product_id == pid);
    const index = newData.findIndex(cs => cs.product_id == pid);
    newData.splice(index, 1, {
      ...data,
      orders_amount: +data.orders_amount + 1,
    });
    setCountcs(newData);
  };

  //改變set數量輸入欄
  const changeSETCount = (count, pid) => {
    const newData = [...countset];
    const data = newData.find(set => set.product_id == pid);
    const index = newData.findIndex(set => set.product_id == pid);
    newData.splice(index, 1, { ...data, orders_amount: +count });
    setCountset(newData);
  };

  //減少set數量(-1)
  const minusSETCount = pid => {
    // const newData = [...countset];
    // const data = newData.find(set => set.product_id == pid);
    // const index = newData.findIndex(set => set.product_id == pid);
    // newData.splice(index, 1, {
    //   ...data,
    //   orders_amount: +data.orders_amount - 1,
    // });

    const newData = [...countset];
    const newData2 = newData.map(v => {
      if (pid === v.product_id) {
        if (v.orders_amount > 1) {
          return { ...v, orders_amount: +v.orders_amount - 1 };
        }
      }
      return { ...v };
    });

    setCountset(newData2);
  };

  //增加set數量(+1)
  const addSETCount = pid => {
    const newData = [...countset];
    const data = newData.find(set => set.product_id == pid);
    const index = newData.findIndex(set => set.product_id == pid);
    newData.splice(index, 1, {
      ...data,
      orders_amount: +data.orders_amount + 1,
    });
    setCountset(newData);
  };

  //刪除商品
  const deleteProd = async (pid, category) => {
    const mid = localStorage.getItem('mem_id');
    const cartInfo = await getCart();
    const cartid = cartInfo.cartid;

    switch (category) {
      case 'set':
        let newSetData = [...countset];
        newSetData = newSetData.filter(d => d.product_id !== pid); //pid相等的是要刪掉的，所以要回傳不相等的
        setCountset(newSetData);

        let newSetArr = [...props.deleteProd];
        newSetArr.push({ pid: pid, category: category });
        props.setDeleteProd(newSetArr);

        fetch(config.DELETE_CART_PROD, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            memId: mid,
            cartid: cartid,
            pid: pid,
            category: category,
          }),
        });
        break;

      case 'cs':
        console.log('delShowCS.id:', delShowCS.id);
        const pid = delShowCS.id;
        
        let newCsData = [...countcs];
        newCsData = newCsData.filter(d => d.product_id !== pid); //pid相等的是要刪掉的，所以要回傳不相等的
        setCountcs(newCsData);

        let newCsArr = [...props.deleteProd];
        newCsArr.push({ pid: pid, category: category });
        props.setDeleteProd(newCsArr);
        console.log('262', newCsArr);

        fetch(config.DELETE_CART_PROD, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            memId: mid,
            cartid: cartid,
            pid: pid,
            category: category,
          }),
        });
        break;

      case 'cm':
        let newCmData = [...countcm];
        newCmData = newCmData.filter(d => d.product_id !== pid); //pid相等的是要刪掉的，所以要回傳不相等的
        setCountcm(newCmData);

        let newCmArr = [...props.deleteProd];
        newCmArr.push({ pid: pid, category: category });
        props.setDeleteProd(newCmArr);

        fetch(config.DELETE_CART_PROD, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            memId: mid,
            cartid: cartid,
            pid: pid,
            category: category,
          }),
        });
        break;

      default:
        break;
    }
  };

  // 套餐光箱
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 刪除光箱 CS
  const [delShowCS, setDelShowCS] = useState({
    open: false,
    id: '',
    name: '',
  });
  const handleDelCloseCS = () => setDelShowCS(false);
  const handleDelShowCS = e => {
    console.log('hi');
    console.log('e.currentTarget:', e.currentTarget);
    console.log('e.currentTarget.dataset.id:', e.currentTarget.dataset.id);
    const c_prod_id = e.currentTarget.dataset.id;
    const c_prod_name = e.currentTarget.dataset.name;
    setDelShowCS({
      ...delShowCS,
      open: true,
      id: c_prod_id,
      name: c_prod_name,
    });
  };

  return (
    <>
      {countset?.map((v, i) => {
        return (
          <div className="prod-item ch-cont-14 " key={'set' + i}>
            <div className="row my-2  d-flex align-items-center ">
              <div className="col-md-24 d-flex">
                <div className="col-md-2 col-3 align-items-center">
                  {/* <div className="form-check">
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
                  </div> */}
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
                    {v.orders_value}元/個
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
                      <input
                        type="number"
                        value={v.orders_amount}
                        onChange={e => {
                          changeSETCount(+e.target.value, v.product_id);
                        }}
                      />
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
                  ${v.orders_value * v.orders_amount}
                </div>
                <div className="col-md-4 col-6 d-flex justify-content-around align-items-center">
                  <div
                    className="prod-item-icon"
                    onClick={() => {
                      deleteProd(v.product_id, 'set');
                    }}
                  >
                    <img src="/img/cart/icon-trash.svg" alt="" />
                  </div>

                  {/* //光箱 */}
                  {
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title className="en-cont-30 m-3">
                          套餐說明
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ margin: '0 3%' }}>
                        <div className="en-cont-14 pb-2">
                          加入購物車後，套餐內容不可修改，如需調整，需移除購物車品項，重新下單，謝謝。
                        </div>
                        <table className="table table-hover">
                          <tbody className="">
                            {v.set_info_array.map((v, i) => {
                              return (
                                <tr key={i + 1}>
                                  <th scope="row" className="en-cont-36">
                                    {i + 1}
                                  </th>
                                  <td className="en-cont-14">
                                    <div>
                                      {v.bento_ch_name}
                                      <br />
                                      {v.bento_en_name}
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
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
                  }
                  <div className="prod-item-icon" onClick={handleShow}>
                    <img src="/img/cart/icon-info.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {countcs?.map((v, i) => {
        return (
          <div className="prod-item ch-cont-14 " key={'cs' + i}>
            <div className="row my-2  d-flex align-items-center ">
              <div className="col-md-24 d-flex">
                <div className="col-md-2 col-3 align-items-center">
                  {/* <div className="form-check">
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
                  </div> */}
                </div>
                <div className="col-md-4 col-6 align-items-center">
                  <div className="cart-item-img">
                    <img
                      alt={v.cs_prod_img_path}
                      className="img-fluid"
                      src={`http://localhost:3500${v.c_prod_img_path}`}
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
                      <input
                        type="number"
                        value={v.orders_amount}
                        onChange={e => {
                          changeCSCount(+e.target.value, v.product_id);
                        }}
                      />
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
                  {v.orders_print_time}秒/個
                </div>
                <div className="col-md-2 d-none d-md-flex align-items-center ">
                  ${v.orders_value * v.orders_amount}
                </div>
                {
                  <Modal show={delShowCS.open} onHide={handleDelCloseCS}>
                    <Modal.Header closeButton>
                      <Modal.Title className="en-cont-30 m-3">
                        刪除{delShowCS.name}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ margin: '0 3%' }}>
                      <div className="en-cont-14 pb-2">
                        確認要刪除此項商品嗎?
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        className="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2"
                        onClick={handleDelCloseCS}
                      >
                        取消
                      </Button>
                      <Button
                        variant=" btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2 m-3"
                        className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
                        // onClick={handleDelClose}
                        onClick={e => {
                          const pid = delShowCS.id;
                          console.log('delShowCS.id:', delShowCS.id);
                          deleteProd(pid, 'cs');
                          // console.log(e.currentTarget.value, 'MMMMM');
                          handleDelCloseCS();
                        }}
                      >
                        確認
                      </Button>
                    </Modal.Footer>
                  </Modal>
                }
                <div className="col-md-4 col-6 d-flex justify-content-around align-items-center">
                  <div
                    className="prod-item-icon"
                    data-id={v.product_id}
                    data-name={v.c_prod_ch_name}
                    // onClick={() => {
                    //   deleteProd(v.product_id, 'cs');
                    // }}
                    // console.log(v.product_id + v.c_prod_ch_name);
                    onClick={handleDelShowCS}
                  >
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
                  {/* <div className="form-check">
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
                  </div> */}
                </div>
                <div className="col-md-4 col-6 align-items-center">
                  <div className="cart-item-img">
                    <img
                      alt={v.cm_prod_img_path}
                      className="img-fluid"
                      src={`http://localhost:3500${v.cm_prod_img_path}`}
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
                      <input
                        type="number"
                        value={v.orders_amount}
                        onChange={e => {
                          changeCMCount(+e.target.value, v.product_id);
                        }}
                      />
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
                  </div>
                </div>
                <div className="col-md-2 d-none d-md-flex align-items-center">
                  {v.orders_print_time}秒/個
                </div>
                <div className="col-md-2 d-none d-md-flex align-items-center ">
                  ${v.orders_value * v.orders_amount}
                </div>
                <div className="col-md-4 col-6 d-flex justify-content-around align-items-center">
                  <div
                    className="prod-item-icon"
                    onClick={() => {
                      deleteProd(v.product_id, 'cm');
                    }}
                  >
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
    </>
  );
}

export default ProdItem;
