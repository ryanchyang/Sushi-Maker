import {
  Header,
  Title,
  AsideLeft,
  AsideRight,
  Footer,
} from './memLayout/LayoutLight';
import './index.scss';
import MemHead from './component/MemHead';

function IndexRevisePwd() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          {/* <Title title={''} />
              <br /> */}
          <div className="mem ">
            <MemHead />
            {/* 以上不動 */}
            <div className="memReviseArea col-md-24 mt-5 mb-5">
              <div className="mycontainer mx-5 reviseCon">
                <p className="ch-title-18 accTitle">修改密碼</p>
                <form className="actPwd col-md-24">
                  <div className="memInfoLeft ">
                    <div className="memInpbtBig mt-5">
                      <label className="reviseLabel ch-cont-14">原始密碼</label>
                      <input
                        type="text"
                        className="form-control revInpBig ch-cont-14"
                      />
                    </div>
                    <div className="memInpbtBig mt-5">
                      <label className="reviseLabel ch-cont-14">新密碼</label>
                      <input
                        type="text"
                        className="form-control revInpBig ch-cont-14"
                      />
                    </div>
                    <div className="memInpbtBig my-5">
                      <label className="reviseLabel ch-cont-14">
                        確認新密碼
                      </label>
                      <input
                        type="text"
                        className="form-control revInpBig ch-cont-14"
                      />
                    </div>
                  </div>

                  <div className="memPwdBtn">
                    <div className="memInpbtPsdBig my-5">
                      <button className="btn btn-primary primeal-btn revPswBtnPage mb-5">
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

export default IndexRevisePwd;
