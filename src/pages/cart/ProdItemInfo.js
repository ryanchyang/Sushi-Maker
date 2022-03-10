// cart/ProdItemInfo.js

import './Cart.scss';
function ProdItemInfo(props) {
  // TODO: 確認清單不會有可以更改數量與手機版印製時間
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
    <>
      <div className="prod-item-info ch-cont-14">
        <div className="row col-24 my-2   d-flex align-items-center ">
          <div className="col-md-4">
            <div className="cart-item-img">
              <img alt="" className="img-fluid" src={image} />
              商品圖片
            </div>
          </div>
          <div
            className={
              `d-flex ` +
              `flex-md-row flex-column ` +
              `col-md-10 justify-content-between ` +
              `flex-grow-1`
            }
          >
            <div className="col-md-10  align-items-center">
              商品名稱 鮭魚壽司
            </div>
            <div className="col-md-4  align-items-center">100 元</div>
            <div className="col-md-8  align-items-center">
              <div className="row ">
                <div className="select-count">x1</div>
              </div>
            </div>
          </div>
          <div className="col-md-2  align-items-center">
            {name} 印製時間 分鐘
          </div>
          <div className="col-md-2  align-items-center">{name} 小計</div>
        </div>
      </div>
    </>
  );
}

export default ProdItemInfo;
