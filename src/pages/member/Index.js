import { Header, Title, AsideLeft, AsideRight, Footer } from './memLayout/LayoutLight';
import './index.scss';

function memIndex() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          {/* <Title title={''} />
          <br /> */}
          <div className="mem mycontainer">
            <div className="memHead">
              <div className="memPhotoArea col-6">
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
              <div className="solgan col-4">
                <p>Good Morning!</p>
              </div>
              <div className="memShare col-12"></div>
            </div>
            {/* 以上不動 */}
            
              <div className="memInfoArea">
                <div className="memInfo col-md-12 col-24 mx-3">
                  <ul className="ch-cont-18">
                    <li className="ch-title-22">會員資訊</li>
                    <li>會員暱稱</li>
                    <li>會員等級</li>
                    <li>會員總積分</li>
                    <li>會員優惠券</li>
                    <li>會員現有積分</li>
                    <li>會員積分規則</li>
                  </ul>
                </div>
                <div className="memSet col-md-12 col-24 mx-3"></div>
              </div>
              <div className="memActive col-md-24">
                <p className="ch-title-22">近期活動</p>
              </div>
           
          </div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default memIndex;
