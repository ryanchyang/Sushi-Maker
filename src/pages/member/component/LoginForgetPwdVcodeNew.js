import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as DeleteSm } from '../../../imgs/delete-sm.svg';
import { resetPwd } from '../../../WebApi';
import { useHistory } from 'react-router-dom';

//styled component
const Slogan = styled.p`
  color: #212121;
  text-align: center;
  font-size: 3.6rem;
  line-height: 5.4rem;
  letter-spacing: 0.81rem;
  margin-bottom: 15%;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputArea = styled.div`
  padding-right: 3%;
  padding-left: 3%;
  padding-top: 8%;
  background: #f7f6f3;
  position: fixed;
  transition: 0.5s;
  overflow: hidden;
  z-index: 1;
`;

const InputTitle = styled.p`
  color: #212121;
  margin-top: 15%;
`;

const ErrorMessage = styled.p`
  color: #b03342;
`;

function LoginForgetPwdVcodeNew(props) {
  const { vCodePass, setVcodePass } = props;
  const [errorMessage, setErrorMessage] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [newCheckPassword, setNewCheckPassword] = useState('');
  const mem_id = localStorage.getItem('mem_id');
  const history = useHistory()
  const handleClickClose = () => {
    setVcodePass(false);
  };
  const handlePwdSubmit = e => {
    e.preventDefault();
    if (newPassword === newCheckPassword) {
      resetPwd(newPassword, mem_id).then(obj => {
        if (obj.success === false) {
          setErrorMessage(obj.errorMessage);
        } else {
          alert('修改成功! 請重新登入');
          history.push('/member/login')
        }
      });
    }
  };

  return (
    <>
      <InputArea
        className="col-5"
        style={
          !vCodePass
            ? { right: '-100%', height: '100%', zIndex: 1 }
            : { right: '12.5%', height: '100%', zIndex: 1 }
        }
      >
        <DeleteSm
          onClick={handleClickClose}
          style={{ position: 'absolute', top: 0, right: 10, cursor: 'pointer' }}
        ></DeleteSm>
        <Slogan>Reset your Password</Slogan>
        <LoginForm onSubmit={handlePwdSubmit}>
          <InputTitle className="ch-cont-14">請輸入新密碼</InputTitle>
          <input
            type="text"
            className="form-control"
            value={newPassword}
            onChange={e => {
              setNewPassword(e.target.value);
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
          <ErrorMessage className="ch-cont-14">{errorMessage}</ErrorMessage>
          <InputTitle className="ch-cont-14">請再次輸入密碼</InputTitle>
          <input
            type="text"
            className="form-control"
            value={newCheckPassword}
            onChange={e => {
              setNewCheckPassword(e.target.value);
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
          <ErrorMessage className="ch-cont-14">{errorMessage}</ErrorMessage>
          <button
            className="btn btn-primary primeal-btn"
            style={{
              marginTop: '90px',
              width: '100%',
              height: '40px',
            }}
          >
            送出
          </button>
        </LoginForm>
      </InputArea>
    </>
  );
}

export default LoginForgetPwdVcodeNew;
