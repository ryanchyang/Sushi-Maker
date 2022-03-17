import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import News from './components/News';
// import Pagination from './components/Pagination';
import Events from './components/Events';
import NewsFilter from './components/NewsFilter';
import EvntsFilter from './components/EvntsFilter';
import './latest-news.scss';
import { useState, useEffect } from 'react';
import config from '../../Config';

function LatestNews(props) {
  const { latestNewsCate } = props;
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [focus, setFocus] = useState(latestNewsCate);
  const [newsData, setNewsData] = useState([]);
  const [evntsData, setEvntsData] = useState([]);

  const getNewsData = async () => {
    const res = await fetch(config.NEWS_PATH);
    const obj = await res.json();
    console.log('obj:', obj);
    setNewsData(obj.data);
  };

  const getEvntsData = async () => {
    const res = await fetch(config.EVNTS_PATH);
    const obj = await res.json();
    console.log('obj:', obj);
    setEvntsData(obj.data);
  };

  // 初始化要資料
  useEffect(() => {
    getNewsData();
    getEvntsData();
  }, []);

  //處理點擊分類商品
  const handleClickCategory = e => {
    switch (e.target.innerText) {
      case 'NEWS':
        setFocus('NEWS');
        break;
      case 'EVENTS':
        setFocus('EVENTS');
        break;
      default:
        setFocus('news');
    }
  };

  const showStyle = { display: 'block' };
  const hiddenStyle = { display: 'none' };

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
                  <div className="search mx-2" style={{ cursor: 'pointer' }}>
                    <img src="/img/home/search-icon.svg" alt="search" />
                  </div>
                  <div
                    className="filter"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setIsOpenFilter(!isOpenFilter);
                    }}
                  >
                    <img src="/img/home/filter-icon.svg" alt="filter" />
                  </div>
                </div>
              </div>

              <div
                className="main-content"
                style={isOpenFilter ? hiddenStyle : showStyle}
              >
                {/* latest news category */}
                <div className="latest-news-category-box">
                  <div className="category-name d-flex align-items-center">
                    {focus === 'NEWS' ? (
                      <div className="diamond"></div>
                    ) : (
                      <div></div>
                    )}
                    <div
                      className="en-title-14-5"
                      style={{ cursor: 'pointer' }}
                      onClick={handleClickCategory}
                    >
                      NEWS
                    </div>
                  </div>
                  <div className="category-name d-flex align-items-center">
                    {focus === 'EVENTS' ? (
                      <div className="diamond"></div>
                    ) : (
                      <div></div>
                    )}
                    <div
                      className="en-title-14-5"
                      style={{ cursor: 'pointer' }}
                      onClick={handleClickCategory}
                    >
                      EVENTS
                    </div>
                  </div>
                </div>

                {/* news-content */}
                {focus === 'NEWS' && <News newsData={newsData} />}

                {/* events-content */}
                {focus === 'EVENTS' && <Events evntsData={evntsData} />}

                {/* pagination */}
                {/* <Pagination /> */}
              </div>

              {/* filter */}
              <div
                className="prod-filter"
                style={isOpenFilter ? showStyle : hiddenStyle}
              >
                {isOpenFilter && focus === 'NEWS' && (
                  <NewsFilter focus={focus} />
                )}
                {isOpenFilter && focus === 'EVENTS' && (
                  <EvntsFilter focus={focus} />
                )}
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

export default LatestNews;
