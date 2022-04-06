import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Search } from '../../../imgs/search.svg';
import { ReactComponent as ViewAdjust } from '../../../imgs/viewAdjust.svg';
import { ReactComponent as Filter } from '../../../imgs/filter-icon.svg';
import styles from '../Share.module.scss';
import config from '../../../Config';

function ShareNavBar(props) {
  const {
    filter,
    setFilter,
    search,
    setSearch,
    colControl,
    setColControl,
    filterNum,
    filterState,
    dispatch,
    setNoFound,
    setShareItemsData,
    getShareItems,
  } = props;

  const searchBarHandler = () =>
    search
      ? { transform: 'translateX(0px)' }
      : { transform: 'translateX(250px)' };

  const filterDispatchHandler = e => {
    const type = e.target.dataset.type;
    if (type) {
      return dispatch({
        type: `${type.toUpperCase()}`,
        [type]: e.target.value,
      });
    }
  };

  const getFilterData = async () => {
    try {
      const response = await fetch(config.GET_FILTER_ITEMS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filterState),
      });
      if (!response.ok) throw new Error('No items match your search!');

      const itemsObj = await response.json();
      return itemsObj;
    } catch (err) {
      console.error(err.message);
    }
  };

  // Finding results when search changed
  useEffect(() => {
    if (!filterState.search) {
      (async () => {
        const result = await getShareItems();
        setShareItemsData(result.data);
      })();
    }
    (async () => {
      const result = await getFilterData();
      if (!result) {
        setNoFound('查無符合條件的貼文，請重新篩選或清空篩選條件');
        setShareItemsData([]);
      } else {
        setNoFound('');
        setShareItemsData(result.data);
      }
    })();
  }, [filterState.search]);

  return (
    <div className={`mycontainer mb-5 ${styles['share-bread']}`}>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-md-column justify-content-between">
            <div className="d-flex justify-content-between mb-5 flex-grow-1">
              <div className="pt-3 pt-md-0">
                <p className="en-title-14-10 d-flex">
                  <Link
                    to={'/'}
                    style={{ textDecoration: 'none', color: '#575757' }}
                  >
                    HOME/&nbsp;
                  </Link>
                  <Link
                    to={'/share'}
                    style={{ textDecoration: 'none', color: '#b03342' }}
                  >
                    SHARE
                  </Link>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div
                  className={`${styles['search-input']} d-flex justify-content-end align-items-center`}
                >
                  <input
                    type="text"
                    style={searchBarHandler()}
                    className={`${styles['search-input-bar']} ch-cont-14`}
                    value={filterState.search}
                    placeholder="Search"
                    data-type="search"
                    onChange={e => {
                      filterDispatchHandler(e);
                    }}
                  />
                </div>
                <Search
                  className={`${styles['button-default']} mr-md-4`}
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
