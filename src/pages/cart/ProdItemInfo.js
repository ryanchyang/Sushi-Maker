// cart/ProdItemInfo.js

import './Cart.scss';
function ProdItemInfo(props) {
  // TODO: 確認清單不會有可以更改數量與手機版印製時間 (done)
  // TODO: 要加商品數量總計算
  // 每個商品物件
  //    {
  //       cart_id:1,
  //        mem_id:1, // token
  //        product_id:1,
  //        img:'',
  //        name: '鮭魚壽司',
  //        orders_value: 300,
  //        orders_amount:1,
  //        orders_print_time:90
  //        orders_category:'cls',
  //    }

  //解構
  const {
    id,
    name,
    category,
    image,
    price,
    count,
    setCount,
    handleDelete,
    handleSetInfo,
  } = props;

  return (
    <div className="prod-item-info ch-cont-14">
      <div className="row col-24 my-2   d-flex align-items-center align-middle">
        <div className="col-6 col-md-4 text-center">
          <div className="cart-item-img-info text-center">
            <img alt="" className="img-fluid" src={image} />
          </div>
        </div>
        <div
          className={
            `d-flex ` +
            `flex-md-row flex-column ` +
            `col-14 col-md-10 justify-content-md-between text-center ` +
            `flex-grow-1 align-middle`
          }
        >
          <div className="col-24 col-md-12 align-items-center  ">
            商品名稱 鮭魚壽司
          </div>
          <div className="col-24 col-md-12 align-items-center  ">100 元</div>
        </div>
        <div className="col-4 col-md-4 align-items-center align-middle text-center ">
          {/* <div className="row text-end">
               <div className="select-count"> */}
          x1
          {/* </div> 
            </div>*/}
        </div>
        <div className="col-md-6  align-items-center d-none d-md-flex text-center">
          印製時間 20 分鐘
        </div>
      </div>
    </div>
  );
}

export default ProdItemInfo;
