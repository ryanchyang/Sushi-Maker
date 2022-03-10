//CartSum.js summary 右側小計

function CartSum(props) {
  return (
    <>
      <div className="col-24 col-md-12 d-md-block">
        <div className="summary-right  pt-3">
          <div className="row "></div>
          <div className="row print-time my-4">
            <div className="col-12 col-md-12 ch-cont-14">印製時間</div>
            <div className="col-12 col-md-8 text-right ch-cont-14">35分鐘</div>
          </div>
          <div className="row price my-4">
            <div className="col-12 col-md-12 ch-cont-14">訂單金額</div>
            <div className="col-12 col-md-8 text-right ch-cont-14">NT 3000</div>
          </div>
          <div className="row discount my-4">
            <div className="col-12 col-md-12 ch-cont-14">折抵金額</div>
            <div className="col-12 col-md-8 text-right ch-cont-14">NT 100</div>
          </div>

          <div className="row price my-4">
            <div className="col-12 col-md-12 ch-cont-14">結帳金額</div>
            <div className="col-12 col-md-8 text-right ch-cont-14">NT 2900</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartSum;
