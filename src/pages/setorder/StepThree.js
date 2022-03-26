import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';

function StepThree() {
  //上一個的答案
  const data = useLocation();
  // console.log('data.state', data.state);
  const question1 = data.state;
  console.log('question1', question1);
  const [selected2, setSelected2] = useState(1);

  //判斷上一題有沒有回答,沒有回答的話就跳回套餐首頁
  if (question1 === undefined) {
    window.location.href = `./stepStart`;
  } else {
    const lists = [
      { id: 1, title: '普通' },
      { id: 2, title: '小孩' },
      { id: 3, title: '年長' },
      { id: 4, title: '精準' },
    ];

    const handleColor = row => {
      setSelected2(row.id);
    };
    const answerClicked = { color: '#f7f6f3', backgroundColor: '#b03342' };
    const answerNoClick = { color: '#b03342', backgroundColor: 'transparent' };
    return (
      <>
        <Header />
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'JUST FOR YOU'} />
            <div className="step">
              <div className="mycontainer min-hi">
                <div className="set-all-content">
                  <div className="set-title col-12 set-title-0">
                    <div className="step-mob-title set-text-center set-title-3">
                      規劃您的專屬菜單
                    </div>
                  </div>
                  <div className="set-question-box">
                    <div className="ch-title-22 set-text-center set-content my-5 pb-5 ">
                      喜歡什麼主題?
                    </div>
                    <div className="setorder-btn-all set-text-center ">
                      {lists.map(list => (
                        <button
                          className="set-question-btn ch-cont-14"
                          key={list.id}
                          onClick={() => {
                            handleColor(list);
                            // lastMemory();
                          }}
                          style={
                            list.id === selected2
                              ? answerClicked
                              : answerNoClick
                          }
                        >
                          {list.title}
                        </button>
                      ))}
                      {/* <div className="set-question-btn ch-cont-14">普通</div>
                    <div className="set-question-btn ch-cont-14">小孩</div>
                    <div className="set-question-btn ch-cont-14">年長</div>
                    <div className="set-question-btn ch-cont-14">精準</div> */}
                    </div>
                    <div className="ch-cont-16"></div>
                    <div className="step-reset-enter-btn-all">
                      <Link to="./steptwo">
                        <button className="ch-title-22 step-reset-btn">
                          返回
                        </button>
                      </Link>

                      <Link
                        to={{
                          pathname: '/setorder/stepfour',
                          // state: { selected2, x },
                          state: { ...question1, selected2 },
                          //x展開
                        }}
                      >
                        <button className="ch-title-22 step-reset-btn-red">
                          確定
                        </button>
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
}

export default StepThree;
