import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import SetMenuFinal from './SetMenuFinal';
import './SetOrderAll.scss';
// import './SetOrderAll.scss';
function SetOrderFinal() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Just For You'} />
          <br />
          <div className="setmenulist">
            <div className="mycontainer ">
              <div className="set-list-title ch-title-22">推薦結果</div>
              <div className="set-row">
                <div className="set-list-left col-12">
                  <div className="set-menu-title">
                    <div className="set-day-title en-cont-18">DAY</div>
                    <div className="set-bento-title ch-cont-18">每日套餐</div>
                  </div>
                  <SetMenuFinal />
                  <SetMenuFinal />
                  <SetMenuFinal />
                  <SetMenuFinal />
                  <SetMenuFinal />
                  <SetMenuFinal />
                  <SetMenuFinal />
                </div>
                <div className="set-list-right col-5">
                  <div className="set-view-all ">
                    <div className="bento-view-buttom">
                      <div className="set-row">
                        <div className="btn-sm btn-primary primeal-btn-outline-sm mx-5">
                          btn-1
                        </div>
                        <div className="btn-sm btn-primary primeal-btn-outline-sm mx-5">
                          btn-2
                        </div>
                      </div>
                    </div>
                    <div className="bento-img-element mx-auto">
                      <img
                        src={require('./../../imgs/setorder/tokyo-salmon-set.png')}
                        alt="bento-image"
                      />
                    </div>
                    <div className="bento-sushi-menu"></div>
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

export default SetOrderFinal;
