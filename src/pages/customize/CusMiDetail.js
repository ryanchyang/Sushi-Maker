import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { useEffect, useState } from 'react';
import './customize.scss';
import { ReactComponent as Plus } from '../../imgs/plus.svg';
import { ReactComponent as Minus } from '../../imgs/minus.svg';
import config from '../../Config';
import { Link, useHistory } from 'react-router-dom';
import { getCartCount } from '../../utils';
import { Button, Modal } from 'react-bootstrap';
import NavPage from '../layout/components/NavPage';
import ChartForCm from '../chartjs/ChartCs/ChartForCm';

function CusMiDetail(props) {
  // nav
  const { navIsOpen, setNavIsOpen } = props;
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };

  const [cusProdSQL, setCusProdSQL] = useState(); // 從資料庫把儲存好的資料撈出來
  const [cusCount, setCusCount] = useState(1); // 購買數量
  const [namedCusProd, setNamedCusProd] = useState(''); // 命名
  const [changeCartCount, setChangeCartCount] = useState(0); // 變更購物車圈圈數量
  const [selectedMtl, setSelectedMtl] = useState({}); //選定的食材資料
  const [arrayForChart, setArrayForChart] = useState([]); // fot chartjs的陣列
  const history = useHistory();

  // 偵聽網頁拉到哪裡
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 接SQL資料
  useEffect(() => {
    const catchData = async () => {
      const res = await fetch(config.GET_CUS_DATA, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          memid: localStorage.getItem('mem_id'),
        }),
      });
      const resJson = await res.json();

      setCusProdSQL(resJson.rows);
      setSelectedMtl(resJson.rows.mtlarray[0]);
    };
    setTimeout(() => {
      catchData();
    }, 300);
  }, []);

  // chart圖表
  useEffect(() => {
    let newMtlArray = [];
    const chartMtlArray = !cusProdSQL
      ? ''
      : cusProdSQL.mtlarray.map(e => {
          newMtlArray.splice(0, 0, e.mtl_id);
        });
    setArrayForChart(newMtlArray);
  }, [cusProdSQL]);

  // 數量增減
  // 輸入數量
  const countIt = count => {
    if (cusCount <= 0 || cusCount >= 99) {
      return false;
    }

    setCusCount(count);
  };

  // 數量-1
  const contMinus = count => {
    if (cusCount <= 1) {
      console.log('哈囉哈囉');
      return false;
    }

    const newCount = cusCount - 1;
    setCusCount(newCount);
  };

  // 數量+1
  const countAdd = count => {
    if (cusCount >= 99) {
      return false;
    }

    const newCount = cusCount + 1;
    setCusCount(newCount);
  };

  // 命名並送至後端
  const cusProdname = async () => {
    const res = await fetch(config.POST_FINAL_DATA, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        cus_name: namedCusProd,
        memid: localStorage.getItem('mem_id'),
      }),
    });
    const resJson = await res.json();
  };

  //加入購物車
  const addToCart = () => {
    const isLogin = localStorage.getItem('mem_id') !== null; //判斷是否登入

    if (isLogin) {
      fetch(config.CUS_TO_CART, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          memid: +localStorage.getItem('mem_id'),
          cm_prod_id: cusProdSQL.cm_prod_id,
          count: cusCount,
          value: +cusProdSQL.cm_prod_value,
          print: cusProdSQL.cm_prod_print_time,
          category: 'cm',
        }),
      })
        .then(res => res.json())
        .then(async d => {
          await getCartCount(+localStorage.getItem('mem_id'));
          setChangeCartCount(changeCartCount + 1);
        });
      handleCartShow();
    } else {
      handleLikeShow();
    }
  };

  // 購物車數字變化
  const [cart_count, setCart_count] = useState(0);
  useEffect(() => {
    setCart_count(localStorage.getItem('cart_count'));
  }, [props.changeCartCount]);

  //請先登入的光箱
  const [likeShow, setLikeShow] = useState(false);
  const handleLikeClose = () => setLikeShow(false);
  const handleLikeShow = () => setLikeShow(true);
  const likeModel = (
    <Modal show={likeShow} onHide={handleLikeClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30 m-3">提醒</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ margin: '0 3%' }}>
        <div className="en-cont-14 pb-2">請先登入後才能操作</div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
          onClick={handleLikeClose}
        >
          關閉
        </Button>
      </Modal.Footer>
    </Modal>
  );

  //加入購物車的光箱
  const [cartShow, setCartShow] = useState(false);
  const handleCartClose = () => setCartShow(false);
  const handleCartShow = () => setCartShow(true);
  const cartModel = (
    <Modal show={cartShow} onHide={handleCartClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30 m-3">提醒</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ margin: '0 3%' }}>
        <div className="en-cont-14 pb-2">
          已成功將商品加入購物車！請問是否要前往結帳頁面？
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2"
          onClick={() => {
            handleCartClose();
            history.push('/customize');
          }}
        >
          返回製作
        </Button>
        <Button
          variant=" btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2 m-3"
          className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
          onClick={() => {
            handleCartClose();
            history.push('/cart/stepone');
          }}
        >
          前往結帳
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const clickMtl = mtlId => {
    const mtl = cusProdSQL.mtlarray.find(id => id.mtl_id === mtlId);
    setSelectedMtl(mtl);
  };

  return (
    <>
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        {likeModel}
        {cartModel}
        <Header />
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <div className="customize mycontainer min-hi margin-top">
              <Title title={'Customization'} />
              <div className="trail">
                <Link
                  to={'/'}
                  style={{ textDecoration: 'none', color: '#575757' }}
                >
                  HOME
                </Link>{' '}
                /{' '}
                <Link
                  to={'/customize'}
                  style={{ textDecoration: 'none', color: '#b03342' }}
                >
                  CUSTOMIZATION
                </Link>
              </div>
              {!cusProdSQL ? (
                ''
              ) : (
                <>
                  <div className="cus-detail">
                    <div
                      className={
                        'cus-img' + (offset > offset * 0.9 ? ' scrollit' : '')
                      }
                    >
                      <img
                        src={`${config.HOST}/${cusProdSQL.cm_prod_img_path}`}
                        alt=""
                      />
                      <div
                        className={
                          'mtl-btn' +
                          (offset > offset * 0.9
                            ? ' show-block'
                            : ' disappear-block')
                        }
                      >
                        {cusProdSQL.mtlarray.map((e, i) => {
                          return (
                            <div
                              className="detailMtlBtn"
                              onClick={() => {
                                clickMtl(e.mtl_id);
                              }}
                              key={i}
                            >
                              <img
                                src={config.HOST + e.mtl_img_path}
                                alt={e.mtl_name}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div
                      className={
                        'detail' +
                        (offset > offset * 0.95
                          ? ' disappear-block'
                          : ' show-block')
                      }
                    >
                      <input
                        type="text"
                        className="search-input-bar ch-title-20"
                        placeholder="請為您的成品取名"
                        value={namedCusProd}
                        onChange={e => {
                          const v = e.target.value;
                          if (v.length <= 6) {
                            setNamedCusProd(v);
                          }
                        }}
                      />
                      <span className="ch-cont-14">
                        ※取名長度不可超過六個字元。
                      </span>
                      <div className="cus-value mt-4">
                        <div className="value-l">
                          NT_${`${cusProdSQL.cm_prod_value}`}
                        </div>
                        <div className="value-r">TOTAL PRICE</div>
                      </div>
                      <div className="cus-printtime">
                        <div className="printtime-l">
                          {`${cusProdSQL.cm_prod_print_time}`}_SEC
                        </div>
                        <div className="printtime-r">PRINT TIME</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      'cus-mtl-detial ch-cont-16' +
                      (offset > offset * 0.97
                        ? ' show-block'
                        : ' disappear-block')
                    }
                  >
                    <div className="chart-img nutrition-box">
                      <div className="nutrition-img-box-mobile">
                        <ChartForCm mtls={[selectedMtl.mtl_id]} />
                      </div>
                    </div>
                    <div className="mtl-detail">
                      <div className="mtl-name">
                        <div className="name-l">{selectedMtl.mtl_name}</div>
                        <div className="name-r">
                          <img
                            src={config.HOST + selectedMtl.mtl_img_path}
                            alt={selectedMtl.mtl_name}
                          />
                        </div>
                      </div>
                      <div className="origin">
                        <div className="origin-l">{selectedMtl.mtl_origin}</div>
                        <div className="origin-r">ORIGIN</div>
                      </div>
                      <div className="mfd">
                        <div className="mfd-l">
                          {selectedMtl.mtl_produce_date}
                        </div>
                        <div className="mfd-r">MFD</div>
                      </div>
                      <div className="rm">
                        <div className="rm-l">
                          {selectedMtl.mtl_raw_matrials}
                        </div>
                        <div className="rm-r">RM</div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div
                className={
                  'manual ch-cont-14' +
                  (offset > offset * 0.99 ? ' show-block' : ' disappear-block')
                }
              >
                <div
                  className={
                    'delivery col' +
                    (offset > offset * 0.99
                      ? ' show-block'
                      : ' disappear-block')
                  }
                >
                  <div className="deli">配送類型</div>
                  <div className="deli">宅急便(冷藏)</div>
                  <div className="deli">
                    ※若需要冷凍宅配，請幫忙註明。若冷藏與冷凍商品需一起下單，將會延長運送時間，請先預約。另外，若商品需要變更，請提前與我們聯繫。
                  </div>
                </div>
                <div
                  className={
                    'mfd-time col' +
                    (offset > offset * 0.99
                      ? ' show-block'
                      : ' disappear-block')
                  }
                >
                  <div className="mfdt">≪賞味期限≫</div>
                  <div className="mfdt">冷蔵：出貨後4天</div>
                  <div className="mfdt">冷凍：出貨後一個月</div>
                </div>
                <div
                  className={
                    'package col' +
                    (offset > offset * 0.99
                      ? ' show-block'
                      : ' disappear-block')
                  }
                >
                  <div className="pkg">≪保存方法≫</div>
                  <div className="pkg">冷藏：請保存於4℃</div>
                  <div className="pkg">冷凍：請保存於-15℃</div>
                </div>
              </div>
              <div className="btn-area">
                <div className="btn-buttom">
                  <div className="select-add-cart ch-cont-28">
                    <div className="select-count">
                      <button onClick={() => contMinus()}>
                        <Minus />
                      </button>
                      <input
                        type="number"
                        value={cusCount}
                        onChange={e => countIt(+e.target.value)}
                      />
                      <button onClick={() => countAdd()}>
                        <Plus />
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn-sm btn-primary primeal-btn m-2"
                    onClick={() => {
                      cusProdname();
                      addToCart();
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default CusMiDetail;
