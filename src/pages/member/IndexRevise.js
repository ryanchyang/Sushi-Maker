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
import { findMem } from '../../WebApi';
import { getMemId } from '../../utils';
import { reviseMem } from '../../WebApi';

function IndexRevise() {
  const [memInfo, setMemInfo] = useState({
    mem_name: '',
    mem_nickname: '',
    mem_mobile: '',
    mem_gender: '',
    mem_birthday: '',
  });
  const mem_id = getMemId('mem_id');
  useEffect(() => {
    // TODO步驟2. 請參考WebApi 這支檔案裡的findMem這支, 只要把function名還有 ${BASE_URL}後的這串網址/member/api/find-member 改成自己的就好了(這串網址是你自訂的router的網址)
    findMem(mem_id).then(obj => {
      setMemInfo(obj[0]);
    }); //做到這裡如果node端API沒寫錯就會拿到你所需的資料了
  }, []);

  const handleReviseClick = e => {
    e.preventDefault();
    reviseMem(memInfo, mem_id).then(obj => {
      if (obj.success) {
        alert('修改成功');
      }
    });
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          {/* <Title title={''} />
            <br /> */}
          <div className="member ">
            <MemHead />
            {/* 以上不動 */}

            <div className="memReviseArea col-md-24 mt-5">
              <div className="mycontainer mx-5 reviseCon">
                <p className="ch-title-18 accTitle">帳號密碼</p>
                <div className="actPwd col-md-24">
                  <div className="memInp">
                    <label className="reviseLabel ch-cont-14"> 帳號</label>
                    <input
                      type="text"
                      value={memInfo.mem_account}
                      className="form-control revInpBig ch-cont-14"
                    />
                  </div>

                  <div className="memInp">
                    <label className="reviseLabel ch-cont-14"> 密碼</label>
                    <input
                      type="text"
                      value={'*******'}
                      className="form-control revInpBig ch-cont-14"
                    />
                    <button className="btn btn-primary primeal-btn revPswBtn">
                      修改密碼
                    </button>
                  </div>
                </div>

                <p className="ch-title-18 accTitle">會員資料</p>
                <form className="actPwd col-md-24" onSubmit={handleReviseClick}>
                  <div className="memInfoLeft ">
                    <div className="memInpBt">
                      <div className="memInpuSm">
                        <label className="reviseLabel ch-cont-14"> 姓名</label>
                        <input
                          type="text"
                          value={memInfo.mem_name}
                          name="mem_name"
                          onChange={e => {
                            setMemInfo(e.target.value);
                          }}
                          className="form-control revInpSm ch-cont-14"
                        />
                      </div>
                      <div className="memInpuSm">
                        <label className="reviseLabel ch-cont-14"> 暱稱</label>
                        <input
                          type="text"
                          value={memInfo.mem_nickname}
                          name="mem_nickname"
                          onChange={e => {
                            setMemInfo(e.target.value);
                          }}
                          className="form-control revInpSm ch-cont-14 ml-4"
                        />
                      </div>
                    </div>

                    <div className="memInpbtBig mt-5">
                      <label className="reviseLabel ch-cont-14">手機號碼</label>
                      <input
                        type="text"
                        name="mem_mobile"
                        value={memInfo.mem_mobile}
                        onChange={e => {
                          setMemInfo(e.target.value);
                        }}
                        className="form-control revInpBig ch-cont-14"
                      />
                    </div>
                  </div>

                  <div className="memInfoRight ">
                    <div className="memInpBt ">
                      <div className="memInpuSm">
                        <label className="reviseLabel ch-cont-14"> 性別</label>
                        <input
                          type="text"
                          name="mem_gender"
                          value={memInfo.mem_gender}
                          onChange={e => {
                            setMemInfo(e.target.value);
                          }}
                          className="form-control revInpSm ch-cont-14"
                        />
                      </div>
                      <div className="memInpuSm mb-1">
                        <label className="reviseLabel ch-cont-14"> 生日</label>
                        <input
                          type="text"
                          value={memInfo.mem_birthday}
                          name="mem_birthday"
                          onChange={e => {
                            setMemInfo(e.target.value);
                          }}
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
        <AsideRight />
      </div>
    </>
  );
}

export default IndexRevise;
