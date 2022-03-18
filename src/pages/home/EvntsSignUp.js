import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './evnts-signup.scss';
import config from '../../Config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EvntsSignUp() {
  const [evntsInfo, setEvntsInfo] = useState([]);

  const { id } = useParams();
  console.log('id:', id);

  const getEvntsInfo = async () => {
    console.log('hihi');
    const res = await fetch(config.EVNTSD_PATH + `${id}`);
    const obj = await res.json();
    console.log('obj:', obj);
    setEvntsInfo(obj.data);
  };

  useEffect(() => {
    console.log('hi');
    getEvntsInfo();
  }, []);

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

  // Input State
  const [fields, setFields] = useState({
    name: '',
    mobile: '',
    email: '',
    number: '',
    comment: '',
  });

  // Error Message State
  const [fieldsError, setFieldsError] = useState({
    name: '',
    mobile: '',
    email: '',
  });
  const handleFieldChange = e => {
    const newData = { ...fields, [e.target.name]: e.target.value };
    setFields(newData);
  };
  const handleSubmit = e => {
    e.preventDefault();
    // 作驗証
    // const formData = new FormData(e.target);
    // console.log(formData.get('username'));
    // console.log(formData.get('email'));
    // console.log(formData.get('password'));

    // 獲取同名稱的checkbox
    //console.log(formData.getAll('likeList'))

    // 驗証成功，用fetch或ajax送到伺服器
  };
  const handleInvalid = e => {
    e.preventDefault();
    const updatedFieldsError = {
      ...fieldsError,
      [e.target.name]: e.target.validationMessage,
    };

    // 3. 設定回錯誤訊息狀態
    setFieldsError(updatedFieldsError);
  };

  // 當整個表單每次有更動時會觸發
  // 認定使用者輸入某個欄位(更正某個有錯誤的欄位)
  // 清空某個欄位錯誤訊息
  const handleChange = e => {
    const updatedFieldError = {
      ...fieldsError,
      [e.target.name]: '',
    };

    // 3. 設定回錯誤訊息狀態
    setFieldsError(updatedFieldError);
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Events'} />
          <div className="evnts-signup">
            <div className="mycontainer min-hi">
              {/* lastest-news top */}
              <div className="lastest-news-nav d-flex justify-content-between align-items-center">
                <div className="lastest-news-nav-breadcrumbs">
                  <p className="en-title-14-10">HOME / LATEST NEWS / EVENTS</p>
                </div>
              </div>

              {/* evnts-signup */}
              <div className="evnts-block">
                <div className="evnts-info-area">
                  <div className="evnts-info-top d-flex justify-content-between">
                    <div className="evnts-info-top-text">
                      <div className="ch-title-22 evnts-title">
                        {evntsInfo[0]?.evnts_title ?? ''}
                      </div>
                      <div className="en-cont-16 evnts-date">
                        {dateFormat(evntsInfo[0]?.evnts_date ?? '')}
                      </div>
                      <div className="ch-cont-16 evnts-tag">
                        {evntsInfo[0]?.evnts_cate ?? ''}
                      </div>
                    </div>
                    <div className="evnts-img">
                      <img
                        src={
                          '/img/home/evnts/' + evntsInfo[0]?.evnts_img_path ??
                          ''
                        }
                        alt="events"
                      />
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 info-title">報名開始:</div>
                    <div className="ch-cont-16 info-content">
                      {dateFormat(evntsInfo[0]?.evnts_signup_start_date ?? '')}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 info-title">報名截止:</div>
                    <div className="ch-cont-16 info-content">
                      {dateFormat(evntsInfo[0]?.evnts_signup_end_date ?? '')}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 info-title">活動日期:</div>
                    <div className="ch-cont-16 info-content">
                      {dateFormat(evntsInfo[0]?.evnts_date ?? '')}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 info-title">活動時間:</div>
                    <div className="ch-cont-16 info-content">
                      {timeFormat(evntsInfo[0]?.evnts_start_time ?? '')}-
                      {timeFormat(evntsInfo[0]?.evnts_end_time ?? '')}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 info-title">活動地點:</div>
                    <div className="ch-cont-16 info-content">
                      {evntsInfo[0]?.evnts_location ?? ''}
                    </div>
                  </div>
                  <div className="evnts-info">
                    <div className="diamond"></div>
                    <div className="ch-cont-16 info-title">活動人數:</div>
                    <div className="ch-cont-16 info-content">
                      上限{evntsInfo[0]?.evnts_max_num ?? ''}人
                    </div>
                  </div>
                  <div className="ch-cont-16 evnts-content">
                    {evntsInfo[0]?.evnts_detail ?? ''}
                  </div>
                </div>
                <div className="ch-cont-16 evnts-signup-area">
                  <form
                    onSubmit={handleSubmit}
                    onInvalid={handleInvalid}
                    onChange={handleChange}
                  >
                    <div className="singup-column d-flex justify-content-between align-items-center">
                      <label htmlFor="form-label">參加者姓名</label>
                      <label className="form-label text-primary ch-cont-12">
                        必填
                      </label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={fields.name}
                      onChange={handleFieldChange}
                      placeholder="參加者姓名"
                      required
                    />
                    {fieldsError.name !== '' && (
                      <div className="error">{fieldsError.name}</div>
                    )}
                    <div className="singup-column d-flex justify-content-between align-items-center">
                      <label htmlFor="form-label ">連絡電話</label>
                      <label className="form-label text-primary ch-cont-12">
                        必填
                      </label>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      placeholder="09XX-XXX-XXX"
                      onChange={handleFieldChange}
                      required
                    />
                    {fieldsError.mobile !== '' && (
                      <div className="error">{fieldsError.mobile}</div>
                    )}
                    <div className="singup-column d-flex justify-content-between align-items-center">
                      <label htmlFor="form-label">連絡Email</label>
                      <label className="form-label text-primary ch-cont-12">
                        必填
                      </label>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={fields.email}
                      placeholder="123@test.com"
                      onChange={handleFieldChange}
                      required
                    />
                    {fieldsError.email !== '' && (
                      <div className="error">{fieldsError.email}</div>
                    )}
                    <div className="ch-cont-14">(活動通知將透過Email發送)</div>
                    <label htmlFor="form-label mr-5" className="singup-column">
                      參加人數
                    </label>
                    <select
                      className="form-select"
                      name="number"
                      id="number"
                      value={fields.number}
                      onChange={handleFieldChange}
                    >
                      <option value="none">請選擇</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <div className="singup-column sign-up-comment">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label ch-cont-14"
                      >
                        特殊備註
                      </label>
                      <textarea
                        className="form-control textarea"
                        id="comment"
                        name="comment"
                        onChange={handleFieldChange}
                        maxRows="5"
                      ></textarea>
                    </div>
                    <div className="button-group">
                      <button className="btn-sm btn-primary primeal-btn primeal-btn-outline mx-1">
                        重新填寫
                      </button>
                      <button className="btn-sm btn-primary primeal-btn mx-1">
                        送出報名
                      </button>
                    </div>
                  </form>
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

export default EvntsSignUp;
