import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import ShareNavBar from './components/ShareNavBar';
import styles from './Share.module.scss';
import '../classic/index.scss';

import { ReactComponent as DeleteSm } from '../../imgs/del.svg';
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
              <div className="d-flex flex-column">
                <div className="filter-top justify-content-end">
                  <div
                    className={`clean-filter ch-cont-16 ${styles['mr-100']}`}
                  >
                    <img
                      src={require('./../../imgs/tags/trash.png')}
                      alt="trash"
                    />
                    <span>清空條件</span>
                  </div>
                  <div>
                    <DeleteSm className={`${styles['button-default-lg']}`} />
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
                    <div className="by-price-input justify-content-between">
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
                <div className="d-flex justify-content-center">
                  <div className="by-flavor col-18 d-flex flex-column">
                    <div className="by-flavor-title">
                      <div className="orange-tag">
                        <OrangeTag className="tag-img" />
                      </div>
                      <div className="by-price-text en-title-big">By TAGS</div>
                      <div className="down-arrow">
                        <DownArrow size={22} color="gray" />
                      </div>
                    </div>
                    <div className="by-price-input justify-content-between">
                      <input
                        style={{ width: '100%' }}
                        type="number"
                        placeholder="搜尋標籤"
                        data-pFilter="min"
                      />
                    </div>
                    <div className="en-title-14-10 text-grey">Suggestions</div>
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
                </div>

                {/* by category */}
                <div className="d-flex justify-content-center mb-5">
                  <div className="col-18 d-flex flex-column">
                    <div className="by-category">
                      <div className="orange-tag">
                        <OrangeTag className="tag-img" />
                      </div>
                      <div className="by-price-text en-title-big">
                        By PRINT TIME
                      </div>
                      <div className="down-arrow">
                        <DownArrow size={22} color="gray" />
                      </div>
                    </div>
                    <div className="by-price-input justify-content-between">
                      <input
                        type="number"
                        placeholder="最小時間"
                        data-pFilter="min"
                      />
                      <div className="by-price-dash-line"></div>
                      <input
                        type="number"
                        placeholder="最大時間"
                        data-pFilter="max"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-18">
                    <div className="send-filter-btn-box d-flex justify-content-end">
                      <button className="btn-sm btn-primary primeal-btn-sm">
                        送出條件
                      </button>
                    </div>{' '}
                  </div>
                </div>
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
