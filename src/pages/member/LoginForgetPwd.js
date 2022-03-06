import styled from 'styled-components';
import {
  Header,
  Title,
  AsideLeft,
  AsideRight,
  Footer,
} from './memLayout/LayoutDark';
import { useState } from 'react';
import { BsEyeSlash } from 'react-icons/bs';

//styled component
const LoginBody = styled.body`
  background: #212121;
`;
const Slogan = styled.p`
  color: #212121;
  text-align: center;
  font-size: 3.6rem;
  line-height: 5.4rem;
  letter-spacing: 0.81rem;
  margin-bottom: 84px; 
`;
const LoginArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputArea = styled.div`
  padding-right: 2%;
  padding-left: 2%;
  padding-top: 15%;
  background: #f7f6f3;
`;
const LoginAreaImg = styled.div`
  padding-left: 5%;
`;
const InputTitle = styled.p`
  color: #212121;
  margin-top: 48px;
`;
const InputForPsw = styled.p`
  color: #f7f6f3;
  margin-top: 33px;
  text-align: center;
`;
const InputRegistLink = styled.p`
  color: #f7f6f3;
  margin-top: 26px;
  text-align: center;
`;
const ErrorMessage = styled.p`
  color: #b03342;
`;

//顯示關閉密碼icon待開發
const PswInput = styled.input`
  after::{
    <BsEyeSlash></BsEyeSlash>

  }
`;

//function
const handleSubmit = e => {
  e.preventDefault();
};

function LoginForgetPassword() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <LoginBody>
        {/* <Header /> */}
        <div style={{ display: 'flex', height: '100vh' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            {/* <Title title={''} /> */}
            <LoginArea>
              <LoginAreaImg className="col-8">
                <img
                  src={require('../../imgs/mem/LoginImg.png')}
                  style={{ width: '100%', height: '100%' }}
                ></img>
              </LoginAreaImg>
              <InputArea className="col-7">
                <Slogan>
                  Pleae confirm your Email
                </Slogan>
                <LoginForm onSubmit={handleSubmit}>
                  <InputTitle className="ch-cont-14">請輸入您的帳號</InputTitle>
                  <input
                    type="text"
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
              </InputArea>
            </LoginArea>

            {/* <Footer /> */}
          </div>
          <AsideRight />
        </div>
      </LoginBody>
    </>
  );
}

export default LoginForgetPassword;
