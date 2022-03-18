import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './evnts-details.scss';
import './../../styles/global.scss';
import config from '../../Config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function EvntsDetails() {
  const [evntsDetail, setEvntsDetail] = useState([]);
  const { id } = useParams();
  console.log('id:', id);

  const getEvntsDetail = async () => {
    console.log('hihi');
    const res = await fetch(config.EVNTSD_PATH + `${id}`);
    const obj = await res.json();
    console.log('obj:', obj);
    setEvntsDetail(obj.data);
  };

  useEffect(() => {
    console.log('hi');
    getEvntsDetail();
  }, []);

  // 處理時間格式
  const dateFormat = date => {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Events'} />
          <div className="evnts">
            <div className="mycontainer">
              {/* lastest-news top */}
              <div className="lastest-news-nav d-flex justify-content-between align-items-center">
                <div className="lastest-news-nav-breadcrumbs">
                  <p className="en-title-14-10">HOME / LATEST NEWS / EVENTS</p>
                </div>
              </div>

              {/* mobile events */}
              <div className="mobile-evnts-detail d-sm-none">
                <div className="ch-title-18 evnts-title">
                  {evntsDetail[0]?.evnts_title ?? ''}
                </div>
                <div className="evnts-date-tag">
                  <div className="en-cont-16 evnts-date">
                    {dateFormat(evntsDetail[0]?.evnts_date ?? '')}
                  </div>
                  <div className="ch-cont-16 evnts-tag">
                    {evntsDetail[0]?.evnts_cate ?? ''}
                  </div>
                </div>
                <div className="evnts-img">
                  <img
                    src={
                      '/img/home/evnts/' + evntsDetail[0]?.evnts_img_path ?? ''
                    }
                    alt="events"
                  />
                </div>
                <div className="evnts-info">
                  <div className="diamond"></div>
                  <div className="ch-cont-16 info-title">報名開始:</div>
                  <div className="ch-cont-16 info-content">
                    {dateFormat(evntsDetail[0]?.evnts_signup_start_date ?? '')}
                  </div>
                </div>
                <div className="evnts-info">
                  <div className="diamond"></div>
                  <div className="ch-cont-16 info-title">報名截止:</div>
                  <div className="ch-cont-16 info-content">
                    {dateFormat(evntsDetail[0]?.evnts_signup_end_date ?? '')}
                  </div>
                </div>
                <div className="evnts-info">
                  <div className="diamond"></div>
                  <div className="ch-cont-16 info-title">活動日期:</div>
                  <div className="ch-cont-16 info-content">
                    {dateFormat(evntsDetail[0]?.evnts_date ?? '')}
                  </div>
                </div>
                <div className="evnts-info">
                  <div className="diamond"></div>
                  <div className="ch-cont-16 info-title">活動時間:</div>
                  <div className="ch-cont-16 info-content">
                    {evntsDetail[0]?.evnts_start_time ?? ''}-
                    {evntsDetail[0]?.evnts_end_time ?? ''}
                  </div>
                </div>
                <div className="evnts-info">
                  <div className="diamond"></div>
                  <div className="ch-cont-16 info-title">活動地點:</div>
                  <div className="ch-cont-16 info-content">
                    {evntsDetail[0]?.evnts_location ?? ''}
                  </div>
                </div>
                <div className="evnts-info">
                  <div className="diamond"></div>
                  <div className="ch-cont-16 info-title">活動人數:</div>
                  <div className="ch-cont-16 info-content">
                    上限{evntsDetail[0]?.evnts_max_num ?? ''}人
                  </div>
                </div>
                <div className="evnts-info">
                  <div className="diamond"></div>
                  <div className="ch-cont-16 info-title">活動主講人:</div>
                  <div className="ch-cont-16 info-content">
                    {evntsDetail[0]?.evnts_host ?? ''}
                  </div>
                </div>
                <div className="ch-cont-16 evnts-content">
                  {evntsDetail[0]?.evnts_detail ?? ''}
                </div>
                <div className="ch-title-18 signup-number">
                  目前已報名人數{' '}
                  <span>{evntsDetail[0]?.evnts_pres_num ?? ''}</span>人
                </div>
                <div className="signupbtn">
                  <Link
                    to={
                      '/latest-news/eventsdetail/signup/' +
                        evntsDetail[0]?.evnts_id ?? ''
                    }
                    className="btn-sm btn-primary primeal-btn text-align-center"
                    style={{
                      textDecoration: 'none',
                      textAlign: 'center',
                      paddingTop: '7px',
                    }}
                  >
                    點我去報名
                  </Link>
                </div>
              </div>
            </div>
            {/* pc events */}
            <div className="mycontainer d-none d-sm-block">
              <div className="pc-evnts-detail d-flex justify-content-between">
                <div className="pc-evnts-img">
                  <img
                    src={
                      '/img/home/evnts/' + evntsDetail[0]?.evnts_img_path ?? ''
                    }
                    alt="events"
                  />
                </div>
                <div className="pc-evnts-content">
                  <div className="ch-title-22 pc-evnts-title">
                    {evntsDetail[0]?.evnts_title ?? ''}
                  </div>
                  <div className="pc-evnts-date-tag">
                    <div className="en-cont-16 pc-evnts-date">
                      {dateFormat(evntsDetail[0]?.evnts_date ?? '')}
                    </div>
                    <div className="ch-cont-16 pc-evnts-tag">
                      {evntsDetail[0]?.evnts_cate ?? ''}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 info-title">報名開始:</div>
                    <div className="ch-cont-16 info-content">
                      {dateFormat(
                        evntsDetail[0]?.evnts_signup_start_date ?? ''
                      )}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 info-title">報名截止:</div>
                    <div className="ch-cont-16 info-content">
                      {dateFormat(evntsDetail[0]?.evnts_signup_end_date ?? '')}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 info-title">活動日期:</div>
                    <div className="ch-cont-16 info-content">
                      {dateFormat(evntsDetail[0]?.evnts_date ?? '')}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 pc-info-title">活動時間:</div>
                    <div className="ch-cont-16 pc-info-content">
                      {evntsDetail[0]?.evnts_start_time ?? ''}-
                      {evntsDetail[0]?.evnts_end_time ?? ''}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 pc-info-title">活動地點:</div>
                    <div className="ch-cont-16 pc-info-content">
                      {evntsDetail[0]?.evnts_location ?? ''}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 pc-info-title">活動人數:</div>
                    <div className="ch-cont-16 pc-info-content">
                      上限{evntsDetail[0]?.evnts_max_num ?? ''}人
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 pc-info-title">活動主講人:</div>
                    <div className="ch-cont-16 pc-info-content">
                      {evntsDetail[0]?.evnts_host ?? ''}
                    </div>
                  </div>
                  <div className="ch-cont-16 pc-evnts-text">
                    {evntsDetail[0]?.evnts_detail ?? ''}
                  </div>
                  <div className="pc-sign-up-in">
                    <div className="ch-title-18 pc-signup-number">
                      目前已報名人數{' '}
                      <span>{evntsDetail[0]?.evnts_pres_num ?? ''}</span>人
                    </div>
                    <div className="pc-signupbtn">
                      <Link
                        to={
                          '/latest-news/eventsdetail/signup/' +
                            evntsDetail[0]?.evnts_id ?? ''
                        }
                        className="btn-sm btn-primary primeal-btn text-align-center"
                        style={{
                          textDecoration: 'none',
                          textAlign: 'center',
                          paddingTop: '7px',
                          width: '100px',
                        }}
                      >
                        點我去報名
                      </Link>
                    </div>
                  </div>
                </div>
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

export default EvntsDetails;
