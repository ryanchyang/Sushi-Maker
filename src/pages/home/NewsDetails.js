import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './news-details.scss';
import config from '../../Config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function NewsDetails() {
  const [newsDetail, setNewsDetail] = useState([]);

  const { id } = useParams();
  console.log('id:', id);

  const getNewsDetail = async () => {
    const res = await fetch(config.NEWSD_PATH + `?id=${id}`);
    const obj = await res.json();
    console.log('obj:', obj);
    setNewsDetail(obj.data);
  };

  useEffect(() => {
    getNewsDetail();
  }, []);

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
                  春天來了! 羊羹櫻花凍口味新上市!
                </div>
                <div className="news-date-tag">
                  <div className="en-cont-14 news-date">2022.05.06</div>
                  <div className="ch-cont-14 news-tag">新品上市</div>
                </div>
                <div className="news-img">
                  <img src="/img/home/news/new-cherry-blossom.png" alt="news" />
                </div>
                <div className="ch-cont-16 news-content">
                  充滿粉紅氣息的春天終於來了! <br />
                  PRIMEAL推出粉色的羊羹櫻花凍口味壽司，清爽口感搭配淡淡的櫻花香，給您不一樣的2022春天!
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
                      春天來了! 羊羹櫻花凍口味新上市!
                    </div>
                    <div className="pc-news-date-tag">
                      <div className="en-cont-14 pc-news-date">2022.05.06</div>
                      <div className="ch-cont-14 pc-news-tag">新品上市</div>
                    </div>
                    <div className="ch-cont-16 pc-new-text">
                      充滿粉紅氣息的春天終於來了! <br />
                      PRIMEAL推出粉色的羊羹櫻花凍口味壽司，清爽口感搭配淡淡的櫻花香，給您不一樣的2022春天!
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
