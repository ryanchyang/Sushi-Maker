function Events(props) {
  const { evntsData } = props;
  // console.log('props:', props);
  // [
  //     {
  //         evnts_id: 1,
  //         evnts_title: '試吃餐會',
  //         evnts_cate: '品牌推廣',
  //         evnts_pres_num: 18,
  //         evnts_max_num: 20,
  //         evnts_signup_start_date: 2022 - 01 - 31T16: 00: 00.000Z,
  //         evnts_signup_end_date: 2022 - 04 - 29T16: 00: 00.000Z,
  //         evnts_date: 2022 - 05 - 19T16: 00: 00.000Z,
  //         evnts_start_time: '13:00:00',
  //         evnts_end_time: '17:00:00',
  //         evnts_location: '台北市大安區復興南路一段390號2樓',
  //         evnts_host: 'null',
  //         evnts_detail: '有吃過3D列印食物嗎? 快來參加PRIMEAL舉辦的試吃餐會，帶你認識3D列印食物的過程，試吃體驗全新不同的飲食口感。',
  //         evnts_upload_date: 2022 - 01 - 24T16: 00: 00.000Z,
  //         evnts_edit_datetime: 2022 - 03 - 31T00: 00: 00.000Z,
  //         evnts_img_path: 'event-1.png'
  //     }
  // ]

  // 調整SQL時間格式
  
  const dateFormat = date => {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };


  // 計算報名人數後回傳狀態
  const status = (pres, max, start, end) => {
    console.log('hi');
    let msg = '';
    const now = new Date();
    const startD = new Date(start);
    const endD = new Date(end);
    if (startD < now && endD > now) {
      const percentage = parseInt(pres) / parseInt(max);
      if (percentage === 1) {
        msg = '報名額滿';
      } else if (percentage < 1 && percentage >= 0.8) {
        msg = '即將額滿';
      } else if (percentage < 0.8) {
        msg = '熱烈報名中';
      }
    } else if (startD > now && endD > now) {
      msg = '敬請期待';
    } else if (endD < now) {
      msg = '報名截止';
    }
    return msg;
  };

  return (
    <>
      <div className="latest-news-content">
        {evntsData.map((v, i) => {
          return (
            <div
              className="col-24 col-md-10 col-xl-6 latest-news-card"
              key={v.evnts_id}
            >
              <div className="news-img">
                <img src={'/img/home/evnts/' + v.evnts_img_path} alt="events" />
              </div>
              <div className="news-text">
                <div className="evnts-wrap d-flex justify-content-between">
                  <div className="ch-title-16 news-title">{v.evnts_title}</div>
                  <div className="ch-cont-12 evnts-status">
                    {status(
                      v.evnts_pres_num,
                      v.evnts_max_num,
                      v.evnts_signup_start_date,
                      v.evnts_signup_end_date
                    )}
                  </div>
                </div>
                <div className="news-content">
                  <div className="en-cont-14 news-date">
                    {dateFormat(v.evnts_date)}
                  </div>
                  <div className="en-cont-14 news-tag">{v.evnts_cate}</div>
                  <div className="view-arrow">
                    <img src="/img/home/index-arrowsm-black.svg" alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Events;
