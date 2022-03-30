//最後預覽
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import SetMenuFinal from './components/SetMenuFinal';
import { Link, useLocation } from 'react-router-dom';
import './SetOrderAll.scss';
import { useEffect, useState } from 'react';
// import './SetOrderAll.scss';
function SetOrderFinal() {
  //上一個的答案
  const data = useLocation();
  const lastanswer = data.state;
  const week = lastanswer.week;
  const firstdate = lastanswer.date;
  const finalchoose = lastanswer.choose;

  //finallist 比對清單
  const finallist = lastanswer.list;
  console.log('list', finallist);

  //finalchoose 最後結果的陣列
  console.log('finalchoose', finalchoose);
  //設定結束日期
  let finalDate = new Date(firstdate);
  finalDate.setDate(finalDate.getDate() + +week * 7);
  finalDate = finalDate.toISOString().split('T')[0];

  //price價錢 partly 份量
  const partly = 1;
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
  const finalprice = price * partly;
  console.log('date', firstdate);

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Just For You'} />
          <div className="setmenulist">
            <div className="mycontainer min-hi">
              <div className="set-list-title ch-title-22">推薦結果</div>
              <div className="set-row setorderfinal">
                <div className="set-list-left col-12">
                  <div className="set-menu-title">
                    <div className="set-day-title en-cont-18">DAY</div>
                    <div className="set-bento-title ch-cont-18">每日套餐</div>
                  </div>
                  {/* 便當列表 */}
                  {finalchoose.map(chooses => {
                    return (
                      <div className="setmenulist">
                        <div className="align-items-center">
                          <div className="set-menu">
                            <div className="en-cont-36 set-day">$</div>
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
                <div className="set-list-right col-5">
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
                  </div>
                  <div className="set-final-list-flex">
                    <div className="ch-cont-14">套餐金額</div>
                    <div className="cash">
                      <div className="ch-cont-14">NT$</div>
                      <div className="en-cont-28">{finalprice}</div>
                      <div className="ch-cont-14">元</div>
                    </div>
                  </div>

                  <div className="set-view-all ">
                    <div className="bento-view-buttom"></div>
                    <div className="bento-sushi-menu"></div>
                  </div>
                  <div className="set-list-down row  d-flex justify-content-center justify-content-md-end mx-5 px-5">
                    <Link to="./setorderList">
                      <div className="set-order-list-buttom float-end btn btn-sm btn-outline-primary primeal-btn-outline-sm">
                        下一步
                      </div>
                    </Link>
                  </div>
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

export default SetOrderFinal;
