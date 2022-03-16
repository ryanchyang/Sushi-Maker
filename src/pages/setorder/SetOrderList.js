import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import SetMenuList from './SetMenuList';
import './SetOrderAll.scss';
// import './SetOrderAll.scss';
function SetOrderList() {
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
                <div className="set-list-left">
                  <div className="set-menu-title row col-md-12">
                    <div className="set-day-title en-cont-18">DAY</div>
                    <div className="set-bento-title ch-cont-18">每日套餐</div>
                  </div>
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                </div>
                <div className="set-list-right">
                
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
                    <div className="bento-img-element">
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

export default SetOrderList;
