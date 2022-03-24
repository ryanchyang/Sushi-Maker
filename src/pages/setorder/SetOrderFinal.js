import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import SetMenuFinal from './components/SetMenuFinal';
import { Link, useHistory } from 'react-router-dom';
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
                    <div className="bento-view-buttom"></div>
                    <div className="bento-sushi-menu"></div>
                  </div>
                  <div className="set-list-down row  d-flex justify-content-center justify-content-md-end mx-5 px-5">
                    <Link to="./setorderList">
                      <div className="set-order-list-buttom float-end btn btn-sm btn-outline-primary primeal-btn-outline-sm">
                        下一步
                      </div>
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

export default SetOrderFinal;
