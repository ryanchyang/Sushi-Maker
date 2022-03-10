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
          </div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default IndexRevise;
