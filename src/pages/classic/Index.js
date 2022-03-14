import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './index.scss';
// import { ReactComponent as Discount } from '../../imgs/tags/discount_25.svg';
import { ReactComponent as Cart } from '../../imgs/tags/add_cart.svg';
import { ReactComponent as OrangeTag } from '../../imgs/tags/Rectangle_orange.svg';
import { ReactComponent as SearchBtn } from '../../imgs/search.svg';
import { ReactComponent as FilterBtn } from '../../imgs/filter-icon.svg';
import { IoIosArrowDown as DownArrow } from 'react-icons/io';
import { useState, useEffect } from 'react';
import data from './testData.json';

function Index() {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [category, setCategory] = useState('sushi');
  const [prodList, setProdList] = useState([]); //依分類呈現商品資料
  const [tagShow, setTagShow] = useState([]);
  const [materials, setMaterials] = useState([]); //材料
  const [priceFilter, setPriceFilter] = useState(['', '']); //依金額搜尋([最小金額, 最大金額])
  const [specialCategoryFilter, setSpecialCategoryFilter] = useState([
    { tag: 'new', value: false },
    { tag: 'hot', value: false },
    { tag: 'sale', value: false },
  ]); //依特殊標籤搜尋

  //處理點擊分類商品(SUSHI、DESSERT、PACKAGE)
  const handleClickCategory = e => {
    switch (e.target.innerText) {
      case 'SUSHI':
        setProdList(data.data.filter(pro => pro.prod_category === 'sushi'));
        setCategory('sushi');
        break;
      case 'DESSERT':
        setProdList(data.data.filter(pro => pro.prod_category === 'dessert'));
        setCategory('dessert');
        break;
      case 'PACKAGE':
        setProdList(data.data.filter(pro => pro.prod_category === 'package'));
        setCategory('package');
        break;
      default:
        setProdList(data.data.filter(pro => pro.prod_category === 'sushi'));
        setCategory('sushi');
    }
  };

  //控制依金額篩選的輸入欄
  const handleChangePriceFilter = e => {
    if (e.target.dataset.pfilter === 'min') {
      setPriceFilter([e.target.value, priceFilter[1]]);
    } else if (e.target.dataset.pfilter === 'max') {
      setPriceFilter([priceFilter[0], e.target.value]);
    }
  };

  //處理點擊材料篩選
  const handelClickFlavor = e => {
    const newData = materials.map(v => {
      //將原有的材料id與被點擊的材料id做比對
      if (+e.target.dataset.mtlid === v.mtl_id) {
        return { ...v, selected: !v.selected };
      } else {
        return v;
      }
    });
    setMaterials(newData);
  };

  //處理點擊特殊標籤篩選
  const handelChangeSpecCategory = e => {
    const newData = specialCategoryFilter.map(v => {
      if (e.target.dataset.tag === v.tag) {
        return { ...v, value: !v.value };
      } else {
        return v;
      }
    });
    setSpecialCategoryFilter(newData);
  };

  //重設篩選條件
  const cleanFilter = e => {
    setPriceFilter(['', '']);
    setMaterials(data.mtl);
    setSpecialCategoryFilter([
      { tag: 'new', value: false },
      { tag: 'hot', value: false },
      { tag: 'sale', value: false },
    ]);
  };

  //移除商品列表上方的tag
  const removeTag = e => {
    switch (e.target.dataset.tagtype) {
      //移除價格標籤
      case 'p':
        setPriceFilter(['', '']);
        break;
      //移除材料標籤
      case 'c':
        const newCData = materials.map(v => {
          if (v.mtl_name === e.target.dataset.tagname) {
            return { ...v, selected: false }; //把要取消的材料改為false
          } else {
            return v;
          }
        });
        setMaterials(newCData);
        break;
      //移除特殊標籤
      case 't':
        let changedTagName = '';
        if (e.target.dataset.tagname === '新品') {
          changedTagName = 'new';
        } else if (e.target.dataset.tagname === '熱門') {
          changedTagName = 'hot';
        } else if (e.target.dataset.tagname === '特價') {
          changedTagName = 'sale';
        }
        const newTData = specialCategoryFilter.map(v => {
          if (v.tag === changedTagName) {
            return { ...v, value: false }; //把要取消的特殊標籤改為false
          } else {
            return v;
          }
        });
        setSpecialCategoryFilter(newTData);
        break;

      default:
        break;
    }
  };

  //套用篩選條件
  const applyFilter = (isClose = false) => {
    //如果要套用篩選條件後關掉篩選視窗，則isClose要傳true
    let filteredData = data.data.filter(pro => pro.prod_category === category);

    //最小金額
    const minPrice = priceFilter[0] === '' ? 0 : +priceFilter[0];
    //最大金額
    const maxPrice = priceFilter[1] === '' ? 9999 : +priceFilter[1]; //沒填最大金額時搜尋9999
    //口味選擇(被選中材料的id陣列)
    const flavor = materials.filter(mtl => mtl.selected).map(mtl => mtl.mtl_id);
    //特殊標籤選擇('new'、'hot'、'sale')
    const specTag = specialCategoryFilter
      .filter(tag => tag.value)
      .map(tag => tag.tag);
    //
    const showTags = [];

    //套用篩選金額範圍
    filteredData = filteredData.filter(prod => {
      if (prod.prod_spe_value === 0) {
        //當商品沒有特價時，用原價來篩選
        return prod.prod_value >= minPrice && prod.prod_value <= maxPrice;
      } else {
        //當商品有特價時，用特價來篩選
        return (
          prod.prod_spe_value >= minPrice && prod.prod_spe_value <= maxPrice
        );
      }
    });

    //套用篩選特殊標籤
    if (specTag.length > 0) {
      //specTag.length = 0(沒有選擇任何特殊標籤)時視為全選，不做任何過濾條件
      filteredData = filteredData.filter(prod => {
        let checkTag = '';
        //prod_spe_tag對照(XX%OFF轉為sale、HOT轉為hot、NEW轉為new)
        if (prod.prod_spe_tag.includes('OFF')) {
          checkTag = 'sale';
        } else if (prod.prod_spe_tag !== '') {
          checkTag = prod.prod_spe_tag.toLowerCase();
        }

        if (specTag.includes(checkTag)) return true;
      });
    }

    //套用篩選口味
    if (flavor.length > 0) {
      //當flavor.length = 0(沒有選擇任何材料)時視為全選，不做任何過濾條件
      filteredData = filteredData.filter(prod => {
        for (const m of prod.material) {
          if (flavor.includes(m)) return true;
        }
      });
    }

    //處理商品列表上方的篩選標籤
    //[{tagName: '鮭魚', type: 'c'}, {tagName: '20~50', type: 'p'}, {tagName: '特價', type: 't'}]
    //金額標籤
    if (priceFilter[0] !== '' || priceFilter[1] !== '') {
      //若兩個金額都沒填寫則不處理
      showTags.push({
        tagName: `${priceFilter[0] === '' ? '0' : priceFilter[0]}~${
          priceFilter[1] === '' ? 'max' : priceFilter[1]
        }`,
        type: 'p',
      });
    }
    //口味標籤
    materials.forEach(v => {
      if (v.selected) showTags.push({ tagName: v.mtl_name, type: 'c' });
    });
    //特殊標籤
    specialCategoryFilter.forEach(v => {
      if (v.value) {
        let showTagName = '';
        switch (v.tag) {
          case 'new':
            showTagName = '新品';
            break;
          case 'hot':
            showTagName = '熱門';
            break;
          case 'sale':
            showTagName = '特價';
            break;
          default:
            break;
        }
        showTags.push({ tagName: showTagName, type: 't' });
      }
    });

    if (isClose) setIsOpenFilter(false);
    setTagShow(showTags);
    setProdList(filteredData);
  };

  useEffect(() => {
    //預設呈現的商品類型為壽司
    setProdList(data.data.filter(pro => pro.prod_category === 'sushi'));
    //初始化所有材料
    setMaterials(data.mtl);
  }, []);

  useEffect(() => {
    applyFilter(); //當篩選條件其中一個有改變，就重新渲染商品列表
  }, [materials, priceFilter, specialCategoryFilter]);

  const showStyle = { display: 'block' };
  const showStyleInlne = { display: 'inline' };
  const hiddenStyle = { display: 'none' };
  const flavorTagNoClick = { color: '#b03342', backgroundColor: 'transparent' };
  const flavorTagClicked = { color: '#ffffff', backgroundColor: '#b03342' };

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
              <div className="search-btn">
                <SearchBtn />
              </div>
              <div
                className="filter-btn"
                onClick={() => {
                  setIsOpenFilter(!isOpenFilter);
                }}
              >
                <FilterBtn />
              </div>
            </div>

            <div
              className="main-content"
              style={isOpenFilter ? hiddenStyle : showStyle}
            >
              {/* category tag */}
              <div className="category-box">
                <div className="en-category" onClick={handleClickCategory}>
                  <div className="cate-orange-tag" style={category === "sushi" ? showStyleInlne : hiddenStyle}><OrangeTag className="cate-orange-tag-img" /></div><span>SUSHI</span> 
                </div>
                <div className="en-category" onClick={handleClickCategory}>
                <div className="cate-orange-tag" style={category === "dessert" ? showStyleInlne : hiddenStyle}><OrangeTag className="cate-orange-tag-img" /></div><span>DESSERT</span> 
                </div>
                <div className="en-category" onClick={handleClickCategory}>
                <div className="cate-orange-tag" style={category === "package" ? showStyleInlne : hiddenStyle}><OrangeTag className="cate-orange-tag-img" /></div><span>PACKAGE</span> 
                </div>
              </div>

              {/* filter tag */}
              <div className="filter-tag-box">
                {tagShow.map((tag, i) => {
                  return (
                    <>
                      <div className="filter-tag ch-cont-16" key={i}>
                        {tag.tagName}{' '}
                        <span
                          data-tagType={tag.type}
                          data-tagName={tag.tagName}
                          onClick={removeTag}
                        >
                          &nbsp;X
                        </span>
                      </div>
                    </>
                  );
                })}

                {/* <div className="filter-tag ch-cont-16">
                  鮭魚 <span>&nbsp;X</span>
                </div>
                <div className="filter-tag ch-cont-16">
                  200~500 <span>&nbsp;X</span>
                </div> */}
              </div>

              {/* product list */}
              <div className="prod-list">
                {/* product card */}
                {prodList.map(prod => {
                  return (
                    <>
                      <div className="prod-card" key={prod.id}>
                        <div className="prod-img-box">
                          {/* 判斷有無特殊tag(xx%off、HOT、NEW) */}
                          {prod.prod_spe_tag === '' ? (
                            ''
                          ) : (
                            <div className="discount-tag">
                              <div className="discount-tag-content">
                                {prod.prod_spe_tag}
                              </div>
                            </div>
                          )}

                          <img
                            src={require('./../../imgs/temp/classic-pro1.png')}
                            alt="product"
                          />
                        </div>

                        <div className="prod-name-ch ch-title-22">
                          {prod.prod_ch_name}
                        </div>
                        <div className="prod-name-en en-title-14-5">
                          {prod.prod_en_name}
                        </div>

                        {/* 判斷是否有特價 */}
                        {prod.prod_spe_value === 0 ? (
                          <div className="prod-price-no-discount">
                            <div className="no-discount ch-cont-16">
                              NT_{prod.prod_value}
                            </div>
                          </div>
                        ) : (
                          <div className="prod-price-special">
                            <div className="original-price ch-cont-16">
                              NT_{prod.prod_value}
                            </div>
                            <div className="special-price ch-cont-18">
                              NT_{prod.prod_spe_value}
                            </div>
                          </div>
                        )}

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
                    </>
                  );
                })}

                {/* <div className="prod-card">
                  <div className="prod-img-box">
                    <div className="discount-tag">
                      <div className="discount-tag-content">25%OFF</div>
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
                </div> */}
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
            <div
              className="prod-filter"
              style={isOpenFilter ? showStyle : hiddenStyle}
            >
              {/* clean or cancel filter */}
              <div className="filter-top">
                <div className="clean-filter ch-cont-16" onClick={cleanFilter}>
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
              <div className="by-price">
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
                    value={priceFilter[0]}
                    onChange={handleChangePriceFilter}
                  />
                  <div className="by-price-dash-line"></div>
                  <input
                    type="number"
                    placeholder="最大金額"
                    data-pFilter="max"
                    value={priceFilter[1]}
                    onChange={handleChangePriceFilter}
                  />
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
                  {materials.map(mtl => {
                    return (
                      <>
                        <div
                          key={mtl.mtl_id}
                          className="flavor-tag ch-title-16"
                          data-mtlid={mtl.mtl_id}
                          style={
                            mtl.selected ? flavorTagClicked : flavorTagNoClick
                          }
                          onClick={handelClickFlavor}
                        >
                          {mtl.mtl_name}
                        </div>
                      </>
                    );
                  })}
                  {/* <div className="flavor-tag ch-title-16">牛肉</div>
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
                  <div className="flavor-tag ch-title-16">羊羹/果凍</div> */}
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
                    checked={specialCategoryFilter[0].value}
                    onChange={handelChangeSpecCategory}
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
                    checked={specialCategoryFilter[1].value}
                    onChange={handelChangeSpecCategory}
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
                    checked={specialCategoryFilter[2].value}
                    onChange={handelChangeSpecCategory}
                  />
                  <div className="label-box">
                    <label className="ch-title-16" for="for-sale">
                      促銷特價
                    </label>
                  </div>
                </div>
              </div>

              <div className="send-filter-btn-box">
                <button
                  className="btn-sm btn-primary primeal-btn-sm"
                  onClick={() => {
                    applyFilter(true);
                  }}
                >
                  送出條件
                </button>
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
