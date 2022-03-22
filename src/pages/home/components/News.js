import { Link } from 'react-router-dom';

function News(props) {
  const { newsData } = props;

  // console.log('props:', props);

  // News Data :
  // [
  //     {
  //       news_id: 1,
  //       c_prod_id: 23,
  //       news_title: '春天來了! 羊羹櫻花凍壽司新上市',
  //       news_cate: '新品上市',
  //       news_start_date: 2022-02-28T16:00:00.000Z,
  //       news_end_date: 2022-04-29T16:00:00.000Z,
  //       news_detail: '充滿粉紅氣息的春天終於來了! PRIMEAL推出粉色的羊羹櫻花凍口味壽司，清爽口感搭配淡淡的櫻
  //   花香，給您不一樣的2022春天! ',
  //       news_upload_date: 2022-02-21T16:00:00.000Z,
  //       news_edit_datetime: Invalid Date,
  //       news_img_path: '/img/home/news/new-cherry-blossom.png',
  //       news_prod_url: 'null'
  //     }
  // ]

  // 處理時間格式
  const dateFormat = date => {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  return (
    <>
      <div className="latest-news-content">
        {newsData.map((v, i) => {
          return (
            <Link
              to={'/latest-news/newsdetail/' + v.news_id}
              style={{ textDecoration: 'none', color: '#212121' }}
              className="col-24 col-md-10 col-xl-6 latest-news-card"
              key={v.news_id}
              data-id={v.news_id}
            >
              <div className="news-img">
                <img src={'/img/home/news/' + v.news_img_path} alt="news" />
              </div>
              <div className="news-text">
                <div className="ch-title-16 news-title">{v.news_title}</div>
                <div className="news-content">
                  <div className="en-cont-14 news-date">
                    {dateFormat(v.news_start_date)}
                  </div>
                  <div className="en-cont-14 news-tag">{v.news_cate}</div>
                  <div className="view-arrow">
                    <img src="/img/home/index-arrowsm-black.svg" alt="arrow" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default News;

/*
<div className="latest-news-content">
  <div className="col-24 col-md-10 col-xl-6 latest-news-card">
    <div className="news-img">
      <img src="/img/home/news/new-cherry-blossom.png" alt="news" />
    </div>
    <div className="news-text">
      <div className="ch-title-16 news-title">春天來了！羊羹櫻花凍新上市</div>
      <div className="news-content">
        <div className="en-cont-14 news-date">2022.05.06</div>
        <div className="en-cont-14 news-tag">新品上市</div>
        <div className="view-arrow">
          <img src="/img/home/index-arrowsm-black.svg" alt="arrow" />
        </div>
      </div>
    </div>
  </div>
</div>
*/
