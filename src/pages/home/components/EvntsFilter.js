import { Collapse } from 'react-bootstrap';
import { useState } from 'react';
import './fitler.scss';

function EvntsFilter(props) {
  const {
    evntsData,
    setEvntsData,
    setIsOpenFilter,
    evntsDateFilter,
    setEvntsDateFilter,
    evntsTagFilter,
    setEvntsTagFilter,
    evntsStatusFilter,
    setEvntsStatusFilter,
    fetchEvntsData,
  } = props;
  const [dateOpen, setDateOpen] = useState(false);
  const [cateOpen, setCateOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  // 將日期輸入結果設定進狀態
  const dateFilterHandler = e => {
    setEvntsData(fetchEvntsData);
    if (e.target.dataset.filter === 'min') {
      const minDate = e.target.value;
      const newDate = [...evntsDateFilter];
      newDate[0] = minDate;
      setEvntsDateFilter(newDate);
    } else if (e.target.dataset.filter === 'max') {
      const maxDate = e.target.value;
      const newDate = [...evntsDateFilter];
      newDate[1] = maxDate;
      setEvntsDateFilter(newDate);
    }
  };

  // 將活動分類的勾選結果設定進狀態
  const tagFilterHandler = e => {
    setEvntsData(fetchEvntsData);
    const newTagData = evntsTagFilter.map(v => {
      if (e.target.dataset.tag === v.tag) {
        return { ...v, value: !v.value };
      } else {
        return v;
      }
    });
    setEvntsTagFilter(newTagData);
  };

  // 將活動狀態的勾選結果設定進狀態
  const statusFilterHandler = e => {
    setEvntsData(fetchEvntsData);
    const newStatusData = evntsStatusFilter.map(v => {
      if (e.target.dataset.tag === v.tag) {
        return { ...v, value: !v.value };
      } else {
        return v;
      }
    });
    setEvntsStatusFilter(newStatusData);
  };

  // 提交篩選條件
  const applyFilter = e => {
    e.preventDefault();
    // 日期篩選
    let evntsFilterResult = [...evntsData];
    // console.log('evntsFilterResult', evntsFilterResult);

    // 判斷起始日有沒有填寫，沒有的話起始日為操作日當天
    const startDate =
      evntsDateFilter[0] === '' ? new Date() : new Date(evntsDateFilter[0]);
    // 判斷結束日有沒有填寫，沒有的話結束日為2022.12.31
    const endDate =
      evntsDateFilter[1] === ''
        ? new Date(2022, 11, 31)
        : new Date(evntsDateFilter[1]);

    evntsFilterResult = evntsFilterResult.filter(element => {
      // console.log('element.evnts_date:', element.evnts_date);
      // console.log(
      //   new Date(element.evnts_date) >= startDate &&
      //     new Date(element.evnts_date) <= endDate
      // );
      return (
        new Date(element.evnts_date) >= startDate &&
        new Date(element.evnts_date) <= endDate
      );
    });
    // console.log('evntsFilterResult', evntsFilterResult);

    // 類別標籤篩選
    let tagList = [...evntsTagFilter];
    const evntsTag = tagList.filter(tag => tag.value).map(tag => tag.tag);
    // console.log('evntsTag', evntsTag);

    if (evntsTag.length > 0) {
      evntsFilterResult = evntsFilterResult.filter(element => {
        return evntsTag.includes(element.evnts_cate);
      });
    }
    // console.log('evntsFilterResult', evntsFilterResult);

    // 狀態標籤篩選
    let statusList = [...evntsStatusFilter];
    const evntsStatus = statusList
      .filter(status => status.value)
      .map(status => status.tag);
    // console.log('evntsStatus', evntsStatus);

    if (evntsStatus.length > 0) {
      evntsFilterResult = evntsFilterResult.filter(element => {
        return evntsStatus.includes(element.status);
      });
    }
    // console.log('evntsFilterResult', evntsFilterResult);
    setEvntsData(evntsFilterResult);
    setIsOpenFilter(false);
  };

  //重設篩選條件
  const cleanFilter = e => {
    const resetTag = evntsTagFilter.map(tag => {
      return { ...tag, value: false };
    });
    const resetStatus = evntsStatusFilter.map(status => {
      return { ...status, value: false };
    });
    setEvntsDateFilter(['', '']);
    setEvntsTagFilter(resetTag);
    setEvntsStatusFilter(resetStatus);
    setEvntsData(fetchEvntsData);
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

        <form name="evntsFilter">
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
                    value={evntsDateFilter[0]}
                    data-filter="min"
                    required
                    onChange={dateFilterHandler}
                  />
                  <div className="by-date-dash-line"></div>
                  <input
                    type="date"
                    value={evntsDateFilter[1]}
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
                <div className="by-date-text en-title-18">
                  By EVENT CATEGORY
                </div>
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
                      id="speech"
                      name="speech"
                      data-tag="講座活動"
                      checked={evntsTagFilter[0].value}
                      onChange={tagFilterHandler}
                    />
                    <div className="label-box">
                      <label className="ch-title-16">講座活動</label>
                    </div>
                    <input
                      className="category-check"
                      type="checkbox"
                      id="family"
                      name="family"
                      data-tag="親子活動"
                      checked={evntsTagFilter[1].value}
                      onChange={tagFilterHandler}
                    />
                    <div className="label-box">
                      <label className="ch-title-16">親子活動</label>
                    </div>
                    <input
                      className="category-check"
                      type="checkbox"
                      id="brand"
                      name="brand"
                      data-tag="品牌推廣"
                      checked={evntsTagFilter[2].value}
                      onChange={tagFilterHandler}
                    />
                    <div className="label-box">
                      <label className="ch-title-16">品牌推廣</label>
                    </div>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>

          {/* by status */}
          <div className="by-category">
            <div className="by-status-title">
              <div className="title-right">
                <div className="diamond"></div>
                <div className="by-date-text en-title-18">By STATUS</div>
              </div>
              <div
                className="down-arrow"
                onClick={() => setStatusOpen(!statusOpen)}
                aria-controls="example-collapse-text"
                aria-expanded={statusOpen}
              >
                {statusOpen ? (
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
            <Collapse in={statusOpen}>
              <div className="d-sm-block">
                <div className="category-tag-box">
                  <div className="d-flex category-check-box">
                    <input
                      className="category-check"
                      type="checkbox"
                      id="half"
                      name="half"
                      data-tag="熱烈報名中"
                      checked={evntsStatusFilter[0].value}
                      onChange={statusFilterHandler}
                    />
                    <div className="label-box">
                      <label className="ch-title-16">熱烈報名中</label>
                    </div>
                    <input
                      className="category-check"
                      type="checkbox"
                      id="threefourth"
                      name="threefourth"
                      data-tag="即將額滿"
                      checked={evntsStatusFilter[1].value}
                      onChange={statusFilterHandler}
                    />
                    <div className="label-box">
                      <label className="ch-title-16">即將額滿</label>
                    </div>
                    <input
                      className="category-check"
                      type="checkbox"
                      id="full"
                      name="full"
                      data-tag="報名額滿"
                      checked={evntsStatusFilter[2].value}
                      onChange={statusFilterHandler}
                    />
                    <div className="label-box">
                      <label className="ch-title-16">報名額滿</label>
                    </div>
                    <input
                      className="category-check"
                      type="checkbox"
                      id="close"
                      name="close"
                      data-tag="報名截止"
                      checked={evntsStatusFilter[3].value}
                      onChange={statusFilterHandler}
                    />
                    <div className="label-box">
                      <label className="ch-title-16">報名截止</label>
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

export default EvntsFilter;
