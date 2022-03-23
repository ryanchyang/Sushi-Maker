import styled from 'styled-components';
import { AsideLeft, AsideRight } from './memLayout/LayoutDark';
import { useState } from 'react';
import { login } from '../../WebApi';
import { ReactComponent as EyeOff } from '../../imgs/eye-off.svg';
import { ReactComponent as EyeShow } from '../../imgs/eye-show.svg';
import { Link, useHistory } from 'react-router-dom';
import { setAuthToken, setMemId } from '../../utils';
import LoginForgetPwd from './component/LoginForgetPwd';
import LoginForgetPwdVcode from './component/LoginForgetPwdVcode';
import LoginForgetPwdVcodeNew from './component/LoginForgetPwdVcodeNew';
// import { AuthContext } from '../../contexts.js';

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
  height: auto;
  margin-right: 15%;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputArea = styled.div`
  margin-top: 10%;
  padding: 0;
`;
const LoginAreaImg = styled.div`
  padding-left: 5%;
`;
const InputTitle = styled.p`
  color: #f7f6f3;
  margin-top: 10%;
`;
const InputForPsw = styled.p`
  color: #f7f6f3;
  margin-top: 33px;
  text-align: center;
  cursor: pointer;
`;
const InputRegistLink = styled.p`
  color: #c4c4c4;
  margin-top: 26px;
  text-align: center;
`;
const ErrorMessage = styled.p`
  color: #b03342;
  height: 20px;
`;

//顯示關閉密碼icon待開發
const PswInput = styled.input`
  after::{
    <BsEyeSlash></BsEyeSlash>

  }
`;

function Login() {
  // const {setUser} = useContext(AuthContext);
  const [mem_account, setMem_account] = useState('');
  const [mem_pwd, setMem_pwd] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [showPwd, setShowPwd] = useState(false);
  const [forgetPwd, setForgetPwd] = useState(false);
  const [accountPass, setAccountPass] = useState(false);
  const [vCodePass, setVcodePass] = useState(false);
  const history = useHistory();

  const handleClickPwd = e => {
    showPwd === true ? setShowPwd(false) : setShowPwd(true);
  };
  const handleClickForgetPwd = e => {
    setForgetPwd(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(mem_account, mem_pwd).then(data => {
      console.log(data);
      if (data.code !== 0) {
        return setErrorMessage(data.error);
      } else {
        setAuthToken(data.token);
        setMemId(data.info.mem_id);
      }
      history.push('/member'); //登入成功後導入會員頁
    });
  };

  return (
    <>
      <LoginBody>
        {/* <Header /> */}
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <AsideRight />
          <div style={{ width: '100%' }}>
            {/* <Title title={''} /> */}
            <LoginArea>
              <LoginAreaImg className="col-8" style={{ height: '100vh' }}>
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
                    value={mem_account}
                    className="form-control"
                    onChange={e => {
                      setMem_account(e.target.value);
                    }}
                    name="mem_account"
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
                    {errorMessage && '帳號錯誤!'}
                  </ErrorMessage>

                  <InputTitle className="ch-cont-14">密碼</InputTitle>
                  <div
                    style={{
                      position: 'relative',
                    }}
                  >
                    <PswInput
                      type={showPwd === false ? 'password' : 'text'}
                      className="form-control"
                      value={mem_pwd}
                      onChange={e => {
                        setMem_pwd(e.target.value);
                      }}
                      name="mem_pwd"
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
                    {showPwd === false ? (
                      <EyeOff
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '8px',
                          cursor: 'pointer',
                        }}
                        onClick={handleClickPwd}
                      ></EyeOff>
                    ) : (
                      <EyeShow
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '8px',
                          cursor: 'pointer',
                        }}
                        onClick={handleClickPwd}
                      ></EyeShow>
                    )}
                  </div>
                  <ErrorMessage className="ch-cont-14">
                    {errorMessage && '密碼錯誤!'}
                  </ErrorMessage>
                  <button
                    className="ch-title-22 btn btn-sm primeal-btn"
                    style={{
                      marginTop: '15%',
                      height: '40px',
                      color: '#575757',
                      background: '#f7f6f3',
                      width: '100%',
                    }}
                  >
                    登入
                  </button>
                </LoginForm>
                <InputForPsw
                  className="ch-cont-14"
                  onClick={handleClickForgetPwd}
                >
                  忘記密碼?
                </InputForPsw>
                <InputRegistLink className="ch-cont-14">
                  還沒有帳號嗎?
                  <Link
                    to="/member/register"
                    style={{
                      color: '#f7f6f3',
                      textDecoration: 'none',
                    }}
                  >
                    點我註冊
                  </Link>
                </InputRegistLink>
              </InputArea>
              <LoginForgetPwd
                forgetPwd={forgetPwd}
                setForgetPwd={setForgetPwd}
                accountPass={accountPass}
                setAccountPass={setAccountPass}
              />
              <LoginForgetPwdVcode
                accountPass={accountPass}
                setAccountPass={setAccountPass}
                setVcodePass={setVcodePass}
              />
              <LoginForgetPwdVcodeNew
                vCodePass={vCodePass}
                setVcodePass={setVcodePass}
              />
            </LoginArea>

            {/* <Footer /> */}
          </div>
        </div>
      </LoginBody>
    </>
  );
}
export default Login;
