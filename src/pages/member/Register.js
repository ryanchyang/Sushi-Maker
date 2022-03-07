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
const LoginArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 729px;
  margin-top: 7%;
  background-color: rgba(255, 255, 255, 0.3);
`;

const RegistForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputArea = styled.div`
  margin-top: 15%;
  padding: 0;
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
const IconRegisterArea = styled.div`
  
`;
const MemTitle = styled.p`
  color: #f7f6f3;
  margin-bottom: 80px; 
`;
const IconArea = styled.div``;
const Intro = styled.p`
  color: #f7f6f3;
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

function Register() {
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
              <IconRegisterArea>
                <MemTitle className="ch-title-40-30 ">會員註冊</MemTitle>
                <IconArea>
                  <Intro className="ch-cont-16">依社群加入</Intro>
                </IconArea>
              </IconRegisterArea>

              <InputArea className="col-5">
                <RegistForm onSubmit={handleSubmit}>
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
                      color: '#f7f6f3',
                      background: '#b03342',
                    }}
                  >
                    註冊
                  </button>
                </RegistForm>
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

export default Register;
