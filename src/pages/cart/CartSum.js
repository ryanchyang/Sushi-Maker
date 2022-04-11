//CartSum.js summary 右側小計

function CartSum(props) {
  const { sum } = props;
  console.log('sum', sum); //確認接到的是什麼
  return (
    <div className="col-24 col-md-12 d-md-block">
      {sum?.map((v, i) => {
        return (
          <div className="summary-right mt-2" key={'sum' + i}>
            <div className="row "></div>
            <div className="row print-time my-4 d-flex justify-content-between">
              <div className="col-12 col-md-12 ch-cont-14">印製時間</div>
              <div className="col-12 col-md-8 text-right ch-cont-14">
                {v.cart_total_print_time / 60}分鐘
              </div>
            </div>
            <div className="row price my-4 d-flex justify-content-between">
              <div className="col-12 col-md-12 ch-cont-14">訂單金額</div>
              <div className="col-12 col-md-8 text-right ch-cont-14">
                NT {v.cart_value}
              </div>
            </div>
            <div className="row discount my-4 d-flex justify-content-between">
              <div className="col-12 col-md-12 ch-cont-14">折抵金額</div>
              <div className="col-12 col-md-8 text-right ch-cont-14">
                - NT{v.cart_credit}
              </div>
            </div>

            <div className="row price my-4 d-flex justify-content-between">
              <div className="col-12 col-md-12 ch-cont-14 align-self-center">
                結帳金額
              </div>
              <div className="col-12 col-md-8 text-nowrap text-right ch-cont-24">
                NT {v.cart_value - v.cart_credit}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CartSum;
