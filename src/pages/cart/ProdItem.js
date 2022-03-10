// cart/ProdItem.js stepone 可編輯的item

import './Cart.scss';
function ProdItem(props) {
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
    <div className="prod-item ch-cont-14 ">
      <div className="row my-2  d-flex align-items-center ">
        <div className="col-md-24 d-flex">
          <div className="col-md-2 col-3 align-items-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              ></label>
            </div>
          </div>
          <div className="col-md-4 col-6 align-items-center">
            <div className="cart-item-img">
              <img alt="" className="img-fluid" src={image} />
            </div>
          </div>
          <div
            className={
              `d-flex ` +
              `flex-md-row flex-column ` +
              `col-9 col-md-10 justify-content-between ` +
              `flex-grow-1 align-items-center`
            }
          >
            <div className="col-md-8 my-3 align-items-center">商品名稱</div>
            <div className="col-md-8 my-3 align-items-center">
              單價 元單價 元
            </div>
            <div className="col-md-8 my-3 align-items-center">
              {/* <div className="row"> */}
              <div className="select-count">
                <button>-</button>
                <input type="number" value={1} />
                <button>+</button>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="col-md-2 d-none d-md-flex align-items-center">
            印製時間 分鐘
          </div>
          <div className="col-md-2 d-none d-md-flex align-items-center ">
            {' '}
            小計
          </div>
          <div className="col-md-4 col-6 d-flex justify-content-around align-items-center">
            {/* <div className="col-md-2 text-center"> */}
            <div className="prod-item-icon ">
              <img src="/imgs/cart/icon-trash.svg" alt="" />
            </div>
            {/* </div> */}
            {/* <div className="col-md-2 text-center"> */}
            <div className="prod-item-icon">
              <img src="/imgs/cart/icon-info.svg" alt="" />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdItem;
