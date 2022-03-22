import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './evnts-details.scss';
import './../../styles/global.scss';
import config from '../../Config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavPage from '../layout/components/NavPage';

function EvntsDetails(props) {
  const { navIsOpen, setNavIsOpen } = props;
  const [evntsDetail, setEvntsDetail] = useState([]);
  const [active, setActive] = useState(null);
  const { id } = useParams();

  // get Data
  const getEvntsDetail = async () => {
    const res = await fetch(config.EVNTSD_PATH + `${id}`);
    const obj = await res.json();
    console.log('obj:', obj);
    setEvntsDetail(obj.data);
  };

  useEffect(() => {
    getEvntsDetail();
  }, []);

  // 判斷 Link to 是否可點擊
  useEffect(() => {
    const now = new Date();
    const evntsSingUpDate = new Date(
      evntsDetail[0]?.evnts_signup_start_date ?? ''
    );
    // console.log('now', now);
    // console.log('evntsSingUpDate', evntsSingUpDate);

    if (evntsSingUpDate > now) setActive(false);
    if (evntsSingUpDate < now) setActive(true);
  }, [evntsDetail]);

  // const hiddenBtn = { opacity: 0 };

  // 處理日期格式
  const dateFormat = date => {
    if (!date) {
      return '';
    } else {
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return [year, month, day].join('-');
    }
  };

  // 處理時間格式
  const timeFormat = time => {
    if (!time) {
      return '';
    } else {
      return time.substring(0, 5);
    }
  };

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
            <Title title={'Events'} />
            <div className="evnts">
              <div className="mycontainer">
                {/* lastest-news top */}
                <div className="lastest-news-nav d-flex justify-content-between align-items-center">
                  <div className="lastest-news-nav-breadcrumbs">
                    <p className="en-title-14-10">
                      HOME / LATEST NEWS / EVENTS
                    </p>
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
                        '/img/home/evnts/' + evntsDetail[0]?.evnts_img_path ??
                        ''
                      }
                      alt="events"
                    />
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
                    <div className="ch-cont-16 info-title">活動時間:</div>
                    <div className="ch-cont-16 info-content">
                      {timeFormat(evntsDetail[0]?.evnts_start_time ?? '')}-
                      {timeFormat(evntsDetail[0]?.evnts_end_time ?? '')}
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
                  <div className="ch-cont-16 evnts-content">
                    {evntsDetail[0]?.evnts_detail ?? ''}
                  </div>
                  <div
                    className={
                      active === null
                        ? 'mobile-sign-up-hidden'
                        : 'mobile-sign-up-show'
                    }
                  >
                    <div className="ch-title-18 signup-number">
                      目前已報名人數{' '}
                      <span>{evntsDetail[0]?.evnts_pres_num ?? ''}</span>人
                    </div>
                    <Link
                      to={
                        active
                          ? '/latest-news/eventsdetail/signup/' +
                              evntsDetail[0]?.evnts_id ?? ''
                          : '#'
                      }
                      style={{
                        textDecoration: 'none',
                      }}
                      className={active ? 'signupbtn' : 'signupbtn nopointer'}
                    >
                      <div
                        className={
                          active
                            ? 'btn-sm btn-primary primeal-btn d-flex justify-content-center align-items-center'
                            : 'btn-sm disabled ch-title-18 d-flex justify-content-center align-items-center'
                        }
                      >
                        {active ? '點我去報名' : '敬請期待'}
                      </div>
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
                        '/img/home/evnts/' + evntsDetail[0]?.evnts_img_path ??
                        ''
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
                        {dateFormat(
                          evntsDetail[0]?.evnts_signup_end_date ?? ''
                        )}
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
                        {timeFormat(evntsDetail[0]?.evnts_start_time ?? '')}-
                        {timeFormat(evntsDetail[0]?.evnts_end_time ?? '')}
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
                    <div className="ch-cont-16 pc-evnts-text">
                      {evntsDetail[0]?.evnts_detail ?? ''}
                    </div>
                    <div
                      className={
                        active === null ? 'pc-sign-up-in' : 'pc-sign-up-show'
                      }
                    >
                      <div className="ch-title-18 pc-signup-number">
                        目前已報名人數{' '}
                        <span>{evntsDetail[0]?.evnts_pres_num ?? ''}</span>人
                      </div>
                      <Link
                        to={
                          active
                            ? '/latest-news/eventsdetail/signup/' +
                                evntsDetail[0]?.evnts_id ?? ''
                            : '#'
                        }
                        style={{
                          textDecoration: 'none',
                        }}
                        className={
                          active ? 'pc-signupbtn' : 'pc-signupbtn nopointer'
                        }
                      >
                        <div
                          className={
                            active
                              ? 'btn-sm btn-primary primeal-btn d-flex justify-content-center align-items-center'
                              : 'btn-sm disabled d-flex justify-content-center align-items-center'
                          }
                        >
                          {active ? '點我去報名' : '敬請期待'}
                        </div>
                      </Link>
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

export default EvntsDetails;
