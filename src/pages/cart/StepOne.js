//cart/StepOne.js

import { Link, useHistory } from 'react-router-dom';
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import ProdItem from '././components/ProdItem';

// TODO: 資料庫拿資料
// member id =1 鮮血死 測試用
import config from '../../Config';
import { useState, useEffect } from 'react';

// import CartOne from './../data/cartone.json';

function StepOne(props) {
  // counts -> 陣列
  // const { productsInOrder, setProductsInOrder } = props;
  // 回上一頁 按鈕
  let history = useHistory();
  const [list, setList] = useState({});
  const mem_id = 1;

  const getList = async () => {
    console.log('hi');
    const res = await fetch(config.GET_CART + `${mem_id}`);
    const obj = await res.json();
    console.log('obj:', obj);
    // console.log('cm:', obj.data.cm);
    // console.log('cs:', obj.data.cs);
    // console.log('set:', obj.data.set);
    setList(obj.data);
  };
  console.log(list.cm);
  useEffect(() => {
    getList();
    // console.log(getList());
  }, []);

  // // 處理項目刪除用
  // const handleDelete = id => {
  //   //1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
  //   let newProductsInOrder = [...productsInOrder];
  //   //2. 在拷貝出的新陣列(物件)上運算或處理
  //   newProductsInOrder = newProductsInOrder.filter((v, i) => {
  //     return v.id !== id;
  //   });

  //   //3. 設定回原本的狀態
  //   setProductsInOrder(newProductsInOrder);
  // };

  // const [productsInOrder, setProductsInOrder] = useState(list);
  // console.log('list', list);
  // console.log('productsInOrder', productsInOrder);

  const [csOrder, setCsOrder] = useState(list.cs);
  const [cmOrder, setCmOrder] = useState(list.cm);
  const [setOrder, setSetOrder] = useState(list.set);

  console.log('csOrder', csOrder);
  // Summary
  // 計算目前所有的商品數量
  // const productCount = () => {
  //   let totalCount = 0;

  //   for (let i = 0; i < productsInOrder.length; i++) {
  //     totalCount += productsInOrder[i].count;
  //   }
  //   return totalCount;
  // };

  // // 計算目前所有的商品總價
  // const total = () => {
  //   let sum = 0;

  //   for (let i = 0; i < productsInOrder.length; i++) {
  //     sum += productsInOrder[i].count * productsInOrder[i].price;
  //   }

  //   return sum;
  // };

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Shopping List'} />
          <div className="mycontainer cart min-hi" style={{ padding: '0' }}>
            <div className="bread">HOME/CART</div>
            <div className="list-title ch-cont-14">
              <div className="row  my-2 d-flex align-items-center">
                <div className="col-md-24 d-none d-md-flex">
                  <div className="col-md-2 col-3 align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      {/* <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      ></label> */}
                    </div>
                  </div>

                  <div className="col-md-4 pr-3 align-items-center">
                    商品圖片
                  </div>
                  <div className="d-flex flex-md-row col-md-10 col-9 justify-content-between flex-grow-1 align-items-center">
                    <div className="col-md-8  align-items-center">商品名稱</div>
                    <div className="col-md-8 align-items-center">單價</div>
                    <div className="col-md-8  align-items-center">數量</div>
                  </div>
                  <div className="col-md-2 align-items-center">印製時間</div>
                  <div className="col-md-2 align-items-center">小計</div>
                  <div className="col-md-4 col-6 d-flex justify-content-around align-items-center">
                    <div className="col text-center">刪除</div>
                    <div className="col text-center">其他</div>
                  </div>
                </div>
              </div>
            </div>

            <ProdItem cs={list.cs} cm={list.cm} set={list.set} />

            {/* TODO: SET info 光箱 */}
            <div className="list-check ch-cont-14" style={{ padding: '30px' }}>
              <div className="row ">
                {/* <div className="col-24 "> */}
                <div className="col-md-5 row"></div>
                <div className="col-md-19 px-md-5 ">
                  <div className="summary ">
                    <div className="row print-time my-4">
                      <div className="col-12 col-md-12 ">商品數量</div>
                      <div className="col-12 col-md-8 text-right">
                        總計5項
                      </div>
                    </div>
                    <div className="row print-time my-4">
                      <div className="col-12 col-md-12">印製時間</div>
                      <div className="col-12 col-md-8 text-right">35分鐘</div>
                    </div>
                    <div className="row discount my-4">
                      <div className="col-12 col-md-12">折抵金額</div>
                      {/* <div className="col-md-4"></div> */}
                      <div className="col-12 col-md-8">
                        <div className=" d-flex justify-content-end">
                          <label className="form-label"></label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="NT$"
                            // defaultValue={0}
                            min={0}
                          />
                        </div>
                      </div>

                      <small className="col-24 col-md-20 text-right ">
                        會員點數15,000點 可折抵NT$15元
                      </small>
                    </div>
                    <div className="row price my-4">
                      <div className="col-12 col-md-12">訂單金額</div>
                      <div className="col-12 col-md-8 text-right ch-cont-24">
                        NT 3000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 下一步 */}
              <div className="row  d-flex justify-content-center justify-content-md-end">
                <div className="  next-btn d-flex my-5 ">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary primeal-btn-outline-sm  mx-5 mx-md-3"
                    onClick={() => {
                      // 轉至上一頁
                      history.goBack();
                    }}
                  >
                    繼續購物
                  </button>
                  <Link to="./StepTwo">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary primeal-btn-sm mx-5 mx-md-3"
                    >
                      前往結帳
                    </button>
                  </Link>
                  {/* <a
                    type="button"
                    className="btn btn-sm btn-primary primeal-btn-sm mx-5 mx-md-3"
                    href="./StepTwo"
                  >
                    前往結帳
                  </a> */}
                </div>
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

export default StepOne;
