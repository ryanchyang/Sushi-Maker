import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './index.scss';
import { ReactComponent as Discount } from '../../imgs/tags/discount_25.svg';
import { ReactComponent as Cart } from '../../imgs/tags/add_cart.svg';
import { ReactComponent as OrangeTag } from '../../imgs/tags/Rectangle_orange.svg';
import { ReactComponent as SearchBtn } from '../../imgs/search.svg';
import { ReactComponent as FilterBtn } from '../../imgs/filter-icon.svg';
import {useState} from 'react';

function Index() {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Classic'} />
          <br />

          <div className="classic">
            <div className="search-filter">
              <div className="search-btn"><SearchBtn /></div>
              <div className="filter-btn" onClick={() => {setIsOpenFilter(!isOpenFilter)}}><FilterBtn /></div>
            </div>

            <div className="main-content">
              {/* category tag */}
              <div className="category-box">
                <div className="en-category">SUSHI</div>
                <div className="en-category">DESSERT</div>
                <div className="en-category">PACKAGE</div>
              </div>

              {/* filter tag */}
              <div className="filter-tag-box">
                <div className="filter-tag ch-cont-16">
                  鮭魚 <span>&nbsp;X</span>
                </div>
                <div className="filter-tag ch-cont-16">
                  200~500 <span>&nbsp;X</span>
                </div>
              </div>

              {/* product list */}
              <div className="prod-list">
                {/* product card */}
                <div className="prod-card">
                  <div className="prod-img-box">
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
                    <div className="original-price ch-cont-16">NT_60</div>
                    <div className="special-price ch-cont-18">NT_50</div>
                  </div>

                  <div className="prod-price-no-discount">
                    <div className="no-discount ch-cont-16">NT_60</div>
                  </div>

                  <div className="select-add-cart">
                    <div className="select-count">
                      <button>-</button>
                      <input type="number" value={1} />
                      <button>+</button>
                    </div>
                    <div className="cart-btn">
                      <Cart />
                    </div>
                    <button className="add-cart btn-sm btn-primary primeal-btn">
                      加入購物車
                    </button>
                  </div>
                </div>

                <div className="prod-card">
                  <div className="prod-img-box">
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
                    <div className="original-price ch-cont-16">NT_75</div>
                    <div className="special-price ch-cont-18">NT_70</div>
                  </div>

                  <div className="prod-price-no-discount">
                    <div className="no-discount ch-cont-16">NT_60</div>
                  </div>

                  <div className="select-add-cart">
                    <div className="select-count">
                      <button>-</button>
                      <input type="number" value={1} />
                      <button>+</button>
                    </div>
                    <div className="cart-btn">
                      <Cart />
                    </div>
                    <button className="add-cart btn-sm btn-primary primeal-btn">
                      加入購物車
                    </button>
                  </div>
                </div>

                <div className="prod-card">
                  <div className="prod-img-box">
                    <div className="discount-tag">
                      <Discount />
                    </div>
                    <img
                      src={require('./../../imgs/temp/classic-pro3.png')}
                      alt="product-image"
                    />
                  </div>

                  <div className="prod-name-ch ch-title-22">飛魚卵壽司</div>
                  <div className="prod-name-en en-title-14-5">Salmon Sushi</div>

                  <div className="prod-price-special">
                    <div className="original-price ch-cont-16">NT_65</div>
                    <div className="special-price ch-cont-18">NT_55</div>
                  </div>

                  <div className="prod-price-no-discount">
                    <div className="no-discount ch-cont-16">NT_60</div>
                  </div>

                  <div className="select-add-cart">
                    <div className="select-count">
                      <button>-</button>
                      <input type="number" value={1} />
                      <button>+</button>
                    </div>
                    <div className="cart-btn">
                      <Cart />
                    </div>
                    <button className="add-cart btn-sm btn-primary primeal-btn">
                      加入購物車
                    </button>
                  </div>
                </div>

                <div className="prod-card">
                  <div className="prod-img-box">
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
                    <div className="original-price ch-cont-16">NT_55</div>
                    <div className="special-price ch-cont-18">NT_45</div>
                  </div>

                  <div className="prod-price-no-discount">
                    <div className="no-discount ch-cont-16">NT_60</div>
                  </div>

                  <div className="select-add-cart">
                    <div className="select-count">
                      <button>-</button>
                      <input type="number" value={1} />
                      <button>+</button>
                    </div>
                    <div className="cart-btn">
                      <Cart />
                    </div>
                    <button className="add-cart btn-sm btn-primary primeal-btn">
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>

              {/* pagination */}
              <div className="pagination-box">
                <ul className="pagination ch-cont-16">
                  <li>
                    <div className="page-prev">&lt;</div>
                  </li>
                  <li>
                    <div className="page-number">1</div>
                  </li>
                  <li>
                    <div className="page-number selected">2</div>
                  </li>
                  <li>
                    <div className="page-number">3</div>
                  </li>
                  <li>
                    <div className="page-next">&gt;</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* 主要篩選條件區 */}
            <div className="prod-filter">
              {/* clean or cancel filter */}
              <div className="filter-top">
                <div className="clean-filter ch-cont-16">
                  <img src={require('./../../imgs/tags/trash.png')} alt="trash" />
                  <span>清空條件</span>
                </div>
                <div className="cancel-filter ch-cont-16">
                  <span>X</span>
                </div>
              </div>

              {/* by price */}
              <div className="by-price">
                <div className="by-price-title">
                  <OrangeTag className="tag-img" />
                  <div className="by-price-text en-title-24">By PRICE</div>
                </div>
                <div className="by-price-input">
                  <input type="number" placeholder="最小金額" />
                  <div className="by-price-dash-line"></div>
                  <input type="number" placeholder="最大金額" />
                </div>
              </div>

              {/* by flavor */}
              <div className="by-flavor">
                <div className="by-flavor-title">
                  <OrangeTag className="tag-img" />
                  <div className="by-price-text en-title-24">By FLAVOR</div>
                </div>
                <div className="flavor-tag-box">
                  <div className="flavor-tag ch-title-16">牛肉</div>
                  <div className="flavor-tag ch-title-16">豬肉</div>
                  <div className="flavor-tag ch-title-16">火腿</div>
                  <div className="flavor-tag ch-title-16">起司</div>
                  <div className="flavor-tag ch-title-16">鮭魚卵</div>
                  <div className="flavor-tag ch-title-16">鮮蝦/蝦卵</div>
                  <div className="flavor-tag ch-title-16">干貝</div>
                  <div className="flavor-tag ch-title-16">明太子</div>
                  <div className="flavor-tag ch-title-16">番薯/馬鈴薯</div>
                  <div className="flavor-tag ch-title-16">麻糬</div>
                  <div className="flavor-tag ch-title-16">抹茶</div>
                  <div className="flavor-tag ch-title-16">羊羹/果凍</div>
                </div>
              </div>

              {/* by category */}
              <div>
                <div className="by-category-title">
                  <OrangeTag className="tag-img" />
                  <div className="by-price-text en-title-24">By CATEGORY</div>
                </div>
                <div className="category-checkbox-box">
                  <input
                    className="caterory-check"
                    type="checkbox"
                    id="new-item"
                  />
                  <div className="label-box">
                    <label className="ch-title-16" for="new-item">
                      新品上市
                    </label>
                  </div>
                  <input
                    className="caterory-check"
                    type="checkbox"
                    id="hot-item"
                  />
                  <div className="label-box">
                    <label className="ch-title-16" for="hot-item">
                      熱門商品
                    </label>
                  </div>
                  <input
                    className="caterory-check"
                    type="checkbox"
                    id="for-sale"
                  />
                  <div className="label-box">
                    <label className="ch-title-16" for="for-sale">
                      促銷特價
                    </label>
                  </div>
                </div>
              </div>

              <div className="send-filter ch-title-16">
                送出條件
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
