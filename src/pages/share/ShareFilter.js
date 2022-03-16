import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import ShareNavBar from './components/ShareNavBar';
import styles from './Share.module.scss';
import '../classic/index.scss';

import { ReactComponent as OrangeTag } from '../../imgs/tags/Rectangle_orange.svg';
import { IoIosArrowDown as DownArrow } from 'react-icons/io';
function ShareFilter() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Share'} />
          <ShareNavBar />
          {/* <div className={`${styles['waterfall-container']}`}></div> */}
          <div className={`mycontainer mb-5 classic`}>
            {/* 主要篩選條件區 */}
            <div className="prod-filter">
              {/* clean or cancel filter */}
              <div className="filter-top">
                <div className="clean-filter ch-cont-16">
                  <img
                    src={require('./../../imgs/tags/trash.png')}
                    alt="trash"
                  />
                  <span>清空條件</span>
                </div>
                <div className="cancel-filter ch-cont-16">
                  <span>X</span>
                </div>
              </div>

              {/* by price */}
              <div className="d-flex justify-content-center">
                <div className="by-price col-18 d-flex flex-column">
                  <div className="by-price-title">
                    <div className="orange-tag">
                      <OrangeTag className="tag-img" />
                    </div>
                    <div className="by-price-text en-title-big">By PRICE</div>
                    <div className="down-arrow">
                      <DownArrow size={22} color="gray" />
                    </div>
                  </div>
                  <div className="by-price-input">
                    <input
                      type="number"
                      placeholder="最小金額"
                      data-pFilter="min"
                    />
                    <div className="by-price-dash-line"></div>
                    <input
                      type="number"
                      placeholder="最大金額"
                      data-pFilter="max"
                    />
                  </div>
                </div>
              </div>
              {/* by flavor */}
              <div className="by-flavor">
                <div className="by-flavor-title">
                  <div className="orange-tag">
                    <OrangeTag className="tag-img" />
                  </div>
                  <div className="by-price-text en-title-big">By FLAVOR</div>
                  <div className="down-arrow">
                    <DownArrow size={22} color="gray" />
                  </div>
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
                <div className="by-category">
                  <div className="orange-tag">
                    <OrangeTag className="tag-img" />
                  </div>
                  <div className="by-price-text en-title-big">By CATEGORY</div>
                  <div className="down-arrow">
                    <DownArrow size={22} color="gray" />
                  </div>
                </div>
                <div className="category-checkbox-box">
                  <input
                    className="caterory-check"
                    type="checkbox"
                    id="new-item"
                    data-tag="new"
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
                    data-tag="hot"
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
                    data-tag="sale"
                  />
                  <div className="label-box">
                    <label className="ch-title-16" for="for-sale">
                      促銷特價
                    </label>
                  </div>
                </div>
              </div>

              <div className="send-filter-btn-box">
                <button className="btn-sm btn-primary primeal-btn-sm">
                  送出條件
                </button>
              </div>
            </div>
          </div>
          <br />
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default ShareFilter;
