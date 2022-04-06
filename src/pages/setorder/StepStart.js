import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link } from 'react-router-dom';
import './step.scss';
import './../../styles/global.scss';
import NavPage from '../layout/components/NavPage';
import { useHistory } from 'react-router-dom';

function StepStart(props) {
  //判斷登入
  const isLogin = localStorage.getItem('loginStatus');

  const { navIsOpen, setNavIsOpen } = props;
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const history = useHistory();

  if (isLogin) {
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
              <Title title={'JUST FOR YOU'} />
              <div className="step">
                <div className="mycontainer min-hi">
                  <p className="en-title-14-10">
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
                      <div className="step-mob-title set-text-center set-title-1">
                        規劃您的專屬菜單
                      </div>
                    </div>
                    <div className="set-question-box-start">
                      <div className="bento-img-center start-padding">
                        <img
                          className="setorderlist-set-bento-img"
                          src={`http://localhost:3500/img/home/mealplan-bento.png`}
                          alt="product-image"
                        />
                      </div>

                      <div className="ch-cont-16 set-text-center set-content-start">
                        <p>用問卷的方式來幫您量身規劃</p>
                        <p>7天、14天，甚至是21天的套餐！</p>
                        <p>可以選擇瘦身健身，</p>
                        <p>適合孩童老年人等</p>
                        <p>各種專屬於您想要的套餐計畫</p>
                      </div>
                      <Link to="./stepone">
                        <button class="ch-title-22 step-reset-btn-red">
                          下一步
                        </button>
                      </Link>
                      <div className="set-text-center">或</div>
                      {/* <Link
                  to={{
                    pathname: '/setorderlist',
                    state: { question2, selected3 },
                  }}> */}
                      <Link to="./setorderlist">
                        <a
                          className="set-text-center"
                          style={{ color: '#575757' }}
                          href="#/
              "
                        >
                          跳過問卷直接選填套餐
                        </a>
                      </Link>
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
  } else {
    // Hello();
    history.push('/member/login');
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
              <Title title={'JUST FOR YOU'} />
              <div className="step">
                <div className="mycontainer min-hi">
                  <p className="en-title-14-10">
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
                  <h1>hello</h1>
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
}

export default StepStart;
