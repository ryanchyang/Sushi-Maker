import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import ShareNavBar from './components/ShareNavBar';
import Masonry from './components/Masonry';
import ShareFilter from './components/ShareFilter';
import ShareColController from './components/ShareColController';

import useCurrentWidth from './hooks/useCurrentWidth';

import { useState, useEffect } from 'react';
import styles from './Share.module.scss';
import config from '../../Config';

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
};

const getColumns = width => {
  if (width < breakpoints.sm) {
    return 2;
  } else if (width < breakpoints.md) {
    return 2;
  } else if (width < breakpoints.lg) {
    return 3;
  } else {
    return 4;
  }
};
function Share() {
  const [filter, setFilter] = useState(false);
  const [masonryContainer, setMasonryContainer] = useState(true);
  const [search, setSearch] = useState(false);
  const [colControl, setColControl] = useState(false);

  const currentWidth = useCurrentWidth();
  const [columns, setColumns] = useState(getColumns(currentWidth));
  const [gap, setGap] = useState(4);

  const [shareItemsData, setShareItemsData] = useState([]);

  const updateDimensions = () => {
    setColumns(getColumns(currentWidth));
    setGap(getColumns(currentWidth));
  };

  const getShareItems = async () => {
    const response = await fetch(config.GET_SHARE_PRODS, {
      method: 'GET',
    });
    const itemsArr = await response.json();
    return itemsArr;
  };

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
                masonryContainer ? 'd-flex' : styles['share-display-none']
              }`}
            >
              <Masonry columns={columns} gap={gap} data={shareItemsData} />
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
