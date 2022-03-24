import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Search } from '../../../imgs/search.svg';
import { ReactComponent as ViewAdjust } from '../../../imgs/viewAdjust.svg';
import { ReactComponent as Filter } from '../../../imgs/filter-icon.svg';
import styles from '../Share.module.scss';

function ShareNavBar(props) {
  const {
    filter,
    setFilter,
    search,
    setSearch,
    colControl,
    setColControl,
    filterNum,
  } = props;

  const searchBarHandler = () =>
    search
      ? { transform: 'translateX(0px)' }
      : { transform: 'translateX(250px)' };

  return (
    <div className={`mycontainer mb-5`}>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-md-column justify-content-between">
            <div className="d-flex justify-content-between mb-5 flex-grow-1">
              <p className="en-title-14-10">HOME / SHARE</p>
              <div className="d-flex align-items-center">
                <div
                  className={`${styles['search-input']} d-flex justify-content-end align-items-center`}
                >
                  <input
                    type="text"
                    style={searchBarHandler()}
                    className={`${styles['search-input-bar']} ch-cont-14`}
                    placeholder="Search"
                  ></input>
                </div>
                <Search
                  className={`${styles['button-default']} mr-4`}
                  onClick={() => setSearch(!search)}
                />

                <ViewAdjust
                  className={`${styles['col-button']} mx-4 d-none d-md-block`}
                  onClick={() => setColControl(!colControl)}
                />

                <button
                  className={`${styles.mysharebutton}  d-none d-md-block en-title-18 ml-4`}
                >
                  <Link to="/share/saves">My Share</Link>
                </button>
              </div>
            </div>
            <div
              className={`${styles['filter-container']} d-flex justify-content-end mr-3`}
            >
              <div className={`${styles['filter-container-num']}`}>
                {filterNum}
              </div>
              <Filter
                className={`${styles['button-default']}`}
                onClick={() => setFilter(!filter)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareNavBar;
