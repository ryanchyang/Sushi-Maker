import styled from 'styled-components';
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { useState } from 'react';

const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const LoginButton = styled.button`
  margin-top: 2%;
`;

const handleSubmit = (e) => {
  e.preventDefault();
}

function Login() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <body>
        <Header />
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={''} />
            <br />

            <LoginArea>
              <p>Hello, My Friend</p>
              <form onSubmit={handleSubmit}>
                <p>帳號</p>
                <input
                  type="text"
                  value={account}
                  onChange={e => {
                    setAccount(e.target.value);
                  }}
                />
                <p>密碼</p>
                <input
                  type="password"
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
                <LoginButton>登入</LoginButton>
              </form>
            </LoginArea>

            <Footer />
          </div>
          <AsideRight />
        </div>
      </body>
    </>
  );
}
export default Login;
