//cart/StepOne.js

import { Link, useHistory } from 'react-router-dom';
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import ProdItem from '././components/ProdItem';

// TODO: 資料庫拿資料
// member id =1 鮮血死 測試用
import config from '../../Config';
import { useState, useEffect } from 'react';
import { getCart } from '../../utils';

function StepOne(props) {
  // 回上一頁 按鈕
  let history = useHistory();
  const [list, setList] = useState({}); //總資料
  const [prodCount, setProdCount] = useState(0); //商品總數
  const [printTime, setPrintTime] = useState(0); //商品總印製時間(秒)
  const [amount, setAmount] = useState(0); //商品總價
  const [deleteProd, setDeleteProd] = useState([]); //被刪除的商品
  //const {cs = [], cm = [], set = []} = list;
  // const [csOrder, setCsOrder] = useState(list.cs);
  // const [cmOrder, setCmOrder] = useState(list.cm);
  // const [setOrder, setSetOrder] = useState(list.set);
  const [inputCredit, setInputCredit] = useState(0); //自行輸入的折扣金額
  const [cart_id, setCart_id] = useState(0); // 取得cart id
  const [discountTotal, setDiscountTotal] = useState(0); // 會員可以折抵積分提示欄位

  // 接資料要post 到DB的
  const [inputSum, setInputSum] = useState({
    cart_value: amount,
    cart_credit: '' || null,
    cart_total_print_time: printTime,
  });
  console.log('34 inputSum', inputSum);
  // 取得cart_id
  useEffect(() => {
    const getInit = async () => {
      const Cid = await getCart();
      setCart_id(+Cid.cartid);
    };
    getInit();
  }, []);

  // 判斷有沒有購物車內容
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
          setInputSum({
            cart_value: amount,
            cart_credit: inputCredit,
            cart_total_print_time: printTime,
          });
          console.log('60', inputSum);
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

    // // 取得折扣金額
    // const getDiscount = async () => {
    //   const memid = localStorage.getItem('mem_id');
    //   if (memid !== null) {
    //     //判斷會員有無登入
    //     const res = await fetch(config.GET_CART_DISCOUNT + `${memid}`);
    //     const obj = await res.json();
    //     if (obj.success) {
    //       //購物車有商品才繼續做
    //       setDiscountTotal(obj.result);
    //       console.log(discountTotal);
    //     } else {
    //       //購物車無商品則導頁
    //       history.push('/cart/cartlist');
    //     }
    //   } else {
    //     //會員未登入則導頁
    //     history.push('/cart/cartlist');
    //   }
    // };
    // getDiscount();
  }, []);

  // 取得折扣金額
  // useEffect(() => {
  //   const getDiscount = async () => {
  //     const memid = localStorage.getItem('mem_id');
  //     if (memid !== null) {
  //       //判斷會員有無登入
  //       const res = await fetch(config.GET_CART_DISCOUNT + `${memid}`);
  //       const obj = await res.json();
  //       if (obj.success) {
  //         //購物車有商品才繼續做
  //         setDiscountTotal(obj.result);
  //       } else {
  //         //購物車無商品則導頁
  //         history.push('/cart/cartlist');
  //       }
  //     } else {
  //       //會員未登入則導頁
  //       history.push('/cart/cartlist');
  //     }
  //   };
  //   getDiscount();
  // }, []);

  // 有購物車品項後去計算 商品總價 總印製時間 商品數量
  useEffect(() => {
    let count = 0;
    let time = 0;
    let total = 0;
    list.cs?.forEach(d => {
      console.log('71 cs _ptime', d.orders_print_time);
      count += d.orders_amount;
      time += d.orders_print_time * d.orders_amount;
      total += d.orders_value * d.orders_amount;
    });
    list.cm?.forEach(d => {
      console.log('77 cm _ptime', d.orders_print_time);
      count += d.orders_amount;
      time += d.orders_print_time * d.orders_amount;
      total += d.orders_value * d.orders_amount;
    });
    list.set?.forEach(d => {
      console.log('83 set _ptime', d.orders_print_time);
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
          setInputSum({
            cart_value: amount,
            cart_credit: inputCredit,
            cart_total_print_time: printTime,
          });
          console.log('110', inputSum);
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

  // 更改會員折扣後 才可以取得 inputSum
  const handleChange = e => {
    console.log('creadit', e.target.value);

    console.log('123', inputSum);
    const newData = {
      cart_value: amount,
      cart_credit: +e.target.value,
      cart_total_print_time: printTime,
    };
    setInputSum(newData);
    // console.log('137', inputSum);
  };
  // // 取得inputCredit 後 拷貝陣列並把值塞進去 inputSum
  // useEffect(() => {
  //   setInputSum({
  //     ...inputSum,
  //     cart_credit: inputCredit,
  //   });

  // }, [inputCredit]);

  // 提交
  const handleSubmit = e => {
    e.preventDefault();
    const memid = localStorage.getItem('mem_id');

    setInputSum(inputSum);
    console.log('summaryone');
    console.log('162', inputSum);

    //  POST 要傳的直設定回去

    // if (handleValidation()) {
    // fetch
    const r = fetch(config.POST_CART_SUMMARY + `${memid}/${cart_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputSum),
    })
      .then(r => r.json())
      .then(obj => {
        console.log(obj);
        if (obj.success) {
          console.log(obj.success);
          // 有成功更新頁面才轉向
          history.push('/cart/steptwo');
        } else {
          alert('資料錯誤請重新輸入！');
        }
      });
    // } else {
    //   console.log('form has errors.');
    // }
  };

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
                    {/* <div className="form-check">
                      <input
                        className="form-check-input "
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
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <small className="col-24 col-md-20 text-right ">
                        {/* 會員點數15,000點 可折抵NT$15元 */}
                        會員點數{discountTotal}點 可折抵NT$15元
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
                  {/* <Link to="./StepTwo"> */}
                  <button
                    type="button"
                    className="btn btn-sm btn-primary primeal-btn-sm mx-5 mx-md-3"
                    onClick={handleSubmit}
                  >
                    前往結帳
                  </button>
                  {/* </Link> */}
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
