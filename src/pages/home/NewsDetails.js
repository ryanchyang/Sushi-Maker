import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './news-details.scss';
import config from '../../Config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function NewsDetails() {
  const [newsDetail, setNewsDetail] = useState([]);

  // SQL
  // [
  //   {
  //     news_id: 1,
  //     c_prod_id: 23,
  //     news_title: '春天來了! 羊羹櫻花凍壽司新上市',
  //     news_cate: '新品上市',
  //     news_start_date: 2022-02-28T16:00:00.000Z,
  //     news_end_date: 2022-04-29T16:00:00.000Z,
  //     news_detail: '充滿粉紅氣息的春天終於來了! PRIMEAL推出粉色的羊羹櫻花凍口味壽司，清爽口
  // 感搭配淡淡的櫻花香，給您不一樣的2022春天! ',
  //     news_upload_date: 2022-02-21T16:00:00.000Z,
  //     news_edit_datetime: Invalid Date,
  //     news_img_path: 'new-cherry-blossom.png',
  //     news_prod_url: 'null'
  //   }
  // ]

  const { id } = useParams();
  console.log('id:', id);

  const getNewsDetail = async () => {
    console.log('hi');
    const res = await fetch(config.NEWSD_PATH + `${id}`);
    const obj = await res.json();
    console.log('obj:', obj);
    setNewsDetail(obj.data);
    console.log(newsDetail);
  };

  useEffect(() => {
    getNewsDetail();
  }, []);

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
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'News'} />
          <div className="news">
            <div className="mycontainer">
              {/* lastest-news top */}
              <div className="lastest-news-nav d-flex justify-content-between align-items-center">
                <div className="lastest-news-nav-breadcrumbs">
                  <p className="en-title-14-10">HOME / LATEST NEWS / NEWS</p>
                </div>
              </div>

              {/* mobile latest-news-content */}
              <div className="mobile-news-detail d-sm-none">
                <div className="ch-title-18 news-title">
                  {newsDetail[0].news_title}
                </div>
                <div className="news-date-tag">
                  <div className="en-cont-14 news-date">
                    {dateFormat(newsDetail[0].news_start_date)}
                  </div>
                  <div className="ch-cont-14 news-tag">
                    {newsDetail[0].news_cate}
                  </div>
                </div>
                <div className="news-img">
                  <img src="/img/home/news/new-cherry-blossom.png" alt="news" />
                </div>
                <div className="ch-cont-16 news-content">
                  {newsDetail[0].news_detail}
                </div>
                <div className="ch-cont-14 news-warning">
                  ※ 商品均以實體成品為主，圖片僅供參考
                </div>
              </div>
            </div>

            {/* pc latest-news-content */}
            <div className="d-none d-sm-block min-hi">
              <div className="mycontainer">
                <div className="pc-news-detail d-flex justify-content-between">
                  <div className="pc-news-img">
                    <img
                      src="/img/home/news/new-cherry-blossom.png"
                      alt="news"
                    />
                  </div>
                  <div className="pc-news-content">
                    <div className="ch-title-18 pc-news-title">
                      {newsDetail[0].news_title}
                    </div>
                    <div className="pc-news-date-tag">
                      <div className="en-cont-14 pc-news-date">
                        {dateFormat(newsDetail[0].news_start_date)}
                      </div>
                      <div className="ch-cont-14 pc-news-tag">
                        {newsDetail[0].news_cate}
                      </div>
                    </div>
                    <div className="ch-cont-16 pc-new-text">
                      {newsDetail[0].news_detail}
                    </div>
                    <div className="ch-cont-14 pc-news-warning">
                      ※ 商品均以實體成品為主，圖片僅供參考
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

export default NewsDetails;
