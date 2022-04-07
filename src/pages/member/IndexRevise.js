import {
  Header,
  Title,
  AsideLeft,
  AsideRight,
  Footer,
} from './memLayout/LayoutLight';
import './index.scss';
import MemHead from './component/MemHead';
import { useEffect, useState } from 'react';
import { findMem, reviseMem } from '../../WebApi';
import { getMemId } from '../../utils';
import IndexRevisePwd from './component/IndexRevisePwd';
import NavPage from '../layout/components/NavPage';
import { Button, Modal } from 'react-bootstrap';

function IndexRevise(props) {
  const [memInfo, setMemInfo] = useState({
    mem_name: '',
    mem_nickname: '',
    mem_mobile: '',
    mem_gender: '',
    mem_birthday: '',
  });
  const mem_id = getMemId('mem_id');
  const [isRevisePwd, setIsRevisePwd] = useState(false);
  const [memReviseInfo, setMemReviseInfo] = useState('');
  const [reviseShow, setReviseShow] = useState(false);
  const [resultMsg, setResultMsg] = useState('');
  const { navIsOpen, setNavIsOpen, isLogin } = props;
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };

  useEffect(() => {
    findMem(mem_id).then(obj => {
      setMemInfo(obj[0]);
    });
  }, []);

  const handleReviseClick = e => {
    e.preventDefault();
    reviseMem(memInfo, mem_id).then(obj => {
      if (obj.success) {
        setMemReviseInfo(obj[0]);
        setResultMsg(obj.msg);
        localStorage.setItem('mem_name', obj.info.mem_name);
        localStorage.setItem('mem_nickname', obj.info.mem_nickname);
        setReviseShow(true);
      }
    });
  };
  const handleChange = e => {
    const newData = { ...memInfo, [e.target.name]: e.target.value };
    setMemInfo(newData);
  };

  const revisePwdBlock = { display: 'block' };
  const revisePwdNone = { display: 'none' };
  const handleClose = () => setReviseShow(false);

  return (
    <>
      {
        <Modal show={reviseShow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="ch-title-20 m-3">會員資訊修改</Modal.Title>
          </Modal.Header>
          {resultMsg && (
            <Modal.Body style={{ margin: '0 3%' }}>{resultMsg}</Modal.Body>
          )}

          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2"
              onClick={() => {
                setReviseShow(false);
              }}
            >
              離開
            </Button>
            {/*TODO: 確認門市要送出表單並存到DB mem */}
          </Modal.Footer>
        </Modal>
      }
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '75%' }}>
            {/* <Title title={''} />
            <br /> */}
            <div className="member ">
              <MemHead memReviseInfo={memReviseInfo} isLogin={isLogin} />
              {/* 以上不動 */}

              <div className="memReviseArea col-md-24 mt-5">
                {isRevisePwd && (
                  <IndexRevisePwd
                    isRevisePwd={isRevisePwd}
                    setIsRevisePwd={setIsRevisePwd}
                  />
                )}
                <div
                  className="mycontainer mx-5 reviseCon"
                  style={isRevisePwd ? revisePwdNone : revisePwdBlock}
                >
                  <p className="ch-title-18 accTitle">帳號密碼</p>
                  <div className="actPwd col-md-24">
                    <div className="memInp">
                      <label className="reviseLabel ch-cont-14"> 帳號</label>
                      <input
                        type="text"
                        value={memInfo.mem_account}
                        className="form-control revInpBig ch-cont-14"
                        disabled
                      />
                    </div>

                    <div className="memInp">
                      <label className="reviseLabel ch-cont-14"> 密碼</label>
                      <input
                        type="text"
                        value={'*******'}
                        className="form-control revInpBig ch-cont-14"
                        disabled
                      />
                      <button
                        className="btn btn-primary primeal-btn revPswBtn"
                        onClick={() => {
                          setIsRevisePwd(true);
                        }}
                      >
                        修改密碼
                      </button>
                    </div>
                  </div>

                  <p className="ch-title-18 accTitle">會員資料</p>
                  <form
                    className="actPwd col-md-24"
                    onSubmit={handleReviseClick}
                  >
                    <div className="memInfoLeft ">
                      <div className="memInpBt">
                        <div className="memInpuSm">
                          <label className="reviseLabel ch-cont-14">
                            {' '}
                            姓名
                          </label>
                          <input
                            type="text"
                            value={memInfo.mem_name}
                            name="mem_name"
                            onChange={handleChange}
                            className="form-control revInpSm ch-cont-14"
                          />
                        </div>
                        <div className="memInpuSm">
                          <label className="reviseLabel ch-cont-14">
                            {' '}
                            暱稱
                          </label>
                          <input
                            type="text"
                            value={memInfo.mem_nickname}
                            name="mem_nickname"
                            onChange={handleChange}
                            className="form-control revInpSm ch-cont-14 ml-4"
                          />
                        </div>
                      </div>

                      <div className="memInpbtBig mt-5">
                        <label className="reviseLabel ch-cont-14">
                          手機號碼
                        </label>
                        <input
                          type="text"
                          name="mem_mobile"
                          value={memInfo.mem_mobile}
                          onChange={handleChange}
                          className="form-control revInpBig ch-cont-14"
                        />
                      </div>
                    </div>

                    <div className="memInfoRight ">
                      <div className="memInpBt ">
                        <div className="memInpuSm">
                          <label className="reviseLabel ch-cont-14">
                            {' '}
                            性別
                          </label>
                          <select
                            type="text"
                            name="mem_gender"
                            value={memInfo.mem_gender}
                            onChange={handleChange}
                            className="form-control revInpSm ch-cont-14"
                          >
                            <option value="select">請選擇</option>
                            <option value="male">男性</option>
                            <option value="female">女性</option>
                            <option value="undefined">兩性</option>
                          </select>
                        </div>
                        <div className="memInpuSm mb-1">
                          <label className="reviseLabel ch-cont-14">
                            {' '}
                            生日
                          </label>
                          <input
                            type="date"
                            value={memInfo.mem_birthday}
                            name="mem_birthday"
                            onChange={handleChange}
                            className="form-control revInpSm ch-cont-14 ml-4"
                          />
                        </div>
                      </div>
                      <div className="memInpbtBig my-5 ">
                        {/* <label className="reviseLabel ch-cont-14">郵件</label>
                      <input
                        type="text"
                        value={memInfo.mem_mobile}
                          onChange={e => {
                            setMemInfo(e.target.value)
                          }}
                        className="form-control revInpBig ch-cont-14"
                      /> */}
                        <button className="btn btn-primary primeal-btn revPswBtn mb-5 mt-5">
                          提交修改
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} isLogin={isLogin} />
        </div>
      </div>
    </>
  );
}

export default IndexRevise;
