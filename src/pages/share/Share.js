import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import ShareNavBar from './components/ShareNavBar';
import Masonry from './components/Masonry';
import ShareFilter from './components/ShareFilter';

import { useState } from 'react';

import styles from './Share.module.scss';
function Share() {
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState(false);

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
          />
          <div className={`${styles['waterfall-container']}`}>
            <Masonry />
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
