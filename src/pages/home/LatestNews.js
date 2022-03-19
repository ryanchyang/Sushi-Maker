import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import News from './components/News';
import './../../styles/global.scss';
// import Pagination from './components/Pagination';
import Events from './components/Events';
import NewsFilter from './components/NewsFilter';
import EvntsFilter from './components/EvntsFilter';
import './latest-news.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../Config';
import { Link } from 'react-router-dom';

function LatestNews() {
  const { cate } = useParams();
  console.log(cate);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  // const [focus, setFocus] = useState(cate);
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
  // const handleClickCategory = e => {
  //   switch (e.target.innerText.toLowercase()) {
  //     case 'news':
  //       setFocus('news');
  //       break;
  //     case 'events':
  //       setFocus('events');
  //       break;
  //     default:
  //       setFocus('news');
  //   }
  // };

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
                    <img
                      src={`http://localhost:3500/img/home/search-icon.svg`}
                      alt="search"
                    />
                  </div>
                  <div
                    className="filter"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setIsOpenFilter(!isOpenFilter);
                    }}
                  >
                    <img
                      src={`http://localhost:3500/img/home/filter-icon.svg`}
                      alt="filter"
                    />
                  </div>
                </div>
              </div>

              <div
                className="main-content"
                style={isOpenFilter ? hiddenStyle : showStyle}
              >
                {/* latest news category */}
                <div className="latest-news-category-box">
                  <Link
                    to={'/latest-news/news'}
                    style={{ textDecoration: 'none', color: '#212121' }}
                    className="category-name d-flex align-items-center"
                  >
                    {cate === 'news' ? (
                      <div className="diamond"></div>
                    ) : (
                      <div></div>
                    )}
                    <div
                      className="en-title-14-5"
                      style={{ cursor: 'pointer' }}
                      // onClick={handleClickCategory}
                    >
                      NEWS
                    </div>
                  </Link>
                  <Link
                    to={'/latest-news/events'}
                    style={{ textDecoration: 'none', color: '#212121' }}
                    className="category-name d-flex align-items-center"
                  >
                    {cate === 'events' ? (
                      <div className="diamond"></div>
                    ) : (
                      <div></div>
                    )}
                    <div
                      className="en-title-14-5"
                      style={{ cursor: 'pointer' }}
                      // onClick={handleClickCategory}
                    >
                      EVENTS
                    </div>
                  </Link>
                </div>

                {/* news-content */}
                {cate === 'news' && <News newsData={newsData} />}

                {/* events-content */}
                {cate === 'events' && <Events evntsData={evntsData} />}

                {/* pagination */}
                {/* <Pagination /> */}
              </div>

              {/* filter */}
              <div
                className="prod-filter"
                style={isOpenFilter ? showStyle : hiddenStyle}
              >
                {isOpenFilter && cate === 'news' && <NewsFilter />}
                {isOpenFilter && cate === 'events' && <EvntsFilter />}
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
