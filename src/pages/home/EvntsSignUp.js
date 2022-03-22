import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './evnts-signup.scss';
import config from '../../Config';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMemId } from '../../utils';
import SignUpModal from './components/SignUpModal';
import NavPage from '../layout/components/NavPage';

function EvntsSignUp(props) {
  const { navIsOpen, setNavIsOpen } = props;
  const [evntsInfo, setEvntsInfo] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [signUpResult, setSignUpResult] = useState(null);
  const history = useHistory();
  // todo: membe_id先寫死
  const mem_id = 1;
  // const mem_id = getMemId();
  // console.log('mem_id:', mem_id);

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
    number: '',
  });

  // 處理欄位改變
  const handleFieldChange = e => {
    const newData = { ...fields, [e.target.name]: e.target.value };
    setFields(newData);
  };

  // 驗證並處理欄位錯誤訊息
  const handleValidation = () => {
    let formIsValid = true;
    let errorMsg = {};
    // 提交前作驗証，並自定義fieldsError訊息
    console.log('fields:', fields);

    // 格式規則
    const name_re = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const mobile_re = /^09\d{2}-?\d{3}-?\d{3}$/;
    const email_re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    // name
    if (!fields.name) {
      formIsValid = false;
      errorMsg.name = '姓名欄位不可為空';
    } else if (fields.name && name_re.test(fields.name)) {
      formIsValid = false;
      errorMsg.name = '姓名欄位不可包含特殊符號';
    }

    // mobile
    if (!fields.mobile) {
      formIsValid = false;
      errorMsg.mobile = '連絡電話不可為空';
    } else if (fields.mobile && !mobile_re.test(fields.mobile)) {
      formIsValid = false;
      errorMsg.mobile = '連絡電話格式不正確';
    }

    // email
    if (!fields.email) {
      formIsValid = false;
      errorMsg.email = '信箱不可為空';
    } else if (fields.email && !email_re.test(fields.email)) {
      formIsValid = false;
      errorMsg.email = '信箱格式錯誤';
    }

    // number
    if (!fields.number) {
      formIsValid = false;
      errorMsg.number = '請選擇參加人數';
    }

    setFieldsError(errorMsg);
    return formIsValid;
  };

  // 當欄位有更動時，處理清空錯誤訊息
  const handleChange = e => {
    const updatedFieldError = {
      ...fieldsError,
      [e.target.name]: '',
    };
    setFieldsError(updatedFieldError);
  };

  // 提交
  const handleSubmit = e => {
    e.preventDefault();

    if (handleValidation()) {
      // console.log('form submitted.');

      // get form data
      const formData = new FormData(e.target);
      const dataObj = {};
      for (let i of formData) {
        dataObj[i[0]] = i[1];
      }
      dataObj.mem_id = mem_id;
      console.log({ dataObj });

      // fetch
      const r = fetch(config.POST_SINGUP_PATH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObj),
      })
        .then(r => r.json())
        .then(obj => {
          console.log(obj);
          if (obj.success) {
            setSignUpResult(true);
            setModalShow(true);
          } else {
            setSignUpResult(false);
            setModalShow(true);
          }
        });
    } else {
      console.log('form has errors.');
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
            <div className="evnts-signup">
              <div className="mycontainer min-hi">
                {/* lastest-news top */}
                <div className="lastest-news-nav d-flex justify-content-between align-items-center">
                  <div className="lastest-news-nav-breadcrumbs">
                    <p className="en-title-14-10">
                      HOME / LATEST NEWS / EVENTS
                    </p>
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
                        {dateFormat(
                          evntsInfo[0]?.evnts_signup_start_date ?? ''
                        )}
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
                      // onInvalid={handleInvalid}
                      onChange={handleChange}
                    >
                      <input
                        name="evnts_id"
                        id="evnts_id"
                        value={evntsInfo[0]?.evnts_id ?? ''}
                        hidden
                        readOnly
                      />
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
                        type="text"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        placeholder="09XX-XXX-XXX"
                        data-pattern="09\d{2}-?\d{3}-?\d{3}"
                        onChange={handleFieldChange}
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
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={fields.email}
                        placeholder="123@test.com"
                        onChange={handleFieldChange}
                      />
                      {fieldsError.email !== '' && (
                        <div className="error">{fieldsError.email}</div>
                      )}
                      <div className="ch-cont-14">
                        (活動通知將透過Email發送)
                      </div>
                      <label
                        htmlFor="form-label mr-5"
                        className="singup-column"
                      >
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
                      {fieldsError.number !== '' && (
                        <div className="error">{fieldsError.number}</div>
                      )}
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
                        <button
                          type="submit"
                          className="btn-sm btn-primary primeal-btn primeal-btn-outline mx-1"
                        >
                          重新填寫
                        </button>
                        <button
                          type="submit"
                          className="btn-sm btn-primary primeal-btn mx-1"
                        >
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
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
      <SignUpModal
        show={modalShow}
        signUpResult={signUpResult}
        onHide={() => {
          setModalShow(false);
          history.push('/latest-news/events');
        }}
      />
    </>
  );
}

export default EvntsSignUp;
