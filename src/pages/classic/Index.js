import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './index.css';
import { ReactComponent as Discount } from '../../imgs/tags/discount_25.svg';
import { ReactComponent as Cart } from '../../imgs/tags/add_cart.svg';

function Index() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Classic'} />
          <br />

          {/* category-tag */}
          <div className='category-box'>
            <div className='en-title-14-10'>SUSHI</div>
            <div className='en-title-14-10'>DESSERT</div>
            <div className='en-title-14-10'>PACKAGE</div>
          </div>

          <div className='prod-list'>
            {/* product-card */}
            <div className='prod-card'>
              <div className='prod-img-box'>
                <div className='discount-tag'><Discount /></div>              
                <img src={require('./../../imgs/temp/classic-pro1.png')} alt="product-image" />
              </div>

              <div className='prod-name-ch ch-title-22'>鮭魚壽司</div>
              <div className='prod-name-en en-title-14-5'>Salmon Sushi</div> 
              
              <div className='prod-price-special'>
                <div className='original-price ch-cont-14'>NT_60</div>
                <div className='special-price ch-cont-16'>NT_50</div>
              </div>

              <div className='prod-price-no-discount'>
                <div className='no-discount ch-cont-16'>NT_60</div>
              </div> 

              <div className="select-add-cart">
                <div className='select-count'>
                  <button>-</button>
                  <input type="number" value={1} />
                  <button>+</button>
                </div>
                <div className='discount-tag1'>
                  <Cart />
                </div>
              </div>
            </div>

            <div className='prod-card'>
              <div className='prod-img-box'>
                <div className='discount-tag'><Discount /></div>              
                <img src={require('./../../imgs/temp/classic-pro1.png')} alt="product-image" />
              </div>

              <div className='prod-name-ch ch-title-22'>鮭魚壽司</div>
              <div className='prod-name-en en-title-14-5'>Salmon Sushi</div> 
              
              <div className='prod-price-special'>
                <div className='original-price ch-cont-14'>NT_60</div>
                <div className='special-price ch-cont-16'>NT_50</div>
              </div>

              <div className='prod-price-no-discount'>
                <div className='no-discount ch-cont-16'>NT_60</div>
              </div> 

              <div className="select-add-cart">
                <div className='select-count'>
                  <button>-</button>
                  <input type="number" value={1} />
                  <button>+</button>
                </div>
                <div className='discount-tag1'>
                  <Cart />
                </div>
              </div>
            </div>

            <div className='prod-card'>
              <div className='prod-img-box'>
                <div className='discount-tag'><Discount /></div>              
                <img src={require('./../../imgs/temp/classic-pro1.png')} alt="product-image" />
              </div>

              <div className='prod-name-ch ch-title-22'>鮭魚壽司</div>
              <div className='prod-name-en en-title-14-5'>Salmon Sushi</div> 
              
              <div className='prod-price-special'>
                <div className='original-price ch-cont-14'>NT_60</div>
                <div className='special-price ch-cont-16'>NT_50</div>
              </div>

              <div className='prod-price-no-discount'>
                <div className='no-discount ch-cont-16'>NT_60</div>
              </div> 

              <div className="select-add-cart">
                <div className='select-count'>
                  <button>-</button>
                  <input type="number" value={1} />
                  <button>+</button>
                </div>
                <div className='discount-tag1'>
                  <Cart />
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

export default Index;
