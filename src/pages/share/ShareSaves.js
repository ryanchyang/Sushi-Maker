import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { useState, useEffect } from 'react';

import NavPage from '../layout/components/NavPage';
import Masonry from './components/Masonry';
import ShareProfile from './components/ShareProfile';
import styles from './Share.module.scss';
import config from '../../Config';

import useCurrentWidth from './hooks/useCurrentWidth';
import getCurrentColumns from './helpers/getCurrentColumns';

function ShareSaves(props) {
  const currentWidth = useCurrentWidth();
  const [columns, setColumns] = useState(getCurrentColumns(currentWidth));

  const [userShareItemsData, setUserShareItemsData] = useState([]);

  //加入NAVBar漢堡選單開關
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構NAVBAR

  // Get member id
  const memId = localStorage.getItem('mem_id');

  const updateDimensions = () => {
    setColumns(getCurrentColumns(currentWidth));
  };

  const getUserShareItems = async () => {
    const response = await fetch(config.GET_USER_SHARE_PRODS + `${memId}`, {
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
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'Share'} setNavIsOpen={setNavIsOpen} />
            <ShareProfile />
            <div
              className={`${styles['waterfall-container']} ${styles['saves-min-height']}`}
            >
              <Masonry
                columns={columns}
                gap={columns}
                data={userShareItemsData}
              />
            </div>
            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default ShareSaves;
