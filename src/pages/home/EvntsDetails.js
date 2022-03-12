import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './evnts-details.scss';
import './../../styles/global.scss';
function EvntsDetails() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Events'} />
          <div className="evnts">
            <div className="mycontainer">
              {/* lastest-news top */}
              <div className="lastest-news-nav d-flex justify-content-between align-items-center">
                <div className="lastest-news-nav-breadcrumbs">
                  <p className="en-title-14-10">HOME / LATEST NEWS / EVENTS</p>
                </div>
              </div>

              {/* mobile events */}
              <div class="mobile-evnts-detail d-sm-none">
                <div class="ch-title-18 evnts-title">PRIMEAL試吃餐會</div>
                <div class="evnts-date-tag">
                  <div class="en-cont-14 evnts-date">2022.05.20</div>
                  <div class="ch-cont-14 evnts-tag">品牌推廣</div>
                </div>
                <div class="evnts-img">
                  <img src="/img/home/evnts/event-1.png" alt="events" />
                </div>
                <div className="evnts-info">
                  <div className="diamond"></div>
                  <div className="ch-cont-12 info-title">活動時間:</div>
                  <div className="ch-cont-12 info-content">13:00-16:00</div>
                </div>
                <div className="evnts-info">
                  <div className="diamond"></div>
                  <div className="ch-cont-12 info-title">活動地點:</div>
                  <div className="ch-cont-12 info-content">
                    台北市大安區復興南路一段390號2樓
                  </div>
                </div>
                <div className="evnts-info">
                  <div className="diamond"></div>
                  <div className="ch-cont-12 info-title">活動人數:</div>
                  <div className="ch-cont-12 info-content">上限20人</div>
                </div>
                <div className="evnts-info">
                  <div className="diamond"></div>
                  <div className="ch-cont-12 info-title">活動主講人:</div>
                  <div className="ch-cont-12 info-content">旭收 老師</div>
                </div>
                <div class="ch-cont-14 evnts-content">
                  有吃過3D列印食物嗎? <br />
                  快來參加PRIMEAL舉辦的試吃餐會，帶你認識3D列印食物的過程，試吃體驗全新不同的飲食口感。
                </div>
                <div className="ch-title-14 signup-number">
                  目前已報名人數 19人
                </div>
                <div className="signupbtn">
                  <button className="btn-sm btn-primary primeal-btn text-align-center">
                    點我去報名
                  </button>
                </div>
              </div>
            </div>
            {/* pc events */}
            <div className="mycontainer d-none d-sm-block">
              <div className="pc-evnts-detail d-flex justify-content-between">
                <div class="pc-evnts-img">
                  <img src="/img/home/evnts/event-1.png" alt="events" />
                </div>
                <div className="pc-evnts-content">
                  <div class="ch-title-18 pc-evnts-title">PRIMEAL試吃餐會</div>
                  <div class="pc-evnts-date-tag">
                    <div class="en-cont-14 pc-evnts-date">2022.05.20</div>
                    <div class="ch-cont-14 pc-evnts-tag">品牌推廣</div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-12 pc-info-title">活動時間:</div>
                    <div className="ch-cont-12 pc-info-content">
                      13:00-16:00
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-12 pc-info-title">活動地點:</div>
                    <div className="ch-cont-12 pc-info-content">
                      台北市大安區復興南路一段390號2樓
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-12 pc-info-title">活動人數:</div>
                    <div className="ch-cont-12 pc-info-content">上限20人</div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-12 pc-info-title">活動主講人:</div>
                    <div className="ch-cont-12 pc-info-content">旭收 老師</div>
                  </div>
                  <div class="ch-cont-14 pc-evnts-text">
                    有吃過3D列印食物嗎? <br />
                    快來參加PRIMEAL舉辦的試吃餐會，帶你認識3D列印食物的過程，試吃體驗全新不同的飲食口感。
                  </div>
                  <div className="pc-sign-up-in">
                    <div className="ch-title-14 pc-signup-number">
                      目前已報名人數 19人
                    </div>
                    <div className="pc-signupbtn">
                      <button className="btn-sm btn-primary primeal-btn text-align-center">
                        點我去報名
                      </button>
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

export default EvntsDetails;
