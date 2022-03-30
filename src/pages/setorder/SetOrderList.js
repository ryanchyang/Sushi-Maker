//選擇菜單的頁面
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import SetMenuList from './components/SetMenuList';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SetOrderAll.scss';
import config from '../../Config';

function SetOrderList() {
  //今日日期
  function getTodayDate() {
    const fullDate = new Date();
    const yyyy = fullDate.getFullYear();
    const MM =
      fullDate.getMonth() + 1 >= 10
        ? fullDate.getMonth() + 1
        : '0' + (fullDate.getMonth() + 1);
    const dd =
      fullDate.getDate() < 10 ? '0' + fullDate.getDate() : fullDate.getDate();
    const today = yyyy + '-' + MM + '-' + dd;
    return today;
  }

  const data = useLocation();
  //answer:從後端傳出來的obj(json資料)
  const [answer, setAnswer] = useState({});
  //清單列選出來的component菜單陣列
  const [choose, setChoose] = useState([]);

  //總參考清單
  const [list, setList] = useState([]);

  //資料傳到後端後做完判斷,傳出結果
  useEffect(() => {
    // console.log('資料傳送過去');
    const getData = async () => {
      const res = await fetch(config.GET_SET_COMPARE, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data.state),
      })
        .then(res => res.json())
        .then(obj => {
          //傳出結果
          //return 將obj資料丟到useEffect外面
          return obj;
        });
      setAnswer(res);
      console.log('res', res);
      // console.log('res.rows', res.rows);

      //init 結果弄成陣列
      // const init = Array(7).fill(res.rows[0].bento_id);

      //init 結果弄成陣列
      const init = Array(7).fill(res.rows[0]);
      setChoose(init);
      //list 比對清單
      setList(res.rows);
    };
    getData();
  }, []);
  console.log('list', list);
  console.log('choose', choose);
  //月曆的useState
  const [date, setDate] = useState(getTodayDate);
  const today = getTodayDate();
  console.log('today', today);

  function setdateChange(e) {
    setDate(e.target.value);
  }
  //月曆設定
  if (date < today) {
    console.log('error');
    document.getElementById('date-error').style.display = 'block';
    document.getElementById('date-true').style.display = 'none';
  } else if (date > today) {
    document.getElementById('date-error').style.display = 'none';
    document.getElementById('date-true').style.display = 'block';
  }

  //吃幾週的useState
  const [week, setWeek] = useState('1');
  function weekChange(e) {
    setWeek(e.target.value);
  }
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Just For You'} />

          <div className="setmenulist">
            <div className="mycontainer min-hi ">
              <div className="set-list-title ch-title-22">推薦結果</div>

              <div className="set-row set-list-all ">
                <div className="set-list-left">
                  <div className="set-input-all align-items-center">
                    <div className="set-input-from ch-cont-14">從</div>
                    <input
                      className="set-input-date"
                      type="date"
                      value={date}
                      onChange={setdateChange}
                    />
                    <div className="set-input-from ch-cont-14">開始吃，</div>
                    <div className="set-input-from ch-cont-14">吃</div>
                    <select
                      name=""
                      id=""
                      className="set-week"
                      value={week}
                      onChange={weekChange}
                    >
                      <option value="1" sele cted={+week === 1 ? true : false}>
                        1
                      </option>
                      <option value="2" selected={+week === 2 ? true : false}>
                        2
                      </option>
                      <option value="3" selected={+week === 3 ? true : false}>
                        3
                      </option>
                      {/* <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option> */}
                    </select>
                    <div className="set-input-from ch-cont-14">週。</div>
                  </div>

                  <div
                    className="ch-cont-12 text-primary date-error"
                    style={{ display: 'none' }}
                    id="date-error"
                  >
                    選擇日期不能比今日時間早
                  </div>
                  <div
                    className="ch-cont-12 text-light-bg date-error"
                    style={{
                      display: 'block',
                      color: '#f7f6f3',
                      userSelect: 'none',
                    }}
                    id="date-true"
                  >
                    xxxxxx
                  </div>
                  <div className="set-menu-title">
                    <div className="set-day-title en-cont-18">DAY</div>
                    <div className="set-bento-title ch-cont-16">每日套餐</div>
                  </div>
                  <SetMenuList
                    answer={answer}
                    choose={choose}
                    setChoose={setChoose}
                    index={0}
                    list={list}
                  />
                  <SetMenuList
                    answer={answer}
                    choose={choose}
                    setChoose={setChoose}
                    index={1}
                    list={list}
                  />
                  <SetMenuList
                    answer={answer}
                    choose={choose}
                    setChoose={setChoose}
                    index={2}
                    list={list}
                  />
                  <SetMenuList
                    answer={answer}
                    choose={choose}
                    setChoose={setChoose}
                    index={3}
                    list={list}
                  />
                  <SetMenuList
                    answer={answer}
                    choose={choose}
                    setChoose={setChoose}
                    index={4}
                    list={list}
                  />
                  <SetMenuList
                    answer={answer}
                    choose={choose}
                    setChoose={setChoose}
                    index={5}
                    list={list}
                  />
                  <SetMenuList
                    answer={answer}
                    choose={choose}
                    setChoose={setChoose}
                    index={6}
                    list={list}
                  />
                </div>
                <div className="set-list-right col-8">
                  <div className="set-view-all">
                    <div className="bento-img-element mx-auto">
                      <img
                        className="setorderlist-set-bento-img"
                        src={require('./img/SetorderBento.png')}
                        alt="product-image"
                      />
                    </div>
                    <div className="bento-view-buttom align-items-center">
                      <div className="set-nutrient-btn">
                        <div className="set-nutrient-bento-name ch-title-18">
                          鮭魚便當
                        </div>
                        {/* <div className="btn btn-sm btn-outline-primary primeal-btn-outline-sm set-nutrient float-end">
                          營養成份
                        </div> */}
                      </div>
                    </div>
                    {/* 右邊的菜單 */}
                    <div className="bento-sushi-menu-all">
                      <div className="bento-sushi-menu">
                        <div className="set-menu-sushi">
                          <div className="set-menu-sushi-ch ch-cont-16">
                            測試壽司1
                          </div>
                          <div className="set-menu-sushi-en en-cont-16 en-cont-16">
                            English name
                          </div>
                        </div>
                        <div className="set-menu-sushi">
                          <div className="set-menu-sushi-ch ch-cont-16">
                            測試壽司2
                          </div>
                          <div className="set-menu-sushi-en en-cont-16">
                            English name
                          </div>
                        </div>
                      </div>

                      <div className="bento-sushi-menu-all">
                        <div className="bento-sushi-menu">
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司1
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司2
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bento-sushi-menu-all">
                        <div className="bento-sushi-menu">
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司1
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司2
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bento-sushi-menu-all">
                        <div className="bento-sushi-menu">
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司1
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司2
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bento-sushi-menu-all">
                        <div className="bento-sushi-menu">
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司1
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司2
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="set-list-down row  d-flex justify-content-center justify-content-md-end mx-5 px-5">
                <Link
                  to={{
                    pathname: './setorderfinal',
                    state: { date, week, choose, list },
                  }}
                >
                  <div className="set-order-list-buttom float-end btn btn-sm btn-outline-primary primeal-btn-outline-sm">
                    下一步
                  </div>
                </Link>
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

export default SetOrderList;
