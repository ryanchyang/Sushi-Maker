import {
  Header,
  Title,
  AsideLeft,
  AsideRight,
  Footer,
} from './memLayout/LayoutLight';
import './index.scss';

function IndexRevise() {
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

            <div className="memReviseArea col-md-24 mt-5">
              <div className="mycontainer mx-5 reviseCon">
                <p className="ch-title-18 accTitle">帳號密碼</p>
                <div className="actPwd col-md-24">
                  <div className="memInp">
                    <label className="reviseLabel ch-cont-14"> 帳號</label>
                    <input
                      type="text"
                      className="form-control revInpBig ch-cont-14"
                    />
                  </div>

                  <div className="memInp">
                    <label className="reviseLabel ch-cont-14"> 密碼</label>
                    <input
                      type="text"
                      className="form-control revInpBig ch-cont-14"
                    />
                    <button className="btn btn-primary primeal-btn revPswBtn">
                      修改密碼
                    </button>
                  </div>
                </div>

                <p className="ch-title-18 accTitle">會員資料</p>
                <form className="actPwd col-md-24">
                  <div className="memInfoLeft ">
                    <div className="memInpBt">
                      <div className="memInpuSm">
                        <label className="reviseLabel ch-cont-14"> 姓名</label>
                        <input
                          type="text"
                          className="form-control revInpSm ch-cont-14"
                        />
                      </div>
                      <div className="memInpuSm">
                        <label className="reviseLabel ch-cont-14"> 暱稱</label>
                        <input
                          type="text"
                          className="form-control revInpSm ch-cont-14 ml-4"
                        />
                      </div>
                    </div>

                    <div className="memInpbtBig mt-5">
                      <label className="reviseLabel ch-cont-14">手機號碼</label>
                      <input
                        type="text"
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
                          className="form-control revInpSm ch-cont-14"
                        />
                      </div>
                      <div className="memInpuSm">
                        <label className="reviseLabel ch-cont-14"> 生日</label>
                        <input
                          type="text"
                          className="form-control revInpSm ch-cont-14 ml-4"
                        />
                      </div>
                    </div>
                    <div className="memInpbtBig my-5 ">
                      <label className="reviseLabel ch-cont-14">郵件</label>
                      <input
                        type="text"
                        className="form-control revInpBig ch-cont-14"
                      />
                      <button className="btn btn-primary primeal-btn revPswBtn mb-5">
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
