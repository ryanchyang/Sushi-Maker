import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as DeleteLg } from '../../../imgs/delete-lg.svg';
import { ReactComponent as Del } from '../../../imgs/del.svg';

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
const ForgetPwdArea = styled.div`
  padding-right: 3%;
  padding-left: 3%;
  padding-top: 10%;
  background: #f7f6f3;
  position: fixed;
  transition: 1s;
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

//顯示關閉密碼icon待開發
const PswInput = styled.input``;

//function
const handleSubmit = e => {
  e.preventDefault();
};

function LoginForgetPwd(props) {
  const { forgetPwd, setForgetPwd } = props;
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  console.log(forgetPwd);

  return (
    <>
      <ForgetPwdArea
        className="col-5"
        style={
          !forgetPwd
            ? { right: '-100%', height: '100%', zIndex: 1 }
            : { right: '12.5%', height: '100%', zIndex: 1 }
        }
      >
        <DeleteLg
          onClick={() => {
            setForgetPwd(false);
          }}
          style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }}
        ></DeleteLg>

        <Slogan>Pleae confirm your Email</Slogan>
        <LoginForm onSubmit={handleSubmit}>
          <InputTitle className="ch-cont-14">請輸入您的帳號</InputTitle>
          <input
            type="text"
            className="form-control"
            value={account}
            onChange={e => {
              setAccount(e.target.value);
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
            className="ch-title-22"
            style={{
              borderRadius: 50,
              marginTop: '90px',
              height: '40px',
              color: '#f7f6f3',
              background: '#b03342',
            }}
          >
            送出
          </button>
        </LoginForm>
      </ForgetPwdArea>
    </>
  );
}

export default LoginForgetPwd;
