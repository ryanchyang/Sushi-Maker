import styled from 'styled-components';
import './index.scss';
import { AsideLeft, AsideRight, Title } from './memLayout/LayoutDark';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { registerMem, registerMail } from '../../WebApi';
import { setAuthToken, setMemId } from '../../utils';
import NavPage from '../layout/components/NavPage';

//styled component
const LoginBody = styled.body`
  background: #212121;
  position: relative;
  @media screen and (max-width: 576px) {
    height: 812px;
  }
`;
const LoginArea = styled.div`
  display: flex;
  justify-content: space-around;
  height: 85%;
  width: 75%;
  position: fix;
  left: 5%;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 3;

  @media screen and (max-width: 576px) {
    background-color: rgba(255, 255, 255, 0);
    position: relative;
    display: block;
    padding-left: 12%;
  }
`;

const RegistForm = styled.form`
  display: flex;
  margin-top: 20%;
  flex-direction: column;
`;
const InputArea = styled.div`
  padding: 0;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
const InputTitle = styled.p`
  color: #212121;

  @media screen and (max-width: 576px) {
    color: #f7f6f3;
  }
`;
const InputForPsw = styled.p`
  color: #c4c4c4;
  margin-top: 10%;
  text-align: center;
`;
const ErrorMessage = styled.p`
  color: #b03342;
  height: 20px;
`;
const IconRegisterArea = styled.div`
  margin-top: 18%;
  @media screen and (max-width: 576px) {
    text-align: center;
    margin-top: 0%;
  }
`;
const MemTitle = styled.p`
  color: #f7f6f3;
  margin-bottom: 80px;
`;
const IconArea = styled.div``;
const Intro = styled.p`
  color: #f7f6f3;
`;
const BgImg = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
`;

//顯示關閉密碼icon待開發
const PswInput = styled.input`
  after::{
    <BsEyeSlash></BsEyeSlash>

  }
`;

