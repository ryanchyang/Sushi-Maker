import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link } from 'react-router-dom';
import './step.scss';
import './../../styles/global.scss';

function StepOne() {
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
                  <div className="step-mob-title set-text-center set-title-1">
                    規劃您的專屬菜單
                  </div>
                </div>
                <div className="set-question-box">
                  <div className="bento-img-center start-padding">
                    <img
                      className="set-bento-img "
                      src={require('./img/SetorderBento.png')}
                      alt="product-image"
                    />
                  </div>

                  <div className="ch-cont-16 set-text-center set-content">
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
        <AsideRight />
      </div>
    </>
  );
}

export default StepOne;
