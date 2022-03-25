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
import NavPage from '../layout/components/NavPage';

function LatestNews(props) {
  // Navbar開關狀態(從App.js來)
  const { navIsOpen, setNavIsOpen } = props;
  // 從首頁進入Latest News的消息類型(網址參數)
  const { cate } = useParams();

  // 篩選蓋版開關狀態
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  // 新聞消息資料
  const [newsData, setNewsData] = useState([]);
  // 活動消息資料
  const [evntsData, setEvntsData] = useState([]);
  // 搜尋框開關
  const [search, setSearch] = useState(false);
  // 搜尋文字
  const [searchText, setSearchText] = useState('');

  // didMount AJAX 新聞
  const getNewsData = async () => {
    const res = await fetch(config.NEWS_PATH);
    const obj = await res.json();
    console.log('obj:', obj);
    setNewsData(obj.data);
  };

  // didMount AJAX 活動
  const getEvntsData = async () => {
    const res = await fetch(config.EVNTS_PATH);
    const obj = await res.json();
    console.log('obj:', obj);
    setEvntsData(obj.data);
  };

  // didMount 初始化要資料
  useEffect(() => {
    getNewsData();
    getEvntsData();
  }, []);

  // 搜尋框動態移動
  const searchBarHandler = () =>
    search
      ? { transform: 'translateX(0px) translateY(-7px)' }
      : { transform: 'translateX(280px) translateY(-7px)' };

  // TODO:處理搜尋框輸入
  const handleChangeSearch = e => {
    setSearchText(e.target.value);
  };

  // CSS樣式
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };

  return (
    <>
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
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
                    <div className="search-input d-flex justify-content-end align-items-center">
                      <input
                        type="text"
                        style={searchBarHandler()}
                        className="search-input-bar ch-cont-14"
                        value={searchText}
                        onChange={handleChangeSearch}
                        placeholder="Search"
                      ></input>
                    </div>
                    <div
                      className="search mx-2"
                      onClick={() => setSearch(!search)}
                    >
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
              </div>

              <div
                className="main-content"
                style={isOpenFilter ? hiddenBlock : showBlock}
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
                style={isOpenFilter ? showBlock : hiddenBlock}
              >
                {isOpenFilter && cate === 'news' && <NewsFilter />}
                {isOpenFilter && cate === 'events' && <EvntsFilter />}
              </div>
            </div>
            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default LatestNews;
