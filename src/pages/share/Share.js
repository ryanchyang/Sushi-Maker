import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import ShareNavBar from './components/ShareNavBar';
import Masonry from './components/Masonry';
import ShareFilter from './components/ShareFilter';
import ShareColController from './components/ShareColController';

import useCurrentWidth from './hooks/useCurrentWidth';
import getCurrentColumns from './helpers/getCurrentColumns';

import { useState, useEffect } from 'react';
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
  // const { y: pageYOffset } = useWindowScroll();
  const currentWidth = useCurrentWidth();

  //masonry
  const [columns, setColumns] = useState(getCurrentColumns(currentWidth));
  const [gap, setGap] = useState(4);
  
  //data
  const [shareItemsData, setShareItemsData] = useState([]);

  const updateDimensions = () => {
    setColumns(getCurrentColumns(currentWidth));
    setGap(getCurrentColumns(currentWidth));
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
