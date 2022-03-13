import './fitler.scss';
function NewsFilter(props) {
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

      <form name="newsFilter">
        {/* by date */}
        <div className="by-date">
          <div className="by-date-title">
            <div className="title-right">
              <div className="diamond"></div>
              <div className="by-date-text en-title-18">By DATE</div>
            </div>
            <div className="down-arrow">
              <img src="/img/home/downarrow.svg" alt="down" />
            </div>
          </div>
          <div className="by-date-input">
            <input
              type="text"
              placeholder="YYYY/MM/DD/"
              onfocus="(this.type='date')"
            ></input>
            <div className="by-date-dash-line"></div>
            <input
              type="text"
              placeholder="YYYY/MM/DD/"
              onfocus="(this.type='date')"
            ></input>
          </div>
        </div>

        {/* by category */}
        <div className="by-category">
          <div className="by-category-title">
            <div className="title-right">
              <div className="diamond"></div>
              <div className="by-date-text en-title-18">By NEWS CATEGORY</div>
            </div>
            <div className="down-arrow">
              <img src="/img/home/downarrow.svg" alt="down" />
            </div>
          </div>
          <div className="category-tag-box">
            <div className="d-flex flex-wrap">
              <div className="category-tag ch-title-14">新品上市</div>
              <div className="category-tag ch-title-14">快閃特價</div>
              <div className="category-tag ch-title-14">促銷特賣</div>
              <div className="category-tag ch-title-14">會員公告</div>
            </div>
          </div>
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
