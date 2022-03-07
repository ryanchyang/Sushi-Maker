import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './detail.scss';

function Detail() {
  return <>
    <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Classic'} />
          
          <div className="classic-detail">
            <div className="detail-content">
              <div className="prod-img-box">
                <img src={require('./../../imgs/temp/classic-pro1.png')} alt="product-image" />
              </div>
              <div>
                <div className="prod-ch-name ch-title-40-20">鮭魚壽司</div>
                <div className="prod-en-name en-title-20">Salmon Sushi</div>
              </div>
            </div>
          </div>



          <Footer />
        </div>        
        <AsideRight />
      </div>
  </>;
}

export default Detail;
