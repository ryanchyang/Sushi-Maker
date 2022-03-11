import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import Masonry from './components/Masonry';
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
          <div className={`mycontainer`}>
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-between">
                  <p className="mytitle en-title-14-10">
                    HOME / SHARE / MY-SHARE
                  </p>
                  <div className="d-flex align-items-center">
                    <Delete className="mx-4 p-2" />
                  </div>
                </div>
                <div
                  className={`${styles['profile-section']} d-flex justify-content-center flex-sm-column ${styles['mb-50']} `}
                >
                  <div
                    className={`${styles['profile-img-box']} d-flex justify-content-center mr-4 mr-sm-0`}
                  >
                    <div className={`${styles['profile-img-lg']} mb-4`}>
                      <img
                        className="myself-img"
                        src="\img\member\ruka.png"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div
                    className={` ${styles['profile-name-box']}  d-flex align-items-center justify-content-center`}
                  >
                    <h2 className={`${styles['profile-name']} mytitle`}>
                      Xisharp Teng
                    </h2>
                  </div>
                </div>
                <div
                  className={`${styles['topic-section']} d-flex  ${styles['mb-50']}`}
                >
                  <div
                    className={` ${styles['topic-section-box']} d-flex justify-content-center col-8`}
                  >
                    <div className="d-none d-sm-block pt-2">
                      <div className="d-flex align-items-center mr-3 ">
                        <Rect />
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <a href="#/" className={`${styles['topic-link']}`}>
                        SAVES
                      </a>
                    </div>
                  </div>
                  <div
                    className={`${styles['topic-section-box']} d-flex justify-content-center col-8`}
                  >
                    <div className="d-none d-sm-block pt-2">
                      <div className="d-flex align-items-center mr-3 ">
                        <Rect />
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <a href="#/" className={`${styles['topic-link']}`}>
                        UPLOAD
                      </a>
                    </div>
                  </div>
                  <div
                    className={`${styles['topic-section-box']} d-flex justify-content-center col-8`}
                  >
                    <div className="d-none d-sm-block pt-2">
                      <div className="d-flex align-items-center mr-3 ">
                        <Rect />
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <a href="#/" className={`${styles['topic-link']}`}>
                        POST
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Masonry />
          <br />
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default ShareHistory;
