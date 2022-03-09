import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { ReactComponent as Heart } from '../../imgs/tags/heart.svg';
import { ReactComponent as Discount } from '../../imgs/tags/discount_25.svg';
import './detail.scss';

function Detail() {
  return <>  
    <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Classic'} />
          
          <div className="classic-detail">
            
            {/* 商品圖片與名稱、售價 */}
            <div className="detail-content">              
              <div className="prod-img-box">
                <img src={require('./../../imgs/temp/classic-pro1.png')} alt="product-image" />
              </div>

              <div className="prod-detail-right">
                <div className="prod-ch-name ch-title-40-20">鮭魚壽司</div>
                <div className="prod-en-name en-title-20">Salmon Sushi</div>
                <div className="like-heart">                  
                  <Heart />                                   
                </div>                
                <div className="prod-price">
                  <div className="ch-title-40-20">NT_$500</div>
                  <div className="prod-stock en-title-16">IN STOCK</div>
                </div>
                <div className="prod-printtime">
                  <div className="ch-title-40-20">30_SEC</div>
                  <div className="prod-print en-title-16">PRINT TIME</div>
                </div>
                <div className="prod-desc">
                  <div className="prod-desc-content ch-cont-14">美味的列印鮭魚搭配特製芥末，底層列印壽司米迸出新口感。</div>
                  <div className="prod-desc-title en-title-16">DESCRIPTION</div>
                </div>
              </div>

            </div>

            {/* 加入購物車 */}
            <div>
              <div className="select-add-cart">              
                <div className="select-count">
                  <button>-</button>
                  <input type="number" value={1} />
                  <button>+</button>
                </div>
                <button className="btn-sm btn-primary primeal-btn">
                  加入購物車
                </button>
              </div>
            </div>
            
            

            {/* 商品營養表、材料說明、配送 */}
            <div className="prod-detail-content">
              <div className="detail-content-top">
                <div className="nutrition-img">
                  <img src={require('./../../imgs/temp/analyze.png')} alt="" />
                </div>
                <div className="material-list">

                  <div className="material-name">
                    <div className="material-name-content ch-title-22">鮭魚</div>
                    <div className="material-img">
                      <img src={require('./../../imgs/temp/material1.png')} alt="" />
                    </div>
                  </div>
                  <div className="material-item">
                    <div className="material-content ch-cont-18">挪威</div>
                    <div className="material-title en-cont-16">ORIGIN</div>
                  </div>                  
                  <div className="material-item">
                    <div className="material-content ch-cont-18">2022-04-10</div>
                    <div className="material-title en-cont-16">MFD</div>
                  </div>                  
                  <div className="material-item">
                    <div className="material-content ch-cont-18">大豆</div>
                    <div className="material-title en-cont-16">RM</div>
                  </div>                  

                </div>
              </div>
              <div className="detail-content-bottom">
                <div className="carrier-type ch-cont-14">配送類型<br />
                  宅急便(冷藏)<br />
                  ※若需要冷凍宅配 ,請幫忙註明。 若冷藏與冷凍商品需一起下單 ,將會延長運送時間 ,請先預約。 另外 ,若商品需要變更 ,請提前與我們聯繫。</div>
                <div className="expire ch-cont-14">≪賞味期限≫<br />
                  冷蔵：出貨後4天<br />
                  冷凍：出貨後一個月<br /><br />
                  ≪保存方法≫<br />
                  冷藏：請保存於4℃<br />
                  冷凍：請保存於-15℃</div>
                <div className="package ch-cont-14">≪包裝≫<br />
                  單入 : 印食紙盒裝<br />
                  六入 : 印食便當盒裝<br /><br />
                  ※若需送禮, 請參考印食禮盒</div>
              </div>              
            </div>

            <div className="recommend">
              <div className="recommend-ch-title ch-title-22">推薦商品</div>
              <div className="recommend-en-title en-title-14-10">Recommandation</div>
            </div>
            <div className="recommend-prod-box">
            {/* 推薦商品圖片 */}
              <div className="prod-card">
                <div className="recommend-prod-img-box">
                  <div className="discount-tag">
                    <Discount />
                  </div>
                  <img
                    src={require('./../../imgs/temp/classic-pro4.png')}
                    alt="product-image"
                  />
                </div>
                <div className="prod-name-ch ch-title-22">花枝壽司</div>
                <div className="prod-name-en en-title-14-5">Salmon Sushi</div>
                <div className="prod-price-special">
                  <div className="original-price ch-cont-14">NT_55</div>
                  <div className="special-price ch-cont-16">NT_45</div>
                </div>
                <div className="prod-price-no-discount">
                  <div className="no-discount ch-cont-16">NT_60</div>
                </div>                  
              </div>

              <div className="prod-card">
                  <div className="recommend-prod-img-box">
                    <div className="discount-tag">
                      <Discount />
                    </div>
                    <img
                      src={require('./../../imgs/temp/classic-pro1.png')}
                      alt="product-image"
                    />
                  </div>

                  <div className="prod-name-ch ch-title-22">鮭魚壽司</div>
                  <div className="prod-name-en en-title-14-5">Salmon Sushi</div>

                  <div className="prod-price-special">
                    <div className="original-price ch-cont-14">NT_60</div>
                    <div className="special-price ch-cont-16">NT_50</div>
                  </div>

                  <div className="prod-price-no-discount">
                    <div className="no-discount ch-cont-16">NT_60</div>
                  </div>                  
              </div>

              <div className="prod-card">
                  <div className="recommend-prod-img-box">
                    <div className="discount-tag">
                      <Discount />
                    </div>
                    <img
                      src={require('./../../imgs/temp/classic-pro2.png')}
                      alt="product-image"
                    />
                  </div>

                  <div className="prod-name-ch ch-title-22">海膽壽司</div>
                  <div className="prod-name-en en-title-14-5">Salmon Sushi</div>

                  <div className="prod-price-special">
                    <div className="original-price ch-cont-14">NT_75</div>
                    <div className="special-price ch-cont-16">NT_70</div>
                  </div>

                  <div className="prod-price-no-discount">
                    <div className="no-discount ch-cont-16">NT_60</div>
                  </div>
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
