import {
  Header,
  Title,
  AsideLeft,
  AsideRight,
  Footer,
} from './memLayout/LayoutLight';
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
                    <img className="Cimg" src="/img/member/shareImg.png" alt="" />
                  </div>
                  <div className="carouImg mx-3">
                    <img src="/img/member/shareImg.png" className="Cimg" alt="" />
                  </div>
                  <div className="carouImg mx-3">
                    <img src="/img/member/shareImg.png" className="Cimg" alt="" />
                  </div>
                  <div className="carouImg mx-3">
                    <img src="/img/member/shareImg.png" className="Cimg" alt="" />
                  </div>
                  
                </div>    
                <button className="btn-sm btn-primary primeal-btn share-btn">觀看全部收藏</button>
              </div>
            </div>
            {/* 以上不動 */}

            <div className="mycontainer">
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
                <div className="memSet col-md-12 col-24 mx-3 d-flex">
                  <div className="setImg">
                    <img src="/img/member/orderSet.png" alt="cube" />
                  </div>
                  <div className="setDetail ch-cont-18">
                    <p className="ch-title-22">訂閱套餐</p>
                    <p>訂閱方案</p>
                    <p>訂閱時間</p>
                  </div>
                </div>
              </div>
              <div className="memActive col-md-24 mb-5">
                <p className="ch-title-22">近期活動</p>
                <div className="memActiveArea">
                  <div className="ActiveDetail col-md-8">
                    <div className="activeImg">
                      <img src="/img/member/activeImg.png" alt="cube" />
                    </div>
                    <div className="mt-4">
                      <p className="ch-cont-18">2/18</p>
                      <div className="mx-5 ActTitle">
                        <p className="ch-cont-18 ">印食工作坊</p>
                        <p>(...詳情)</p>
                      </div>
                    </div>
                  </div>
                </div>
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

export default memIndex;
