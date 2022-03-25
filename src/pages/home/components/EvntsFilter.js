import { Collapse } from 'react-bootstrap';
import { useState } from 'react';
import './fitler.scss';
function EvntsFilter() {
  const [dateOpen, setDateOpen] = useState(false);
  const [cateOpen, setCateOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  // 依活動日期搜尋([日期一, 日期二])
  const [evntsDateFilter, setEvntsDateFilter] = useState(['', '']);
  // 依活動標籤搜尋
  const [evntsTagFilter, setEvntsTagFilter] = useState([
    { tag: '講座活動', value: false },
    { tag: '親子活動', value: false },
    { tag: '品牌推廣', value: false },
  ]);
  // 依活動狀態搜尋
  const [evntsStatusFilter, setEvntsStatusFilter] = useState([
    { tag: '熱烈報名中', value: false },
    { tag: '即將額滿', value: false },
    { tag: '報名額滿', value: false },
    { tag: '報名截止', value: false },
  ]);

  // 將日期輸入結果設定進狀態
  const dateFilterHandler = e => {
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
    const newStatusData = evntsStatusFilter.map(v => {
      if (e.target.dataset.tag === v.tag) {
        return { ...v, value: !v.value };
      } else {
        return v;
      }
    });
    setEvntsStatusFilter(newStatusData);
  };

  return (
    <>
      {/* clean or cancel filter */}
      <div className="filter-area">
        <div className="filter-top">
          <div className="clean-filter ch-cont-16">
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
            <button className="btn-sm btn-primary primeal-btn-sm">
              送出條件
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EvntsFilter;
