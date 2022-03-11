function Pagination() {
  return (
    <>
      <div className="latest-news-pagination">
        <div className="pagination-wrap">
          <ul className="pagination d-flex justify-content-center">
            <li style={{ cursor: 'pointer' }}>
              <img src="/img/home/left.svg" alt="left" />
            </li>
            <li className="en-cont-14 page-item">1</li>
            <li className="en-cont-14 page-item focus">2</li>
            <li className="en-cont-14 page-item">3</li>
            <li style={{ cursor: 'pointer' }}>
              <img src="/img/home/right.svg" alt="right" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Pagination;

/*
<div className="latest-news-pagination">
    <div className="pagination-wrap">
        <ul className="pagination d-flex justify-content-center">
            <li style={{ cursor: 'pointer' }}>
                <img src="/img/home/left.svg" alt="left" />
            </li>
            <li className="en-cont-14 page-item">1</li>
            <li className="en-cont-14 page-item focus">2</li>
            <li className="en-cont-14 page-item">3</li>
            <li style={{ cursor: 'pointer' }}>
                 <img src="/img/home/right.svg" alt="right" />
            </li>
        </ul>
    </div>
</div>
*/
