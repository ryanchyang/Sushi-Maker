import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { useEffect, useState } from 'react';
import './customize.scss';
import { ReactComponent as Plus } from '../../imgs/plus.svg';
import { ReactComponent as Minus } from '../../imgs/minus.svg';
import config from '../../Config';
import { Link } from 'react-router-dom';
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
    if (count <= 0 || count >= 6) {
      return false;
    }

    setCusCount(count);
  };

  // 數量-1
  const contMinus = count => {
    if (count <= 1) {
      return false;
    }

    const newCount = cusCount - 1;
    setCusCount(newCount);
  };

  // 數量+1
  const countAdd = count => {
    if (count >= 99) {
      return false;
    }

    const newCount = cusCount + 1;
    setCusCount(newCount);
  };

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
          cm_prod_id: cusProdSQL[0].cm_prod_id,
          count: cusCount,
          value: +cusProdSQL[0].cm_prod_value,
          print: cusProdSQL[0].cm_prod_print_time,
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
        <div className="en-cont-14 pb-2">已成功將商品加入購物車!</div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
          onClick={handleCartClose}
        >
          關閉
        </Button>
      </Modal.Footer>
    </Modal>
  );

  // 儲存的光箱
  // const [saveShow, setSaveShow] = useState(false);
  // const handleSaveClose = () => setSaveShow(false);
  // const handleSaveShow = () => setSaveShow(true);
  // const saveModel = (
  //   <Modal show={saveShow} onHide={handleSaveClose}>
  //     <Modal.Header closeButton>
  //       <Modal.Title className="en-cont-30 m-3">提醒</Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body style={{ margin: '0 3%' }}>
  //       <div className="en-cont-14 pb-2">已為您儲存當前資料</div>
  //     </Modal.Body>
  //     <Modal.Footer>
  //       <Button
  //         variant="secondary"
  //         className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
  //         onClick={handleSaveClose}
  //       >
  //         Close
  //       </Button>
  //     </Modal.Footer>
  //   </Modal>
  // );

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
        {/* {saveModel} */}
        <Header />
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'Customization'} />
            <div className="customize mycontainer min-hi inside">
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
                    <div className="cus-img">
                      <img
                        src={`${config.HOST}/${cusProdSQL.cm_prod_img_path}`}
                        alt=""
                      />
                      <div className="mtl-btn">
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
                    <div className="detail">
                      <input
                        type="text"
                        className="search-input-bar ch-title-20"
                        placeholder="請幫您的成品取名"
                        value={namedCusProd}
                        onChange={e => {
                          setNamedCusProd(e.target.value);
                        }}
                      />
                      <div className="cus-value">
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
                  <div className="cus-mtl-detial ch-cont-16">
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

                    {/* <div className="chart-img"></div>
                  <div className="mtl-detail">
                    <div className="mtl-name">
                      <div className="name-l">鮭魚</div>
                      <div className="name-r">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="origin">
                      <div className="origin-l">挪威</div>
                      <div className="origin-r">ORIGIN</div>
                    </div>
                    <div className="mfd">
                      <div className="mfd-l">2022-11-15</div>
                      <div className="mfd-r">MFD</div>
                    </div>
                    <div className="rm">
                      <div className="rm-l">大豆</div>
                      <div className="rm-r">RM</div>
                    </div>
                  </div> */}
                  </div>
                </>
              )}

              <div className="manual ch-cont-14">
                <div className="delivery col">
                  <div className="deli">配送類型</div>
                  <div className="deli">宅急便(冷藏)</div>
                  <div className="deli">
                    ※若需要冷凍宅配，請幫忙註明。若冷藏與冷凍商品需一起下單，將會延長運送時間，請先預約。另外，若商品需要變更，請提前與我們聯繫。
                  </div>
                </div>
                <div className="mfd-time col">
                  <div className="mfdt">≪賞味期限≫</div>
                  <div className="mfdt">冷蔵：出貨後4天</div>
                  <div className="mfdt">冷凍：出貨後一個月</div>
                </div>
                <div className="package col">
                  <div className="pkg">≪保存方法≫</div>
                  <div className="pkg">冷藏：請保存於4℃</div>
                  <div className="pkg">冷凍：請保存於-15℃</div>
                </div>
              </div>
              <div className="btn-area">
                {/* <div className="btn-top">
                <button className="btn-sm btn-outline-primary primeal-btn-outline m-2">
                  返回製作
                </button>
                <button
                  className="btn-sm btn-outline-primary primeal-btn-outline m-2"
                  onClick={() => {
                    cusProdname();
                    handleSaveShow();
                  }}
                >
                  儲存編輯
                </button>
              </div> */}
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
