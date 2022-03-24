import { Header, Title, AsideLeft, AsideRight } from '../layout/Layout';
import './index.scss';
import './../../styles/global.scss';
import newsData from './news.json';
import evntsData from './evnts.json';
// import promoData from './promo.json';
import sharesData from './shares.json';
import BackToTop from './components/BackToTop';
import { useWindowScroll } from 'react-use';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Entry from './components/Entry';
import NavPage from '../layout/components/NavPage';
import config from '../../Config';

function Index(props) {
  const { navIsOpen, setNavIsOpen, entryOpen, setEntryOpen } = props;
  const [latestNewsCate, setLatestNewsCate] = useState('news');
  const [jftFocus, setJftFocus] = useState('CUSTOMIZATION');
  const [newsIndex, setNewsIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [changeBG, setChangeBG] = useState(null);
  const [promoData, setPromoData] = useState([]);

  const { y: pageYOffset } = useWindowScroll();

  const scrollTo = useRef();
  const processRef = useRef();
  const cubeImgRef = useRef();
  const textImgRef = useRef();

  const getPromoData = async () => {
    const res = await fetch(config.PROMO_PATH);
    const promoObj = await res.json();
    console.log('promoObj:', promoObj);
    setPromoData(promoObj.data);
  };

  // ToDo:初始化要資料
  useEffect(() => {
    // setEntryOpen(true);
    setTime();
    getPromoData();
  }, []);

  useEffect(() => {
    setNewsIndex(0);
  }, [latestNewsCate]);

  // 處理背景變色
  console.log('pageYOffset:', pageYOffset);
  useEffect(() => {
    if (pageYOffset <= 3500 || pageYOffset >= 6800) {
      setChangeBG(true);
    } else if (pageYOffset > 3500) {
      setChangeBG(false);
    }
  }, [pageYOffset]);

  // 處理Intro製成變化圖片
  let start = 0;
  const setTime = () => {
    setInterval(changeCubeImg, 2000);
  };
  const changeCubeImg = () => {
    if (start > 2) {
      start = 0;
    }
    if (start === 0) {
      // console.log('0');
      processRef.current.innerText = 'Constructing...';
      cubeImgRef.current.src =
        'http://localhost:3500/img/home/intro-constructing.svg';
      textImgRef.current.src =
        'http://localhost:3500/img/home/intro-constructing-txt.svg';
    } else if (start === 1) {
      // console.log('1');
      processRef.current.innerText = 'Materializing...';
      cubeImgRef.current.src =
        'http://localhost:3500/img/home/intro-materializing.svg';
      textImgRef.current.src =
        'http://localhost:3500/img/home/intro-materializing-txt.svg';
    } else if (start === 2) {
      // console.log('2');
      processRef.current.innerText = 'Printing...';
      cubeImgRef.current.src =
        'http://localhost:3500/img/home/intro-printing.svg';
      textImgRef.current.src =
        'http://localhost:3500/img/home/intro-printing-txt.svg';
    }
    start++;
  };

  // 處理第一頁Scroll To
  const goToAboutUs = () =>
    window.scrollTo({
      top: scrollTo.current.offsetTop - 150,
      behavior: 'smooth',
    });

  // 處理carousel hover
  // ToDo: hover會停止 + 無限輪播牆改用js改寫
  const handleMouseEnter = e => {
    console.log('enter');
    console.log(e.target.dataset.id);
    setIsHover(true);
    if (isHover) {
    }
  };
  const handleMouseLeave = e => {
    console.log('leave');
  };

  // 處理just for you類別切換
  const handleJustForYou = e => {
    const text = e.target.innerText;
    switch (text) {
      case 'CUSTOMIZATION':
        setJftFocus('CUSTOMIZATION');
        break;
      case 'MEAL PLAN':
        setJftFocus('MEAL PLAN');
        break;
      default:
        setJftFocus('CUSTOMIZATION');
    }
  };

  // 處理latest news類別切換
  const handleLatestNews = e => {
    const text = e.target.innerText.toLowerCase();
    switch (text) {
      case 'news':
        setLatestNewsCate('news');
        break;
      case 'events':
        setLatestNewsCate('events');
        break;
      case 'shares':
        setLatestNewsCate('shares');
        break;
      default:
        setLatestNewsCate('news');
    }
  };

  // 處理latest news的carousel
  const changeContent = e => {
    const index = e.target.dataset.id;
    setNewsIndex(+index);
  };
  const checkTransform = newsIndex => {
    return {
      transform: `translateX(${newsIndex * -75}vw)`,
      transition: '1.5s',
    };
  };

  // 動態調整CSS inline style
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const showGray = { color: '#c4c4c4' };
  const hiddenGray = { color: '#212121' };
  const darkBG = {
    backgroundColor: '#212121',
    color: '#ffffff',
    transition: '1.5s',
  };
  const lightBG = { backgroundColor: '#f7f6f3', transition: '1.5s' };

  return (
    <>
      <Header />
      {entryOpen && <Entry entryOpen={entryOpen} setEntryOpen={setEntryOpen} />}
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div className="home" style={changeBG ? darkBG : lightBG}>
          <div style={{ display: 'flex' }}>
            <AsideLeft
              changeBG={changeBG}
              setChangeBG={setChangeBG}
              pageYOffset={pageYOffset}
            />
            <div style={{ width: '100%' }}>
              <div className="home-page">
                <Title title={''} />
                {/* PC index top */}
                {/* todo: scroll down opacity 0 */}
                {/*{pageYOffset < 900 && (
                  <div className="d-none d-sm-block">
                    <div className="pc-index-top">
                      <img
                        src={`http://localhost:3500/img/home/pc-logo+text.svg`}
                        alt="pc-logo"
                      />
                    </div>
                  </div>
                )}*/}

                {/* index content */}
                <div className="index-content">
                  <div className="en-title-14-5 content-top d-flex justify-content-between">
                    <div className="col-12 number">NO.897532</div>
                    <div className="col-12 process" ref={processRef}>
                      Constructing...
                    </div>
                  </div>
                  <div className="content-bottom d-flex justify-content-evenly">
                    <div className="col-12 index-cube-img">
                      <img
                        ref={cubeImgRef}
                        src={`http://localhost:3500/img/home/intro-constructing.svg`}
                        alt="cube"
                      />
                    </div>
                    <div className="col-12 index-cube-txt">
                      <img
                        ref={textImgRef}
                        src={`http://localhost:3500/img/home/intro-constructing-txt.svg`}
                        alt="description"
                      />
                    </div>
                  </div>
                </div>
                {/* view product & scroll area */}
                <div
                  className="view-product-area d-flex justify-content-end align-items-center"
                  style={{ cursor: 'pointer' }}
                >
                  <Link
                    to={'/classic'}
                    className="en-cont-12"
                    style={{
                      textDecoration: 'none',
                      color: '#ffffff',
                    }}
                  >
                    View Product
                  </Link>
                  <div className="view-product-arrow">
                    <img
                      src={`http://localhost:3500/img/home/index-arrowsm.svg`}
                      alt="view-product"
                    />
                  </div>
                </div>
                <div className="scroll-hint" style={{ cursor: 'pointer' }}>
                  <p className="scroll-down" onClick={goToAboutUs}>
                    SCROLL
                  </p>
                  <div className="vertical-line">
                    <img
                      src={`http://localhost:3500/img/home/intro-vertical-line.svg`}
                      alt="scroll"
                    />
                  </div>
                </div>
              </div>

              {/* about us */}
              <div className="home-page">
                <div className="en-title-24 about-us-title" ref={scrollTo}>
                  About us
                </div>
                <div className="about-us-content">
                  <div className="about-us-text-area">
                    <div className="about-title">
                      <p className="ch-title-22 about-ch-title">創造新食感</p>
                      <p className="en-title-14-10 about-en-title">
                        Create New Taste
                      </p>
                    </div>
                    <div className="about-content">
                      <p className="ch-cont-14 about-ch-content">
                        新穎的3D食品列印技術 <br />
                        前所未有的口感與視覺衝擊
                      </p>
                    </div>
                  </div>
                  <div className="about-img">
                    <img
                      src={`http://localhost:3500/img/home/index-aboutus01.svg`}
                      alt="aboutus01"
                    />
                  </div>
                </div>
              </div>
              <div className="home-page">
                <div className="en-title-24 about-us-title">About us</div>
                <div className="about-us-content">
                  <div className="about-us-text-area">
                    <div className="about-title">
                      <p className="ch-title-22 about-ch-title">精準客製飲食</p>
                      <p className="en-title-14-10 about-en-title">
                        Customized Diet
                      </p>
                    </div>
                    <div className="about-content">
                      <p className="ch-cont-14 about-ch-content">
                        量身打造的菜單
                        <br />
                        精準掌握營養素的攝取
                      </p>
                    </div>
                  </div>
                  <div className="about-img">
                    <img
                      src={`http://localhost:3500/img/home/index-aboutus02.svg`}
                      alt="aboutus02"
                    />
                  </div>
                </div>
              </div>
              <div className="home-page">
                <div className="en-title-24 about-us-title">About us</div>
                <div className="about-us-content">
                  <div className="about-us-text-area">
                    <div className="about-title">
                      <p className="ch-title-22 about-ch-title">食物藝術</p>
                      <p className="en-title-14-10 about-en-title">Food Art</p>
                    </div>
                    <div className="about-content">
                      <p className="ch-cont-14 about-ch-content">
                        餐桌上不再是平凡無奇的菜餚
                        <br />
                        而是豐富的食物藝術品
                      </p>
                    </div>
                  </div>
                  <div className="about-img">
                    <img
                      src={`http://localhost:3500/img/home/index-aboutus03.svg`}
                      alt="aboutus03"
                    />
                  </div>
                </div>
              </div>

              {/* promotion */}
              {/* todo scroll down to change bg color */}
              <div className="home-page">
                {/* <Title title={'Promotion'} /> */}
                <div className="page-title en-title-24">Promotion</div>
                <div className="promotion-wrap">
                  <ul className="promotion-list">
                    {promoData &&
                      promoData.map((v, i) => {
                        return (
                          <li
                            key={'promo' + v.pid}
                            data-id={v.pid}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div
                              className={`bg${
                                Math.ceil(i % 4) * 1
                              } promotioncard`}
                            >
                              <div className="en-cont-28 promotion-tag">
                                {v.c_prod_special_tag}
                              </div>
                              <div className="promotion-img">
                                <img
                                  src={
                                    `http://localhost:3500` + v.c_prod_img_path
                                  }
                                  alt="tuna-sushi"
                                />
                              </div>
                              <div className="ch-title-22 promotion-prod-ch-name">
                                {v.c_prod_ch_name}
                              </div>
                              <div className="en-cont-14 promotion-prod-en-name">
                                {v.c_prod_en_name}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>

              {/* just for you --> */}
              <div className="home-page">
                {/*<Title title={'Just For You'} />*/}
                <div className="page-title en-title-24">Just For You</div>
                <div className="en-title-14-5 index-category d-flex justify-content-evenly">
                  <div
                    className="col-12 index-category-name"
                    onClick={handleJustForYou}
                    style={jftFocus === 'CUSTOMIZATION' ? hiddenGray : showGray}
                  >
                    CUSTOMIZATION
                  </div>
                  <div
                    className="col-12 index-category-name"
                    onClick={handleJustForYou}
                    style={jftFocus === 'MEAL PLAN' ? hiddenGray : showGray}
                  >
                    MEAL PLAN
                  </div>
                </div>

                <div
                  style={jftFocus === 'CUSTOMIZATION' ? showBlock : hiddenBlock}
                >
                  <div className="index-category-content">
                    <div className="index-category-img d-flex justify-content-center">
                      <img
                        className="d-sm-none"
                        src={`http://localhost:3500/img/home/jfy-mobile-img.svg`}
                        alt="just-for-you"
                      />
                      <img
                        className="d-none d-sm-block"
                        src={`http://localhost:3500/img/home/jfy-pc-img.svg`}
                        alt="just-for-you"
                      />
                    </div>
                    <div className="just-for-you-txt">
                      <p className="ch-title-22 jfy-category-title">
                        客製化服務
                      </p>
                      <p className="ch-cont-14 jfy-category-content">
                        創意打造專屬你的壽司
                        <br />
                        漂亮擺盤，經驗你的視覺感官
                      </p>
                    </div>
                  </div>
                </div>

                <div style={jftFocus === 'MEAL PLAN' ? showBlock : hiddenBlock}>
                  <div className="index-category-content">
                    <div className="index-category-img d-flex justify-content-center">
                      <img
                        src={`http://localhost:3500/img/home/mealplan-bento.png`}
                        alt="just-for-you"
                        style={{
                          width: '60%',
                          boxShadow: '2px 2px 5px 2px #c4c4c4',
                        }}
                      />
                    </div>
                    <div className="just-for-you-txt">
                      <p className="ch-title-22 jfy-category-title mt-5">
                        套餐規劃
                      </p>
                      <p className="ch-cont-14 jfy-category-content">
                        量身訂做每日套餐
                        <br />
                        讓您7天/14天/21天，天天有驚喜
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to={() => {
                    switch (jftFocus) {
                      case 'CUSTOMIZATION':
                        return `${'/customize'}`;
                      case 'MEAL PLAN':
                        return `${'/setorder/stepstart'}`;
                      default:
                        return `${'/customize'}`;
                    }
                  }}
                  className="index-view-more d-flex justify-content-end align-items-center"
                  style={{
                    textDecoration: 'none',
                    color: '#212121',
                  }}
                >
                  <p className="en-cont-14">{jftFocus}</p>
                  <div className="view-product-arrow">
                    <img
                      src={`http://localhost:3500/img/home/index-arrowsm-black.svg`}
                      alt="view-customization"
                    />
                  </div>
                </Link>
              </div>

              {/* latest news  */}
              <div className="home-page">
                {/*<Title title={'Latest News'} />*/}
                <div className="page-title en-title-24">Latest News</div>
                <div className="en-title-14-5 index-category d-flex justify-content-evenly">
                  <div
                    className="col-8 index-category-name"
                    onClick={handleLatestNews}
                    style={latestNewsCate === 'news' ? hiddenGray : showGray}
                  >
                    NEWS
                  </div>
                  <div
                    className="col-8 index-category-name"
                    onClick={handleLatestNews}
                    style={latestNewsCate === 'events' ? hiddenGray : showGray}
                  >
                    EVENTS
                  </div>
                  <div
                    className="col-8 index-category-name"
                    onClick={handleLatestNews}
                    style={latestNewsCate === 'shares' ? hiddenGray : showGray}
                  >
                    SHARES
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div
                    style={latestNewsCate === 'news' ? showBlock : hiddenBlock}
                  >
                    <div
                      className="news-carousel-wrap d-flex"
                      style={checkTransform(newsIndex)}
                    >
                      {newsData.map(v => {
                        return (
                          <div
                            className="col-24 latest-new-content"
                            key={v.news_id}
                          >
                            <div className="index-category-img news-img d-flex justify-content-center">
                              <img
                                src={`http://localhost:3500` + v.news_img_path}
                                alt="news"
                              />
                            </div>
                            <div className="news-right-wrap">
                              <div className="news-content-top d-flex justify-content-between align-items-center">
                                <div className="ch-title-18 news-title">
                                  {v.news_title}
                                </div>
                                <div className="ch-cont-14 news-tag">
                                  {v.news_cate}
                                </div>
                              </div>
                              <div className="ch-cont-14 news-date">
                                {v.news_start_date}
                              </div>
                              <div className="ch-cont-14 news-text">
                                {v.news_detail}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    style={
                      latestNewsCate === 'events' ? showBlock : hiddenBlock
                    }
                  >
                    <div
                      className="news-carousel-wrap d-flex"
                      style={checkTransform(newsIndex)}
                    >
                      {evntsData.map(v => {
                        return (
                          <div
                            className="col-24 latest-new-content"
                            key={v.evnts_id}
                          >
                            <div className="index-category-img news-img d-flex justify-content-center">
                              <img
                                src={`http://localhost:3500${v.evnts_img_path}`}
                                alt="news"
                              />
                            </div>
                            <div className="news-right-wrap">
                              <div className="news-content-top d-flex justify-content-between align-items-center">
                                <div className="ch-title-18 news-title">
                                  {v.evnts_title}
                                </div>
                                <div className="ch-cont-14 news-tag">
                                  {v.evnts_cate}
                                </div>
                              </div>
                              <div className="ch-cont-14 news-date">
                                {v.evnts_date}
                              </div>
                              <div className="ch-cont-14 news-text">
                                {v.evnts_detail}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    style={
                      latestNewsCate === 'shares' ? showBlock : hiddenBlock
                    }
                  >
                    <div
                      className="news-carousel-wrap d-flex"
                      style={checkTransform(newsIndex)}
                    >
                      {sharesData.map(v => {
                        return (
                          <div
                            className="col-24 latest-new-content"
                            key={v.share_item_id}
                          >
                            <div className="index-category-img shares-img d-flex justify-content-center">
                              <img
                                src={`http://localhost:3500/` + v.share_imgPath}
                                alt="news"
                              />
                            </div>
                            <div className="news-right-wrap">
                              <div className="news-content-top d-flex justify-content-between align-items-center">
                                <div className="ch-title-18 news-title">
                                  {v.share_title}
                                </div>
                                <div className="ch-cont-14 news-tag">
                                  {v.item_hash}
                                </div>
                              </div>
                              {/*<div className="ch-cont-14 news-date">
                                {v.news_start_date}
                              </div>*/}
                              <div className="ch-cont-14 news-text">
                                {v.share_desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div
                  style={latestNewsCate === 'news' ? showBlock : hiddenBlock}
                >
                  <div className="latest-news-pagination">
                    <div className="latest-news-left-arrow d-none d-sm-block">
                      <img
                        src={`http://localhost:3500/img/home/left.svg`}
                        alt="left-arrow"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          newsIndex > 1
                            ? setNewsIndex(+newsIndex - 1)
                            : setNewsIndex(0);
                        }}
                      />
                    </div>
                    <div className="latest-news-dots d-none d-sm-block">
                      <ul className="pagination-list">
                        {newsData.map((v, i) => {
                          return (
                            <li
                              className="pagination-dots"
                              key={i}
                              data-id={i}
                              onClick={changeContent}
                            ></li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="latest-news-right-arrow d-none d-sm-block">
                      <img
                        src={`http://localhost:3500/img/home/right.svg`}
                        alt="right-arrow"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          newsIndex < newsData.length - 1
                            ? setNewsIndex(+newsIndex + 1)
                            : setNewsIndex(newsData.length - 1);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={latestNewsCate === 'events' ? showBlock : hiddenBlock}
                >
                  <div className="latest-news-pagination">
                    <div className="latest-news-left-arrow d-none d-sm-block">
                      <img
                        src={`http://localhost:3500/img/home/left.svg`}
                        alt="left-arrow"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          newsIndex > 1
                            ? setNewsIndex(+newsIndex - 1)
                            : setNewsIndex(0);
                        }}
                      />
                    </div>
                    <div className="latest-news-dots d-none d-sm-block">
                      <ul className="pagination-list">
                        {evntsData.map((v, i) => {
                          return (
                            <li
                              className="pagination-dots"
                              key={i}
                              data-id={i}
                              onClick={changeContent}
                            ></li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="latest-news-right-arrow d-none d-sm-block">
                      <img
                        src={`http://localhost:3500/img/home/right.svg`}
                        alt="right-arrow"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          newsIndex < newsData.length - 1
                            ? setNewsIndex(+newsIndex + 1)
                            : setNewsIndex(newsData.length - 1);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={latestNewsCate === 'shares' ? showBlock : hiddenBlock}
                >
                  <div className="latest-news-pagination">
                    <div className="latest-news-left-arrow d-none d-sm-block">
                      <img
                        src={`http://localhost:3500/img/home/left.svg`}
                        alt="left-arrow"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          newsIndex > 1
                            ? setNewsIndex(+newsIndex - 1)
                            : setNewsIndex(0);
                        }}
                      />
                    </div>
                    <div className="latest-news-dots d-none d-sm-block">
                      <ul className="pagination-list">
                        {sharesData.map((v, i) => {
                          return (
                            <li
                              className="pagination-dots"
                              key={i}
                              data-id={i}
                              onClick={changeContent}
                            ></li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="latest-news-right-arrow d-none d-sm-block">
                      <img
                        src={`http://localhost:3500/img/home/right.svg`}
                        alt="right-arrow"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          newsIndex < newsData.length - 1
                            ? setNewsIndex(+newsIndex + 1)
                            : setNewsIndex(newsData.length - 1);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <Link
                  to={() => {
                    switch (latestNewsCate) {
                      case 'news':
                        return `${'/latest-news/' + latestNewsCate}`;
                      case 'events':
                        return `${'/latest-news/' + latestNewsCate}`;
                      case 'shares':
                        return `${'/share'}`;
                      default:
                        return `${'/latest-news/news'}`;
                    }
                  }}
                  className="index-view-more d-flex justify-content-end align-items-center"
                  style={{
                    textDecoration: 'none',
                    color: '#212121',
                  }}
                >
                  <p className="en-cont-14">
                    BROWSE {latestNewsCate.toUpperCase()}
                  </p>
                  <div className="view-product-arrow">
                    <img
                      src={`http://localhost:3500/img/home/index-arrowsm-black.svg`}
                      alt="browse-news"
                    />
                  </div>
                </Link>
              </div>

              {/* footer */}
              <div className="home-page">
                {/* <Title title={''} />*/}
                <Link
                  to={'./classic'}
                  className="footer-top"
                  style={{ textDecoration: 'none' }}
                >
                  <img
                    src={`http://localhost:3500/img/home/footer-toproduct-arrow.svg`}
                    alt="to-product"
                    style={{ cursor: 'pointer' }}
                  />
                </Link>
                <div className="footer-logo d-none d-md-block">
                  <img
                    src={`http://localhost:3500/img/home/footer-pc-logo.svg`}
                    alt="footer-logo"
                  />
                </div>
                <div className="footer-bottom">
                  <div className="footer-contact">
                    <p className="en-title-14-10 footer-slogan">
                      Print A Wonderful Life
                    </p>
                  </div>
                  <div className="footer-link-area">
                    <ul className="ch-cont-12 footer-link">
                      <li>關於我們</li>
                      <li>聯繫我們</li>
                      <li>加入我們</li>
                    </ul>
                    <ul className="ch-cont-12 footer-link">
                      <li>隱私權</li>
                      <li>客服中心</li>
                    </ul>
                  </div>
                </div>
                <div className="footer-social">
                  <div className="footer-social-icon">
                    <img
                      src={`http://localhost:3500/img/home/facebook.svg`}
                      alt="facebook"
                    />
                  </div>
                  <div className="footer-social-icon">
                    <img
                      src={`http://localhost:3500/img/home/twitter.svg`}
                      alt="twitter"
                    />
                  </div>
                  <div className="footer-social-icon">
                    <img
                      src={`http://localhost:3500/img/home/instagram.svg`}
                      alt="instagram"
                    />
                  </div>
                </div>
                <div className="en-cont-12 footer-copy-right">
                  PRIMEAL COPY RIGHT &copy; 2022
                </div>
              </div>
              {/* back to top */}
              <BackToTop />
            </div>
            <AsideRight
              changeBG={changeBG}
              setChangeBG={setChangeBG}
              pageYOffset={pageYOffset}
              navIsOpen={navIsOpen}
              setNavIsOpen={setNavIsOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
