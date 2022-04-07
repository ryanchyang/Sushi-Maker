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
  const [fetchNewsData, setFetchNewsData] = useState([]);
  // 活動消息資料
  const [evntsData, setEvntsData] = useState([]);
  const [fetchEvntsData, setFetchEvntsData] = useState([]);
  // 搜尋框開關
  const [search, setSearch] = useState(false);
  // 搜尋文字
  const [searchText, setSearchText] = useState('');

  // NewsFilter的條件狀態
  // 依新聞日期搜尋([起始日, 結束日])
  const [newsDateFilter, setNewsDateFilter] = useState(['', '']);
  // 依新聞標籤搜尋
  const [newsTagFilter, setNewsTagFilter] = useState([
    { tag: '新品上市', value: false },
    { tag: '快閃特價', value: false },
    { tag: '季節特賣', value: false },
    { tag: '會員公告', value: false },
  ]);

  // EvntsFilter的條件狀態
  // 依活動日期搜尋([起始日, 結束日])
  const [evntsDateFilter, setEvntsDateFilter] = useState(['', '']);
  // 依活動標籤搜尋
  const [evntsTagFilter, setEvntsTagFilter] = useState([
    { tag: '講座活動', value: false },
    { tag: '親子活動', value: false },
    { tag: '品牌推廣', value: false },
  ]);
  // 依活動狀態搜尋
  const [evntsStatusFilter, setEvntsStatusFilter] = useState([
    { tag: '熱烈報名中', value: false },
    { tag: '即將額滿', value: false },
    { tag: '報名額滿', value: false },
    { tag: '報名截止', value: false },
  ]);

  // didMount AJAX 新聞
  const getNewsData = async () => {
    const res = await fetch(config.NEWS_PATH);
    const obj = await res.json();
    // console.log('obj:', obj);
    setFetchNewsData(obj.data);
    setNewsData(obj.data);
  };

  // didMount AJAX 活動
  const getEvntsData = async () => {
    const res = await fetch(config.EVNTS_PATH);
    const obj = await res.json();
    // console.log('obj:', obj);
    setFetchEvntsData(obj.data);
    setEvntsData(obj.data);
  };

  // didMount 初始化要資料
  useEffect(() => {
    getNewsData();
    getEvntsData();
  }, [cate]);

  // 搜尋框動態移動
  const searchBarHandler = () =>
    search
      ? { transform: 'translateX(0px) translateY(-7px)' }
      : { transform: 'translateX(350px) translateY(-7px)' };

  // 動態調整CSS inline style
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
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <Title title={'Latest News'} setNavIsOpen={setNavIsOpen} />
            <div className="latest-news min-hi">
              <div className="mycontainer">
                {/* latest-news top */}
                <div className="latest-news-nav d-flex justify-content-between align-items-center">
                  <div className="latest-news-nav-breadcrumbs">
                    <p className="en-title-14-10">
                      <Link
                        to={'/'}
                        style={{ textDecoration: 'none', color: '#575757' }}
                      >
                        HOME /{' '}
                      </Link>
                      <Link
                        to={'/latest-news/news'}
                        style={{ textDecoration: 'none', color: '#b03342' }}
                      >
                        LATEST NEWS
                      </Link>
                    </p>
                  </div>
                  <div className="latest-news-nav-right d-flex align-items-center">
                    <div className="search-input d-flex justify-content-end align-items-center">
                      <input
                        type="text"
                        style={searchBarHandler()}
                        className="search-input-bar ch-cont-14"
                        value={searchText}
                        onChange={e => {
                          setSearchText(e.target.value);
                          setNewsData(fetchNewsData);
                          setEvntsData(fetchEvntsData);
                        }}
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
                {cate === 'news' && (
                  <News newsData={newsData} searchText={searchText} />
                )}

                {/* events-content */}
                {cate === 'events' && (
                  <Events evntsData={evntsData} searchText={searchText} />
                )}

                {/* pagination */}
                {/* <Pagination /> */}
              </div>

              {/* filter */}
              <div
                className="prod-filter"
                style={isOpenFilter ? showBlock : hiddenBlock}
              >
                {isOpenFilter && cate === 'news' && (
                  <NewsFilter
                    newsData={newsData}
                    setNewsData={setNewsData}
                    setIsOpenFilter={setIsOpenFilter}
                    newsDateFilter={newsDateFilter}
                    setNewsDateFilter={setNewsDateFilter}
                    newsTagFilter={newsTagFilter}
                    setNewsTagFilter={setNewsTagFilter}
                    fetchNewsData={fetchNewsData}
                  />
                )}
                {isOpenFilter && cate === 'events' && (
                  <EvntsFilter
                    evntsData={evntsData}
                    setEvntsData={setEvntsData}
                    setIsOpenFilter={setIsOpenFilter}
                    evntsDateFilter={evntsDateFilter}
                    setEvntsDateFilter={setEvntsDateFilter}
                    evntsTagFilter={evntsTagFilter}
                    setEvntsTagFilter={setEvntsTagFilter}
                    evntsStatusFilter={evntsStatusFilter}
                    setEvntsStatusFilter={setEvntsStatusFilter}
                    fetchEvntsData={fetchEvntsData}
                  />
                )}
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
