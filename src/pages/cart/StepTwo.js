//cart/StepTwo.js

import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link, useHistory } from 'react-router-dom';
import CartSum from './CartSum';
import CartDetail from '././components/CartDetial';

import React, { useState, useEffect } from 'react';
import StepMap from '././components/StepMap';
import { Button, Modal } from 'react-bootstrap';

// TODO: 資料庫拿資料
import config from '../../Config';

function StepTwo() {
  // 套餐光箱
  const [map, setMap] = useState(false);
  const handleClose = () => setMap(false);
  const handleShow = () => setMap(true);
  // 回上一頁 按鈕
  let history = useHistory();

  const [getStoreId, setGetStoreId] = useState('');

  // 畫面右側小計
  const [sum, setSum] = useState([]);
  // TODO:  member id =1 鮮血死 測試用
  const mem_id = 1;
  // const mem_id = getMemId();
  // console.log('mem_id:', mem_id);

  // const { id } = useParams();
  // console.log('id:', id);
  useEffect(() => {
    const getSum = async () => {
      const res = await fetch(config.GET_CART_SUM + `${mem_id}`);
      const obj = await res.json();
      // console.log('obj:', obj);
      setSum(obj.data);
    };
    getSum();
  }, []);
  // console.log('sum', sum);
  useEffect(() => {
    // console.log(sum);
  }, [sum]);

  // ------
  const cart_id = 1;
  // Input State 要填寫的資料欄位
  const [fields, setFields] = useState({
    buyer: '',
    buyer_mobile: '',
    picker: '',
    order_notes: '',
    store_id: '1',
  });

  // Error Message State
  const [fieldsError, setFieldsError] = useState({
    buyer: '',
    buyer_mobile: '',
    picker: '',
  });

  // 處理欄位改變
  const handleFieldChange = e => {
    const newData = { ...fields, [e.target.name]: e.target.value };
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

  // 清除重新填寫
  // const clearFormHandler = () => {
  //   setFields({
  //     name: '',
  //     mobile: '',
  //     email: '',
  //     number: '',
  //     comment: '',
  //   });
  // };

  // 提交
  const handleSubmit = e => {
    e.preventDefault();

    if (handleValidation()) {
      //   console.log('form submitted.');

      // get form data
      const formData = new FormData(e.target);
      const dataObj = {};
      for (let i of formData) {
        dataObj[i[0]] = i[1];
      }
      dataObj.mem_id = mem_id;
      console.log('dataObj', { dataObj });

      // fetch
      const r = fetch(config.POST_CART_INFO, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObj),
      })
        .then(r => r.json())
        .then(obj => {
          console.log(obj);
          if (obj.success) {
            console.log(obj.success);
          }
        });
    } else {
      console.log('form has errors.');
    }
  };

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
            <form
              onSubmit={handleSubmit}
              // onInvalid={handleValid}
              onChange={handleChange}
              // className="needs-validation"
              // noValidate
            >
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
                        className="form-control"
                        id="buyer"
                        name="buyer"
                        placeholder="訂購人"
                        required
                        value={fields.buyer}
                        onChange={handleFieldChange}
                      />
                      {/* TODO: check name??buyer */}
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
                        placeholder="09XX-XXX-XXX"
                        data-pattern="09\d{2}-?\d{3}-?\d{3}"
                        onChange={handleFieldChange}
                        required
                      />
                      {fieldsError.buyer_mobile !== '' && (
                        <div className="error">{fieldsError.buyer_mobile}</div>
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
                      <input
                        type="text"
                        className="form-control "
                        name="store_id"
                        id="store_id"
                        value={getStoreId}
                        // hidden
                        setGetStoreId={setGetStoreId}
                      />
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
                              type="submit"
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
                    className="btn btn-sm btn-outline-primary primeal-btn-outline-sm  mx-5 mx-md-3"
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
                    className="btn btn-sm btn-primary primeal-btn-sm mx-5 mx-md-3"
                  >
                    下一步
                  </button>
                  {/* </Link> */}
                  {/* <a
                  type="button"
                  className="btn btn-sm btn-primary primeal-btn-sm mx-5 mx-md-3"
                  href="./StepThree"
                >
                  下一步
                </a> */}
                </div>
              </div>
            </form>
          </div>

          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default StepTwo;
