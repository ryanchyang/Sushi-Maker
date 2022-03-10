import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './lastest-news.scss';
import { useState } from 'react';

function LastestNews() {
  const [focus, setFocus] = useState('news');
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Latest News'} />
          <div className="news">
            <div className="mycontainer">
              {/* lastest-news top */}
              <div className="lastest-news-nav d-flex justify-content-between align-items-center">
                <div className="lastest-news-nav-breadcrumbs">
                  <p className="en-title-14-10">HOME / NEWS</p>
                </div>
                <div className="lastest-news-nav-right d-flex align-items-center">
                  <div className="search mx-2">
                    <img src="/img/home/search-icon.svg" alt="search" />
                  </div>
                  <div className="filter">
                    <img src="/img/home/filter-icon.svg" alt="filter" />
                  </div>
                </div>
              </div>

              {/* latest news category */}
              <div className="latest-news-category-box">
                <div className="category-name d-flex align-items-center">
                  {/* {focus === 'news' ? `<div className="diamond"></div>` : ''} */}
                  <div className="en-title-14-5">NEWS</div>
                </div>
                <div className="category-name d-flex align-items-center">
                  {/* {focus === 'events' ? `<div className="diamond"></div>` : ''} */}
                  <div className="diamond"></div>
                  <div className="en-title-14-5">EVNETS</div>
                </div>
                <div className="category-name d-flex align-items-center">
                  {/* {focus === 'shares' ? `<div className="diamond"></div>` : ''} */}
                  {/* <div className="diamond"></div> */}
                  <div className="en-title-14-5">SHARES</div>
                </div>
              </div>

              {/* news-content */}
              <div className="latest-news-content">
                <div className="col-24 col-md-10 col-lg-6 latest-news-card">
                  <div className="news-img">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="news"
                    />
                  </div>
                  <div className="news-text">
                    <div className="ch-title-16 news-title">
                      春天來了！羊羹櫻花凍新上市
                    </div>
                    <div className="news-content">
                      <div className="en-cont-14 news-date">2022.05.06</div>
                      <div className="en-cont-14 news-tag">新品上市</div>
                      <div className="view-arrow">
                        <img
                          src="/img/home/index-arrowsm-black.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-24 col-md-10 col-lg-6 latest-news-card">
                  <div className="news-img">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="news"
                    />
                  </div>
                  <div className="news-text">
                    <div className="ch-title-16 news-title">
                      春天來了！羊羹櫻花凍新上市
                    </div>
                    <div className="news-content">
                      <div className="en-cont-14 news-date">2022.05.06</div>
                      <div className="en-cont-14 news-tag">新品上市</div>
                      <div className="view-arrow">
                        <img
                          src="/img/home/index-arrowsm-black.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-24 col-md-10 col-lg-6 latest-news-card">
                  <div className="news-img">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="news"
                    />
                  </div>
                  <div className="news-text">
                    <div className="ch-title-16 news-title">
                      春天來了！羊羹櫻花凍新上市
                    </div>
                    <div className="news-content">
                      <div className="en-cont-14 news-date">2022.05.06</div>
                      <div className="en-cont-14 news-tag">新品上市</div>
                      <div className="view-arrow">
                        <img
                          src="/img/home/index-arrowsm-black.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-24 col-md-10 col-lg-6 latest-news-card">
                  <div className="news-img">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="news"
                    />
                  </div>
                  <div className="news-text">
                    <div className="ch-title-16 news-title">
                      春天來了！羊羹櫻花凍新上市
                    </div>
                    <div className="news-content">
                      <div className="en-cont-14 news-date">2022.05.06</div>
                      <div className="en-cont-14 news-tag">新品上市</div>
                      <div className="view-arrow">
                        <img
                          src="/img/home/index-arrowsm-black.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-24 col-md-10 col-lg-6 latest-news-card">
                  <div className="news-img">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="news"
                    />
                  </div>
                  <div className="news-text">
                    <div className="ch-title-16 news-title">
                      春天來了！羊羹櫻花凍新上市
                    </div>
                    <div className="news-content">
                      <div className="en-cont-14 news-date">2022.05.06</div>
                      <div className="en-cont-14 news-tag">新品上市</div>
                      <div className="view-arrow">
                        <img
                          src="/img/home/index-arrowsm-black.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-24 col-md-10 col-lg-6 latest-news-card">
                  <div className="news-img">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="news"
                    />
                  </div>
                  <div className="news-text">
                    <div className="ch-title-16 news-title">
                      春天來了！羊羹櫻花凍新上市
                    </div>
                    <div className="news-content">
                      <div className="en-cont-14 news-date">2022.05.06</div>
                      <div className="en-cont-14 news-tag">新品上市</div>
                      <div className="view-arrow">
                        <img
                          src="/img/home/index-arrowsm-black.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-24 col-md-10 col-lg-6 latest-news-card">
                  <div className="news-img">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="news"
                    />
                  </div>
                  <div className="news-text">
                    <div className="ch-title-16 news-title">
                      春天來了！羊羹櫻花凍新上市
                    </div>
                    <div className="news-content">
                      <div className="en-cont-14 news-date">2022.05.06</div>
                      <div className="en-cont-14 news-tag">新品上市</div>
                      <div className="view-arrow">
                        <img
                          src="/img/home/index-arrowsm-black.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-24 col-md-10 col-lg-6 latest-news-card">
                  <div className="news-img">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="news"
                    />
                  </div>
                  <div className="news-text">
                    <div className="ch-title-16 news-title">
                      春天來了！羊羹櫻花凍新上市
                    </div>
                    <div className="news-content">
                      <div className="en-cont-14 news-date">2022.05.06</div>
                      <div className="en-cont-14 news-tag">新品上市</div>
                      <div className="view-arrow">
                        <img
                          src="/img/home/index-arrowsm-black.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-24 col-md-10 col-lg-6 latest-news-card">
                  <div className="news-img">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="news"
                    />
                  </div>
                  <div className="news-text">
                    <div className="ch-title-16 news-title">
                      春天來了！羊羹櫻花凍新上市
                    </div>
                    <div className="news-content">
                      <div className="en-cont-14 news-date">2022.05.06</div>
                      <div className="en-cont-14 news-tag">新品上市</div>
                      <div className="view-arrow">
                        <img
                          src="/img/home/index-arrowsm-black.svg"
                          alt="arrow"
                        />
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

export default LastestNews;
