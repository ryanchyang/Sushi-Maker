import React from 'react';
import { ReactComponent as Search } from '../../../imgs/search.svg';
import { ReactComponent as ViewAdjust } from '../../../imgs/viewAdjust.svg';
import styles from '../Share.module.scss';

function ShareNavBar() {
  return (
    <div className={`mycontainer ${styles['mb-80']}`}>
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-between">
            <p className="mytitle en-title-14-10">HOME / SHARE</p>
            <div className="d-flex align-items-center">
              <Search className="mx-4" />
              <ViewAdjust className="mx-4" />
              <button className={`${styles.button} mytitle en-title-18 ml-4`}>
                My Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareNavBar;
