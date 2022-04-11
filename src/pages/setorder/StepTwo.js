import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import NavPage from '../layout/components/NavPage';

function StepTwo(props) {
  const { navIsOpen, setNavIsOpen } = props;
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
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

  //判斷登入
  const isLogin = localStorage.getItem('loginStatus');
  const history = useHistory();
  //如果沒有登入的話的判斷
  if (!isLogin) {
    // Hello();
    history.push('/member/login');
    return <></>;
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
                  <div className="set-title col-12 set-title-2">
                    <div className="step-mob-title set-text-center set-title-1">
                      規劃您的專屬菜單
                    </div>
                  </div>
                  <div className="set-question-box">
                    <div className="ch-title-22 set-text-center set-content step-title">
                      你想要?
                    </div>
                    <div className="setorder-btn-all set-text-center ">
                      {lists.map(list => (
                        <button
                          className="set-question-btn ch-cont-18"
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
                      <Link to="/setorder/stepone">
                        <button className="ch-title-22 step-reset-btn">
                          返回
                        </button>
                      </Link>
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
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default StepTwo;
