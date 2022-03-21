import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { ReactComponent as Heart } from '../../imgs/tags/heart.svg';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import config from '../../Config';
import './detail.scss';

function Detail() {  
  const [isDetail, setIsDetail] = useState(false);  //是否開啟詳細資料
  const [data, setData] = useState({});  //商品詳細資料
  const [materials, setMaterials] = useState([]);   //食材資料(3個)
  const [recommends, setRecommendeds] = useState([]);  //推薦商品資料(3個)
  const [selectedMaterial, setSelectedMaterial] = useState({});  //目前選定的食材資料
  const [buyCount, setBuyCount] = useState(1);
  const { id } = useParams();  //取得url上的product id

  //點擊食材圖片
  const changeMtl = (mid) => {
    const material = materials.find(m => m.mtl_id === mid);
    setSelectedMaterial(material);
  }

  //輸入商品數量
  const changeCountByType = (count) => {
    //商品數量不能小於0或是大於99
    if(count <= 0 || count > 99){
      return false;
    }
    
    setBuyCount(count);
  };

  //點擊商品減少按鈕(-1)
  const changeCountByMinus = () => {
    //商品數量若小於等於1，則不能再減少數量(需大於0)
    if(buyCount <= 1){
      return false;
    }

    const newCount = buyCount - 1;
    setBuyCount(newCount);    
  };

  //點擊商品增加按鈕(+1)
  const changeCountByAdd = () => {
    //商品數量若大於等於99，則不能再增加數量
    if(buyCount >= 99){
      return false;
    }

    const newCount = buyCount + 1;
    setBuyCount(newCount);    
  };

  useEffect(() => {
    const fetchData = async() => {
      const prodRes = await fetch(config.GET_PROD + `/${id}`);
      const prodObj = await prodRes.json();
      setData(prodObj.rows[0]);
      setMaterials(prodObj.rows[1]);
      setSelectedMaterial((prodObj.rows[1])[0]);
      setRecommendeds(prodObj.rows[2]);
    };

    fetchData();
  },[]);

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Classic'} />

          <div className="classic-detail">
            {/* 商品圖片與名稱、售價 */}
            <div
              className={
                isDetail ? 'detail-content-ondetail' : 'detail-content'
              }
            >
              <div
                className={isDetail ? 'prod-img-box-ondetail' : 'prod-img-box'}
              >
                <div
                  className={
                    isDetail ? 'all-size-title-ondetail' : 'all-size-title'
                  }
                >
                  <div className="prod-ch-name ch-title-big">{data.c_prod_ch_name}</div>
                  <div className="prod-en-name eh-title-big">{data.c_prod_en_name}</div>
                </div>
                <img
                  className={
                    isDetail ? 'prod-img-box-img-ondetail' : 'prod-img-box-img'
                  }
                  src={`http://localhost:3500${data.c_prod_img_path}`}
                  alt="product-detail"
                />
                <div
                  className={
                    isDetail
                      ? 'material-tag-group-ondetail'
                      : 'material-tag-group'
                  }
                >
                  {
                    materials.map(m => {
                      return (
                        <div className="material-tag-box" key={m.mtl_id} onClick={() => {changeMtl(m.mtl_id)}}>
                          <img
                            src={require('./../../imgs/temp/material1.png')}
                            alt="material"
                          />
                        </div>                       
                      )
                    })
                  }

                  {/* <div className="material-tag-box">
                    <img
                      src={require('./../../imgs/temp/material1.png')}
                      alt=""
                    />
                  </div>
                  <div className="material-tag-box">
                    <img
                      src={require('./../../imgs/temp/material1.png')}
                      alt=""
                    />
                  </div>
                  <div className="material-tag-box">
                    <img
                      src={require('./../../imgs/temp/material1.png')}
                      alt=""
                    />
                  </div> */}

                </div>
              </div>

              <div
                className={
                  isDetail ? 'prod-detail-right-ondetail' : 'prod-detail-right'
                }
              >
                <div className="prod-ch-name ch-title-big">{data.c_prod_ch_name}</div>
                <div className="prod-en-name eh-title-big">{data.c_prod_en_name}</div>
                <div className="like-heart">
                  <Heart />
                </div>
                <div className="prod-price">
                  {/* 如果沒有特價就用原價顯示 */}
                  <div className="ch-title-large">NT_${+data.c_prod_spe_value === 0 ? data.c_prod_value : data.c_prod_spe_value}</div>
                  <div className="prod-stock en-title-mid">PRICE</div>
                </div>
                <div className="prod-printtime">
                  <div className="ch-title-large">{data.c_prod_print_time}_SEC</div>
                  <div className="prod-print en-title-mid">PRINT TIME</div>
                </div>
                <div className="prod-desc">
                  <div className="prod-desc-content ch-content-sm">
                    {data.c_prod_desc}
                  </div>
                  <div className="prod-desc-title en-title-16">DESCRIPTION</div>
                </div>
              </div>
            </div>

            {/* 加入購物車 */}
            <div>
              <div className="select-add-cart">
                <div className="select-count">
                  <button onClick={() => changeCountByMinus()}>-</button>
                  <input type="number" value={buyCount} onChange={(e) => changeCountByType(+e.target.value)} />
                  <button onClick={() => changeCountByAdd()}>+</button>
                </div>
                <button className="add-cart btn-sm btn-primary primeal-btn">
                  加入購物車
                </button>
              </div>
            </div>

            {/* 商品營養表、材料說明、配送 */}
            <div
              className={
                isDetail
                  ? 'prod-detail-content-ondetail'
                  : 'prod-detail-content'
              }
            >
              <div className="detail-content-top">
                <div className="nutrition-img">
                  <img src={require('./../../imgs/temp/analyze.png')} alt="" />
                </div>
                <div className="material-list">
                  <div className="material-name">
                    <div className="material-name-content ch-title-22">
                      {selectedMaterial.mtl_name}
                    </div>
                    <div className="material-img">
                      <img
                        src={require('./../../imgs/temp/material1.png')}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="material-item">
                    <div className="material-content ch-cont-18">{selectedMaterial.mtl_origin}</div>
                    <div className="material-title en-cont-16">ORIGIN</div>
                  </div>
                  <div className="material-item">
                    <div className="material-content ch-cont-18">
                      {selectedMaterial.mtl_produce_date}
                    </div>
                    <div className="material-title en-cont-16">MFD</div>
                  </div>
                  <div className="material-item">
                    <div className="material-content ch-cont-18">{selectedMaterial.mtl_raw_matrials}</div>
                    <div className="material-title en-cont-16">RM</div>
                  </div>
                </div>
              </div>
              <div className="detail-content-bottom">
                <div className="carrier-type ch-cont-14">
                  ≪配送類型≫
                  <br />
                  宅急便(冷藏)
                  <br />
                  ※若需要冷凍宅配 ,請幫忙註明。 若冷藏與冷凍商品需一起下單
                  ,將會延長運送時間 ,請先預約。 另外 ,若商品需要變更
                  ,請提前與我們聯繫。
                </div>
                <div className="expire ch-cont-14">
                  ≪賞味期限≫
                  <br />
                  冷蔵：出貨後4天
                  <br />
                  冷凍：出貨後一個月
                  <br />
                  <br />
                  ≪保存方法≫
                  <br />
                  冷藏：請保存於4℃
                  <br />
                  冷凍：請保存於-15℃
                </div>
                <div className="package ch-cont-14">
                  ≪包裝≫
                  <br />
                  單入 : 印食紙盒裝
                  <br />
                  六入 : 印食便當盒裝
                  <br />
                  <br />
                  ※若需送禮, 請參考印食禮盒
                </div>
              </div>
            </div>

            {/* 商品詳細資料切換 */}
            <div className="detail-toggle-btn">
              <div
                className={isDetail ? 'back-btn-ondetail' : 'back-btn'}
                onClick={() => {
                  setIsDetail(!isDetail);
                }}
              >
                <div className="back-btn-arrow">
                  <img
                    src={require('./../../imgs/temp/arrow-left.png')}
                    alt=""
                  />
                </div>
                <div className="back-btn-text en-title-18">BACK</div>
              </div>
              <div
                className={isDetail ? 'detail-btn-ondetail' : 'detail-btn'}
                onClick={() => {
                  setIsDetail(!isDetail);
                }}
              >
                <div className="detail-btn-text en-title-18">DETAIL</div>
                <div className="detail-btn-arrow">
                  <img
                    src={require('./../../imgs/temp/arrow-right.png')}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* 推薦商品 */}
            <div className="recommend">
              <div className="recommend-ch-title ch-title-22">推薦商品</div>
              <div className="recommend-en-title en-title-14-10">
                Recommandation
              </div>
            </div>
            <div className="recommend-prod-box">
              {recommends.map((r, i) => {
                return (
                  //手機版因版型大小會隱藏最後一個推薦商品，因此最後一個需有個特殊class標籤
                  <div className={recommends.length === i + 1 ? "prod-card last-recommend" : "prod-card"} key={r.pid}>
                  <Link to={`/classic/detail/${r.pid}`} style={{textDecoration:'none', color: '#212121'}}>
                    <div className="recommend-prod-img-box">
                      {/* 判斷有無特殊tag(xx%off、HOT、NEW) */}
                      {r.c_prod_special_tag === '' ? (
                              ''
                            ) : (
                              <div className="discount-tag">
                                <div className="discount-tag-content">
                                  {r.c_prod_special_tag}
                                </div>
                              </div>
                            )}
                      <img
                        src={`http://localhost:3500${r.c_prod_img_path}`}
                        alt="product-recommend"
                      />
                    </div>
                    <div className="prod-name-ch ch-title-22">{r.c_prod_ch_name}</div>
                    <div className="prod-name-en en-title-14-5">{r.c_prod_en_name}</div>
                    {r.c_prod_spe_value === 0 ? (
                      <div className="prod-price-no-discount">
                        <div className="no-discount ch-cont-16">NT_{r.c_prod_value}</div>
                      </div>
                    ) : (
                      <div className="prod-price-special">
                        <div className="original-price ch-cont-14">NT_{r.c_prod_value}</div>
                        <div className="special-price ch-cont-16">NT_{r.c_prod_spe_value}</div>
                      </div>
                    )}
                    {/* <div className="prod-price-special">
                      <div className="original-price ch-cont-14">NT_55</div>
                      <div className="special-price ch-cont-16">NT_45</div>
                    </div>
                    <div className="prod-price-no-discount">
                      <div className="no-discount ch-cont-16">NT_60</div>
                    </div> */}
                    </Link>
                  </div>
                )
              })}




              {/* <div className="prod-card">
                <div className="recommend-prod-img-box">
                  <div className="discount-tag">
                    <Discount />
                  </div>
                  <img
                    src={require('./../../imgs/temp/classic-pro4.png')}
                    alt="product-recommend"
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
                    alt="product-recommend"
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

              <div className="prod-card last-recommend">
                <div className="recommend-prod-img-box">
                  <div className="discount-tag">
                    <Discount />
                  </div>
                  <img
                    src={require('./../../imgs/temp/classic-pro2.png')}
                    alt="product-recommend"
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
              </div> */}
            </div>
          </div>

          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default Detail;
