import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function StepTwo() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'JUST FOR YOU-two'} />
          <br />
          <div className="step">
            <div className="mycontainer">
              <div className="set-all-content">
                <div className="set-title col-12">
                  <div className="step-mob-title set-text-center">
                    規劃您的專屬菜單
                  </div>
                </div>
                <div className="set-question-box ">
                  <div className="set-content"></div>
                  <div className="ch-title-22 set-text-center ">你想要?</div>
                  <div className="setoreder-btn-all set-row set-text-center">
                    <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                      菜多多
                    </div>
                    <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                      肉多多
                    </div>
                  </div>
                  <div className="ch-cont-16"></div>
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

export default StepTwo;
