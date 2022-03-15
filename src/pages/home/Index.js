import { Header, Title, AsideLeft, AsideRight } from '../layout/Layout';
import './index.scss';
import './../../styles/global.scss';
import newsData from './news.json';
import evntsData from './evnts.json';
import promo from './promo.json';
import { useState, useEffect } from 'react';

// 變色的classname屬性要用props傳送，用三元運算流程判斷
// React Observe 資料變化改變CSS https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E8%AA%8D%E8%AD%98-intersection-observer-api-%E5%AF%A6%E4%BD%9C-lazy-loading-%E5%92%8C-infinite-scroll-c8d434ad218c
function Index() {
  const [jftFocus, setJftFocus] = useState('CUSTOMIZATION');
  const [latestNews, setLatestNews] = useState('NEWS');
  const [newsIndex, setNewsIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  // 初始化要資料
  useEffect(() => {}, []);

  useEffect(() => {
    setNewsIndex(0);
  }, [latestNews]);

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
    const text = e.target.innerText;
    switch (text) {
      case 'NEWS':
        setLatestNews('NEWS');
        break;
      case 'EVENTS':
        setLatestNews('EVENTS');
        break;
      case 'SHARES':
        setLatestNews('SHARES');
        break;
      default:
        setLatestNews('NEWS');
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

  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const showGray = { color: '#c4c4c4' };
  const hiddenGray = { color: '#212121' };

  return (
    <>
      <Header />
      <div className="home">
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={''} />
            <br />
            <div className="home-page">
              {/* PC index top */}
              {/* todo: scroll down opacity 0 */}
              <div className="d-none d-sm-block">
                <div className="pc-index-top">
                  <img src="/img/home/pc-logo+text.svg" alt="pc-logo" />
                </div>
              </div>
              {/* index content */}
              {/* todo: 下排圖片改變時，process的innerHTML要換字 */}
              <div className="index-content">
                <div className="en-title-14-5 content-top d-flex justify-content-between">
                  <div className="col-12 number">NO.897532</div>
                  <div className="col-12 process">Constructing...</div>
                </div>
                {/* todo: content-bottom 當火車頭 */}
                <div className="content-bottom d-flex justify-content-evenly">
                  <div className="col-12 index-cube-img">
                    <img src="/img/home/intro-constructing.svg" alt="cube" />
                  </div>
                  <div className="col-12 index-cube-txt">
                    <img
                      src="/img/home/intro-constructing-txt.svg"
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
                <p className="en-cont-12">View Product</p>
                <div className="view-product-arrow">
                  <img src="/img/home/index-arrowsm.svg" alt="view-product" />
                </div>
              </div>
              <div className="scroll-hint">
                <p className="scroll-down" style={{ cursor: 'pointer' }}>
                  SCROLL
                </p>
                <div className="vertical-line">
                  <img src="/img/home/intro-vertical-line.svg" alt="scroll" />
                </div>
              </div>
            </div>

            {/* about us */}
            <div className="home-page">
              <div className="en-title-24 about-us-title">About us</div>
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
                  <img src="/img/home/index-aboutus01.svg" alt="aboutus01" />
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
                  <img src="/img/home/index-aboutus02.svg" alt="aboutus02" />
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
                  <img src="/img/home/index-aboutus03.svg" alt="aboutus03" />
                </div>
              </div>
            </div>

            {/* promotion */}
            {/* todo scroll down to change bg color */}
            <div className="home-page">
              <Title title={'Promotion'} />
              <div className="promotion-wrap">
                <ul className="promotion-list">
                  {promo.map((v, i) => {
                    return (
                      <li
                        key={v.prod_id}
                        data-id={v.prod_id}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div
                          className={`bg${Math.ceil(i % 4) * 1} promotioncard`}
                        >
                          <div className="promotion-img">
                            <img
                              src="/img/home/sushi/鮪魚壽司.png"
                              alt="tuna-sushi"
                            />
                          </div>
                          <div className="ch-title-22 promotion-prod-ch-name">
                            {v.prod_ch_name}
                          </div>
                          <div className="en-cont-14 promotion-prod-en-name">
                            {v.prod_en_name}
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
              <Title title={'Just For You'} />
              {/* <div className="page-title">Just For You</div> */}
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
                      src="/img/home/jfy-mobile-img.svg"
                      alt="just-for-you"
                    />
                    <img
                      className="d-none d-sm-block"
                      src="/img/home/jfy-pc-img.svg"
                      alt="just-for-you"
                    />
                  </div>
                  <div className="just-for-you-txt">
                    <p className="ch-title-22 jfy-category-title">客製化服務</p>
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
                      src="/img/home/mealplan-bento.png"
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

              <div className="index-view-more d-flex justify-content-end align-items-center">
                <p className="en-cont-14">{jftFocus}</p>
                <div className="view-product-arrow">
                  <img
                    src="/img/home/index-arrowsm-black.svg"
                    alt="view-customization"
                  />
                </div>
              </div>
            </div>

            {/* latest news  */}
            <div className="home-page">
              <Title title={'Latest News'} />
              <div className="en-title-14-5 index-category d-flex justify-content-evenly">
                <div
                  className="col-8 index-category-name"
                  onClick={handleLatestNews}
                  style={latestNews === 'NEWS' ? hiddenGray : showGray}
                >
                  NEWS
                </div>
                <div
                  className="col-8 index-category-name"
                  onClick={handleLatestNews}
                  style={latestNews === 'EVENTS' ? hiddenGray : showGray}
                >
                  EVENTS
                </div>
                <div
                  className="col-8 index-category-name"
                  onClick={handleLatestNews}
                  style={latestNews === 'SHARES' ? hiddenGray : showGray}
                >
                  SHARES
                </div>
              </div>
              <div className="overflow-hidden">
                <div style={latestNews === 'NEWS' ? showBlock : hiddenBlock}>
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
                              src={'/img/home/news/' + v.news_img_path}
                              alt="news"
                            />
                          </div>
                          <div className="news-right-wrap">
                            <div className="news-content-top d-flex justify-content-between">
                              <div className="ch-title-22 news-title">
                                {v.news_title}
                              </div>
                              <div className="ch-cont-14 news-tag">
                                {v.news_cate}
                              </div>
                            </div>
                            <div className="ch-cont-14 news-date">
                              {v.news_start_date}
                            </div>
                            <div className="ch-cont-14 news-text d-none d-md-block">
                              {v.news_detail}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div style={latestNews === 'EVENTS' ? showBlock : hiddenBlock}>
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
                              src={'/img/home/evnts/' + v.evnts_img_path}
                              alt="news"
                            />
                          </div>
                          <div className="news-right-wrap">
                            <div className="news-content-top d-flex justify-content-between">
                              <div className="ch-title-22 news-title">
                                {v.evnts_title}
                              </div>
                              <div className="ch-cont-14 news-tag">
                                {v.evnts_cate}
                              </div>
                            </div>
                            <div className="ch-cont-14 news-date">
                              {v.evnts_date}
                            </div>
                            <div className="ch-cont-14 news-text d-none d-md-block">
                              {v.evnts_detail}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div style={latestNews === 'NEWS' ? showBlock : hiddenBlock}>
                <div className="latest-news-pagination">
                  <div className="latest-news-left-arrow d-none d-md-block">
                    <img
                      src="/img/home/left.svg"
                      alt="left-arrow"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        newsIndex > 1
                          ? setNewsIndex(+newsIndex - 1)
                          : setNewsIndex(0);
                      }}
                    />
                  </div>
                  <div className="latest-news-dots d-none d-md-block">
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
                  <div className="latest-news-right-arrow d-none d-md-block">
                    <img
                      src="/img/home/right.svg"
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
              <div style={latestNews === 'EVENTS' ? showBlock : hiddenBlock}>
                <div className="latest-news-pagination">
                  <div className="latest-news-left-arrow d-none d-md-block">
                    <img
                      src="/img/home/left.svg"
                      alt="left-arrow"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        newsIndex > 1
                          ? setNewsIndex(+newsIndex - 1)
                          : setNewsIndex(0);
                      }}
                    />
                  </div>
                  <div className="latest-news-dots d-none d-md-block">
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
                  <div className="latest-news-right-arrow d-none d-md-block">
                    <img
                      src="/img/home/right.svg"
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
              <div className="index-view-more d-flex justify-content-end align-items-center">
                <p className="en-cont-14">BROWSE {latestNews}</p>
                <div className="view-product-arrow">
                  <img
                    src="/img/home/index-arrowsm-black.svg"
                    alt="browse-news"
                  />
                </div>
              </div>
            </div>

            {/* footer */}
            {/* todo scroll down to change bg color */}
            <div className="home-page">
              <Title title={''} />
              <div className="footer-top">
                <img
                  src="/img/home/footer-toproduct-arrow.svg"
                  alt="to-product"
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="footer-logo d-none d-md-block">
                <img src="/img/home/footer-pc-logo.svg" alt="footer-logo" />
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
                  <img src="/img/home/facebook.svg" alt="facebook" />
                </div>
                <div className="footer-social-icon">
                  <img src="/img/home/twitter.svg" alt="twitter" />
                </div>
                <div className="footer-social-icon">
                  <img src="/img/home/instagram.svg" alt="instagram" />
                </div>
              </div>
              <div className="en-cont-12 footer-copy-right">
                PRIMEAL COPY RIGHT &copy; 2022
              </div>
            </div>
            {/* back to top */}
            <div className="back-to-top d-none d-sm-block">
              <p className="back-to-top-text">Back To Top</p>
              <img src="/img/home/index-backtotop.svg" alt="back-to-top" />
            </div>
          </div>
          <AsideRight />
        </div>
      </div>
    </>
  );
}

export default Index;
