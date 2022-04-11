import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavPage from '../layout/components/NavPage';

function StepFour(props) {
  //回上一頁
  function BackToLastPage() {
    history.go(-1);
  }
  //判斷登入
  const isLogin = localStorage.getItem('loginStatus');
  const history = useHistory();
  //nav
  const { navIsOpen, setNavIsOpen } = props;
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };

  const data = useLocation();
  const question2 = data.state;
  const lists = [
    { id: 1, title: '大豆', selected: false },
    { id: 2, title: '鮭魚', selected: false },
    { id: 3, title: '蝦子', selected: false },
    { id: 4, title: '花生', selected: false },
    { id: 5, title: '南瓜', selected: false },
    { id: 6, title: '貝類', selected: false },
    { id: 7, title: '茄子', selected: false },
    { id: 8, title: '大蔥', selected: false },
    { id: 9, title: '牛肉', selected: false },
    { id: 10, title: '豬肉', selected: false },
    { id: 11, title: '起司', selected: false },
    { id: 12, title: '香菇', selected: false },
  ];
  //先把lists存到setSelectrd3裡面
  useEffect(() => {
    //如果沒有登入的話的判斷
    if (!isLogin) {
      // Hello();
      history.push('/member/login');
      return <></>;
    }
   
    if (data.state === undefined) {
      history.push('/setorder/stepstart');
    }
    setSelected3(lists);
  }, []);
  const [selected3, setSelected3] = useState([]);
  //設定按鈕
  const handleColorMultiple = e => {
    const newData = selected3.map(v => {
      if (+e.target.dataset.id === v.id) {
        return { ...v, selected: !v.selected };
      } else {
        return v;
      }
    });
    setSelected3(newData);
  };

  const answerClicked = { color: '#f7f6f3', backgroundColor: '#b03342' };
  const answerNoClick = { color: '#b03342', backgroundColor: 'transparent' };
  return (
    <>
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'JUST FOR YOU'} setNavIsOpen={setNavIsOpen}/>

            <div className="step">
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
                <div className="set-all-content">
                  <div className="set-title col-12 set-title-0">
                    <div className="step-mob-title set-text-center set-title-4">
                      規劃您的專屬菜單
                    </div>
                  </div>
                  <div className="set-question-box">
                    <div className="ch-title-22 set-text-center set-content-four">
                      喜歡吃什麼食物?
                    </div>
                    <div className="step4-annotation ch-cont-18">
                      如果沒有選擇任何食材,
                      <br />
                      則推薦這些食材以外的套餐。
                    </div>

                    <div className="set-text-center stepfour-paddiing">
                      {selected3.map(list => (
                        <button
                          className="set-question-btn ch-cont-18"
                          key={list.id}
                          data-id={list.id}
                          style={list.selected ? answerClicked : answerNoClick}
                          onClick={handleColorMultiple}
                        >
                          {list.title}
                        </button>
                      ))}
                    </div>
                    <div className="ch-cont-16"></div>
                    <div className="step-reset-enter-btn-all">
                      <button
                        className="ch-title-22 step-reset-btn"
                        onClick={BackToLastPage}
                      >
                        返回
                      </button>

                      <Link
                        to={{
                          pathname: '/setorder/setorderlist',

                          state: { ...question2, selected3 },
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
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}
// }

export default StepFour;
