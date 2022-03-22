import { Header, Title, AsideLeft, AsideRight } from '../layout/Layout';
import ShareNavBar from './components/ShareNavBar';
import Masonry from './components/Masonry';
import ShareFilter from './components/ShareFilter';
import ShareColController from './components/ShareColController';

import useCurrentScroll from './hooks/useCurrentScroll';
import useCurrentWidth from './hooks/useCurrentWidth';
import getCurrentColumns from './helpers/getCurrentColumns';

import { useState, useEffect, useRef } from 'react';
// import { useWindowScroll } from 'react-use';
import styles from './Share.module.scss';
import config from '../../Config';

function Share() {
  //controll
  const [filter, setFilter] = useState(false);
  const [masonryContainer, setMasonryContainer] = useState(true);
  const [search, setSearch] = useState(false);
  const [colControl, setColControl] = useState(false);

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
    const itemsArr = await response.json();
    return itemsArr;
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
          />
          {/* <Footer /> */}
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default Share;
