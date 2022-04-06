import { Header, Title, AsideLeft, AsideRight } from '../layout/Layout';
import ShareNavBar from './components/ShareNavBar';
import Masonry from './components/Masonry';
import ShareFilter from './components/ShareFilter';
import ShareColController from './components/ShareColController';
import NavPage from '../layout/components/NavPage';

import useCurrentScroll from './hooks/useCurrentScroll';
import useCurrentWidth from './hooks/useCurrentWidth';
import getCurrentColumns from './helpers/getCurrentColumns';

import { useState, useEffect, useRef, useReducer } from 'react';
// import { useWindowScroll } from 'react-use';
import styles from './Share.module.scss';
import config from '../../Config';

const initFilterState = {
  minPrice: '',
  maxPrice: '',
  tags: [],
  minTime: '',
  maxTime: '',
  search: '',
};

const filterStateReducer = (state, action) => {
  if (action.type === 'MINPRICE') {
    return {
      ...state,
      minPrice: action.minPrice,
    };
  }
  if (action.type === 'MAXPRICE') {
    return {
      ...state,
      maxPrice: action.maxPrice,
    };
  }
  if (action.type === 'TAGS') {
    return {
      ...state,
      tags: action.tags,
    };
  }
  if (action.type === 'MINTIME') {
    return {
      ...state,
      minTime: action.minTime,
    };
  }
  if (action.type === 'MAXTIME') {
    return {
      ...state,
      maxTime: action.maxTime,
    };
  }
  if (action.type === 'SEARCH') {
    return {
      ...state,
      search: action.search,
    };
  }
  if (action.type === 'RESET') {
    return initFilterState;
  }
};

function Share(props) {
  //controll
  const [filter, setFilter] = useState(false);
  const [masonryContainer, setMasonryContainer] = useState(true);
  const [search, setSearch] = useState(false);
  const [colControl, setColControl] = useState(false);
  // filter
  const [filterState, dispatchFilter] = useReducer(
    filterStateReducer,
    initFilterState
  );
  const [noFound, setNoFound] = useState('');

  //window handler
  const currentWidth = useCurrentWidth();
  const currentScroll = useCurrentScroll();
  const scrollRef = useRef(null);

  //masonry
  const [columns, setColumns] = useState(getCurrentColumns(currentWidth));
  const [gap, setGap] = useState(4);

  //data
  const [shareItemsData, setShareItemsData] = useState([]);

  //加入NAVBar漢堡選單開關
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構NAVBAR

  // Get member id
  const memId = localStorage.getItem('mem_id');
  console.log(memId);
  const getShareItems = async () => {
    const response = await fetch(config.GET_SHARE_PRODS + `${memId}`, {
      method: 'GET',
    });
    const itemsObj = await response.json();
    return itemsObj;
  };

  const getFilterUpdate = () => {
    let count = '';
    const filterStatus = { isFilter: false, num: '' };

    const updateStatusTemplate = () => {
      filterStatus.isFilter = true;
      count = +count + 1;
      filterStatus.num = count;
    };
    if (filterState.minPrice || filterState.maxPrice) {
      updateStatusTemplate();
    }
    if (filterState.tags.length) {
      updateStatusTemplate();
    }
    if (filterState.minTime || filterState.maxTime) {
      updateStatusTemplate();
    }
    return filterStatus;
  };

  const updateDimensions = () => {
    setColumns(getCurrentColumns(currentWidth));
    setGap(getCurrentColumns(currentWidth));
  };

  const checkScrollUpdate = () => {
    const masonryHeight = scrollRef.current?.offsetHeight;
    if (!masonryHeight) return;

    const isFilter = getFilterUpdate().isFilter;
    if (isFilter) return; // if has filter then no infinite scroll

    if (masonryHeight < currentScroll + window.innerHeight) {
      (async () => {
        const result = await getShareItems();

        setShareItemsData([...shareItemsData, ...result.data]);
      })();
    }
  };

  useEffect(() => {
    checkScrollUpdate();
  }, [currentScroll]);

  useEffect(() => {
    updateDimensions();
  }, [currentWidth]);

  // Fetching data
  useEffect(() => {
    (async () => {
      const result = await getShareItems();

      setShareItemsData(result.data);
    })();
  }, []);

  return (
    <>
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'Share'} setNavIsOpen={setNavIsOpen} />
            <ShareNavBar
              filter={filter}
              setFilter={setFilter}
              search={search}
              setSearch={setSearch}
              colControl={colControl}
              setColControl={setColControl}
              filterNum={getFilterUpdate().num}
              filterState={filterState}
              dispatch={dispatchFilter}
              setNoFound={setNoFound}
              setShareItemsData={setShareItemsData}
              getShareItems={getShareItems}
            />
            <ShareColController
              colControl={colControl}
              setColControl={setColControl}
              columns={columns}
              setColumns={setColumns}
              gap={gap}
              setGap={setGap}
            />
            <div className={` ${styles['share-min-height']}`}>
              <div
                className={`${styles['waterfall-container']} ${
                  masonryContainer ? '' : styles['share-display-none']
                }`}
              >
                <Masonry
                  columns={columns}
                  gap={gap}
                  data={shareItemsData}
                  ref={scrollRef}
                  noFound={noFound}
                />
              </div>
            </div>
            <ShareFilter
              filter={filter}
              setFilter={setFilter}
              masonryContainer={masonryContainer}
              setMasonryContainer={setMasonryContainer}
              filterState={filterState}
              dispatch={dispatchFilter}
              setShareItemsData={setShareItemsData}
              getShareItems={getShareItems}
              setNoFound={setNoFound}
            />
            {/* <Footer /> */}
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default Share;
