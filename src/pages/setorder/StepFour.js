import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function StepFour() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'JUST FOR YOU-four'} />
          <br />
          <div className="step">
            <div className="mycontainer">
              <div className="set-all-content">
                <div className="set-title col-12">
                  <div className="step-mob-title set-text-center ">
                    讓我們來幫您規劃您的專屬菜單
                  </div>
                </div>
                <div className="set-question-box">
                  <div className="ch-title-22 set-text-center set-content my-5 ">
                    喜歡吃什麼食物?
                  </div>
                  <div className="setoreder-btn-all set-text-center">
                    <div className="set-row">
                      <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                        測試中
                      </div>
                      <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                        測試中
                      </div>
                      <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                        測試中
                      </div>
                      <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                        測試中
                      </div>
                    </div>
                    <div className="set-row">
                      <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                        測試中
                      </div>
                      <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                        測試中
                      </div>
                      <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                        測試中
                      </div>
                      <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                        測試中
                      </div>
                    </div>
                    <div className="set-row">
                      <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                        測試中
                      </div>
                      <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                        測試中
                      </div>
                      <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                        測試中
                      </div>
                      <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                        測試中
                      </div>
                    </div>
                  </div>
                  <div className="ch-cont-16"></div>
                  <div className="set-row">
                    <button class="ch-title-22 set-button dark-red">
                      返回
                    </button>
                    <button class="ch-title-22 set-button dark-red">
                      下一步
                    </button>
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

export default StepFour;
