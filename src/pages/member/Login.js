import styled from 'styled-components';
import { AsideLeft, AsideRight, Title } from './memLayout/LayoutDark';
import { useState } from 'react';
import { login } from '../../WebApi';
import { ReactComponent as EyeOff } from '../../imgs/eye-off.svg';
import { ReactComponent as EyeShow } from '../../imgs/eye-show.svg';
import { Link, useHistory } from 'react-router-dom';
import { setAuthToken, setMemId } from '../../utils';
import LoginForgetPwd from './component/LoginForgetPwd';
import LoginForgetPwdVcode from './component/LoginForgetPwdVcode';
import LoginForgetPwdVcodeNew from './component/LoginForgetPwdVcodeNew';
import NavPage from '../layout/components/NavPage';
import img from '../../imgs/mem/LoginImg.png';

//styled component
const LoginBody = styled.body`
  ${'' /* border:1px solid red; */}
  background:#212121;

  ${'' /* opacity: 0.3; */}
  ${'' /* background-image: url(${img}); */}


  @media screen and (max-width: 576px) {
    background: transparent !important;
    ${'' /* border:1px solid red; */}
    &:before {
      content: '';
      width: 100%;
      height: 812px;
      top: 0;
      left: 0;
      background-image: url(${img});
      ${'' /* background-size: cover; */}
      filter: brightness(0.4);
      position: absolute;
      background-attachment: fixed;
      z-index: -1;
      border: 1px solid red;
    }
  }
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

  @media screen and (max-width: 576px) {
    ${'' /* display: flex; */}
    ${'' /* border:1px solid red; */}
    ${'' /* flex-direction: column; */}
    ${'' /* align-item: center; */}
    justify-content:center;
    margin: 0 auto;
    padding: 0 10%;
    ${'' /* width: 100%; */}
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputArea = styled.div`
  margin-top: 10%;
  padding: 0;
  @media screen and (max-width: 576px) {
    margin-top: 5%;
  }
`;
const LoginAreaImg = styled.div`
  padding-left: 5%;
  @media screen and (max-width: 576px) {
    display: none;
  }
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

  @media screen and (max-width: 576px) {
    ${'' /* width:100%; */}
  }
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

function Login(props) {
  // const {setUser} = useContext(AuthContext);
  const [mem_account, setMem_account] = useState('');
  const [mem_pwd, setMem_pwd] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [showPwd, setShowPwd] = useState(false);
  const [forgetPwd, setForgetPwd] = useState(false);
  const [accountPass, setAccountPass] = useState(false);
  const [vCodePass, setVcodePass] = useState(false);
  const history = useHistory();
  const { navIsOpen, setNavIsOpen } = props;

  const handleKeyinClick = () => {
    setMem_account('agroupjoeshih@gmail.com');
    setMem_pwd('123456');
  };

  const handleClickPwd = e => {
    showPwd === true ? setShowPwd(false) : setShowPwd(true);
  };
  const handleClickForgetPwd = e => {
    setForgetPwd(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(mem_account, mem_pwd).then(data => {
      if (data.code !== 0) {
        return setErrorMessage(data.error);
      } else {
        setAuthToken(data.token);
        setMemId(data.info.mem_id);
        localStorage.setItem('loginStatus', true);
        // setIsLogin(true);
        localStorage.setItem('cart_count', data.cart_count);
        localStorage.setItem('mem_name', data.info.mem_name);
        localStorage.setItem('mem_nickname', data.info.mem_nickname);
        localStorage.setItem('mem_photo', data.info.mem_photo_img_path);
        history.goBack(-2); //登入成功後導入會員頁
      }
    });
  };
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };

  return (
    <>
      <LoginBody>
        {/* <Header /> */}
        {navIsOpen && (
          <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
        )}
        <div style={navIsOpen ? hiddenBlock : showBlock}>
          <div style={{ display: 'flex' }}>
            <AsideLeft />
            <AsideRight setNavIsOpen={setNavIsOpen} />
            <div style={{ width: '100%' }}>
              <Title title={''} style={{ display: 'none' }} />
              <LoginArea>
                <LoginAreaImg className="col-8" style={{ height: '100vh' }}>
                  <img
                    src={require('../../imgs/mem/LoginImg.png')}
                    style={{ width: '100%', height: '100%' }}
                  ></img>
                </LoginAreaImg>
                <InputArea className="col-md-5">
                  <Slogan
                    style={{ cursor: 'pointer' }}
                    onClick={handleKeyinClick}
                  >
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
        </div>
      </LoginBody>
    </>
  );
}
export default Login;
