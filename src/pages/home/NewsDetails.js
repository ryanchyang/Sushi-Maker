import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './news-details.scss';
import config from '../../Config';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavPage from '../layout/components/NavPage';

function NewsDetails(props) {
  const { navIsOpen, setNavIsOpen } = props;
  const [newsDetail, setNewsDetail] = useState([]);
  const [notice, setNotice] = useState('');
  const { id } = useParams();
  // console.log('news_id:', id);

  const getNewsDetail = async () => {
    // console.log('hi');
    const res = await fetch(config.NEWSD_PATH + `${id}`);
    const obj = await res.json();
    setNewsDetail(obj.data);
  };

  useEffect(() => {
    getNewsDetail();

    const cate = newsDetail[0]?.news_cate ?? '';
    if (cate === '會員公告') {
      setNotice('');
    } else {
      setNotice('※ 商品均以實體成品為主，圖片僅供參考');
    }
  }, [newsDetail]);

  // [
  //   {
  //     news_id: 1,
  //     c_prod_id: 23,
  //     news_title: '春天來了! 羊羹櫻花凍壽司新上市',
  //     news_cate: '新品上市',
  //     news_start_date: '2022-03-01',
  //     news_end_date: '2022-04-30',
  //     news_detail: '充滿粉紅氣息的春天終於來了! PRIMEAL推出粉色的羊羹櫻花凍口味壽司，清爽口感搭配淡淡的櫻花香，給您不一樣的2022春天! ',
  //     news_img_path: '/img/home/news/new-cherry-blossom.png',
  //     news_prod_url: 'null'
  //   }
  // ]

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
            <Title title={'News'} setNavIsOpen={setNavIsOpen} />
            <div className="news">
              <div className="mycontainer">
                {/* latest-news top */}
                <div className="latest-news-nav d-flex justify-content-between align-items-center">
                  <div className="latest-news-nav-breadcrumbs">
                    <p className="en-title-14-10" style={{ color: '#b03342' }}>
                      <Link
                        to={'/'}
                        style={{ textDecoration: 'none', color: '#575757' }}
                      >
                        HOME / {''}
                      </Link>
                      <Link
                        to={'/latest-news/news'}
                        style={{ textDecoration: 'none', color: '#575757' }}
                      >
                        LATEST NEWS / {''}
                      </Link>
                      <Link
                        to={'/latest-news/news'}
                        style={{ textDecoration: 'none', color: '#b03342' }}
                      >
                        NEWS {''}
                      </Link>
                    </p>
                  </div>
                </div>

                {/* mobile latest-news-content */}
                <div className="mobile-news-detail d-sm-none min-hi">
                  <div className="ch-title-18 news-title">
                    {newsDetail[0]?.news_title ?? ''}
                  </div>
                  <div className="news-date-tag">
                    <div className="en-cont-14 news-date">
                      {newsDetail[0]?.news_start_date ?? ''} -{' '}
                      {newsDetail[0]?.news_end_date ?? ''}
                    </div>
                    <div className="ch-cont-14 news-tag">
                      {newsDetail[0]?.news_cate ?? ''}
                    </div>
                  </div>
                  <div className="news-img">
                    <img
                      src={
                        `http://localhost:3500` +
                          newsDetail[0]?.news_img_path ?? ''
                      }
                      alt="news"
                    />
                  </div>
                  <div className="ch-cont-16 news-content">
                    {newsDetail[0]?.news_detail ?? ''}
                  </div>
                  <div className="ch-cont-14 news-warning">{notice}</div>
                </div>
              </div>

              {/* pc latest-news-content */}
              <div className="d-none d-sm-block min-hi">
                <div className="mycontainer">
                  <div className="pc-news-detail d-flex justify-content-between">
                    <div className="pc-news-img">
                      <img
                        src={
                          `http://localhost:3500` +
                            newsDetail[0]?.news_img_path ?? ''
                        }
                        alt="news"
                      />
                    </div>
                    <div className="pc-news-content">
                      <div className="ch-title-18 pc-news-title">
                        {newsDetail[0]?.news_title ?? ''}
                      </div>
                      <div className="pc-news-date-tag">
                        <div className="en-cont-14 pc-news-date">
                          {newsDetail[0]?.news_start_date ?? ''} -{' '}
                          {newsDetail[0]?.news_end_date ?? ''}
                        </div>
                        <div className="ch-cont-14 pc-news-tag">
                          {newsDetail[0]?.news_cate ?? ''}
                        </div>
                      </div>
                      <div className="ch-cont-16 pc-new-text">
                        {newsDetail[0]?.news_detail ?? ''}
                      </div>
                      <div className="ch-cont-14 pc-news-warning">{notice}</div>
                    </div>
                  </div>
                </div>
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

export default NewsDetails;
