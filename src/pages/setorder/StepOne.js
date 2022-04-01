import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link, useHistory } from 'react-router-dom';
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
                <div className="set-question-box step-one-question-box">
                  <div className="ch-cont-18 set-text-center set-content-one">
                    <p>我們將根據您的偏好推薦餐點</p>
                    <p>但您仍然可以修改完整套餐</p>
                  </div>
                  <div className="step-reset-enter-btn-all">
                    <Link to="./stepstart">
                      <button class="ch-title-22 step-reset-btn">返回</button>
                    </Link>
                    <Link to="./steptwo">
                      <button class="ch-title-22 step-reset-btn-red">
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

export default StepOne;
