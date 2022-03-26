import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import SetMenuList from './components/SetMenuList';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SetOrderAll.scss';
// import './SetMeal.json';
import config from '../../Config';
function SetOrderList() {
  const data = useLocation();

  //資料傳到後端後做完判斷,ref送出結果
  useEffect(() => {
    console.log('data.state', data.state);
    console.log('資料傳送過去');
    const getData = async () => {
      const res = await fetch(config.GET_SET_COMPARE, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data.state),
      })
        .then(res => res.json())
        .then(obj => {
          console.log('-----obj-----', obj);
        });
    };
    getData();
  }, []);

  const [date, setDate] = useState('');
  function setdateChange(e) {
    setDate(e.target.value);
  }

  const [week, setWeek] = useState('');
  function weekChange(e) {
    // console.log(e.target.value);
    setWeek(e.target.value);
  }

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Just For You'} />
          <h1>
            {/* 測試文字：第一題選擇了{data.state.selected}，第二題選擇了
            {data.state.selected2} */}
          </h1>
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
                      <option value="1" selected={+week === 1 ? true : false}>
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
                  <div className="set-menu-title">
                    <div className="set-day-title en-cont-18">DAY</div>
                    <div className="set-bento-title ch-cont-16">每日套餐</div>
                  </div>
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                </div>
                <div className="set-list-right col-8">
                  <div className="set-view-all p-5">
                    <div className="bento-img-element mx-auto">
                      <img
                        src={require('./../../imgs/setorder/tokyo-salmon-set.png')}
                        alt="bento-image"
                      />
                    </div>
                    <div className="bento-view-buttom align-items-center">
                      <div className="set-nutrient-btn">
                        <div className="set-nutrient-bento-name ch-title-18">
                          鮭魚便當
                        </div>
                        <div className="btn btn-sm btn-outline-primary primeal-btn-outline-sm set-nutrient float-end">
                          營養成份
                        </div>
                      </div>
                    </div>
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
                <Link to="./setorderfinal">
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
