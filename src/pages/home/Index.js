import { Header, Title, AsideLeft, AsideRight } from '../layout/Layout';
import './index.scss';

// 變色的classname屬性要用props傳送，用三元運算流程判斷
// React Observe 資料變化改變CSS https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E8%AA%8D%E8%AD%98-intersection-observer-api-%E5%AF%A6%E4%BD%9C-lazy-loading-%E5%92%8C-infinite-scroll-c8d434ad218c
function Index() {
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
                <div className="en-title-14-10 content-top d-flex justify-content-between">
                  <div className="col-12 number">NO.897532</div>
                  <div className="col-12 process">Constructing...</div>
                </div>
                {/* todo: content-bottom 當火車頭 */}
                <div className="content-bottom d-flex justify-content-evenly">
                  <div className="col-12 index-cube-img">
                    <img src="/img/home/intro-contructing.svg" alt="cube" />
                  </div>
                  <div className="col-12 index-cube-txt">
                    <img
                      src="/img/home/intro-contructing-txt.svg"
                      alt="description"
                    />
                  </div>
                </div>
              </div>
              {/* view product & scroll area */}
              <div className="en-title-14-5 view-product-area d-flex justify-content-end">
                <p>View Product</p>
                <div className="view-product-arrow">
                  <img src="/img/home/index-arrowsm.svg" alt="view-product" />
                </div>
              </div>
              <div className="scroll-hint">
                <p className="scroll-down">SCROLL</p>
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
                  <li>
                    <div className="promotion-card">
                      <div className="promotion-img">
                        <img
                          src="/img/home/sushi/鮪魚壽司.png"
                          alt="tuna-sushi"
                        />
                      </div>
                      <div className="ch-title-22 promotion-prod-ch-name">
                        鮪魚壽司
                      </div>
                      <div className="en-title-18 promotion-prod-en-name">
                        Tuna Sushi
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="promotion-card">
                      <div className="promotion-img">
                        <img
                          src="/img/home/sushi/鮪魚壽司.png"
                          alt="tuna-sushi"
                        />
                      </div>
                      <div className="ch-title-22 promotion-prod-ch-name">
                        鮪魚壽司
                      </div>
                      <div className="en-title-18 promotion-prod-en-name">
                        Tuna Sushi
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* just for you --> */}
            <div className="home-page">
              <Title title={'Just For You'} />
              {/* <div className="page-title">Just For You</div> */}
              <div className="en-title-14-5 index-category d-flex justify-content-evenly">
                <div className="col-12 index-category-name">CUSTOMIZATION</div>
                <div className="col-12 index-category-name">MEAL PLAN</div>
              </div>
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
              <div className="index-view-more d-flex justify-content-end">
                <p className="en-cont-14">Customization</p>
                <div className="view-product-arrow">
                  <img
                    src="/img/home/index-arrowsm-black.svg"
                    alt="view-customization"
                  />
                </div>
              </div>
            </div>
            {/* news  */}
            <div className="home-page">
              <Title title={'Latest News'} />
              {/* <div className="page-title">Latest News</div> */}
              <div className="en-title-14-5 index-category d-flex justify-content-evenly">
                <div className="col-8 index-category-name">NEWS</div>
                <div className="col-8 index-category-name">EVENTS</div>
                <div className="col-8 index-category-name">SHARE</div>
              </div>
              <div className="news-carousel-wrap d-flex overflow-hidden">
                <div className="col-24 lastest-new-content">
                  <div className="index-category-img news-img d-flex justify-content-center">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="promo01"
                    />
                  </div>
                  <div className="news-right-wrap">
                    <div className="news-content-top d-flex justify-content-between">
                      <div className="ch-title-22 alert-lightnews-title">
                        春天來了！
                      </div>
                      <div className="ch-cont-14 news-tag">新品上市</div>
                    </div>
                    <div className="ch-cont-14 news-date">2022.05.06</div>
                    <div className="ch-cont-14 news-text d-none d-md-block">
                      春天新品上市！
                      <br />
                      清爽羊羹搭配酸甜的櫻花口感
                      <br />
                      給你滿滿的初戀滋味
                    </div>
                  </div>
                </div>
                <div className="col-24 lastest-new-content">
                  <div className="index-category-img news-img d-flex justify-content-center">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="promo01"
                    />
                  </div>
                  <div className="news-right-wrap">
                    <div className="news-content-top d-flex justify-content-between">
                      <div className="news-title">春天來了！</div>
                      <div className="news-tag">新品上市</div>
                    </div>
                    <div className="news-date">2022.05.06</div>
                    <div className="news-text d-none d-md-block">
                      春天新品上市！
                      <br />
                      清爽羊羹搭配酸甜的櫻花口感
                      <br />
                      給你滿滿的初戀滋味
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-news-pagination">
                <div className="latest-news-left-arrow d-none d-md-block">
                  <img src="/img/home/left.svg" alt="left-arrow" />
                </div>
                <div className="latest-news-dots d-none d-md-block">
                  <ul className="pagination-list">
                    <li className="pagination-dots"></li>
                    <li className="pagination-dots"></li>
                    <li className="pagination-dots"></li>
                    <li className="pagination-dots"></li>
                    <li className="pagination-dots"></li>
                  </ul>
                </div>
                <div className="latest-news-right-arrow d-none d-md-block">
                  <img src="/img/home/right.svg" alt="right-arrow" />
                </div>
              </div>
              <div className="index-view-more d-flex justify-content-end">
                <p className="en-cont-14">Browse News</p>
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
