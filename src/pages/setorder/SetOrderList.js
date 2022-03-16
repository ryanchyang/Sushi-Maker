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

              <div className="set-row set-list-all ">
                <div className="set-list-left  ">
                  <div className="set-input-all align-items-center">
                    <div className="set-input-from ch-cont-14">從</div>
                    <input class="set-input-date" type="date" />
                    <div className="set-input-from ch-cont-14">開始吃，</div>
                    <div className="set-input-from ch-cont-14">吃</div>
                    <select name="" id="" className="set-week">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                    </select>
                    <div className="set-input-from ch-cont-14">週。</div>
                  </div>
                  <div className="set-menu-title">
                    <div className="set-day-title en-cont-18">DAY</div>
                    <div className="set-bento-title ch-cont-16">每日套餐</div>
                  </div>
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                  <SetMenuList />
                </div>
                <div className="set-list-right col-8">
                  <div className="set-view-all p-5">
                  
                    <div className="bento-img-element mx-auto">
                      <img
                        src={require('./../../imgs/setorder/tokyo-salmon-set.png')}
                        alt="bento-image"
                      />
                    </div>
                    <div className="bento-view-buttom align-items-center">
                      <div className="set-nutrient-btn">
                      <div className="set-nutrient-bento-name ch-title-18">鮭魚便當</div>
                        <div className="btn-sm btn-primary primeal-btn-outline-sm mx-5 set-nutrient float-end">
                          營養成份
                        </div>
                      </div>
                    </div>
                    <div className="bento-sushi-menu-all">
                      <div className="bento-sushi-menu">
                        <div className="set-menu-sushi">
                          <div className="set-menu-sushi-ch ch-cont-16">
                            測試壽司1
                          </div>
                          <div className="set-menu-sushi-en en-cont-16 en-cont-16">
                            English name
                          </div>
                        </div>
                        <div className="set-menu-sushi">
                          <div className="set-menu-sushi-ch ch-cont-16">
                            測試壽司2
                          </div>
                          <div className="set-menu-sushi-en en-cont-16">
                            English name
                          </div>
                        </div>
                      </div>

                      <div className="bento-sushi-menu-all">
                        <div className="bento-sushi-menu">
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司1
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司2
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bento-sushi-menu-all">
                        <div className="bento-sushi-menu">
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司1
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司2
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bento-sushi-menu-all">
                        <div className="bento-sushi-menu">
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司1
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司2
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bento-sushi-menu-all">
                        <div className="bento-sushi-menu">
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司1
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                          <div className="set-menu-sushi">
                            <div className="set-menu-sushi-ch ch-cont-16">
                              測試壽司2
                            </div>
                            <div className="set-menu-sushi-en en-cont-16">
                              English name
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
