import styled from 'styled-components';
import { AsideLeft, AsideRight } from './memLayout/LayoutDark';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { registerMem, registerMail } from '../../WebApi';

//styled component
const LoginBody = styled.body`
  background: #212121;
`;
const LoginArea = styled.div`
  display: flex;
  justify-content: space-around;
  height: 75%;
  width: 75%;
  position: fix;
  top: 13%;
  left: 10%;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 3;
`;

const RegistForm = styled.form`
  display: flex;
  margin-top: 20%;
  flex-direction: column;
`;
const InputArea = styled.div`
  padding: 0;
`;
const InputTitle = styled.p`
  color: #212121;
`;
const InputForPsw = styled.p`
  color: #c4c4c4;
  margin-top: 10%;
  text-align: center;
`;
const ErrorMessage = styled.p`
  color: #b03342;
`;
const IconRegisterArea = styled.div`
  margin-top: 18%;
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
`;

//顯示關閉密碼icon待開發
const PswInput = styled.input`
  after::{
    <BsEyeSlash></BsEyeSlash>

  }
`;

function Register() {
  const [registerData, setRegisterData] = useState({
    mem_account: '',
    mem_pwd: '',
    mem_mobile: '',
    mem_name: '',
    mem_nickname: '',
    mem_gender: '',
  });

  const history = useHistory();

  //function
  const handleRegister = e => {
    e.preventDefault();

    // registerMem(registerData).then(obj => {
    //   console.log(obj)
    //   if (obj.success) {
    //     alert('註冊成功');
    //     history.push('/member')
    //   }
    // });

    registerMail(registerData).then(obj => {
      console.log(obj);
      if (obj.success) {
        alert('發送成功');
      }
    });
  };
  const handleChange = e => {
    const newData = { ...registerData, [e.target.name]: e.target.value };
    setRegisterData(newData);
  };

  return (
    <>
      <LoginBody>
        {/* <Header /> */}
        <div style={{ display: 'flex', height: '100vh' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            {/* <Title title={''} /> */}
            <LoginArea className="col-18">
              <IconRegisterArea>
                <MemTitle className="ch-title-40-30 ">會員註冊</MemTitle>
                <IconArea>
                  <Intro className="ch-cont-16">依社群加入</Intro>
                </IconArea>
              </IconRegisterArea>

              <InputArea className="col-6">
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
                  <ErrorMessage className="ch-cont-14">帳號錯誤!</ErrorMessage>

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
                  <ErrorMessage className="ch-cont-14">密碼錯誤!</ErrorMessage>
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
                  <ErrorMessage className="ch-cont-14">
                    手機格式錯誤!
                  </ErrorMessage>
                  <div className="d-flex mb-3">
                    <div>
                      <InputTitle className="ch-cont-14">姓名</InputTitle>
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
                  <div className="d-flex" style={{ width: '100%' }}>
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
                  <button
                    className="ch-title-22 primeal-btn btn-primary"
                    style={{
                      borderRadius: 50,
                      marginTop: '15%',
                      height: '40px',
                      color: '#f7f6f3',
                      background: '#b03342',
                    }}
                  >
                    註冊
                  </button>
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
          <AsideRight />
        </div>
        <BgImg>
          <img src="/img/member/register.png" alt="" />
        </BgImg>
      </LoginBody>
    </>
  );
}

export default Register;
