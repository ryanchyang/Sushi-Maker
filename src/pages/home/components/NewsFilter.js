import { Collapse } from 'react-bootstrap';
import { useState } from 'react';
import './fitler.scss';
import { Select } from '@mui/material';
function NewsFilter() {
  const [dateOpen, setDateOpen] = useState(false);
  const [cateOpen, setCateOpen] = useState(false);

  // 依新聞日期搜尋([日期一, 日期二])
  const [newsDateFilter, setNewsDateFilter] = useState(['', '']);
  // 依新聞標籤搜尋
  const [newsTagFilter, setNewsTagFilter] = useState([
    { tag: '新品上市', value: false },
    { tag: '快閃促銷', value: false },
    { tag: '季節特賣', value: false },
    { tag: '會員公告', value: false },
  ]);

  // 將日期輸入結果設定進狀態
  const dateFilterHandler = e => {
    if (e.target.dataset.filter === 'min') {
      const minDate = e.target.value;
      const newDate = [...newsDateFilter];
      newDate[0] = minDate;
      setNewsDateFilter(newDate);
    } else if (e.target.dataset.filter === 'max') {
      const maxDate = e.target.value;
      const newDate = [...newsDateFilter];
      newDate[1] = maxDate;
      setNewsDateFilter(newDate);
    }
  };

  // 將新聞分類的勾選結果設定進狀態
  const tagFilterHandler = e => {
    // console.log(e.target.dataset.tag);
    const newTagData = newsTagFilter.map(v => {
      if (e.target.dataset.tag === v.tag) {
        return { ...v, value: !v.value };
      } else {
        return v;
      }
    });
    setNewsTagFilter(newTagData);
  };

  const applyFilter = () => {};

  //重設篩選條件
  const cleanFilter = e => {};

  return (
    <>
      {/* clean or cancel filter */}
      <div className="filter-area">
        <div className="filter-top">
          <div className="clean-filter ch-cont-16" onClick={cleanFilter}>
            <img
              src={`http://localhost:3500/img/home/trashcan.svg`}
              alt="trash"
            />
            <span>清空條件</span>
          </div>
          <div className="cancel-filter ch-cont-16">
            <span>X</span>
          </div>
        </div>

        <form name="newsFilter">
          {/* by date */}
          <div className="by-date">
            <div className="by-date-title">
              <div className="title-right">
                <div className="diamond"></div>
                <div className="by-date-text en-title-18">By DATE</div>
              </div>
              <div
                className="down-arrow"
                onClick={() => setDateOpen(!dateOpen)}
                aria-controls="example-collapse-text"
                aria-expanded={dateOpen}
              >
                {/* {console.log('open:', open)} */}
                {dateOpen ? (
                  <img
                    src={`http://localhost:3500/img/home/uparrow.svg`}
                    alt="up"
                  />
                ) : (
                  <img
                    src={`http://localhost:3500/img/home/downarrow.svg`}
                    alt="down"
                  />
                )}
              </div>
            </div>
            <Collapse in={dateOpen}>
              <div className="d-sm-block">
                <div className="by-date-input">
                  <input
                    type="date"
                    value={newsDateFilter[0]}
                    data-filter="min"
                    required
                    onChange={dateFilterHandler}
                  />
                  <div className="by-date-dash-line"></div>
                  <input
                    type="date"
                    value={newsDateFilter[1]}
                    data-filter="max"
                    required
                    onChange={dateFilterHandler}
                  />
                </div>
              </div>
            </Collapse>
          </div>

          {/* by category */}
          <div className="by-category">
            <div className="by-category-title">
              <div className="title-right">
                <div className="diamond"></div>
                <div className="by-date-text en-title-18">By NEWS CATEGORY</div>
              </div>
              <div
                className="down-arrow"
                onClick={() => setCateOpen(!cateOpen)}
                aria-controls="example-collapse-text"
                aria-expanded={cateOpen}
              >
                {cateOpen ? (
                  <img
                    src={`http://localhost:3500/img/home/uparrow.svg`}
                    alt="up"
                  />
                ) : (
                  <img
                    src={`http://localhost:3500/img/home/downarrow.svg`}
                    alt="down"
                  />
                )}
              </div>
            </div>
            <Collapse in={cateOpen}>
              <div className="d-sm-block">
                <div className="category-tag-box">
                  <div className="d-flex category-check-box">
                    <input
                      className="category-check"
                      type="checkbox"
                      id="new"
                      name="new"
                      data-tag="新品上市"
                      checked={newsTagFilter[0].value}
                      onChange={tagFilterHandler}
                    />
                    <div className="label-box">
                      <label className="ch-title-16">新品上市</label>
                    </div>
                    <input
                      className="category-check"
                      type="checkbox"
                      id="sale"
                      name="sale"
                      data-tag="快閃特價"
                      checked={newsTagFilter[1].value}
                      onChange={tagFilterHandler}
                    />
                    <div className="label-box">
                      <label className="ch-title-16">快閃特價</label>
                    </div>
                    <input
                      className="category-check"
                      type="checkbox"
                      id="season"
                      name="season"
                      data-tag="季節特賣"
                      checked={newsTagFilter[2].value}
                      onChange={tagFilterHandler}
                    />
                    <div className="label-box">
                      <label className="ch-title-16">季節特賣</label>
                    </div>
                    <input
                      className="category-check"
                      type="checkbox"
                      id="member"
                      name="member"
                      data-tag="會員公告"
                      checked={newsTagFilter[3].value}
                      onChange={tagFilterHandler}
                    />
                    <div className="label-box">
                      <label className="ch-title-16">會員公告</label>
                    </div>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>

          <div className="send-filter-btn-box">
            <button
              className="btn-sm btn-primary primeal-btn-sm"
              onClick={applyFilter}
            >
              送出條件
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewsFilter;
