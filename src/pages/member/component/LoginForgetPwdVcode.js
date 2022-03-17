import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as DeleteSm } from '../../../imgs/delete-sm.svg';

//styled component
const Slogan = styled.p`
  color: #212121;
  text-align: center;
  font-size: 3.6rem;
  line-height: 5.4rem;
  letter-spacing: 0.81rem;
  margin-bottom: 84px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputArea = styled.div`
  padding-right: 3%;
  padding-left: 3%;
  padding-top: 10%;
  background: #f7f6f3;
  position: fixed;
  transition: 0.5s;
  overflow: hidden;
  z-index: 1;
`;

const InputTitle = styled.p`
  color: #212121;
  margin-top: 48px;
`;

const ErrorMessage = styled.p`
  color: #b03342;
`;


function LoginForgetPwdVcode(props) {
  const { accountPass, setAccountPass } = props;
  const [validCode, setValidCode] = useState('');

  const handleClickClose = () => {
    setAccountPass(false);
  };

  return (
    <>
      <InputArea
        className="col-5"
        style={
          !accountPass
            ? { right: '-100%', height: '100%', zIndex: 1 }
            : { right: '12.5%', height: '100%', zIndex: 1 }
        }
      >
        <DeleteSm
          onClick={handleClickClose}
          style={{ position: 'absolute', top: 0, right: 10, cursor: 'pointer' }}
        ></DeleteSm>
        <Slogan>Pleae confirm your Vcode</Slogan>
        <LoginForm >
          <InputTitle className="ch-cont-14">請輸入驗證碼</InputTitle>
          <input
            type="text"
            className="form-control"
            value={validCode}
            onChange={e => {
              setValidCode(e.target.value);
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
          <ErrorMessage className="ch-cont-14">帳號錯誤!</ErrorMessage>
          <button
            className="btn btn-primary primeal-btn"
            style={{
              marginTop: '90px',
              width: '100%',
              height: '40px',
            }}
          >
            送出
          </button>
        </LoginForm>
      </InputArea>
    </>
  );
}

export default LoginForgetPwdVcode;
