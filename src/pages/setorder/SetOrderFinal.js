//最後預覽
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import SetMenuFinal from './components/SetMenuFinal';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './SetOrderAll.scss';
import { useEffect, useState } from 'react';
import config from '../../Config';
import { Button, Modal } from 'react-bootstrap';
import NavPage from '../layout/components/NavPage';
//會員 加入購物車
import { getCartCount } from '../../utils';

function SetOrderFinal(props) {
  const { navIsOpen, setNavIsOpen } = props;
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const history = useHistory();
  const [changeCartCount, setChangeCartCount] = useState(0); //改變購物車數量
  //加入購物車的光箱
  const [cartShow, setCartShow] = useState(false);
  const handleCartClose = () => {
    setCartShow(false);
    history.push('/setorder/stepstart');
  };
  const handleCartShow = () => setCartShow(true);
  const cartModel = (
    <Modal show={cartShow} onHide={handleCartClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30 m-3">提醒</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ margin: '0 3%' }}>
        <div className="en-cont-14 pb-2">已成功將商品加入購物車!</div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
          onClick={handleCartClose}
        >
          關閉
        </Button>
      </Modal.Footer>
    </Modal>
  );

  //上一個的答案
  const data = useLocation();
  const lastanswer = data.state;
  const week = lastanswer.week;
  const firstdate = lastanswer.date;
  const finalchoose = lastanswer.answer;
  const number_id = lastanswer.numberid;

  //finalchoose 最後結果的陣列
  //設定結束日期
  let finalDate = new Date(firstdate);
  finalDate.setDate(finalDate.getDate() + +week * 7);
  finalDate = finalDate.toISOString().split('T')[0];

  //price價錢 partly 份量

  let price;
  //setlist: week第幾週的時候 價錢是多少
  switch (week) {
    case '1':
      price = 2500;
      break;
    case '2':
      price = 4000;
      break;
    case '3':
      price = 5600;
      break;
    default:
      price = 0;
  }
  useEffect(() => {
    const finalprice = price;
    setCombosum(finalprice);
  }, []);
  //套餐份數
  const [combo, setCombo] = useState('1');

  //套餐金額
  const [combosum, setCombosum] = useState(0);

  function comboChange(e) {
    setCombo(e.target.value);
    const finalprice = price * +e.target.value;
    setCombosum(finalprice);
  }
  // bento_id week  combo price

  function sendList() {
    handleCartShow();
    const memid = localStorage.getItem('mem_id');
    const sendData = async () => {
      const res = await fetch(config.GET_SET_SENDLIST, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          mid: +localStorage.getItem('mem_id'),
          firstdate: firstdate,
          week: week,
          combo: combo,
          combosum: combosum,
          finalchoose,
          numberid: number_id,
          memid: memid,
        }),
      })
        .then(res => res.json())
        .then(async d => {
          console.log('123');
          //加入購物車後重新設定購物車的商品數量
          await getCartCount(+localStorage.getItem('mem_id'));
          setChangeCartCount(changeCartCount + 1);
        });
    };
    sendData();
  }
  return (
    <>
      {cartModel}
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'Just For You'} />
            <div className="setmenulist">
              <div className="mycontainer min-hi">
                <p className="en-title-14-10 link-bread-set">
                  <Link
                    to={'/'}
                    style={{ textDecoration: 'none', color: '#575757' }}
                  >
                    HOME /
                  </Link>

                  <Link
                    to={'./stepstart'}
                    style={{ textDecoration: 'none', color: '#b03342' }}
                  >
                    SET
                  </Link>
                </p>
                <div className="set-list-title-final ch-title-22">推薦結果</div>
                <div className="setorderfinal animation-opcaity">
                  <div className="set-list-left col-lg-12 col-md-24">
                    <div className="set-menu-title">
                      <div className="set-day-title en-cont-18">DAY</div>
                      <div className="set-bento-title ch-cont-18">每日套餐</div>
                    </div>
                    {/* 便當列表 */}
                    {finalchoose.map((chooses, i) => {
                      return (
                        <div className="setmenulist">
                          <div className="align-items-center">
                            <div className="set-menu">
                              <div className="en-cont-36 set-day">{i + 1}</div>
                              <div className="set-sushi-all">
                                <div className="ch-cont-18 set-sushi-ch">
                                  {chooses.bento_ch_name}
                                </div>
                                &nbsp;&nbsp;
                                <div className="en-cont-18 set-sushi-en">
                                  {chooses.bento_en_name}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {/* 便當列表結束 */}
                  </div>
                  <div className="set-list-right-final">
                    <div className="set-final-list-flex">
                      <div className="ch-cont-14">起始日期</div>
                      <div className="ch-cont-14">{lastanswer.date}</div>
                    </div>
                    <div className="set-final-list-flex">
                      <div className="ch-cont-14">結束日期</div>
                      <div className="ch-cont-14">{finalDate}</div>
                    </div>
                    <div className="set-final-list-flex">
                      {' '}
                      <div className="ch-cont-14">套餐方案</div>
                      <div className="ch-cont-14">{lastanswer.week}週</div>
                    </div>
                    <div className="set-final-list-flex">
                      <div className="ch-cont-14">套餐份數</div>
                      <div className="set-combo">
                        <div className="ch-cont-14">吃</div>
                        <select
                          name=""
                          id=""
                          className="set-combo-select"
                          value={combo}
                          onChange={comboChange}
                        >
                          <option
                            value="1"
                            sele
                            cted={+week === 1 ? true : false}
                          >
                            1
                          </option>
                          <option
                            value="2"
                            selected={+week === 2 ? true : false}
                          >
                            2
                          </option>
                          <option
                            value="3"
                            selected={+week === 3 ? true : false}
                          >
                            3
                          </option>
                          <option
                            value="4"
                            selected={+week === 4 ? true : false}
                          >
                            4
                          </option>
                          <option
                            value="5"
                            selected={+week === 5 ? true : false}
                          >
                            5
                          </option>
                          <option
                            value="6"
                            selected={+week === 6 ? true : false}
                          >
                            6
                          </option>
                          <option
                            value="7"
                            selected={+week === 7 ? true : false}
                          >
                            7
                          </option>
                          <option
                            value="8"
                            selected={+week === 8 ? true : false}
                          >
                            8
                          </option>
                          <option
                            value="9"
                            selected={+week === 9 ? true : false}
                          >
                            9
                          </option>
                          <option
                            value="10"
                            selected={+week === 10 ? true : false}
                          >
                            10
                          </option>
                        </select>
                        <div className="ch-cont-14">份</div>
                      </div>
                    </div>
                    <div className="set-final-list-flex">
                      <div className="ch-cont-14">套餐金額</div>
                      <div className="cash">
                        <div className="ch-cont-14">NT$</div>
                        <div className="en-cont-28">{combosum}</div>
                        <div className="ch-cont-14">元</div>
                      </div>
                    </div>

                    <div className="set-view-all ">
                      <div className="bento-view-buttom"></div>
                      <div className="bento-sushi-menu"></div>
                    </div>
                    <div className="set-list-down row  d-flex justify-content-center justify-content-md-end mx-5 px-5">
                      <div
                        className="set-order-list-buttom float-end btn btn-sm btn-outline-primary primeal-btn-outline-sm"
                        onClick={sendList}
                      >
                        送出
                      </div>
                    </div>
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

export default SetOrderFinal;
