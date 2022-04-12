import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import NavPage from '../layout/components/NavPage';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getAuthToken } from '../../utils';
import config from '../../Config';
import './evnts-details.scss';
import './../../styles/global.scss';
import LogInModal from './components/LogInModal';

function EvntsDetails(props) {
  const { navIsOpen, setNavIsOpen } = props;
  const [evntsDetail, setEvntsDetail] = useState([]);
  const [active, setActive] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const user = getAuthToken();

  // get Data
  const getEvntsDetail = async () => {
    const res = await fetch(config.EVNTSD_PATH + `${id}`);
    const obj = await res.json();
    // console.log('obj:', obj);
    setEvntsDetail(obj.data);
  };

  useEffect(() => {
    getEvntsDetail();
  }, []);

  // 判斷Link to是否可點擊  1.敬請期待 2.報名額滿
  useEffect(() => {
    const now = new Date();
    const evntsSingUpDate = new Date(
      evntsDetail[0]?.evnts_signup_start_date ?? ''
    );
    const presentNum = parseInt(evntsDetail[0]?.evnts_pres_num);
    const maxNum = parseInt(evntsDetail[0]?.evnts_max_num);

    if (
      evntsSingUpDate > now ||
      (evntsSingUpDate < now && presentNum === maxNum)
    ) {
      setActive(false);
    } else if (evntsSingUpDate < now) {
      setActive(true);
    }
  }, [evntsDetail]);

  // 點擊報名要判斷是否有登入
  const checkLogin = () => {
    if (!user) {
      setModalShow(true);
    } else {
      history.push(
        '/latest-news/eventsdetail/signup/' + evntsDetail[0]?.evnts_id ?? ''
      );
    }
  };
  // [{
  //   evnts_id: 1,
  //   evnts_title: '試吃餐會',
  //   evnts_cate: '品牌推廣',
  //   evnts_pres_num: 15,
  //   evnts_max_num: 20,
  //   evnts_signup_start_date: '2022-02-01',
  //   evnts_signup_end_date: '2022-04-30',
  //   evnts_date: '2022-05-20',
  //   evnts_start_time: '13:00',
  //   evnts_end_time: '17:00',
  //   evnts_location: '台北市大安區復興南路一段390號2樓',
  //   evnts_host: 'null',
  //   evnts_detail: '有吃過3D列印食物嗎? 快來參加PRIMEAL舉辦的試吃餐會，帶你認識3D列印食物的過程，試吃體驗全新不同的飲食口感。',
  //   evnts_img_path: '/img/home/evnts/event-1.png',
  //   status: '熱烈報名中'
  // }]

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
            <Title title={'Events'} setNavIsOpen={setNavIsOpen} />
            <div className="evnts">
              <div className="mycontainer">
                {/* latest-news top */}
                <div className="latest-news-nav d-flex justify-content-between align-items-center">
                  <div className="latest-news-nav-breadcrumbs">
                    <p className="en-title-14-10">
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
                        EVENTS {''}
                      </Link>
                    </p>
                  </div>
                </div>

                {/* mobile events */}
                <div className="mobile-evnts-detail d-sm-none min-hi">
                  <div className="ch-title-18 evnts-title">
                    {evntsDetail[0]?.evnts_title ?? ''}
                  </div>
                  <div className="evnts-date-tag">
                    <div className="en-cont-16 evnts-date">
                      {evntsDetail[0]?.evnts_date ?? ''}
                    </div>
                    <div className="ch-cont-16 evnts-tag">
                      {evntsDetail[0]?.evnts_cate ?? ''}
                    </div>
                  </div>
                  <div className="evnts-img">
                    <img
                      src={
                        `http://localhost:3500` +
                          evntsDetail[0]?.evnts_img_path ?? ''
                      }
                      alt="events"
                    />
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 info-title">報名開始:</div>
                    <div className="ch-cont-16 info-content">
                      {evntsDetail[0]?.evnts_signup_start_date ?? ''}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 info-title">報名截止:</div>
                    <div className="ch-cont-16 info-content">
                      {evntsDetail[0]?.evnts_signup_end_date ?? ''}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 info-title">活動日期:</div>
                    <div className="ch-cont-16 info-content">
                      {evntsDetail[0]?.evnts_date ?? ''}
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
                    <div className="ch-cont-14 info-content">
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
                    <div className="ch-cont-16 info-title">可報名人數:</div>
                    <div className="ch-cont-16 info-content">
                      {(evntsDetail[0]?.evnts_max_num ?? '') -
                        (evntsDetail[0]?.evnts_pres_num ?? '')}
                      人
                    </div>
                  </div>
                  <div className="ch-cont-16 evnts-content">
                    {evntsDetail[0]?.evnts_detail ?? ''}
                  </div>
                  <div
                    className={
                      active === ''
                        ? 'mobile-sign-up-hidden'
                        : 'mobile-sign-up-show'
                    }
                  >
                    <div className="ch-title-18 signup-number">
                      目前已報名人數{' '}
                      <span>{evntsDetail[0]?.evnts_pres_num ?? ''}</span>人
                    </div>
                    <div
                      className={active ? 'signupbtn' : 'signupbtn nopointer'}
                    >
                      <div
                        className={
                          active
                            ? 'btn-sm btn-primary primeal-btn d-flex justify-content-center align-items-center'
                            : 'btn-sm disabled ch-title-18 d-flex justify-content-center align-items-center'
                        }
                        onClick={checkLogin}
                      >
                        {active ? '點我去報名' : '未開放報名'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* pc events */}
              <div className="mycontainer d-none d-sm-block">
                <div className="pc-evnts-detail d-flex justify-content-between">
                  <div className="pc-evnts-img">
                    <img
                      src={
                        `http://localhost:3500` +
                          evntsDetail[0]?.evnts_img_path ?? ''
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
                        {evntsDetail[0]?.evnts_date ?? ''}
                      </div>
                      <div className="ch-cont-16 pc-evnts-tag">
                        {evntsDetail[0]?.evnts_cate ?? ''}
                      </div>
                    </div>
                    <div className="evnts-info">
                      <div className="diamond"></div>
                      <div className="ch-cont-16 info-title">報名開始:</div>
                      <div className="ch-cont-16 info-content">
                        {evntsDetail[0]?.evnts_signup_start_date ?? ''}
                      </div>
                    </div>
                    <div className="evnts-info">
                      <div className="diamond"></div>
                      <div className="ch-cont-16 info-title">報名截止:</div>
                      <div className="ch-cont-16 info-content">
                        {evntsDetail[0]?.evnts_signup_end_date ?? ''}
                      </div>
                    </div>
                    <div className="evnts-info">
                      <div className="diamond"></div>
                      <div className="ch-cont-16 info-title">活動日期:</div>
                      <div className="ch-cont-16 info-content">
                        {evntsDetail[0]?.evnts_date ?? ''}
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
                      <div className="ch-cont-16 info-title">可報名人數:</div>
                      <div className="ch-cont-16 info-content">
                        {(evntsDetail[0]?.evnts_max_num ?? '') -
                          (evntsDetail[0]?.evnts_pres_num ?? '')}
                        人
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
                      <div
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
                          onClick={checkLogin}
                        >
                          {active ? '點我去報名' : '未開放報名'}
                        </div>
                      </div>
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
      <LogInModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          history.push('/member/login');
        }}
      />
    </>
  );
}

export default EvntsDetails;
