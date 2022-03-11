import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import Masonry from './components/Masonry';
import ShareProfile from './components/ShareProfile';
import styles from './Share.module.scss';

function ShareSaves() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Share'} />
          <ShareProfile />
          <div className={`${styles['waterfall-container']}`}>
            <Masonry />
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
