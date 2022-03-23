import styles from '../Share.module.scss';
import '../../classic/index.scss';
import config from '../../../Config';

import { useState, useEffect } from 'react';

import { ReactComponent as DeleteSm } from '../../../imgs/del.svg';
import { ReactComponent as OrangeTag } from '../../../imgs/tags/Rectangle_orange.svg';
import { IoIosArrowDown as DownArrow } from 'react-icons/io';

function ShareFilter(props) {
  const { filter, setFilter, masonryContainer, setMasonryContainer, dispatch } =
    props;

  const [tagsInput, setTagsInput] = useState([]);
  const [suggestedTags, setSuggestedTags] = useState([]);
  const [foundTags, setFoundTags] = useState([]);

  const filterDispatchHandler = e => {
    const type = e.target.dataset.type;
    if (type) {
      return dispatch({
        type: `${type.toUpperCase()}`,
        [type]: e.target.value,
      });
    }
  };

  const getSuggestedTags = async () => {
    const response = await fetch(config.GET_TAGS, {
      method: 'GET',
    });
    const itemsArr = await response.json();
    return itemsArr;
  };

  const getFoundTags = async () => {
    const response = await fetch(config.GET_TAGS, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(tagsInput[0]),
    });
    const itemsArr = await response.json();
    return itemsArr;
  };

  const tagsInputHandler = e => {
    const value = e.target.value;
    if (value) {
      setTagsInput([{ tagInput: e.target.value }]);
    } else {
      setTagsInput([]);
    }
  };

  const tagsAreaHandler = () => {
    if (tagsInput.length === 0) {
      return suggestedTags.map((tag, i) => {
        return (
          <div className="flavor-tag ch-title-16" key={i}>
            {tag.item_hash}
          </div>
        );
      });
    } else if (foundTags.length && tagsInput.length) {
      return foundTags.map((tag, i) => {
        return (
          <div className="flavor-tag ch-title-16" key={i}>
            {tag.item_hash}
          </div>
        );
      });
    } else {
      return <div className="flavor-tag ch-title-16">查無結果</div>;
    }
  };

  // Finding tags when tag input changed
  useEffect(() => {
    if (Object.keys(tagsInput).length === 0) return;
    (async () => {
      const result = await getFoundTags();
      if (result.status === 'fail') {
        setFoundTags([]);
      } else {
        setFoundTags(result.data);
      }
    })();
  }, [tagsInput]);

  // Fetching data
  useEffect(() => {
    (async () => {
      const result = await getSuggestedTags();

      setSuggestedTags(result.data);
    })();
  }, []);

  return (
    <>
      <div className={`${styles['filter-panel-mask']}`}></div>
      <div
        className={`${styles['filter-panel']}`}
        style={!filter ? { right: '-100%' } : { right: '12.5%' }}
        onTransitionEnd={() => filter && setMasonryContainer(!masonryContainer)}
      >
        {/* <div className={`${styles['waterfall-container']}`}></div> */}
        <div className={`mycontainer mb-5 classic`}>
          {/* 主要篩選條件區 */}
          <div className="prod-filter-ryan">
            {/* clean or cancel filter */}
            <div className="d-flex flex-column">
              <div
                className={`${styles['share-filter-top']} justify-content-end`}
              >
                <div
                  className={`clean-filter ch-cont-16 ${styles['mr-100']} d-flex align-items-center`}
                >
                  <img
                    src={require('./../../../imgs/tags/trash.png')}
                    alt="trash"
                  />
                  <span>清空條件</span>
                </div>
                <div>
                  <DeleteSm
                    className={`${styles['button-default-lg']}`}
                    onClick={() => {
                      setFilter(!filter);
                      setMasonryContainer(!masonryContainer);
                    }}
                  />
                </div>
              </div>

              {/* by price */}
              <div className="d-flex justify-content-center">
                <div className="by-price col-18 d-flex flex-column">
                  <div className="by-price-title">
                    <div className="orange-tag">
                      <OrangeTag className="tag-img" />
                    </div>
                    <div className="by-price-text en-title-big">By PRICE</div>
                    <div className="down-arrow">
                      <DownArrow size={22} color="gray" />
                    </div>
                  </div>
                  <div className="by-price-input justify-content-between">
                    <input
                      type="number"
                      placeholder="最小金額"
                      data-type="minPrice"
                      onChange={e => {
                        filterDispatchHandler(e);
                      }}
                    />
                    <div className="by-price-dash-line"></div>
                    <input
                      type="number"
                      placeholder="最大金額"
                      data-type="maxPrice"
                      onChange={e => {
                        filterDispatchHandler(e);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* by flavor */}
              <div className="d-flex justify-content-center">
                <div className="by-flavor col-18 d-flex flex-column">
                  <div className="by-flavor-title">
                    <div className="orange-tag">
                      <OrangeTag className="tag-img" />
                    </div>
                    <div className="by-price-text en-title-big">By TAGS</div>
                    <div className="down-arrow">
                      <DownArrow size={22} color="gray" />
                    </div>
                  </div>
                  <div className="by-price-input justify-content-between">
                    <input
                      style={{ width: '100%' }}
                      type="text"
                      placeholder="搜尋標籤"
                      onChange={e => tagsInputHandler(e)}
                    />
                  </div>
                  <div className="en-title-14-10 text-grey">Suggestions</div>
                  <div className="flavor-tag-box">{tagsAreaHandler()}</div>
                </div>
              </div>

              {/* by category */}
              <div className="d-flex justify-content-center mb-5">
                <div className="col-18 d-flex flex-column">
                  <div className="by-category">
                    <div className="orange-tag">
                      <OrangeTag className="tag-img" />
                    </div>
                    <div className="by-price-text en-title-big">
                      By PRINT TIME
                    </div>
                    <div className="down-arrow">
                      <DownArrow size={22} color="gray" />
                    </div>
                  </div>
                  <div className="by-price-input justify-content-between">
                    <input
                      type="number"
                      placeholder="最小時間"
                      data-type="minTime"
                      onChange={e => {
                        filterDispatchHandler(e);
                      }}
                    />
                    <div className="by-price-dash-line"></div>
                    <input
                      type="number"
                      placeholder="最大時間"
                      data-type="maxTime"
                      onChange={e => {
                        filterDispatchHandler(e);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="col-18">
                  <div className="send-filter-btn-box d-flex justify-content-end">
                    <button className="btn-sm btn-primary primeal-btn-sm">
                      送出條件
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShareFilter;
