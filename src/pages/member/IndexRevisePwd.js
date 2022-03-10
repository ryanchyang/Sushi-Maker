import {
  Header,
  Title,
  AsideLeft,
  AsideRight,
  Footer,
} from './memLayout/LayoutLight';
import './index.scss';

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
            <div className="memHead ">
              <div className="memPhotoArea col-md-6">
                <div className="memPhoto">
                  <img
                    className="memImg"
                    src={require('../../imgs/ruka.png')}
                    alt="member-photo"
                  />
                </div>
                <div className="memName">
                  <p className="ch-title-22">RUKA蔣</p>
                </div>
                <button className="btn-primary primeal-btn">照片上傳</button>
              </div>
              <div className="solgan col-md-4 mr-5">
                <p>Good Morning!</p>
              </div>

              <div className="memShare col-md-12 ml-5">
                <div className="divCarou">
                  <div className="carouImg mx-3">
                    <img
                      className="Cimg"
                      src="/img/member/shareImg.png"
                      alt=""
                    />
                  </div>
                  <div className="carouImg mx-3">
                    <img
                      src="/img/member/shareImg.png"
                      className="Cimg"
                      alt=""
                    />
                  </div>
                  <div className="carouImg mx-3">
                    <img
                      src="/img/member/shareImg.png"
                      className="Cimg"
                      alt=""
                    />
                  </div>
                  <div className="carouImg mx-3">
                    <img
                      src="/img/member/shareImg.png"
                      className="Cimg"
                      alt=""
                    />
                  </div>
                </div>
                <button className="btn-sm btn-primary primeal-btn share-btn">
                  觀看全部收藏
                </button>
              </div>
            </div>
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
