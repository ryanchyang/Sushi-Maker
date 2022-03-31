import { useState, useEffect } from 'react';
import { ReactComponent as Hamburger } from '../../imgs/hamburger.svg';
import { ReactComponent as Cart } from '../../imgs/cart.svg';
import { Link } from 'react-router-dom';
import config from '../../Config';

function AsideRight(props) {
  const [memberImg, setMemberImg] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [historyList, setHistoryList] = useState([]);
  const [isOpenHstory, setIsOpenHstory] = useState(false);

  const { changeBG, setNavIsOpen } = props;
  const cart_count = localStorage.getItem('cart_count'); // 登入後會抓取目前購物車內的商品數量

  const openHistory = () => {
    setIsOpenHstory(!isOpenHstory);
  };

  useEffect(() => {
    let history = localStorage.getItem('history');
    if (history != null) {
      const fetchData = async () => {
        const historyRes = await fetch(config.GET_HISTORYS + `/${history}`);
        const historyObj = await historyRes.json();
        const historyReverseObj = historyObj.rows.reverse(); //後面的歷史資料要先出現
        setHistoryList(historyReverseObj);
      };

      fetchData();
    }
  }, []);

  return (
    <>
      <aside className="col-lg-3 col-md-3 col-3 p-0 mobile-adj aside-fixed">
        <div className="aside-right">
          <div className="layout-hamberger-box">
            <Hamburger
              className="layout-hamberger"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setNavIsOpen(true);
              }}
            />
          </div>
          <div className="layout-mem-photo-box">
            <img src={require('./../../imgs/ruka.png')} alt="member-photo" />
          </div>
          <div className="layout-cart-btn-box">
            <Link to={'/cart/stepone'}>
              <div className="cart-icon-add">
                <Cart className="layout-cart-btn" />
                {cart_count > 1 ? (
                  <span class="cart-num ">{cart_count}</span>
                ) : (
                  ''
                )}
              </div>
            </Link>
          </div>

          {/* 歷史查詢功能 */}
          <div
            className={
              isOpenHstory
                ? 'classic-history-img-list ch-cont-14 openHistoryStyle'
                : 'classic-history-img-list ch-cont-14 closeHistoryStyle'
            }
          >
            {historyList.map((h, i) => {
              return (
                <div key={i}>
                  <Link
                    to={`/classic/detail/${h.pid}`}
                    style={{ textDecoration: 'none', color: '#212121' }}
                  >
                    <div className="classic-history-img-box">
                      <img
                        src={`http://localhost:3500${h.c_prod_img_path}`}
                        alt="history"
                      />
                    </div>
                    <div className="classic-history-name ch-cont-14">
                      {h.c_prod_ch_name}
                    </div>
                  </Link>
                </div>
              );
            })}
            {/* <div>
                    <div className="classic-history-img-box">
                        <img src={`http://localhost:3500/img/classic/applekiwi.png`} alt="history" />
                    </div>
                    <div className="classic-history-name ch-cont-14">鮭魚卵壽司</div>
                </div>
                <div>
                    <div className="classic-history-img-box">
                        <img src={`http://localhost:3500/img/classic/applekiwi.png`} alt="history" />
                    </div>
                    <div className="classic-history-name ch-cont-14">鮭魚卵壽司</div>
                </div>
                <div>
                    <div className="classic-history-img-box">
                        <img src={`http://localhost:3500/img/classic/applekiwi.png`} alt="history" />
                    </div>
                    <div className="classic-history-name ch-cont-14">鮭魚卵壽司</div>
                </div> */}
          </div>
          <div
            className="classic-history-title ch-cont-14"
            onClick={openHistory}
          >
            HISTORY
          </div>
        </div>
      </aside>
    </>
  );
}

export default AsideRight;
