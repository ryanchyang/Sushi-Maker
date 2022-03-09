import React from 'react';
import { ReactComponent as Search } from '../../../imgs/search.svg';
import { ReactComponent as ViewAdjust } from '../../../imgs/viewAdjust.svg';
import { ReactComponent as Filter } from '../../../imgs/filter-icon.svg';
import styles from '../Share.module.scss';

function ShareNavBar() {
  return (
    <div className={`mycontainer mb-5`}>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-md-column justify-content-between">
            <div className="d-flex justify-content-between mb-5 flex-grow-1">
              <p className="en-title-14-10">HOME / SHARE</p>
              <div className="d-flex align-items-center">
                <Search className="mx-4" />
                <ViewAdjust className="mx-4 d-none d-md-block" />
                <button
                  className={`${styles.mysharebutton}  d-none d-md-block en-title-18 ml-4`}
                >
                  My Share
                </button>
              </div>
            </div>
            <div
              className={`${styles['filter-container']} d-flex justify-content-end mr-3`}
            >
              <Filter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareNavBar;
