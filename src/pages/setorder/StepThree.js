import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function Order() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'JUST FOR YOU-three'} />
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
                  <div className="ch-title-22 set-text-center set-content my-5">
                  想要什麼樣的主題?
                  </div>
                  <div className="setoreder-btn-all set-row set-text-center">
                    <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                      普通
                    </div>
                    <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                      小孩
                    </div>
                    <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                      年長
                    </div>
                    <div className="btn-sm btn-primary primeal-btn-outline-sm setorder-btn">
                      精準
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

export default Order;
