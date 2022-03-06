import styled from 'styled-components';
import { Header, Title, AsideLeft, AsideRight, Footer } from './memLayout/LayoutDark';
import { useState } from 'react';

const LoginBody = styled.body`
  background: #212121;
`;
const Slogan = styled.p`
  color: #f7f6f3;
  text-align: center;
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
  margin-top: 25%;
`;
const LoginAreaImg = styled.div`
  height: 100vh;
`;

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
              <LoginAreaImg>
                <img
                  src={require('../../imgs/mem/LoginImg.png')}
                  style={{ width: '100%', height: '100%' }}
                ></img>
              </LoginAreaImg>
              <InputArea>
                <Slogan className="en-title-24">
                  Hello, <br />
                  My Friend
                </Slogan>
                <LoginForm onSubmit={handleSubmit}>
                  <p className="ch-cont-14">帳號</p>
                  <input
                    type="text"
                    value={account}
                    onChange={e => {
                      setAccount(e.target.value);
                    }}
                  />
                  <p className="ch-cont-14">密碼</p>
                  <input
                    type="password"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                    }}
                  />
                  <button>登入</button>
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
export default Login;
