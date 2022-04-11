import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as DeleteSm } from '../../../imgs/delete-sm.svg';
import { accountCheck } from '../../../WebApi';
import { setAuthToken, setMemId } from '../../../utils';

//styled component
const Slogan = styled.p`
  color: #212121;
  text-align: center;
  font-size: 3.6rem;
  line-height: 5.4rem;
  letter-spacing: 0.81rem;
  margin-bottom: 15%;
`;

const PwdCheckForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const ForgetPwdArea = styled.div`
  padding-right: 3%;
  padding-left: 3%;
  padding-top: 8%;
  background: #f7f6f3;
  position: fixed;
  transition: 0.5s;
  overflow: hidden;
  z-index: 1;
`;
const InputTitle = styled.p`
  color: #212121;
  margin-top: 15%;
`;
const ErrorMessage = styled.p`
  color: #b03342;
  height: 20px;
`;

//function

function LoginForgetPwd(props) {
  const { forgetPwd, setForgetPwd } = props;
  const { setAccountPass } = props;
  const [men_account, setMen_account] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForgetPwdSubmit = e => {
    e.preventDefault();
    if (!men_account) {
      setErrorMessage('此為必填欄位!');
    } else {
      accountCheck(men_account).then(obj => {
        if (obj.code !== 0) {
          return setErrorMessage(obj.error);
        } else {
          localStorage.setItem('verify_code', obj.verify_code);
          setTimeout(() => {
            localStorage.removeItem('verify_code');
          }, 1000 * 60 * 5);
          setAccountPass(true);
          setForgetPwd(false);
          setMemId(obj.info.mem_id);
          setErrorMessage('');
        }
      });
    }
  };
  const handleInfoKeyinClick = () => {
    setMen_account('injoe1001@gmail.com')
  }

  return (
    <>
      <ForgetPwdArea
        className="col-5"
        style={
          !forgetPwd
            ? {
                right: '-100%',
                height: '100%',
                zIndex: 1,
                transitionDelay: '0.5s',
              }
            : { right: '12.5%', height: '100%', zIndex: 1 }
        }
      >
        <DeleteSm
          onClick={() => {
            setForgetPwd(false);
            setErrorMessage('');
          }}
          style={{ position: 'absolute', top: 0, right: 10, cursor: 'pointer' }}
        ></DeleteSm>

        <Slogan onClick={handleInfoKeyinClick}>Please confirm your Email</Slogan>
        <PwdCheckForm onSubmit={handleForgetPwdSubmit}>
          <InputTitle className="ch-cont-14">請輸入您的帳號</InputTitle>
          <input
            type="text"
            className="form-control"
            value={men_account}
            onChange={e => {
              setMen_account(e.target.value);
            }}
            style={{
              borderRadius: 50,
              height: '40px',
              background: '#212121',
              border: '1px solid #f7f6f3',
              color: '#f7f6f3',
              fontSize: '1.4rem',
              lineHeight: '1.8rem',
              letterSpacing: '0.14rem',
            }}
          />
          <ErrorMessage className="ch-cont-14">
            {errorMessage && errorMessage}
          </ErrorMessage>
          <button
            className="btn btn-primary primeal-btn"
            style={{
              marginTop: '20%',
              width: '100%',
              height: '40px',
            }}
          >
            送出
          </button>
        </PwdCheckForm>
      </ForgetPwdArea>
    </>
  );
}

export default LoginForgetPwd;
