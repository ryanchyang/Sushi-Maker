import styled from 'styled-components';
import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 180px;
  top: 30%;
`;
const LoginButton = styled.button``;

function Login() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Classic'} />
          <br />

          <LoginArea>
            <p>Hello, My Friend</p>
            <div>
              <p>帳號</p>
              <input type="text" />
            </div>
            <div>
              <p>密碼</p>
              <input type="password" />
            </div>
            <LoginButton>登入</LoginButton>
          </LoginArea>

          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}
export default Login;
