import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { useState, useEffect } from 'react';

import Masonry from './components/Masonry';
import ShareProfile from './components/ShareProfile';
import styles from './Share.module.scss';
import config from '../../Config';

import useCurrentWidth from './hooks/useCurrentWidth';
import getCurrentColumns from './helpers/getCurrentColumns';

function ShareSaves() {
  const currentWidth = useCurrentWidth();
  const [columns, setColumns] = useState(getCurrentColumns(currentWidth));

  const [userShareItemsData, setUserShareItemsData] = useState([]);

  const updateDimensions = () => {
    setColumns(getCurrentColumns(currentWidth));
  };

  const getUserShareItems = async () => {
    const response = await fetch(config.GET_USER_SHARE_PRODS, {
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
      const result = await getUserShareItems();

      setUserShareItemsData(result.data);
    })();
  }, []);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Share'} />
          <ShareProfile />
          <div className={`${styles['waterfall-container']}`}>
            <Masonry
              columns={columns}
              gap={columns}
              data={userShareItemsData}
            />
          </div>

          <br />
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default ShareSaves;