function Register(props) {
  const [registerData, setRegisterData] = useState({
    mem_account: '',
    mem_pwd: '',
    mem_mobile: '',
    mem_name: '',
    mem_nickname: '',
    mem_gender: '',
    memInpVcode: '',
  });
  const [vCode, setVcode] = useState('');
  const { navIsOpen, setNavIsOpen } = props;
  const [errorMessageMail, setErrorMessageMail] = useState('');
  const history = useHistory();
  const verify_code = localStorage.getItem('verify_code');
  //function
  const handleRegister = e => {
    e.preventDefault();
    if (verify_code) {
      registerMem(registerData, verify_code).then(obj => {
        console.log(obj);
        if (obj.success) {
          alert('註冊成功');
          setAuthToken(obj.token);
          setMemId(obj.info.mem_id);
          localStorage.setItem('loginStatus', true);
          history.push('/member');
        }
      });
    } else {
      registerMail(registerData).then(obj => {
        console.log(obj);
        if (obj.success) {
          alert('發送成功');
          localStorage.setItem('verify_code', obj.verify_code);
          setVcode(obj.verify_code);
          setTimeout(() => {
            localStorage.removeItem('verify_code');
          }, 1000 * 60 * 5); //設定5分鐘後刪除驗證碼
        } else {
          setErrorMessageMail(obj.errorMessage);
        }
      });
    }
  };
  const handleChange = e => {
    const newData = { ...registerData, [e.target.name]: e.target.value };
    setRegisterData(newData);
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
          <div style={{ display: 'flex', height: '100vh' }}>
            <AsideLeft />
            <div style={{ width: '100%' }}>
              <Title className="d-none d-sm-block" title={''} />
              <div style={{ height: '8%' }}></div>
              <LoginArea className="col-18">
                <IconRegisterArea>
                  <MemTitle className="ch-title-40-30 ">會員註冊</MemTitle>
                  <IconArea>
                    <Intro className="ch-cont-16">依社群加入</Intro>
                  </IconArea>
                </IconRegisterArea>

                <InputArea className="col-md-6 mt-5">
                  <RegistForm onSubmit={handleRegister}>
                    <InputTitle className="ch-cont-14">帳號</InputTitle>
                    <input
                      type="text"
                      className="form-control"
                      value={registerData.mem_account}
                      name="mem_account"
                      onChange={handleChange}
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
                      {errorMessageMail}
                    </ErrorMessage>

                    <InputTitle className="ch-cont-14">密碼</InputTitle>
                    <input
                      type="password"
                      className="form-control"
                      value={registerData.mem_pwd}
                      name="mem_pwd"
                      onChange={handleChange}
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
                    <ErrorMessage className="ch-cont-14"></ErrorMessage>
                    <InputTitle className="ch-cont-14">手機號碼</InputTitle>
                    <input
                      type="text"
                      className="form-control"
                      value={registerData.mem_mobile}
                      name="mem_mobile"
                      onChange={handleChange}
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
                    <ErrorMessage className="ch-cont-14"></ErrorMessage>
                    <div className="d-none d-md-flex mb-3">
                      <div>
                        <InputTitle className="ch-cont-14 ">姓名</InputTitle>
                        <input
                          type="text"
                          className="form-control"
                          value={registerData.mem_name}
                          name="mem_name"
                          onChange={handleChange}
                          style={{
                            borderRadius: 50,
                            height: '40px',
                            width: '97%',
                            background: '#212121',
                            border: '1px solid #f7f6f3',
                            color: '#f7f6f3',
                            fontSize: '1.4rem',
                            lineHeight: '1.8rem',
                            letterSpacing: '0.14rem',
                          }}
                        />
                      </div>
                      <div>
                        <InputTitle className="ch-cont-14">暱稱</InputTitle>
                        <input
                          type="text"
                          className="form-control"
                          value={registerData.mem_nickname}
                          name="mem_nickname"
                          onChange={handleChange}
                          style={{
                            borderRadius: 50,
                            height: '40px',
                            width: '97%',
                            background: '#212121',
                            border: '1px solid #f7f6f3',
                            color: '#f7f6f3',
                            fontSize: '1.4rem',
                            lineHeight: '1.8rem',
                            letterSpacing: '0.14rem',
                            marginLeft: '3%',
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="d-none d-md-flex regGender"
                      style={{ width: '100%' }}
                    >
                      <div style={{ width: '50%' }}>
                        <InputTitle className="ch-cont-14">性別</InputTitle>
                        <select
                          className="form-control"
                          value={registerData.mem_gender}
                          name="mem_gender"
                          onChange={handleChange}
                          style={{
                            borderRadius: 50,
                            height: '40px',
                            width: '97%',
                            background: '#212121',
                            border: '1px solid #f7f6f3',
                            color: '#f7f6f3',
                            fontSize: '1.4rem',
                            lineHeight: '1.8rem',
                            letterSpacing: '0.14rem',
                          }}
                        >
                          <option value="select">請選擇</option>
                          <option value="male">男性</option>
                          <option value="female">女性</option>
                          <option value="undefined">兩性</option>
                        </select>
                      </div>
                      <div style={{ width: '50%' }}>
                        <InputTitle className="ch-cont-14">生日</InputTitle>
                        <input
                          type="date"
                          className="form-control"
                          value={registerData.mem_birthday}
                          name="mem_birthday"
                          onChange={handleChange}
                          style={{
                            borderRadius: 50,
                            height: '40px',
                            width: '97%',
                            background: '#212121',
                            border: '1px solid #f7f6f3',
                            color: '#f7f6f3',
                            fontSize: '1.4rem',
                            lineHeight: '1.8rem',
                            letterSpacing: '0.14rem',
                            marginLeft: '3%',
                          }}
                        />
                      </div>
                    </div>

                    <div
                      style={
                        !vCode ? { display: 'block' } : { display: 'none' }
                      }
                    >
                      <button
                        className="ch-title-22 btn btn-sm primeal-btn btn-primary"
                        style={{
                          marginTop: '15%',
                          height: '40px',
                          width: '100%',
                        }}
                      >
                        發送註冊驗證碼
                      </button>
                    </div>
                    <div
                      style={vCode ? { display: 'block' } : { display: 'none' }}
                    >
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ width: '49%', marginTop: '5%' }}>
                          <InputTitle className="ch-cont-14">
                            請輸入驗證碼
                          </InputTitle>
                          <input
                            type="text"
                            className="form-control"
                            name="memInpVcode"
                            style={{
                              borderRadius: 50,
                              height: '20px',
                              width: '97%',
                              background: '#212121',
                              border: '1px solid #f7f6f3',
                              color: '#f7f6f3',
                              fontSize: '1.4rem',
                              lineHeight: '1.8rem',
                              letterSpacing: '0.14rem',
                              marginLeft: '3%',
                            }}
                            value={registerData.memInpVcode}
                            onChange={handleChange}
                          />
                        </div>

                        <button
                          className="ch-title-22 btn btn-sm primeal-btn btn-primary"
                          style={{
                            marginTop: '15%',
                            height: '40px',
                            width: '49%',
                          }}
                        >
                          註冊
                        </button>
                      </div>
                    </div>
                  </RegistForm>
                  <InputForPsw className="ch-cont-14">
                    已經有帳號了?
                    <Link
                      to="/member/login"
                      style={{
                        color: '#f7f6f3',
                        textDecoration: 'none',
                      }}
                    >
                      登入
                    </Link>
                  </InputForPsw>
                </InputArea>
              </LoginArea>

              {/* <Footer /> */}
            </div>
            <AsideRight setNavIsOpen={setNavIsOpen} />
          </div>
          <BgImg>
            <img width="100%" src="/img/member/register.png" alt="" />
          </BgImg>
        </div>
      </LoginBody>
    </>
  );
}

export default Register;
