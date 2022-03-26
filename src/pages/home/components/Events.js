import { Link } from 'react-router-dom';

function Events(props) {
  const { evntsData, searchText } = props;
  // [
  // {
  //     evnts_id: 1,
  //     evnts_title: '試吃餐會',
  //     evnts_cate: '品牌推廣',
  //     evnts_pres_num: 15,
  //     evnts_max_num: 20,
  //     evnts_signup_start_date: '2022-02-01',
  //     evnts_signup_end_date: '2022-04-30',
  //     evnts_date: '2022-05-20',
  //     evnts_start_time: '13:00',
  //     evnts_end_time: '17:00',
  //     evnts_location: '台北市大安區復興南路一段390號2樓',
  //     evnts_host: 'null',
  //     evnts_detail: '有吃過3D列印食物嗎? 快來參加PRIMEAL舉辦的試吃餐會，帶你認識3D列印食物的過程，試吃體驗全新不同的飲食口感。',
  //     evnts_img_path: '/img/home/evnts/event-1.png',
  //     status: '熱烈報名中'
  //   }
  // ]

  return (
    <>
      {evntsData.length === 0 ? (
        <div className="no-result">
          <div className="search-btn ch-title-22">
            <img
              src={`http://localhost:3500/img/home/search-icon.svg`}
              alt="search-icon"
            />
            <span>查無符合條件的商品，請重新篩選或清空篩選條件</span>
          </div>
        </div>
      ) : (
        <div className="latest-news-content">
          {evntsData
            .filter(
              value =>
                value.evnts_title.includes(searchText) ||
                value.evnts_cate.includes(searchText)
            )
            .map((v, i) => {
              return (
                <Link
                  to={'/latest-news/eventsdetail/' + v.evnts_id}
                  style={{ textDecoration: 'none', color: '#212121' }}
                  className="col-24 col-md-10 col-xl-6 latest-news-card"
                  key={v.evnts_id}
                  data-id={v.news_id}
                >
                  <div className="news-img">
                    <img
                      src={'http://localhost:3500' + v.evnts_img_path}
                      alt="events"
                    />
                  </div>
                  <div className="news-text">
                    <div className="evnts-wrap d-flex justify-content-between">
                      <div className="ch-title-16 news-title">
                        {v.evnts_title}
                      </div>
                      <div className="ch-cont-12 evnts-status">{v.status}</div>
                    </div>
                    <div className="news-content">
                      <div className="en-cont-14 news-date">{v.evnts_date}</div>
                      <div className="en-cont-14 news-tag">{v.evnts_cate}</div>
                      <div className="view-arrow">
                        <img
                          src={`http://localhost:3500/img/home/index-arrowsm-black.svg`}
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      )}
    </>
  );
}
export default Events;
