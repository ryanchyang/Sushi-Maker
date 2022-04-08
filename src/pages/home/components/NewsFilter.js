import { Collapse } from 'react-bootstrap';
import { useState } from 'react';
import './fitler.scss';

function NewsFilter(props) {
  const {
    newsData,
    setNewsData,
    setIsOpenFilter,
    newsDateFilter,
    setNewsDateFilter,
    newsTagFilter,
    setNewsTagFilter,
    fetchNewsData,
  } = props;
  const [dateOpen, setDateOpen] = useState(false);
  const [cateOpen, setCateOpen] = useState(false);

  // 將日期輸入結果設定進狀態
  const dateFilterHandler = e => {
    setNewsData(fetchNewsData);
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
    setNewsData(fetchNewsData);
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

  // 提交篩選條件
  const applyFilter = e => {
    e.preventDefault();
    // 日期篩選
    let newsFilterResult = [...newsData];
    // console.log('newsFilterResult', newsFilterResult);

    // 判斷起始日有沒有填寫，沒有的話起始日為操作日當天
    const startDate =
      newsDateFilter[0] === '' ? new Date() : new Date(newsDateFilter[0]);
    // 判斷結束日有沒有填寫，沒有的話結束日為2022.12.31
    const endDate =
      newsDateFilter[1] === ''
        ? new Date(2022, 11, 31)
        : new Date(newsDateFilter[1]);
    // console.log('startDate:', startDate);
    // console.log('endDate:', endDate);
    newsFilterResult = newsFilterResult.filter(element => {
      // console.log('element.news_start_date:', element.news_start_date);
      // console.log('element.news_end_date:', element.news_end_date);
      // console.log(
      //   (new Date(element.news_start_date) <= startDate &&
      //     new Date(element.news_end_date) >= startDate) ||
      //     (new Date(element.news_start_date) >= startDate &&
      //       new Date(element.news_start_date) <= endDate)
      // );
      return (
        (new Date(element.news_start_date) <= startDate &&
          new Date(element.news_end_date) >= startDate) ||
        (new Date(element.news_start_date) >= startDate &&
          new Date(element.news_start_date) <= endDate)
      );
    });
    // console.log('newsFilterResult', newsFilterResult);

    // 類別標籤篩選
    let tagList = [...newsTagFilter];

    const newsTag = tagList.filter(tag => tag.value).map(tag => tag.tag);
    // console.log('newsTag', newsTag);

    if (newsTag.length > 0) {
      newsFilterResult = newsFilterResult.filter(element => {
        return newsTag.includes(element.news_cate);
      });
    }
    // console.log('newsFilterResult:', newsFilterResult);
    setNewsData(newsFilterResult);

    setIsOpenFilter(false);
  };

  //重設篩選條件
  const cleanFilter = e => {
    const resetTag = newsTagFilter.map(tag => {
      return { ...tag, value: false };
    });
    setNewsDateFilter(['', '']);
    setNewsTagFilter(resetTag);
    setNewsData(fetchNewsData);
  };

  // 關閉Filter視窗
  const closeHandler = () => {
    setIsOpenFilter(false);
  };

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
          <div className="cancel-filter ch-cont-16" onClick={closeHandler}>
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
                    onChange={dateFilterHandler}
                  />
                  <div className="by-date-dash-line"></div>
                  <input
                    type="date"
                    value={newsDateFilter[1]}
                    data-filter="max"
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
                      id="new"
                      name="new"
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
