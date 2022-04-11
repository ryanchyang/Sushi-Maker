import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import NavPage from '../layout/components/NavPage';

function StepThree(props) {
  //回上一頁
  function BackToLastPage() {
    history.go(-1);
  }
  //nav 滿版
  const { navIsOpen, setNavIsOpen } = props;
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  //上一個的答案
  const data = useLocation();

  const question1 = data.state;

  const [selected2, setSelected2] = useState(1);

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

  //判斷登入
  const isLogin = localStorage.getItem('loginStatus');
  const history = useHistory();
  //如果沒有登入的話的判斷
  if (!isLogin) {
    // Hello();
    history.push('/member/login');
    return <></>;
  }

  if (data.state === undefined) {
    history.push('/setorder/stepstart');
  }

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
                    <div className="step-mob-title set-text-center set-title-3">
                      規劃您的專屬菜單
                    </div>
                  </div>
                  <div className="set-question-box">
                    <div className="ch-title-22 set-text-center set-content step-title ">
                      喜歡什麼主題?
                    </div>
                    <div className="setorder-btn-all set-text-center ">
                      {lists.map(list => (
                        <button
                          className="set-question-btn ch-cont-18"
                          key={list.id}
                          onClick={() => {
                            handleColor(list);
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
                          pathname: '/setorder/stepfour',
                          //question1展開
                          state: { ...question1, selected2 },
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

export default StepThree;
