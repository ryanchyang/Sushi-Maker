import { Header, Title, AsideLeft, AsideRight } from '../layout/Layout';
import './index.scss';
import './../../styles/global.scss';
import newsData from './news.json';
import evntsData from './evnts.json';
// import promoData from './promo.json';
import sharesData from './shares.json';
import BackToTop from './components/BackToTop';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Entry from './components/Entry';
import NavPage from '../layout/components/NavPage';
import config from '../../Config';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Index(props) {
  // Navbar開關狀態、進場蓋版開關(從App.js來)
  const { navIsOpen, setNavIsOpen, entryOpen, setEntryOpen } = props;
  // promotion AJAX data狀態
  const [promoData, setPromoData] = useState([]);
  // just for you分類狀態
  const [jftFocus, setJftFocus] = useState('CUSTOMIZATION');
  // 最新消息分類狀態
  const [latestNewsCate, setLatestNewsCate] = useState('news');
  // 最新消息輪播index狀態
  const [newsIndex, setNewsIndex] = useState(0);
  // scroll down 改變背景
  const [changeBG, setChangeBG] = useState();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  // 儲存promotion offsetTop位置
  const [promoTop, setPromoTop] = useState();

  // 真實DOM ref
  const scrollTo = useRef();
  const processRef = useRef();
  const cubeImgRef = useRef();
  const textImgRef = useRef();

  // didMount AJAX 促銷產品
  const getPromoData = async () => {
    const res = await fetch(config.PROMO_PATH);
    const promoObj = await res.json();
    setPromoData(promoObj.data);
  };

  // 處理背景變色
  const changeBackground = () => {
    const promotionTop = document.querySelector('.promotion').offsetTop;
    const footerTop = document.querySelector('.index-footer').offsetTop;
    // console.log(promotionTop);
    if (promotionTop) {
      if (
        changeBG !== true &&
        (window.scrollY <= promotionTop - windowDimensions.height / 2 ||
          window.scrollY >= footerTop - windowDimensions.height / 3)
      ) {
        setChangeBG(true);
      } else if (
        changeBG !== false &&
        window.scrollY >= promotionTop - windowDimensions.height / 2
      ) {
        setChangeBG(false);
      }
    }
  };

  // 處理About us三頁的content進場
  const titleEnter = () => {
    const aboutus01 = document.querySelector('.about-us-content01');
    const aboutus02 = document.querySelector('.about-us-content02');
    const aboutus03 = document.querySelector('.about-us-content03');
    if (window.scrollY >= aboutus01.offsetTop - windowDimensions.height / 2) {
      const asideRightNav = document.querySelector('.asideRight-nav');
      asideRightNav.classList.add('fadeout');
      aboutus01.style.opacity = 1;
      aboutus01.style.transform = 'translateX(0px)';
    }
    if (window.scrollY >= aboutus02.offsetTop - windowDimensions.height / 2) {
      aboutus02.style.opacity = 1;
      aboutus02.style.transform = 'translateY(0px)';
    }
    if (window.scrollY >= aboutus03.offsetTop - windowDimensions.height / 2) {
      aboutus03.style.opacity = 1;
      aboutus03.style.transform = 'translateX(0px)';
    }
  };

  // 處理Intro製成變化圖片
  let start = 0;
  const changeCubeImg = () => {
    if (start > 2) {
      start = 0;
    }
    if (start === 0) {
      processRef.current.innerText = 'Constructing...';
      cubeImgRef.current.src =
        'http://localhost:3500/img/home/intro-constructing.svg';
      textImgRef.current.src =
        'http://localhost:3500/img/home/intro-constructing-txt.svg';
    } else if (start === 1) {
      processRef.current.innerText = 'Materializing...';
      cubeImgRef.current.src =
        'http://localhost:3500/img/home/intro-materializing.svg';
      textImgRef.current.src =
        'http://localhost:3500/img/home/intro-materializing-txt.svg';
    } else if (start === 2) {
      processRef.current.innerText = 'Printing...';
      cubeImgRef.current.src =
        'http://localhost:3500/img/home/intro-printing.svg';
      textImgRef.current.src =
        'http://localhost:3500/img/home/intro-printing-txt.svg';
    }
    start++;
  };

  // 處理Scroll To時，右側Nav上移並消失
  const navFly = () => {
    const asideRightNav = document.querySelector('.asideRight-nav');
    asideRightNav.classList.add('fadeout');
  };

  // 處理第一頁Scroll To
  const goToAboutUs = () => {
    const winWidth = window.innerWidth;
    if (winWidth < 576) {
      window.scrollTo({
        top: scrollTo.current.offsetTop,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: scrollTo.current.offsetTop - 150,
        behavior: 'smooth',
      });
    }

    navFly();
  };

  // 處理scroll時，asideNav的隱藏與顯示
  const asideNavHandler = () => {
    const asideRightNav = document.querySelector('.asideRight-nav');
    if (!asideRightNav.classList.contains('fadeout')) {
      if (window.scrollY >= windowDimensions.height) {
        asideRightNav.classList.add('fadeout');
      }
    } else if (window.scrollY <= windowDimensions.height / 2) {
      asideRightNav.classList.remove('fadeout');
    }
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

  // 處理latest news的carousel移動距離
  const changeContent = e => {
    const index = e.target.dataset.id;
    setNewsIndex(+index);
  };
  const checkTransform = newsIndex => {
    const winWidth = window.innerWidth;
    if (winWidth < 576) {
      // 手機版滿版移動
      return {
        transform: `translateX(${newsIndex * -100}vw)`,
        transition: '1.5s',
      };
    } else {
      // 電腦版75%移動
      return {
        transform: `translateX(${newsIndex * -75}vw)`,
        transition: '1.5s',
      };
    }
  };

  // didMount初始化
  // 1.設定Intro的setInterval
  // 2.促銷商品發送AJAX
  // 3.綁定window scroll event
  useEffect(() => {
    const intervalId = setInterval(changeCubeImg, 2000);
    getPromoData();
    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', titleEnter);
    window.addEventListener('scroll', asideNavHandler);
    setChangeBG(true);

    // 結束後移除事件
    return () => {
      window.removeEventListener('scroll', changeBackground);
      window.removeEventListener('scroll', titleEnter);
      window.removeEventListener('scroll', asideNavHandler);
      clearInterval(intervalId);
    };
  }, []);

  // 當Latest News分類有更新時，輪播牆的index回歸到0
  useEffect(() => {
    setNewsIndex(0);
  }, [latestNewsCate]);

  // 動態調整CSS inline style
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const showGray = { color: '#c4c4c4' };
  const hiddenGray = { color: '#212121' };
  const darkBG = {
    backgroundColor: '#212121',
    color: '#ffffff',
    transition: '1s',
  };
  const lightBG = { backgroundColor: '#f7f6f3', transition: '1s' };
  const focus = { backgroundColor: '#ff5656' };
  const normal = { backgroundColor: '#c4c4c4' };

  //

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
              windowDimensions={windowDimensions}
            />
            <div style={{ width: '100%' }}>
              <div className="home-page">
                <Title
                  title={''}
                  changeBG={changeBG}
                  setNavIsOpen={setNavIsOpen}
                />
                {/* PC index top 
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
                <div className="about-us-content01">
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
                <div className="about-us-content02">
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
                <div className="about-us-content03">
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
              <div className="home-page promotion">
                {/* <Title title={'Promotion'} /> */}
                <div className="page-title en-title-24">Promotion</div>
                <div className="promotion-wrap">
                  <ul className="promotion-list">
                    {promoData &&
                      promoData.map((v, i) => {
                        return (
                          <Link
                            to={`/classic/detail/${v.pid}`}
                            style={{ textDecoration: 'none' }}
                          >
                            <li key={'promo' + v.pid} data-id={v.pid}>
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
                                      `http://localhost:3500` +
                                      v.c_prod_img_path
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
                          </Link>
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
                    <div className="latest-news-left-arrow">
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
                              style={newsIndex === i ? focus : normal}
                              onClick={changeContent}
                            ></li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="latest-news-right-arrow">
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
                    <div className="latest-news-left-arrow">
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
                              style={newsIndex === i ? focus : normal}
                              onClick={changeContent}
                            ></li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="latest-news-right-arrow">
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
                    <div className="latest-news-left-arrow">
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
                              style={newsIndex === i ? focus : normal}
                              onClick={changeContent}
                            ></li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="latest-news-right-arrow">
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
              <div className="home-page index-footer">
                {/* <Title title={''} />*/}
                <div className="footer-top">
                  <Link to={'./classic'} style={{ textDecoration: 'none' }}>
                    <div className="footer-to-product">
                      <div className="footer-top-img">
                        <img
                          src={`http://localhost:3500/img/home/footer-toproduct-arrow02.svg`}
                          alt="to-product"
                          style={{ cursor: 'pointer' }}
                        />
                      </div>
                      <div className="circle-wrap">
                        <div className="box01"></div>
                        <div className="box02"></div>
                      </div>
                    </div>
                  </Link>
                </div>
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
              windowDimensions={windowDimensions}
              navIsOpen={navIsOpen}
              setNavIsOpen={setNavIsOpen}
            />
            <div className="asideRight-nav ch-title-16 d-none d-lg-block">
              <div className="asideRight-nav-text">
                <Link
                  to={'/'}
                  style={{ textDecoration: 'none', color: '#ffffff' }}
                >
                  關於我們
                </Link>
              </div>
              <div className="asideRight-nav-text">
                <Link
                  to={'/classic'}
                  style={{ textDecoration: 'none', color: '#ffffff' }}
                >
                  經典產品
                </Link>
              </div>
              <div className="asideRight-nav-text">
                <Link
                  to={'/customize'}
                  style={{ textDecoration: 'none', color: '#ffffff' }}
                >
                  客製產品
                </Link>
              </div>
              <div className="asideRight-nav-text">
                <Link
                  to={'/setorder/stepstart'}
                  style={{ textDecoration: 'none', color: '#ffffff' }}
                >
                  套餐規劃
                </Link>
              </div>
              <div className="asideRight-nav-text">
                <Link
                  to={'/share'}
                  style={{ textDecoration: 'none', color: '#ffffff' }}
                >
                  分享牆
                </Link>
              </div>
              <div className="asideRight-nav-text">
                <Link
                  to={'/latest-news/news'}
                  style={{ textDecoration: 'none', color: '#ffffff' }}
                >
                  最新消息
                </Link>
              </div>
              <div className="asideRight-nav-text">
                <Link
                  to={'/member'}
                  style={{ textDecoration: 'none', color: '#ffffff' }}
                >
                  會員中心
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
