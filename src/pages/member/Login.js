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
  color: #f7f6f3;
  text-align: center;
  font-size: 3.6rem;
  line-height: 5.4rem;
  letter-spacing: 0.81rem;
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
  margin-top: 15%;
  padding: 0;
`;
const LoginAreaImg = styled.div`
  padding-left: 5%;
`;
const InputTitle = styled.p`
  color: #f7f6f3;
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
  color: #b03342
`;

//顯示關閉密碼icon待開發
const PswInput = styled.input`
  after::{
    <BsEyeSlash></BsEyeSlash>

  }
`

//function
const handleSubmit = e => {
  e.preventDefault(); 
};

function Login() {
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
              <InputArea className="col-5">
                <Slogan>
                  Hello, <br />
                  My Friend
                </Slogan>
                <LoginForm onSubmit={handleSubmit}>
                  <InputTitle className="ch-cont-14">帳號</InputTitle>
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

                  <InputTitle className="ch-cont-14">密碼</InputTitle>
                  <PswInput
                    type="password"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
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
                  <ErrorMessage className="ch-cont-14">密碼錯誤!</ErrorMessage>
                  <button
                    className="ch-title-22"
                    style={{
                      borderRadius: 50,
                      marginTop: '61px',
                      height: '40px',
                      color: '#575757',
                    }}
                  >
                    登入
                  </button>
                </LoginForm>
                <InputForPsw className="ch-cont-14">忘記密碼?</InputForPsw>
                <InputRegistLink className="ch-cont-14">
                  還沒有帳號嗎? 點我註冊
                </InputRegistLink>
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
export default Login;
