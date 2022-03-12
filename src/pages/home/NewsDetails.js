import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './news-details.scss';
function NewsDetails() {
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
              <div class="mobile-news-detail d-sm-none">
                <div class="ch-title-18 news-title">
                  春天來了! 羊羹櫻花凍口味新上市!
                </div>
                <div class="news-date-tag">
                  <div class="en-cont-14 news-date">2022.05.06</div>
                  <div class="ch-cont-14 news-tag">新品上市</div>
                </div>
                <div class="news-img">
                  <img src="/img/home/news/new-cherry-blossom.png" alt="news" />
                </div>
                <div class="ch-cont-16 news-content">
                  充滿粉紅氣息的春天終於來了! <br />
                  PRIMEAL推出粉色的羊羹櫻花凍口味壽司，清爽口感搭配淡淡的櫻花香，給您不一樣的2022春天!
                </div>
                <div class="ch-cont-14 news-warning">
                  ※ 商品均以實體成品為主，圖片僅供參考
                </div>
              </div>
            </div>

            {/* pc latest-news-content */}
            <div className="mycontainer d-none d-sm-block">
              <div class="pc-news-detail d-flex justify-content-between">
                <div class="pc-news-img">
                  <img src="/img/home/news/new-cherry-blossom.png" alt="news" />
                </div>
                <div className="pc-news-content">
                  <div class="ch-title-18 pc-news-title">
                    春天來了! 羊羹櫻花凍口味新上市!
                  </div>
                  <div class="pc-news-date-tag">
                    <div class="en-cont-14 pc-news-date">2022.05.06</div>
                    <div class="ch-cont-14 pc-news-tag">新品上市</div>
                  </div>
                  <div class="ch-cont-16 pc-new-text">
                    充滿粉紅氣息的春天終於來了! <br />
                    PRIMEAL推出粉色的羊羹櫻花凍口味壽司，清爽口感搭配淡淡的櫻花香，給您不一樣的2022春天!
                  </div>
                  <div class="ch-cont-14 pc-news-warning">
                    ※ 商品均以實體成品為主，圖片僅供參考
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
