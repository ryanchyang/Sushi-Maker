import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import Masonry from './components/Masonry';
import ShareProfile from './components/ShareProfile';
import { ReactComponent as Delete } from '../../imgs/delete-lg.svg';
import { ReactComponent as Rect } from '../../imgs/tags/Rectangle_orange.svg';
import styles from './Share.module.scss';

function ShareHistory() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Share'} />
          <ShareProfile />
          <div className={`mycontainer`}>
            <div className="myshare-layout d-flex">
              <div className="col-6 flex-column d-none d-lg-flex">
                <div className="d-flex">
                  <div className="d-none d-sm-block">
                    <div className="d-flex align-items-center mr-3 ">
                      <Rect />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="ch-cont-16 font-weight-bold mb-5">
                      已分享貼文
                    </div>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="d-none d-sm-block">
                    <div className="d-flex align-items-center mr-3 ">
                      <Rect />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="ch-cont-16 font-weight-bold mb-5">
                      留言紀錄
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-18">
                <Masonry />
              </div>
            </div>
          </div>

          <br />
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default ShareHistory;
