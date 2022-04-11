//cart/StepTwo.js

import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link, useHistory } from 'react-router-dom';
import CartSum from './CartSum';
import CartDetail from '././components/CartDetial';
import NavPage from '../layout/components/NavPage';
import React, { useState, useEffect, useRef } from 'react';
import StepMap from '././components/StepMap';
import { Button, Modal } from 'react-bootstrap';

import { getMemId, getCart } from '../../utils';
// TODO: 資料庫拿資料
import config from '../../Config';
import { set } from 'date-fns';
import { fi } from 'date-fns/locale';

function StepTwo(props) {
  // NAV BAR 使用 蓋版漢堡
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構

  // 套餐光箱
  const [map, setMap] = useState(false);
  const handleClose = () => setMap(false);
  const handleShow = () => setMap(true);
  // 回上一頁 按鈕
  let history = useHistory();
  // 用於光箱傳資料的方式
  const inputStoreId = useRef(null);
  // 去取得光箱內地圖的store_id 要往下傳4 層
  const [getStoreId, setGetStoreId] = useState('');

  // console.log(inputStoreId.current);
  // console.log('jklkjlkjlkj', inputStoreId.current?.innerText);
  const inputEl = useRef(null);
  // console.log('12332112324', inputEl.current?.innerText);

  // console.log(inputEl);
  // const [storeID, setStoreID] = useState('');

  const [sum, setSum] = useState([]); // 畫面右側小計 狀態
  const [info, setInfo] = useState([]); // input 欄位預設值 mem_name mem_mobile
  const [itemInfo, setItemInfo] = useState({}); //交易明細 狀態
  const [mem_id, setMem_id] = useState(0);
  const [cart_id, setCart_id] = useState(0);
  const [storeName, setStoreName] = useState('');
  const [fields, setFields] = useState({
    buyer: '',
    buyer_mobile: '',
    picker: '',
    order_notes: '' || null,
    cart_store_id: '',
  });

  // -----先取得 畫面右側小計
  //  共同取 mem_id & cart_id 的地方
  useEffect(() => {
    const getInit = async () => {
      const Mid = getMemId();
      const Cid = await getCart();
      setMem_id(+Mid);
      setCart_id(+Cid.cartid);
    };
    getInit();
    // console.log('info', info);
  }, []);

  // 取得store id 後 拷貝陣列並把值塞進去 fields
  useEffect(() => {
    // if (getStoreId > 0) {
    setFields({
      ...fields,
      cart_store_id: getStoreId,
    });
    // } else {
    //   alert('請選擇取貨門市');
    // }
  }, [getStoreId]);

  useEffect(() => {
    const getSum = async () => {
      const res = await fetch(config.GET_CART_SUM + `${mem_id}/${cart_id}`);
      const obj = await res.json();
      // console.log('obj:', obj);
      setSum(obj.data);
    };

    // ----先取得 表單資料name mobile
    const getInfo = async () => {
      const res = await fetch(config.GET_CART_INFO + `${mem_id}/${cart_id}`);
      // console.log('res', res);
      const obj = await res.json();
      console.log('obj:', obj);
      setInfo(obj.result);
    };

    getSum();
    getInfo();
  }, [mem_id, cart_id]);
  // console.log('sum', sum);
  useEffect(() => {
    // console.log(sum);
  }, [sum]);

  // Input State 要填寫的資料欄位

  // Error Message State
  const [fieldsError, setFieldsError] = useState({
    buyer: '',
    buyer_mobile: '',
    picker: '',
    cart_store_id: '',
  });

  // 處理欄位改變
  const handleFieldChange = e => {
    console.log(e.target.name);
    const newData = {
      ...fields,
      [e.target.name]: e.target.value,
    };
    setFields(newData);
  };

  // 驗證並處理欄位錯誤訊息
  const handleValidation = () => {
    let formIsValid = true;
    let errorMsg = {};
    // 提交前作驗証，並自定義fieldsError訊息
    console.log('fields:', fields);

    // 格式規則
    const buyer_re = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const mobile_re = /^09\d{2}-?\d{3}-?\d{3}$/;

    // buyer
    if (!fields.buyer) {
      formIsValid = false;
      errorMsg.buyer = '姓名欄位不可為空';
    } else if (fields.buyer && buyer_re.test(fields.buyer)) {
      formIsValid = false;
      errorMsg.buyer = '姓名欄位不可包含特殊符號';
    }

    // buyer_mobile
    if (!fields.buyer_mobile) {
      formIsValid = false;
      errorMsg.buyer_mobile = '連絡電話不可為空';
    } else if (fields.buyer_mobile && !mobile_re.test(fields.buyer_mobile)) {
      formIsValid = false;
      errorMsg.buyer_mobile = '連絡電話格式不正確';
    }

    if (!fields.cart_store_id) {
      formIsValid = false;
      errorMsg.cart_store_id = '取貨門市不可為空';
    }
    //TODO: 重新點要把提示訊息刪除

    setFieldsError(errorMsg);
    return formIsValid;
  };

  // 當欄位有更動時，處理清空錯誤訊息
  const handleChange = e => {
    const updatedFieldError = {
      ...fieldsError,
      [e.target.name]: '',
    };
    setFieldsError(updatedFieldError);
  };

  // 提交
  const handleSubmit = e => {
    e.preventDefault();

    // setFields(info);
    console.log('info', info);
    console.log('fields', fields);
    if (handleValidation()) {
      // fetch
      const r = fetch(config.POST_CART_INFO + `${mem_id}/${cart_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      })
        .then(r => r.json())
        .then(obj => {
          console.log(obj);
          if (obj.success) {
            console.log(obj.success);
            // 有成功更新頁面才轉向
            history.push('/cart/stepthree');
          } else {
            alert('資料錯誤請重新輸入！');
          }
        });
    } else {
      console.log('form has errors.');
    }
  };
  //取得資料後 把欄位資料狀態設定回去
  useEffect(() => {
    console.log(info);
    setFields({
      ...fields,
      buyer: info[0]?.mem_name,
      buyer_mobile: info[0]?.mem_mobile,
      picker: info[0]?.mem_name,
      // order_notes: '',
      cart_store_id: getStoreId,
    });
    // setFields({ ...fields, cart_store_id: getStoreId });
    console.log('222', fields);
  }, [info]);

  // console.log(fields);

  return (
    <>
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <div className="cart-asideLeft-nav d-lg-block d-none ch-title-16 ">
            <div className="cart-asL-nav-item">
              <div className="cart-asL-nav-text" style={{ color: '#212121' }}>
                我的購物清單
              </div>
              <div className="cart-asL-nav-square"></div>
            </div>

            <div className="cart-asL-nav-item">
              <div
                className="cart-asL-nav-text"
                style={{
                  color: '#212121',
                }}
              >
                填寫訂購資訊
              </div>
              <div className="cart-asL-nav-square"></div>
            </div>

            <div className="cart-asL-nav-item">
              <div className=" cart-asL-nav-text" style={{ color: '#C4C4C4' }}>
                輸入信用卡資料
              </div>
              <div className="cart-asL-nav-square-white"></div>
            </div>

            <div className="cart-asL-nav-item">
              <div className=" cart-asL-nav-text" style={{ color: '#C4C4C4' }}>
                完成訂單
              </div>
              <div className="cart-asL-nav-square-white"></div>
            </div>
          </div>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'Shipping Info'} setNavIsOpen={setNavIsOpen} />
            {/* <div className="row"></div> */}
            <div className="mycontainer cart min-hi">
              <div className="breadcart">
                <p className="en-title-14-10">
                  <Link
                    to={'/'}
                    style={{ textDecoration: 'none', color: '#575757' }}
                  >
                    HOME/
                  </Link>
                  <Link
                    to={'/cart/stepone'}
                    style={{ textDecoration: 'none', color: '#b03342' }}
                  >
                    CART
                  </Link>
                </p>
              </div>
              {/* 訂單資訊 可以摺疊*/}
              <CartDetail cart_id={cart_id} mem_id={mem_id} />
              <form
                // onSubmit={handleSubmit}
                // onInvalid={handleValid}
                onChange={handleChange}
              >
                <div className="row mt-5">
                  <div className="col-md-12 col-24">
                    <div className="shipping-info ch-cont-14 ">
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
                          className="form-control"
                          id="buyer"
                          name="buyer"
                          placeholder="訂購人"
                          required
                          // value={fields.buyer}

                          // TODO: v 改 info
                          // ref={inputEl}
                          // defaultValue={info[0] ? info[0].mem_name : ''}
                          defaultValue={info[0] ? info[0].mem_name : ''}
                          onChange={handleFieldChange}
                        />

                        {fieldsError.buyer !== '' && (
                          <div className="error">{fieldsError.buyer}</div>
                        )}
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
                          id="buyer_mobile"
                          name="buyer_mobile"
                          // placeholder="09XX-XXX-XXX"
                          data-pattern="09\d{2}-?\d{3}-?\d{3}"
                          onChange={handleFieldChange}
                          required
                          // ref={inputEl}
                          defaultValue={info[0] ? info[0].mem_mobile : ''}
                        />
                        {fieldsError.buyer_mobile !== '' && (
                          <div className="error">
                            {fieldsError.buyer_mobile}
                          </div>
                        )}
                      </div>
                      <div className="my-4">
                        <label className="form-label ">取貨人姓名</label>
                        <input
                          type="text"
                          className="form-control "
                          name="picker"
                          id="picker"
                          placeholder="取貨人"
                          defaultValue={info[0] ? info[0].mem_name : ''}
                          onChange={handleFieldChange}
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
                          // maxRows="5"
                          id="order_notes"
                          name="order_notes"
                          onChange={handleFieldChange}
                        ></textarea>
                      </div>
                      <div className="my-4 mx-5">
                        {/* TODO: map 光箱 */}
                        {/* <input
                            type="text"
                            className="form-control "
                            name="cart_store_id"
                            id="cart_store_id"
                            value={getStoreId}
                            required
                            // hidden
                            // onChange={e => {
                            //   setFields({
                            //     ...fields,
                            //     cart_store_id: e.target.value,
                            //   });
                            // }}
                          /> */}
                        <label type="text" className="form-label ">
                          確認選擇的門市：
                        </label>
                        <label
                          type="text"
                          className="form-label "
                          name="cart_store_id"
                          id="cart_store_id"
                          value={getStoreId}
                        >
                          {getStoreId + ' ' + storeName}
                        </label>
                        {fieldsError.cart_store_id !== '' && (
                          <div className="error">
                            {fieldsError.cart_store_id}
                          </div>
                        )}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary btn-block px-5 my-5 ch-title-14"
                          onClick={handleShow}
                        >
                          選擇取貨門市
                        </button>
                        {
                          <Modal
                            show={map}
                            onHide={handleClose}
                            setGetStoreId={setGetStoreId}
                            size="lg"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title className="en-cont-30 m-3">
                                選擇取貨門市
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ margin: '0 3%' }}>
                              <>
                                <StepMap
                                  ref={inputStoreId}
                                  getStoreId={getStoreId} //設定storeid
                                  setGetStoreId={setGetStoreId}
                                  storeName={storeName}
                                  setStoreName={setStoreName}
                                />
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
                                onClick={() => {
                                  // setGetStoreId(inputStoreId.current?.value);
                                  // { TODO: 門市換了不會回寫}
                                  // setGetStoreId = { setGetStoreId };

                                  handleClose();
                                }}
                                // type="submit"
                              >
                                確認門市
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        }
                      </div>
                    </div>
                  </div>
                  {/* 右側 統計 summary */}
                  <CartSum
                    sum={sum}
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
                      className="btn btn-sm btn-outline-primary primeal-btn-outline-sm  mx-4 mx-md-3"
                      onClick={() => {
                        // 轉至上一頁
                        history.goBack();
                      }}
                    >
                      上一步
                    </button>
                    {/* <Link to="./StepThree"> */}
                    <button
                      type="submit"
                      className="btn btn-sm btn-primary primeal-btn-sm mx-4 mx-md-3"
                      onClick={handleSubmit}
                    >
                      下一步
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default StepTwo;
