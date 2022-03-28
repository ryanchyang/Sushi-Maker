import { ReactComponent as DeleteSm } from '../../../../src/imgs/delete-sm.svg';
import { useState } from 'react';
import { ReactComponent as EyeOff } from '../../../imgs/eye-off-dark.svg';
import { ReactComponent as EyeShow } from '../../../imgs/eye-show-dark.svg';
import { indexRevisePwd } from '../../../WebApi';

const mem_id = localStorage.getItem('mem_id');

function IndexRevisePwd(props) {
  const { setIsRevisePwd } = props;
  const [showPwd, setShowPwd] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [revisePwd, setRevisePwd] = useState({
    originalPwd: '',
    newPwd: '',
    checkNewPwd: '',
  });
  const handleChangePwd = e => {
    const newPwdData = { ...revisePwd, [e.target.name]: e.target.value };
    setRevisePwd(newPwdData);
  };
  const handleSubmitRevisePwd = e => {
    e.preventDefault();
    if (
      revisePwd.originalPwd.length == 0 ||
      revisePwd.newPwd.length == 0 ||
      revisePwd.checkNewPwd.length == 0
    ) {
      setErrorMsg('欄位不可為空');
    } else {
      if (revisePwd.newPwd !== revisePwd.checkNewPwd) {
        setErrorMsg('密碼與確認密碼不符!');
      } else {
        indexRevisePwd(mem_id, revisePwd).then(obj => {
          console.log(obj);
          alert('修改成功');
        });
      }
    }
  };

  return (
    <>
      <div
        onClick={() => {
          setIsRevisePwd(false);
        }}
      >
        <DeleteSm
          style={{ position: 'absolute', right: 150, cursor: 'pointer' }}
        />
      </div>

      <div className="mycontainer mx-5 reviseCon">
        <p className="ch-title-18 accTitle">修改密碼</p>
        <form
          className="actPwd col-md-24 mb-5"
          onSubmit={handleSubmitRevisePwd}
        >
          <div className="memInfoLeft ">
            <div className="memInpbtBig mt-5" style={{ position: 'relative' }}>
              <label className="reviseLabel ch-cont-14">原始密碼</label>
              <input
                type="password"
                className="form-control revInpBig ch-cont-14"
                value={revisePwd.originalPwd}
                name="originalPwd"
                onChange={handleChangePwd}
              />
              <div style={{ color: '#b03342', height: '20px' }}>
                {errorMsg && errorMsg}
              </div>
              {showPwd === false ? (
                <EyeOff
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '40%',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setShowPwd(true);
                  }}
                ></EyeOff>
              ) : (
                <EyeShow
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setShowPwd(false);
                  }}
                ></EyeShow>
              )}
            </div>

            <div className="memInpbtBig mt-5" style={{ position: 'relative' }}>
              <label className="reviseLabel ch-cont-14">新密碼</label>
              <input
                type="password"
                className="form-control revInpBig ch-cont-14"
                value={revisePwd.newPwd}
                name="newPwd"
                onChange={handleChangePwd}
              />
              <div style={{ color: '#b03342', height: '20px' }}>
                {errorMsg && errorMsg}
              </div>
              {showPwd === false ? (
                <EyeOff
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '40%',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setShowPwd(true);
                  }}
                ></EyeOff>
              ) : (
                <EyeShow
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setShowPwd(false);
                  }}
                ></EyeShow>
              )}
            </div>

            <div className="memInpbtBig my-5" style={{ position: 'relative' }}>
              <label className="reviseLabel ch-cont-14">確認新密碼</label>
              <input
                type="password"
                className="form-control revInpBig ch-cont-14"
                value={revisePwd.checkNewPwd}
                name="checkNewPwd"
                onChange={handleChangePwd}
              />
              <div style={{ color: '#b03342', height: '20px' }}>
                {errorMsg && errorMsg}
              </div>
              {showPwd === false ? (
                <EyeOff
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '40%',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setShowPwd(true);
                  }}
                ></EyeOff>
              ) : (
                <EyeShow
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setShowPwd(false);
                  }}
                ></EyeShow>
              )}
            </div>
          </div>

          <div className="memPwdBtn ">
            <div className="memInpbtPsdBig my-5">
              <button className="btn btn-primary primeal-btn revPswBtnPage mb-5">
                提交修改
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default IndexRevisePwd;
