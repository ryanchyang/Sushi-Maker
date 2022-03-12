import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './evnts-signup.scss';
function EvntsSignUp() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Events'} />
          <div className="evnts-signup">
            <div className="mycontainer">
              {/* lastest-news top */}
              <div className="lastest-news-nav d-flex justify-content-between align-items-center">
                <div className="lastest-news-nav-breadcrumbs">
                  <p className="en-title-14-10">HOME / LATEST NEWS / EVENTS</p>
                </div>
              </div>

              {/* evnts-signup */}
              <div className="evnts-block">
                <div className="evnts-info-area">
                  <div className="evnts-info-top d-flex">
                    <div className="evnts-info-top-text">
                      <div class="ch-title-18 evnts-title">PRIMEAL試吃餐會</div>
                      <div class="en-cont-14 evnts-date">2022.05.20</div>
                      <div class="ch-cont-14 evnts-tag">品牌推廣</div>
                    </div>
                    <div class="evnts-img">
                      <img src="/img/home/evnts/event-1.png" alt="events" />
                    </div>
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
                </div>
                <div className="evnts-signup-area ch-cont-14">
                  <form>
                    <div className="singup-column d-flex justify-content-between align-items-center">
                      <label htmlFor="form-label">參加者姓名</label>
                      <label className="form-label text-primary ch-cont-12">
                        必填
                      </label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="參加者姓名"
                      required
                    />
                    <div className="singup-column d-flex justify-content-between align-items-center">
                      <label htmlFor="form-label ">連絡電話</label>
                      <label className="form-label text-primary ch-cont-12">
                        必填
                      </label>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="09XX-XXX-XXX"
                      required
                    />
                    <div className="singup-column d-flex justify-content-between align-items-center">
                      <label htmlFor="form-label">連絡Email</label>
                      <label className="form-label text-primary ch-cont-12">
                        必填
                      </label>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="123@test.com"
                      required
                    />
                    <div className="ch-cont-12">(活動通知將透過Email發送)</div>
                    <label htmlFor="form-label mr-5" className="singup-column">
                      參加人數
                    </label>
                    <select className="form-select">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <div className="singup-column sign-up-comment">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label ch-cont-14"
                      >
                        特殊備註
                      </label>
                      <textarea
                        className="form-control textarea"
                        id="signup-comment"
                        maxRows="5"
                      ></textarea>
                    </div>
                    <div className="button-group">
                      <button className="btn-sm btn-primary primeal-btn primeal-btn-outline mx-1">
                        重新填寫
                      </button>
                      <button className="btn-sm btn-primary primeal-btn mx-1">
                        送出報名
                      </button>
                    </div>
                  </form>
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

export default EvntsSignUp;
