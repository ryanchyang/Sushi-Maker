import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { useState, useEffect } from 'react';

import Masonry from './components/Masonry';
import ShareProfile from './components/ShareProfile';
import styles from './Share.module.scss';

import useCurrentWidth from './hooks/useCurrentWidth';

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
function ShareSaves() {
  const currentWidth = useCurrentWidth();
  const [columns, setColumns] = useState(getColumns(currentWidth));

  const updateDimensions = () => {
    setColumns(getColumns(currentWidth));
  };

  useEffect(() => {
    updateDimensions();
  }, [currentWidth]);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Share'} />
          <ShareProfile />
          <div className={`${styles['waterfall-container']}`}>
            <Masonry columns={columns} gap={columns} />
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
