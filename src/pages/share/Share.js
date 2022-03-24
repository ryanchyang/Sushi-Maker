import { Header, Title, AsideLeft, AsideRight } from '../layout/Layout';
import ShareNavBar from './components/ShareNavBar';
import Masonry from './components/Masonry';
import ShareFilter from './components/ShareFilter';
import ShareColController from './components/ShareColController';

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
  if (action.type === 'RESET') {
    return initFilterState;
  }
};

function Share() {
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

  const getShareItems = async () => {
    const response = await fetch(config.GET_SHARE_PRODS, {
      method: 'GET',
    });
    const itemsObj = await response.json();
    return itemsObj;
  };

  const updateDimensions = () => {
    setColumns(getCurrentColumns(currentWidth));
    setGap(getCurrentColumns(currentWidth));
  };

  const checkScrollUpdate = () => {
    const masonryHeight = scrollRef.current?.offsetHeight;
    if (!masonryHeight) return;
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
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Share'} />
          <ShareNavBar
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
            colControl={colControl}
            setColControl={setColControl}
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
              <div>{noFound}</div>
              <Masonry
                columns={columns}
                gap={gap}
                data={shareItemsData}
                ref={scrollRef}
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
        <AsideRight />
      </div>
    </>
  );
}

export default Share;
