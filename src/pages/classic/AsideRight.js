import { useState, useEffect } from 'react';
import { ReactComponent as Hamburger } from '../../imgs/hamburger.svg';
import { ReactComponent as Cart } from '../../imgs/cart.svg';
import config from '../../Config';

function AsideRight() {
    const [memberImg, setMemberImg] = useState('');
    const [cartCount, setCartCount] = useState(0);
    const [historyList, setHistoryList] = useState([]);

    useEffect(() => {
        let history = localStorage.getItem('history');
        if(history != null){            
            const fetchData = async() => {
                const historyRes = await fetch(config.GET_HISTORYS + `/${history}`);
                const historyObj = await historyRes.json();   
                setHistoryList(historyObj.rows);             
              };

            fetchData();
        }
    }, [])
  
    return (
      <>
        <aside className="col-lg-3 col-md-3 col-3 p-0 mobile-adj aside-fixed">
          <div className="aside-right">
            <div className="layout-hamberger-box">
              <Hamburger
                className="layout-hamberger"
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="layout-mem-photo-box">
              <img src={require('./../../imgs/ruka.png')} alt="member-photo" />
            </div>
            <div className="layout-cart-btn-box">
              <Cart className="layout-cart-btn" />
            </div>

            {/* 歷史查詢功能 */}
            <div className="classic-history-img-list">
                {historyList.map((h, i) => {
                    return (
                        <div key={i}>
                            <div className="classic-history-img-box">
                                <img src={`http://localhost:3500${h.c_prod_img_path}`} alt="history" />
                            </div>
                            <div className="classic-history-name ch-cont-14">{h.c_prod_ch_name}</div>
                        </div>
                    )
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
            <div className="classic-history-title ch-cont-14">
                HISTORY
            </div>

          </div>
        </aside>
      </>
    );
  }

  export default AsideRight;