import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './step.scss';
import './../../styles/global.scss';

//style component
// const LoginBody = styled.body`
//   background: #212121;
// `;

function StepOne() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'JUST FOR YOU-one'} />
          <br />
          <div className="step">
            <div className="mycontainer min-hi">
              <div className="set-all-content">
                <div className="set-title col-12">
                  <div className="step-mob-title set-text-center">
                    讓我們來幫您規劃您的專屬菜單
                  </div>
                </div>
                <div className="set-question-box">
                  <div className="ch-cont-18 set-text-center set-content">
                    <p>我們將根據您的偏好推薦餐點</p>
                    <p>但您仍然可以修改完整套餐</p>
                  </div>
                  <button class="ch-title-22 set-button dark-red">
                    下一步
                  </button>
                 
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
