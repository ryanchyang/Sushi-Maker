import { ReactComponent as DeleteSm } from '../../../../src/imgs/delete-sm.svg';
import { useState } from 'react';
import { ReactComponent as EyeOff } from '../../../imgs/eye-off-dark.svg';
import { ReactComponent as EyeShow } from '../../../imgs/eye-show-dark.svg';

function IndexRevisePwd(props) {
  const { isRevisePwd, setIsRevisePwd } = props;
  const [showPwd, setShowPwd] = useState(false);
  const [revisePwd, setRevisePwd] = useState({
    originalPwd: '',
    newPwd: '',
    checkNewPwd: '',
  });
  const handleChangePwd = e => {
    const newPwdData = { ...revisePwd, [e.target.name]: e.target.value };
    setRevisePwd(newPwdData);
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

      <div className="mycontainer mx-5 reviseCon mb-4">
        <p className="ch-title-18 accTitle">修改密碼</p>
        <form className="actPwd col-md-24">
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
              {showPwd === false ? (
                <EyeOff
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
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
              {showPwd === false ? (
                <EyeOff
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
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
              {showPwd === false ? (
                <EyeOff
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
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

          <div className="memPwdBtn">
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
