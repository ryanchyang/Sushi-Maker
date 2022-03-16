import { Collapse } from 'react-bootstrap';
import { useState } from 'react';
import './fitler.scss';
function NewsFilter() {
  const [dateOpen, setDateOpen] = useState(false);
  const [cateOpen, setCateOpen] = useState(false);

  return (
    <>
      {/* clean or cancel filter */}
      <div className="filter-top">
        <div className="clean-filter ch-cont-16">
          <img src="/img/home/trashcan.svg" alt="trash" />
          <span>清空條件</span>
        </div>
        <div className="cancel-filter ch-cont-16">
          <span>X</span>
        </div>
      </div>
      .
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
                <img src="/img/home/uparrow.svg" alt="up" />
              ) : (
                <img src="/img/home/downarrow.svg" alt="down" />
              )}
            </div>
          </div>
          <Collapse in={dateOpen}>
            <div className="d-sm-block">
              <div className="by-date-input">
                <input type="date" onfocus="(this.type='date')"></input>
                <div className="by-date-dash-line"></div>
                <input type="date" onfocus="(this.type='date')"></input>
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
                <img src="/img/home/uparrow.svg" alt="up" />
              ) : (
                <img src="/img/home/downarrow.svg" alt="down" />
              )}
            </div>
          </div>
          <Collapse in={cateOpen}>
            <div className="d-sm-block">
              <div className="category-tag-box">
                <div className="d-flex flex-wrap">
                  <div className="category-tag ch-title-14">新品上市</div>
                  <div className="category-tag ch-title-14">快閃特價</div>
                  <div className="category-tag ch-title-14">促銷特賣</div>
                  <div className="category-tag ch-title-14">會員公告</div>
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
    </>
  );
}

export default NewsFilter;
