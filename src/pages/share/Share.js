import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import ShareNavBar from './components/ShareNavBar';
import Masonry from './components/Masonry';
import ShareFilter from './components/ShareFilter';
import ShareColController from './components/ShareColController';
import useCurrentWidth from './hooks/useCurrentWidth';

import { useState, useEffect } from 'react';

import styles from './Share.module.scss';

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
  const [search, setSearch] = useState(false);
  const [colControl, setColControl] = useState(false);

  const currentWidth = useCurrentWidth();
  const [columns, setColumns] = useState(getColumns(currentWidth));
  const [gap, setGap] = useState(4);

  const updateDimensions = () => {
    setColumns(getColumns(currentWidth));
    setGap(getColumns(currentWidth));
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
          <div className={`${styles['waterfall-container']}`}>
            <Masonry columns={columns} gap={gap} />
          </div>
          <ShareFilter filter={filter} setFilter={setFilter} />
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default Share;
