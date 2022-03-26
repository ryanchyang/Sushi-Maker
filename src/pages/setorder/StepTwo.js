import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function StepTwo(props) {
  // useEffect(() => {});
  const [selected, setSelected] = useState(1); //按鈕列表
  const lists = [
    { id: 1, title: '肉多多' },
    { id: 2, title: '菜多多' },
  ];

  const handleClick = row => {
    setSelected(row.id);
    let answerid = row.id;
    console.log(answerid);
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
                <div className="set-title col-12 set-title-2">
                  <div className="step-mob-title set-text-center set-title-1">
                    規劃您的專屬菜單
                  </div>
                </div>
                <div className="set-question-box">
                  <div className="ch-title-22 set-text-center set-content my-5  pb-5">
                    你想要?
                  </div>
                  <div className="setorder-btn-all set-text-center ">
                    {lists.map(list => (
                      <button
                        className="set-question-btn ch-cont-14"
                        key={list.id}
                        onClick={() => handleClick(list)}
                        style={
                          list.id === selected ? answerClicked : answerNoClick
                        }
                      >
                        {list.title}
                      </button>
                    ))}
                  </div>
                  <div className="ch-cont-16"></div>
                  <div className="step-reset-enter-btn-all">
                    <button className="ch-title-22 step-reset-btn">返回</button>

                    <Link
                      to={{
                        pathname: '/setorder/stepthree',
                        state: { selected },
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

export default StepTwo;
