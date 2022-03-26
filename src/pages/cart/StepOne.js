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
  const [list, setList] = useState({}); //總資料
  const [prodCount, setProdCount] = useState(0); //商品總數
  const [printTime, setPrintTime] = useState(0); //商品總印製時間(秒)
  const [amount, setAmount] = useState(0); //商品總價
  const [deleteProd, setDeleteProd] = useState([]); //被刪除的商品
  //const {cs = [], cm = [], set = []} = list;

  // const getList = async () => {
  //   console.log('hi');
  //   const res = await fetch(config.GET_CART + `${mem_id}`);
  //   const obj = await res.json();
  //   console.log('obj:', obj);
  //   // console.log('cm:', obj.data.cm);
  //   // console.log('cs:', obj.data.cs);
  //   // console.log('set:', obj.data.set);
  //   setList(obj.data);
  // };
  // console.log(list.cm);
  // useEffect(() => {
  //   getList();
  //   // console.log(getList());
  // }, []);

  useEffect(() => {
    const getList = async () => {
      const memid = localStorage.getItem('mem_id');
      if (memid !== null) {
        //判斷會員有無登入
        const res = await fetch(config.GET_CART_ORDER + `${memid}`);
        const obj = await res.json();
        if (obj.success) {
          //購物車有商品才繼續做
          setList(obj.data);
        } else {
          //購物車無商品則導頁
          history.push('/cart/cartlist');
        }
      } else {
        //會員未登入則導頁
        history.push('/cart/cartlist');
      }
    };
    getList();
  }, []);

  useEffect(() => {
    let count = 0;
    let time = 0;
    let total = 0;
    list.cs?.forEach(d => {
      console.log(d.orders_print_time);
      count += d.orders_amount;
      time += d.orders_print_time * d.orders_amount;
      total += d.orders_value * d.orders_amount;
    });
    list.cm?.forEach(d => {
      console.log(d.orders_print_time);
      count += d.orders_amount;
      time += d.orders_print_time * d.orders_amount;
      total += d.orders_value * d.orders_amount;
    });
    list.set?.forEach(d => {
      console.log(d.orders_print_time);
      count += d.orders_amount;
      time += d.orders_print_time * d.orders_amount;
      total += d.orders_value * d.orders_amount;
    });

    setProdCount(count);
    setPrintTime(time);
    setAmount(total);
  }, [list]);

  //每當有商品被刪除時，就來判斷購物車是否還有商品，都沒有了就導頁
  useEffect(() => {
    const getList = async () => {
      const memid = localStorage.getItem('mem_id');
      if (memid !== null) {
        //判斷會員有無登入
        const res = await fetch(config.GET_CART_ORDER + `${memid}`);
        const obj = await res.json();
        if (obj.success) {
          //刪除商品成功後購物車仍有商品，則不做任何事
        } else {
          //購物車無商品則導頁
          history.push('/cart/cartlist');
        }
      } else {
        //會員未登入則導頁
        history.push('/cart/cartlist');
      }
    };
    getList();
  }, [deleteProd]);

  // useEffect(() => {
  //   //console.log(list);
  //   // console.log('cs', list.cs?.length);
  //   // console.log(' cs', list.cs?.length);
  //   // console.log(' cm', list.cm?.length);
  //   // console.log(' set', list.set?.length);
  //   // console.log(
  //   //   ' plus!!!',
  //   //   list.cs?.length + list.cm?.length + list.set?.length
  //   // );
  // }, [list]);
  // console.log('length cs', list.cs?.length);
  // console.log('length cm', list.cm?.length);
  // console.log('length set', list.set?.length);
  // console.log('plus');

  // 處理項目刪除用
  // const handleDelete = id => {
  //   //1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
  //   let newData = [...data];
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

  // console.log('csOrder', csOrder);
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

            <ProdItem
              cs={list.cs}
              cm={list.cm}
              set={list.set}
              setList={setList}
              list={list}
              setDeleteProd={setDeleteProd}
              deleteProd={deleteProd}
            />

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
                        總計{prodCount}項
                      </div>
                    </div>
                    <div className="row print-time my-4">
                      <div className="col-12 col-md-12">印製時間</div>
                      <div className="col-12 col-md-8 text-right">
                        {printTime}秒
                      </div>
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
                        NT {amount}
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
