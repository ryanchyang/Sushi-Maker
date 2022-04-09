import { Header, Title, AsideLeft, Footer } from '../layout/Layout';
import AsideRight from './AsideRight'; //右邊layout多了歷史查詢功能，因此拉出來自製
import './index.scss';
import { ReactComponent as Cart } from '../../imgs/tags/add_cart.svg';
import { ReactComponent as OrangeTag } from '../../imgs/tags/Rectangle_orange.svg';
import { ReactComponent as SearchBtn } from '../../imgs/search.svg';
import { ReactComponent as FilterBtn } from '../../imgs/filter-icon.svg';
import { IoIosArrowDown as DownArrow } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../Config';
import NavPage from '../layout/components/NavPage'; //加入漢堡選單
import { getCartCount } from '../../utils';
import { Button, Modal } from 'react-bootstrap';

function Index(props) {
  const [allData, setAllData] = useState([]);
  const [isOpenFilter, setIsOpenFilter] = useState(false); //是否開啟篩選器選單
  const [isOpenMainContent, setIsOpenMainContent] = useState(true); //是否開啟主要商品列表
  const [currentPage, setCurrentPage] = useState(1); //當前分頁
  const [totalPage, setTotalPage] = useState(0); //總分頁數
  const [category, setCategory] = useState('sushi'); //商品分類
  const [prodList, setProdList] = useState([]); //依分類呈現商品資料
  const [tagShow, setTagShow] = useState([]); //商品列表上方的分類標籤
  const [materials, setMaterials] = useState([]); //材料
  const [priceFilter, setPriceFilter] = useState(['', '']); //依金額搜尋([最小金額, 最大金額])
  const [specialCategoryFilter, setSpecialCategoryFilter] = useState([
    { tag: 'new', value: false },
    { tag: 'hot', value: false },
    { tag: 'sale', value: false },
  ]); //依特殊標籤搜尋
  const [filterData, setFilterData] = useState([]); //套用篩選條件後的商品列表
  const [buyProdCount, setBuyProdCount] = useState([]); //紀錄每個商品購買的數量[{pid, pname, count}]
  const [search, setSearch] = useState(false); //是否開啟搜尋框
  const [searchText, setSearchText] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const pageProdCount = 6; //一頁呈現的商品個數
  //加入NAVBar漢堡選單開關
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構NAVBAR

  //處理點擊分類商品(SUSHI、DESSERT、PACKAGE)
  const handleClickCategory = e => {
    switch (e.target.innerText) {
      case 'SUSHI':
        const dataByCategory1 = allData.filter(
          pro => pro.c_prod_cate === 'sushi'
        );
        // setProdList(allData.filter(pro => pro.c_prod_cate === 'sushi'));
        setProdList(dataByCategory1);
        setCategory('sushi');
        applyFilter(false, dataByCategory1);
        break;
      case 'DESSERT':
        const dataByCategory2 = allData.filter(
          pro => pro.c_prod_cate === 'dessert'
        );
        // setProdList(allData.filter(pro => pro.c_prod_cate === 'dessert'));
        setProdList(dataByCategory2);
        setCategory('dessert');
        applyFilter(false, dataByCategory2);
        break;
      case 'PACKAGE':
        const dataByCategory3 = allData.filter(
          pro => pro.c_prod_cate === 'package'
        );
        // setProdList(allData.filter(pro => pro.c_prod_cate === 'package'));
        setProdList(dataByCategory3);
        setCategory('package');
        applyFilter(false, dataByCategory3);
        break;
      default:
        setProdList(allData.filter(pro => pro.c_prod_cate === 'sushi'));
        setCategory('sushi');
        applyFilter();
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
    const resetMtls = materials.map(m => {
      return { ...m, selected: false };
    });
    setPriceFilter(['', '']);
    setMaterials(resetMtls);
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
  const applyFilter = (isClose = false, isCategory = []) => {
    //如果要套用篩選條件後關掉篩選視窗，則isClose要傳true
    //如果要直接套用上方三分類(SUSHI、DESSERT、PACKAGE)的資料，可以直接傳進來
    let filteredData = [];
    if (isCategory.length > 0) {
      filteredData = isCategory;
    } else {
      filteredData = allData.filter(pro => pro.c_prod_cate === category);
    }

    if (searchText !== '') {
      filteredData = filteredData.filter(data =>
        data.c_prod_ch_name.includes(searchText)
      );
    }

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
    const showTags = [];

    //套用篩選金額範圍
    filteredData = filteredData.filter(prod => {
      if (prod.c_prod_spe_value === 0) {
        //當商品沒有特價時，用原價來篩選
        return prod.c_prod_value >= minPrice && prod.c_prod_value <= maxPrice;
      } else {
        //當商品有特價時，用特價來篩選
        return (
          prod.c_prod_spe_value >= minPrice && prod.c_prod_spe_value <= maxPrice
        );
      }
    });

    //套用篩選特殊標籤
    if (specTag.length > 0) {
      //specTag.length = 0(沒有選擇任何特殊標籤)時視為全選，不做任何過濾條件
      filteredData = filteredData.filter(prod => {
        let checkTag = '';
        //c_prod_special_tag對照(XX%OFF轉為sale、HOT轉為hot、NEW轉為new)
        if (prod.c_prod_special_tag.includes('OFF')) {
          checkTag = 'sale';
        } else if (prod.c_prod_special_tag !== '') {
          checkTag = prod.c_prod_special_tag.toLowerCase();
        }

        if (specTag.includes(checkTag)) return true;
      });
    }
    //套用篩選口味
    if (flavor.length > 0) {
      //當flavor.length = 0(沒有選擇任何材料)時視為全選，不做任何過濾條件
      filteredData = filteredData.filter(prod => {
        for (const m of prod.c_prod_material_arr.split(',')) {
          if (flavor.includes(+m)) return true;
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
    setFilterData(filteredData);
    setTotalPage(Math.ceil(filteredData.length / 6));

    //取當頁所呈現的商品列表
    if (isCategory.length > 0) {
      //若是點選上方三大分類，則分頁從1開始
      setProdList(filteredData.slice(0, pageProdCount));
      setCurrentPage(1);
    } else {
      setProdList(
        filteredData.slice(
          (currentPage - 1) * pageProdCount,
          currentPage * pageProdCount
        )
      );
    }
  };

  //處理搜尋框輸入
  const handleChangeSearch = e => {
    setSearchText(e.target.value);
  };

  //點擊商品分頁的箭頭按鈕
  const changePageArrow = e => {
    if (e.target.dataset.canchange === 'true') {
      //上下頁數在合理範圍時才會換頁
      setCurrentPage(+e.target.dataset.page);
    }
  };

  //處理換頁
  const changePage = e => {
    setCurrentPage(+e.target.dataset.page);
  };

  const applyPage = () => {
    setProdList(
      prodList.slice(
        (currentPage - 1) * pageProdCount,
        currentPage * pageProdCount
      )
    ); //取當頁所呈現的商品列表
  };

  // 加入購物車光箱
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //加入購物車
  const addToCart = id => {
    const isLogin = localStorage.getItem('mem_id') !== null; //判斷是否登入
    if (isLogin) {
      const addProd = buyProdCount.find(p => p.pid === +id);
      const res = fetch(config.ADD_CART, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          mid: +localStorage.getItem('mem_id'),
          pid: addProd.pid,
          count: addProd.count,
          value: addProd.value,
          print: addProd.print,
          category: 'cs',
        }),
      })
        .then(res => res.json())
        .then(d => {
          //加入購物車後重新設定購物車的商品數量
          getCartCount(+localStorage.getItem('mem_id'));
        });
      handleCartShow();
    } else {
      handleLikeShow();
    }
  };

  //初始化所有商品的購買數量(皆為1)
  const initProdBuyCount = prodList => {
    const prodCount = [];
    prodList.forEach(prod => {
      prodCount.push({
        pid: prod.pid,
        pname: prod.c_prod_ch_name,
        print: prod.c_prod_print_time,
        value:
          +prod.c_prod_spe_value === 0
            ? prod.c_prod_value
            : prod.c_prod_spe_value,
        count: 1,
      });
    });
    setBuyProdCount(prodCount);
  };

  //輸入商品數量
  const changeCountByType = (count, pid) => {
    //商品數量不能小於0或是大於99
    if (count <= 0 || count > 99) {
      return false;
    }

    const newData = buyProdCount.map(p => {
      if (p.pid === +pid) {
        return { ...p, count: count };
      } else {
        return p;
      }
    });

    setBuyProdCount(newData);
  };

  //點擊商品減少按鈕(-1)
  const changeCountByMinus = pid => {
    const newData = buyProdCount.map(p => {
      if (p.pid === +pid) {
        //商品數量若小於等於1，則不能再減少數量(需大於0)
        if (p.count <= 1) {
          return { ...p, count: p.count };
        }
        return { ...p, count: p.count - 1 };
      } else {
        return p;
      }
    });

    setBuyProdCount(newData);
  };

  //點擊商品增加按鈕(+1)
  const changeCountByAdd = pid => {
    const newData = buyProdCount.map(p => {
      if (p.pid === +pid) {
        //商品數量若大於等於99，則不能再增加數量
        if (p.count >= 99) {
          return { ...p, count: p.count };
        }
        return { ...p, count: p.count + 1 };
      } else {
        return p;
      }
    });

    setBuyProdCount(newData);
  };

  //每次點擊商品詳細頁，都要將pid存到localstorage以供歷史查詢
  const saveHistory = pid => {
    let newHistory = localStorage.getItem('history') ?? '';
    newHistory += pid + '-';
    localStorage.setItem('history', newHistory);
  };

  useEffect(() => {
    const fetchData = async () => {
      //取得所有商品資料
      const prodRes = await fetch(config.GET_INIT_PRODS);
      const prodObj = await prodRes.json();
      const prods = prodObj.rows; //data.data
      setAllData(prods);

      //取得所有食材資料
      const mtlRes = await fetch(config.GET_INIT_MTLS);
      const mtlObj = await mtlRes.json();
      const mtls = mtlObj.rows;

      const initData = prods.filter(pro => pro.c_prod_cate === 'sushi');
      //預設呈現的商品類型為壽司
      setProdList(initData);
      //初始化所有材料
      setMaterials(mtls);
      //初始化總分頁數
      setTotalPage(Math.ceil(initData.length / 6));
      //初始化商品購買數量
      initProdBuyCount(prods);
    };

    fetchData();
  }, []);

  useEffect(() => {
    applyFilter(); //當篩選條件其中一個有改變或是點其它分頁，就重新渲染商品列表
  }, [materials, priceFilter, specialCategoryFilter, searchText, currentPage]);

  const showStyle = { display: 'block' };
  const showStyleInlne = { display: 'inline' };
  const hiddenStyle = { display: 'none' };
  const flavorTagNoClick = { color: '#b03342', backgroundColor: 'transparent' };
  const flavorTagClicked = { color: '#ffffff', backgroundColor: '#b03342' };
  const pageNoSelected = { border: '1px solid #575757', color: '#575757' };
  const pageSelected = { border: '1px solid #B03342', color: '#B03342' };
  const searchBarHandler = () =>
    search
      ? { transform: 'translateX(0px)' }
      : { transform: 'translateX(280px)' };

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

  return (
    <>
      {likeModel}
      {cartModel}
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'Classic'} setNavIsOpen={setNavIsOpen} />

            {/* 麵包屑 */}
            <p className="en-title-14-10 bread">
              <Link
                to={'/'}
                style={{ textDecoration: 'none', color: '#575757' }}
              >
                HOME /
              </Link>
              <Link
                to={'/classic'}
                style={{ textDecoration: 'none', color: '#b03342' }}
              >
                 &nbsp;CLASSIC
              </Link>
            </p>
            <div className="classic min-hi">
              <div className="search-filter">
                <div className="search-btn d-flex">
                  <div className="search-input d-md-flex d-none justify-content-end align-items-center">
                    <input
                      type="text"
                      style={searchBarHandler()}
                      className="search-input-bar ch-cont-14"
                      value={searchText}
                      onChange={handleChangeSearch}
                      placeholder="Search"
                    ></input>
                  </div>
                  <div className="classic-search-btn">
                    <SearchBtn onClick={() => setSearch(!search)} />
                  </div>
                </div>
                <div
                  className="filter-btn classic-filter-btn"
                  onClick={() => {
                    setIsOpenFilter(!isOpenFilter);
                  }}
                >
                  <FilterBtn />
                </div>
              </div>

              {/* 商品呈現區 */}
              <div
                className="main-content"
                style={isOpenMainContent ? showStyle : hiddenStyle}
              >
                {/* category tag */}
                <div className="category-box">
                  <div className="en-category" onClick={handleClickCategory}>
                    <div
                      className="cate-orange-tag-img"
                      style={
                        category === 'sushi' ? showStyleInlne : hiddenStyle
                      }
                    ></div>
                    <div className="en-category">SUSHI</div>
                  </div>
                  <div className="en-category" onClick={handleClickCategory}>
                    <div
                      className="cate-orange-tag-img"
                      style={
                        category === 'dessert' ? showStyleInlne : hiddenStyle
                      }
                    ></div>
                    <div className="en-category">DESSERT</div>
                  </div>
                  <div className="en-category" onClick={handleClickCategory}>
                    <div
                      className="cate-orange-tag-img"
                      style={
                        category === 'package' ? showStyleInlne : hiddenStyle
                      }
                    ></div>
                    <div className="en-category">PACKAGE</div>
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

                {prodList.length === 0 ? (
                  <div className="no-result">
                    {' '}
                    {/* no product data */}
                    <div className="search-btn ch-title-22">
                      <SearchBtn />
                      <span>查無符合條件的商品，請重新篩選或清空篩選條件</span>
                    </div>
                  </div>
                ) : (
                  <div className="prod-list">
                    {' '}
                    {/* product list */}
                    {/* product card */}
                    {prodList.map(prod => {
                      const pid = prod.pid;
                      {
                        /* let buyCount = +buyProdCount.filter(p => p.pid === pid)[0].count; */
                      }
                      let buyCount = buyProdCount.filter(p => p.pid === pid);
                      buyCount = +buyCount[0]?.count ?? 0;

                      return (
                        <>
                          <div className="prod-card" key={pid}>
                            <Link
                              to={`/classic/detail/${prod.pid}`}
                              style={{
                                textDecoration: 'none',
                                color: '#212121',
                              }}
                              onClick={() => {
                                saveHistory(pid);
                              }}
                            >
                              {' '}
                              {/* 點擊圖片可連到商品詳細頁 */}
                              <div className="prod-img-box">
                                {/* 判斷有無特殊tag(xx%off、HOT、NEW) */}
                                {prod.c_prod_special_tag === '' ? (
                                  ''
                                ) : (
                                  <div className="discount-tag">
                                    <div className="discount-tag-content">
                                      {prod.c_prod_special_tag}
                                    </div>
                                  </div>
                                )}

                                <img
                                  // src={require('./../../imgs/temp/classic-pro1.png')}
                                  src={`http://localhost:3500${prod.c_prod_img_path}`}
                                  alt="product"
                                />
                              </div>
                              <div className="content">
                                <div className="intr-text ch-cont-14">
                                  {prod.c_prod_group_tag}
                                </div>
                              </div>
                              <div className="prod-name-ch ch-title-22">
                                {prod.c_prod_ch_name}
                              </div>
                              <div className="prod-name-en en-title-14-5">
                                {prod.c_prod_en_name}
                              </div>
                            </Link>

                            {/* 判斷是否有特價 */}
                            {prod.c_prod_spe_value === 0 ? (
                              <div className="prod-price-no-discount">
                                <div className="no-discount ch-cont-16">
                                  NT_{prod.c_prod_value}
                                </div>
                              </div>
                            ) : (
                              <div className="prod-price-special">
                                <div className="original-price ch-cont-16">
                                  NT_{prod.c_prod_value}
                                </div>
                                <div className="special-price ch-cont-18">
                                  NT_{prod.c_prod_spe_value}
                                </div>
                              </div>
                            )}

                            <div className="select-add-cart">
                              <div className="select-count">
                                <button onClick={e => changeCountByMinus(pid)}>
                                  -
                                </button>
                                <input
                                  type="number"
                                  value={buyCount}
                                  onChange={e =>
                                    changeCountByType(+e.target.value, pid)
                                  }
                                />
                                <button onClick={e => changeCountByAdd(pid)}>
                                  +
                                </button>
                              </div>

                              <div
                                className="cart-btn"
                                onClick={() => {
                                  addToCart(pid);
                                }}
                              >
                                <Cart onClick={handleShow} />
                              </div>

                              <button
                                className="add-cart btn-sm btn-primary primeal-btn"
                                onClick={() => {
                                  addToCart(pid);
                                }}
                              >
                                加入購物車
                              </button>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                )}

                {/* pagination */}
                {/* 當總商品數量大於一頁的商品數量時才會有分頁按鈕可按 */}
                {filterData.length > pageProdCount ? (
                  <div className="pagination-box">
                    <ul className="pagination ch-cont-16">
                      <li>
                        {' '}
                        {/* 上一頁按鈕 */}
                        <div
                          className="page-prev"
                          data-page={currentPage - 1}
                          onClick={changePageArrow}
                          data-canChange={currentPage - 1 >= 1 ? true : false}
                        >
                          &lt;
                        </div>
                      </li>
                      {Array(totalPage)
                        .fill(1)
                        .map((v, i) => {
                          return (
                            <>
                              <li key={i}>
                                {' '}
                                {/* 各分頁按鈕 */}
                                <div
                                  className="page-number"
                                  data-page={i + 1}
                                  onClick={changePage}
                                  style={
                                    currentPage === i + 1
                                      ? pageSelected
                                      : pageNoSelected
                                  }
                                >
                                  {i + 1}
                                </div>
                              </li>
                            </>
                          );
                        })}

                      {/* <li>
                    <div className="page-number">1</div>
                  </li>
                  <li>
                    <div className="page-number selected">2</div>
                  </li>
                  <li>
                    <div className="page-number">3</div>
                  </li>
                  <li> */}

                      <li>
                        {' '}
                        {/* 下一頁按鈕 */}
                        <div
                          className="page-next"
                          data-page={currentPage + 1}
                          data-canChange={
                            currentPage + 1 <= totalPage ? true : false
                          }
                          onClick={changePageArrow}
                        >
                          &gt;
                        </div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ''
                )}
              </div>

              {/* 主要篩選條件區 */}
              <div
                className="prod-filter-sh"
                style={isOpenFilter ? { right: '12.5%' } : { right: '-100%' }}
                onTransitionEnd={() => {
                  setIsOpenMainContent(isOpenFilter ? false : true);
                }}
              >
                {/* clean or cancel filter */}
                <div className="d-flex flex-column">
                  <div className="filter-top justify-content-end">
                    <div
                      className="clean-filter ch-cont-16"
                      onClick={cleanFilter}
                    >
                      <img
                        src={require('./../../imgs/tags/trash.png')}
                        alt="trash"
                      />
                      <span>清空條件</span>
                    </div>
                    {/* <div className="cancel-filter ch-cont-16">
                    <span>X</span>
                  </div> */}
                  </div>

                  {/* by price */}
                  <div className="d-flex justify-content-center mobile-filter-title">
                    <div className="by-price col-18 d-flex flex-column">
                      <div className="by-price-title">
                        <div className="orange-tag">
                          <OrangeTag className="tag-img" />
                        </div>
                        <div className="by-price-text en-title-big">
                          By PRICE
                        </div>
                        <div className="down-arrow">
                          <DownArrow size={22} color="gray" />
                        </div>
                      </div>
                      <div className="by-price-input justify-content-between">
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
                  </div>

                  {/* by flavor */}
                  <div className="d-flex justify-content-center mobile-filter-title">
                    <div className="by-flavor col-18 d-flex flex-column">
                      <div className="by-flavor-title">
                        <div className="orange-tag">
                          <OrangeTag className="tag-img" />
                        </div>
                        <div className="by-price-text en-title-big">
                          By FLAVOR
                        </div>
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
                                  mtl.selected
                                    ? flavorTagClicked
                                    : flavorTagNoClick
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
                  </div>

                  {/* by category */}
                  <div className="d-flex justify-content-center mobile-filter-title">
                    <div className="col-18 d-flex flex-column">
                      <div className="by-category">
                        <div className="orange-tag">
                          <OrangeTag className="tag-img" />
                        </div>
                        <div className="by-price-text en-title-big">
                          By CATEGORY
                        </div>
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
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="col-18">
                      <div className="send-filter-btn-box d-flex justify-content-end">
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

export default Index;
