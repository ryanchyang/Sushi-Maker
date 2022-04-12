//cart/StepOne.js
import { getCartCount } from '../../utils';
import { Link, useHistory } from 'react-router-dom';
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
// import ProdItem from '././components/ProdItem';
import NavPage from '../layout/components/NavPage';
import config from '../../Config';
import { useState, useEffect } from 'react';
import { getCart } from '../../utils';
import { Button, Modal } from 'react-bootstrap';

function StepOne(props) {
  // NAV BAR 使用 蓋版漢堡
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構

  const showSetImg = { display: 'block' };
  const hiddenSetImg = { display: 'none' };

  // 回上一頁 按鈕
  let history = useHistory();
  const [list, setList] = useState({}); //總資料
  const [prodCount, setProdCount] = useState(0); //商品總數
  const [printTime, setPrintTime] = useState(0); //商品總印製時間(秒)
  const [amount, setAmount] = useState(0); //商品總價
  const [deleteProd, setDeleteProd] = useState([]); //被刪除的商品
  const [inputCredit, setInputCredit] = useState(0); //自行輸入的折扣金額
  const [cart_id, setCart_id] = useState(0); // 取得cart id
  const [discountTotal, setDiscountTotal] = useState([]); // 會員可以折抵積分提示欄位
  const [changeCartCount, setChangeCartCount] = useState(0); // 要知道什麼時候更改購物車的數量
  const [selectImg, setSelectImg] = useState(0); //被選到的便當 右邊清單的便當照片
  const [selectId, setSelectId] = useState(0); //被選到的便當的id
  const [itemIndex, setItemIndex] = useState(-1);
  // console.log('36', selectImg);

  // 接資料要post 到DB的
  const [inputSum, setInputSum] = useState({
    cart_value: amount,
    cart_credit: '' || 0,
    cart_total_print_time: printTime,
  });
  // console.log('34 inputSum', inputSum);

  // 判斷有沒有購物車內容
  useEffect(() => {
    // 取得cart_id
    const getInit = async () => {
      const Cid = await getCart();
      setCart_id(+Cid.cartid);
    };
    getInit();

    const getList = async () => {
      const memid = localStorage.getItem('mem_id');
      //判斷會員有無登入 有登入才去找 get_CART_ORDER
      if (memid !== null) {
        const res = await fetch(config.GET_CART_ORDER + `${memid}`);
        const obj = await res.json();
        if (obj.success) {
          //購物車有商品才繼續做
          //初始化購物車訂單資料
          setList(obj.data);
          setInputSum({
            cart_value: amount,
            cart_credit: inputCredit,
            cart_total_print_time: printTime,
          });
          console.log('60', inputSum);

          // 第一步 撈資料時就先計算總金額 總印製時間 總商品數量
          let count = 0;
          let time = 0;
          let total = 0;
          obj.data.cs.forEach(d => {
            count += d.orders_amount;
            time += d.orders_print_time * d.orders_amount;
            total += d.orders_value * d.orders_amount;
          });
          obj.data.cm.forEach(d => {
            count += d.orders_amount;
            time += d.orders_print_time * d.orders_amount;
            total += d.orders_value * d.orders_amount;
          });
          obj.data.set.forEach(d => {
            count += d.orders_amount;
            time += d.orders_print_time * d.orders_amount;
            total += d.orders_value * d.orders_amount;
          });

          //初始化總計
          setProdCount(count);
          setPrintTime(time);
          setAmount(total);
          setSelectId(
            `/img/setorder/bento_img/` +
              obj.data.set[0].set_info_array[0]?.bento_id +
              `.png`
          );
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

    // 取得可以折抵的折扣金額
    const getDiscount = async () => {
      const memid = localStorage.getItem('mem_id');
      const res = await fetch(config.GET_CART_DISCOUNT + `${memid}`);
      const obj = await res.json();
      console.log('getDiscount obj:', obj);

      // console.log('getDiscount obj  ARRRR:', obj.result[0].mem_credit);
      setDiscountTotal(obj.result[0].mem_credit);
      // console.log(discountTotal);
    };
    getDiscount();
  }, []);

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
          // console.log('110', inputSum);
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

  // 當有變數量或金額時 設定回去
  useEffect(() => {
    setInputSum({
      ...inputSum,
      cart_value: amount,
      cart_total_print_time: printTime,
    });
  }, [amount, printTime]);

  // 有購物車品項後去計算 商品總價 總印製時間 商品數量
  useEffect(() => {
    let count = 0;
    let time = 0;
    let total = 0;
    list.cs?.forEach(d => {
      // console.log('71 cs _ptime', d.orders_print_time);
      count += d.orders_amount;
      time += d.orders_print_time * d.orders_amount;
      total += d.orders_value * d.orders_amount;
    });
    list.cm?.forEach(d => {
      // console.log('77 cm _ptime', d.orders_print_time);
      count += d.orders_amount;
      time += d.orders_print_time * d.orders_amount;
      total += d.orders_value * d.orders_amount;
    });
    list.set?.forEach(d => {
      // console.log('83 set _ptime', d.orders_print_time);
      count += d.orders_amount;
      time += d.orders_print_time * d.orders_amount;
      total += d.orders_value * d.orders_amount;
    });

    setProdCount(count);
    setPrintTime(time);
    setAmount(total);
    setInputSum(inputSum); // 把下面的總計數量設定回去
  }, [list]);

  // 提交
  const handleSubmit = e => {
    e.preventDefault();
    const memid = localStorage.getItem('mem_id'); //取得 mem id 從localstorage
    setInputSum(inputSum); // 把下面的總計數量設定回去
    // console.log('summaryone');

    const inputText = {
      ...inputSum,

      prod_count: list,
    };
    console.log('205inputText', inputText);
    //  POST 要傳的直設定回去

    console.log(JSON.stringify(inputText));
    // fetch
    const r = fetch(config.POST_CART_SUMMARY + `${memid}/${cart_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputText),
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
  };
  //改變cm數量輸入欄
  const changeCMCount = (count, pid) => {
    // 先拷貝一層
    const newData = [...list.cm];
    // 找出要的/點到的pid 跟 map 出來的484 同一個
    const data = newData.find(cm => cm.product_id == pid);
    // 找出 點到的product_id 是在 陣列中的第幾個 (在 cm 的陣列中 可能會有多個商品)
    const index = newData.findIndex(cm => cm.product_id == pid);
    // newData 用splice 去分割 抓到是第幾個index 淺層拷貝並覆寫
    newData.splice(index, 1, { ...data, orders_amount: +count });
    setList({ ...list, cm: newData });
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
    //先拷貝一個陣列
    const newData = [...list.cm];
    // 用陣列做map
    const newData2 = newData.map(v => {
      // 當pid == map 出來的 product id 時
      if (pid === v.product_id) {
        //當 商品數量選購數量大於1時
        if (v.orders_amount > 1) {
          //回傳 -1
          return { ...v, orders_amount: +v.orders_amount - 1 };
        }
      }
      //
      return { ...v };
    });

    setList({ ...list, cm: newData2 });
  };

  //增加cm數量(+1)
  const addCMCount = pid => {
    const newData = [...list.cm];
    const data = newData.find(cm => cm.product_id == pid);
    const index = newData.findIndex(cm => cm.product_id == pid);
    newData.splice(index, 1, {
      ...data,
      orders_amount: +data.orders_amount + 1,
    });
    setList({ ...list, cm: newData });
  };

  //改變cs數量輸入欄
  const changeCSCount = (count, pid) => {
    const newData = [...list.cs];
    const data = newData.find(cs => cs.product_id == pid);
    const index = newData.findIndex(cs => cs.product_id == pid);
    newData.splice(index, 1, { ...data, orders_amount: +count });
    setList({ ...list, cs: newData });
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

    const newData = [...list.cs];
    const newData2 = newData.map(v => {
      if (pid === v.product_id) {
        if (v.orders_amount > 1) {
          return { ...v, orders_amount: +v.orders_amount - 1 };
        }
      }
      return { ...v };
    });

    setList({ ...list, cs: newData2 });
  };

  //增加cs數量(+1)
  const addCSCount = pid => {
    const newData = [...list.cs];
    const data = newData.find(cs => cs.product_id == pid);
    const index = newData.findIndex(cs => cs.product_id == pid);
    newData.splice(index, 1, {
      ...data,
      orders_amount: +data.orders_amount + 1,
    });
    console.log(newData);
    setList({ ...list, cs: newData });
  };

  //改變set數量輸入欄
  const changeSETCount = (count, pid) => {
    const newData = [...list.set];
    const data = newData.find(set => set.product_id == pid);
    const index = newData.findIndex(set => set.product_id == pid);
    newData.splice(index, 1, { ...data, orders_amount: +count });
    setList({ ...list, set: newData });
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

    const newData = [...list.set];
    const newData2 = newData.map(v => {
      if (pid === v.product_id) {
        if (v.orders_amount > 1) {
          return { ...v, orders_amount: +v.orders_amount - 1 };
        }
      }
      return { ...v };
    });

    setList({ ...list, set: newData2 });
  };

  //增加set數量(+1)
  const addSETCount = pid => {
    const newData = [...list.set];
    const data = newData.find(set => set.product_id == pid);
    const index = newData.findIndex(set => set.product_id == pid);
    newData.splice(index, 1, {
      ...data,
      orders_amount: +data.orders_amount + 1,
    });
    setList({ ...list, set: newData });
  };

  //刪除商品
  const deleteProdFun = async (pid, category) => {
    const mid = localStorage.getItem('mem_id');
    const cartInfo = await getCart();
    const cartid = cartInfo.cartid;
    const prodid = pid;

    switch (category) {
      case 'set':
        let newSetData = [...list.set];
        newSetData = newSetData.filter(d => d.product_id !== +prodid); //pid相等的是要刪掉的，所以要回傳不相等的
        setList({ ...list, set: newSetData });

        let newSetArr = [...deleteProd];
        newSetArr.push({ pid: pid, category: category });

        fetch(config.DELETE_CART_PROD, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            memId: mid,
            cartid: cartid,
            pid: prodid,
            category: category,
          }),
        })
          .then(res => res.json())
          .then(async d => {
            await getCartCount(+localStorage.getItem('mem_id')); // cartcount 數字改變
            setChangeCartCount(changeCartCount + 1); // 狀態要改變
            setDeleteProd(newSetArr);
          });
        break;

      case 'cs':
        // console.log('delShowCS.id:', delShowCS.id);
        // const pid = delShowCS.id;

        let newCsData = [...list.cs];
        newCsData = newCsData.filter(d => d.product_id !== +prodid); //pid相等的是要刪掉的，所以要回傳不相等的
        setList({ ...list, cs: newCsData });

        let newCsArr = [...deleteProd];
        newCsArr.push({ pid: pid, category: category });

        fetch(config.DELETE_CART_PROD, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            memId: mid,
            cartid: cartid,
            pid: prodid,
            category: category,
          }),
        })
          .then(res => res.json())
          .then(async d => {
            await getCartCount(+localStorage.getItem('mem_id'));
            setChangeCartCount(changeCartCount + 1);
            setDeleteProd(newCsArr);
          });
        break;

      case 'cm':
        let newCmData = [...list.cm];
        newCmData = newCmData.filter(d => d.product_id !== +prodid); //pid相等的是要刪掉的，所以要回傳不相等的
        setList({ ...list, cm: newCmData });

        let newCmArr = [...deleteProd];
        newCmArr.push({ pid: pid, category: category });

        fetch(config.DELETE_CART_PROD, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            memId: mid,
            cartid: cartid,
            pid: prodid,
            category: category,
          }),
        })
          .then(res => res.json())
          .then(async d => {
            await getCartCount(+localStorage.getItem('mem_id'));
            setChangeCartCount(changeCartCount + 1);
            setDeleteProd(newCmArr);
          });
        break;

      default:
        break;
    }
  };

  // 套餐光箱
  const [show, setShow] = useState(false);
  const [setSelect, setSetSelect] = useState(0); //找cart_orders中套餐點了第幾個(i)套餐
  const handleClose = () => setShow(false);
  const handleShow = i => {
    setShow(true);
    setSetSelect(i); // 光箱要開的是第i 個
  };

  // 刪除光箱 CS
  const [delShowCS, setDelShowCS] = useState({
    open: false,
    id: '',
    name: '',
  });
  const handleDelCloseCS = () => setDelShowCS(false);
  const handleDelShowCS = e => {
    // console.log('hi');
    // console.log('e.currentTarget:', e.currentTarget);
    // console.log('e.currentTarget.dataset.id:', e.currentTarget.dataset.id);
    const c_prod_id = e.currentTarget.dataset.id;
    const c_prod_name = e.currentTarget.dataset.name;
    setDelShowCS({
      ...delShowCS,
      open: true,
      id: c_prod_id,
      name: c_prod_name,
    });
  };

  // 刪除光箱 CM
  const [delShowCM, setDelShowCM] = useState({
    open: false,
    id: '',
    name: '',
  });
  const handleDelCloseCM = () => setDelShowCM(false);
  const handleDelShowCM = e => {
    // console.log('hi');
    // console.log('e.currentTarget:', e.currentTarget);
    // console.log('e.currentTarget.dataset.id:', e.currentTarget.dataset.id);
    const cm_prod_id = e.currentTarget.dataset.id;
    const cm_prod_name = e.currentTarget.dataset.name;
    setDelShowCM({
      ...delShowCM,
      open: true,
      id: cm_prod_id,
      name: cm_prod_name,
    });
  };

  // 刪除光箱 SET
  const [delShowSET, setDelShowSET] = useState({
    open: false,
    id: '',
    name: '',
  });
  const handleDelCloseSET = () => setDelShowSET(false);
  const handleDelShowSET = e => {
    // console.log('hi');
    console.log('e.currentTarget:', e.currentTarget);
    console.log('e.currentTarget.dataset.id:', e.currentTarget.dataset.id);
    const set_prod_id = e.currentTarget.dataset.id;
    const set_prod_name = e.currentTarget.dataset.name;
    setDelShowSET({
      ...delShowSET,
      open: true,
      id: set_prod_id,
      name: set_prod_name,
    });
  };

  //錯誤 折扣金額光箱
  const [discountShow, setDiscountShow] = useState(false);
  const handleDiscountClose = () => setDiscountShow(false);
  const handleDiscountShow = () => setDiscountShow(true);
  const discountShowModel = (
    <Modal show={discountShow} onHide={handleDiscountClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30 m-3">提醒</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ margin: '0 3%' }}>
        <div className="en-cont-14 pb-2">輸入金額有誤，請重新輸入</div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
          onClick={handleDiscountClose}
        >
          關閉
        </Button>
      </Modal.Footer>
    </Modal>
  );
  // const [showImg, setShowImg] = useState(null);

  // 套餐光箱 圖片顯示
  const handleClickSetBentoItem = (id, img, index) => {
    console.log('558', id, img);
    setSelectId(`/img/setorder/bento_img/${id}.png`);
    setSelectImg(id);
    setItemIndex(index);
  };

  return (
    <>
      {discountShowModel}
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <div className="cart-asideLeft-nav d-lg-block d-none ch-title-16 ">
            <div className="cart-asL-nav-item">
              <div
                className="mb-3 cart-asL-nav-text"
                style={{ color: '#212121' }}
              >
                我的購物清單
              </div>
              <div className="cart-asL-nav-square"></div>
            </div>

            <div className="cart-asL-nav-item">
              <div className="cart-asL-nav-text" style={{ color: '#C4C4C4' }}>
                填寫訂購資訊
              </div>
              <div className="cart-asL-nav-square-white"></div>
            </div>

            <div className="cart-asL-nav-item">
              <div className="cart-asL-nav-text" style={{ color: '#C4C4C4' }}>
                輸入信用卡資料
              </div>
              <div className="cart-asL-nav-square-white"></div>
            </div>

            <div className="cart-asL-nav-item">
              <div className="cart-asL-nav-text" style={{ color: '#C4C4C4' }}>
                完成訂單
              </div>
              <div className="cart-asL-nav-square-white"></div>
            </div>
          </div>
          <AsideLeft />

          <div style={{ width: '100%' }}>
            <Title title={'Shopping List'} setNavIsOpen={setNavIsOpen} />
            <div className="mycontainer cart min-hi">
              <div className="breadcart">
                <p className="en-title-14-10">
                  <Link
                    to={'/'}
                    style={{ textDecoration: 'none', color: '#575757' }}
                  >
                    HOME/{' '}
                  </Link>
                  <Link
                    to={'/cart/stepone'}
                    style={{ textDecoration: 'none', color: '#b03342' }}
                  >
                    CART
                  </Link>
                </p>
              </div>
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
                      <div className="col-md-8  align-items-center">
                        商品名稱
                      </div>
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

              {/* <ProdItem
                cs={list.cs}
                cm={list.cm}
                set={list.set}
                setList={setList}
                list={list}
                setDeleteProd={setDeleteProd}
                deleteProd={deleteProd}
              /> */}
              {list.set?.map((v, i) => {
                return (
                  <div className="prod-item ch-cont-14 " key={'set' + i}>
                    <div className="row my-2  d-flex align-items-center ">
                      <div className="col-md-24 d-flex">
                        <div className="col-md-2 col-3 align-items-center"></div>
                        <div className="col-md-4 col-6 align-items-center">
                          <div className="cart-item-img">
                            <img
                              alt="/img/cart/mealplan-bento.png"
                              className="img-fluid"
                              src="/img/cart/mealplan-bento.png"
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
                          {/* 套餐不用印製時間 */}
                        </div>
                        <div className="col-md-2 d-none d-md-flex align-items-center ">
                          ${v.orders_value * v.orders_amount}
                        </div>
                        {+delShowSET.id === +v.product_id ? (
                          <Modal
                            show={delShowSET.open}
                            onHide={handleDelCloseSET}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title className="en-cont-30 m-3">
                                刪除套餐
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ margin: '0 3%' }}>
                              <div className="en-cont-14 pb-2">
                                套餐計畫一經刪除 需重新選擇欲加入購物車的選項
                                <br /> 確認要刪除套餐【{delShowSET.name}
                                】嗎?
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                className="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2"
                                onClick={handleDelCloseSET}
                              >
                                取消
                              </Button>
                              <Button
                                variant=" btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2 m-3"
                                className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
                                // onClick={handleDelClose}
                                onClick={e => {
                                  const setpid = delShowSET.id;
                                  console.log('delShowSET.id:', delShowSET.id);
                                  deleteProdFun(setpid, 'set');
                                  // console.log(e.currentTarget.value, 'MMMMM');
                                  handleDelCloseSET();
                                }}
                              >
                                確認
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        ) : (
                          ''
                        )}
                        <div className="col-md-4 col-6 d-flex justify-content-around align-items-center">
                          <div
                            className="prod-item-icon"
                            data-id={v.product_id}
                            data-name={v.set_name}
                            onClick={handleDelShowSET}
                          >
                            <img src="/img/cart/icon-trash.svg" alt="" />
                          </div>

                          {/* 光箱 */}
                          {
                            <Modal
                              show={show && setSelect === i}
                              onHide={handleClose}
                              size="lg"
                            >
                              {/* { show={ show && setSelect === i }} */}
                              <Modal.Header closeButton>
                                <Modal.Title className="en-cont-30 m-3">
                                  套餐說明
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body style={{ margin: '0 3%' }}>
                                <div className="en-cont-14 pb-2">
                                  加入購物車後，套餐內容不可修改，如需調整，需移除購物車品項，重新下單，謝謝。
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="set-modal-array">
                                      <div
                                        className="set-modal-array-content"
                                        show={show.set}
                                      >
                                        {v.set_info_array.map((v, i) => {
                                          return (
                                            <div
                                              className="set-bento-item"
                                              key={i + 1}
                                              onClick={() =>
                                                handleClickSetBentoItem(
                                                  v.bento_id,
                                                  v.set_bento_img,
                                                  i
                                                )
                                              }
                                              style={
                                                i === itemIndex
                                                  ? {
                                                      display: 'flex',
                                                      borderBottom:
                                                        '1px solid #c4c4c4',
                                                      // margin: '5%',
                                                      padding: '3%',
                                                      backgroundColor:
                                                        '#c4c4c452',
                                                    }
                                                  : {
                                                      display: 'flex',
                                                      borderBottom:
                                                        '1px solid #c4c4c4',
                                                      padding: '3%',
                                                    }
                                              }
                                            >
                                              <div
                                                className="en-cont-36 set-bento-item-num"
                                                style={{
                                                  width: '10%',
                                                  height: '10%',
                                                }}
                                              >
                                                {i + 1}
                                              </div>
                                              <div className="en-cont-14 set-bento-item-name">
                                                {v.bento_ch_name}
                                                <br />
                                                {v.bento_en_name}
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="col-md-12"
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <div
                                      className="set-box-img"
                                      // style={
                                      //   selectId === v.bento_id
                                      //     ? showSetImg
                                      //     : hiddenSetImg
                                      // }
                                    >
                                      <img
                                        className="set-bento-img"
                                        src={`http://localhost:3500${selectId}`}
                                        alt="product-image"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
                                  onClick={handleClose}
                                >
                                  關閉
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          }
                          <div
                            className="prod-item-icon"
                            data-id={v.product_id}
                            data-name={v.set_name}
                            data-set={v.set_info_array}
                            onClick={() => handleShow(i)}
                            // 顯示的是所選的那一個套餐的光箱
                          >
                            <img src="/img/cart/icon-info.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {list.cs?.map((v, i) => {
                return (
                  <div className="prod-item ch-cont-14 " key={'cs' + i}>
                    <div className="row my-2  d-flex align-items-center ">
                      <div className="col-md-24 d-flex">
                        <div className="col-md-2 col-3 align-items-center"></div>
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
                        {+delShowCS.id === +v.product_id ? (
                          <Modal
                            show={delShowCS.open}
                            onHide={handleDelCloseCS}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title className="en-cont-30 m-3">
                                刪除經典商品
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ margin: '0 3%' }}>
                              <div className="en-cont-14 pb-2">
                                確認要刪除【{delShowCS.name}】商品嗎?
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
                                  // console.log('delShowCS.id:', delShowCS.id);
                                  deleteProdFun(pid, 'cs');
                                  // console.log(e.currentTarget.value, 'MMMMM');
                                  handleDelCloseCS();
                                }}
                              >
                                確認
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        ) : (
                          ''
                        )}
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
              {list.cm?.map((v, i) => {
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
                        {+delShowCM.id === +v.product_id ? (
                          <Modal
                            show={delShowCM.open}
                            onHide={handleDelCloseCM}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title className="en-cont-30 m-3">
                                刪除客製化商品
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ margin: '0 3%' }}>
                              <div className="en-cont-14 pb-2">
                                提醒您客製化商品移出購物車後將會清空製作的紀錄，
                                <br />
                                確認要刪除【{delShowCM.name}】嗎?
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                className="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2"
                                onClick={handleDelCloseCM}
                              >
                                取消
                              </Button>
                              <Button
                                variant=" btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2 m-3"
                                className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
                                // onClick={handleDelClose}
                                onClick={e => {
                                  const pid = delShowCM.id;
                                  console.log('delShowCM.id:', delShowCM.id);
                                  deleteProdFun(pid, 'cm');
                                  // console.log(e.currentTarget.value, 'MMMMM');
                                  handleDelCloseCM();
                                }}
                              >
                                確認
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        ) : (
                          ''
                        )}
                        <div className="col-md-4 col-6 d-flex justify-content-around align-items-center">
                          <div
                            className="prod-item-icon"
                            data-id={v.product_id}
                            data-name={v.cm_prod_name}
                            onClick={handleDelShowCM}
                            // onClick={() => {
                            //   deleteProdFun(v.product_id, 'cm');
                            // }}
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

              <div
                className="list-check ch-cont-14"
                style={{ padding: '30px' }}
              >
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
                          {printTime / 60}分鐘
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
                              defaultValue={discountTotal / 100}
                              min={0}
                              max={discountTotal / 100}
                              onChange={e => {
                                // handleChange();
                                // discountShow(true);
                                if (e.target.value <= discountTotal / 100) {
                                  const newData = {
                                    cart_value: amount,
                                    cart_credit: +e.target.value,
                                    cart_total_print_time: printTime,
                                  };
                                  setInputSum(newData);
                                } else {
                                  // TODO: alert 要改
                                  setDiscountShow(true);
                                  // alert('輸入金額有誤，請重新輸入!');
                                  setInputSum({
                                    ...inputSum,
                                    cart_credit: '',
                                  });
                                  e.target.value = '';
                                }
                              }}
                            />
                          </div>
                        </div>

                        <small className="col-24 col-md-20 text-right ">
                          {/* 會員點數15,000點 可折抵NT$15元 */}
                          會員點數{discountTotal}點 最多可折抵NT$
                          {discountTotal / 100}元
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
                    <Link to="/classic">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary primeal-btn-outline-sm  mx-4 mx-md-3"
                      >
                        繼續購物
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary primeal-btn-sm mx-4 mx-md-3"
                      onClick={handleSubmit}
                    >
                      前往結帳
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <AsideRight
            setNavIsOpen={setNavIsOpen}
            changeCartCount={changeCartCount} // 購物車數量狀態改變
          />
        </div>
      </div>
    </>
  );
}

export default StepOne;
