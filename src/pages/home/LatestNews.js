import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import News from './components/News';
import Pagination from './components/Pagination';
import Events from './components/Events';
import NewsFilter from './components/NewsFilter';
import EvntsFilter from './components/EvntsFilter';
import './latest-news.scss';
import { useState } from 'react';

function LatestNews() {
  const [focus, setFocus] = useState('news');
  const changeFocus = event => {
    console.log('hi');
    // setFocus()
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Latest News'} />
          <div className="latest-news">
            <div className="mycontainer">
              {/* lastest-news top */}
              <div className="lastest-news-nav d-flex justify-content-between align-items-center">
                <div className="lastest-news-nav-breadcrumbs">
                  <p className="en-title-14-10">HOME / LATEST NEWS</p>
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
                  {focus === 'news' ? (
                    <div className="diamond"></div>
                  ) : (
                    <div></div>
                  )}
                  <div
                    className="en-title-14-5"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      changeFocus();
                    }}
                  >
                    NEWS
                  </div>
                </div>
                <div className="category-name d-flex align-items-center">
                  {focus === 'events' ? (
                    <div className="diamond"></div>
                  ) : (
                    <div></div>
                  )}
                  <div className="en-title-14-5" style={{ cursor: 'pointer' }}>
                    EVNETS
                  </div>
                </div>
                <div className="category-name d-flex align-items-center">
                  {focus === 'shares' ? (
                    <div className="diamond"></div>
                  ) : (
                    <div></div>
                  )}
                  <div className="en-title-14-5" style={{ cursor: 'pointer' }}>
                    SHARES
                  </div>
                </div>
              </div>

              {/* news-content */}
              <News />

              {/* events-content */}
              <Events />
              {/* pagination */}
              <Pagination />
            </div>
          </div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default LatestNews;
