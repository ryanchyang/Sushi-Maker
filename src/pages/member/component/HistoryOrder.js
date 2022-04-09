import { useState, useEffect } from 'react';
import { orderInfo } from '../../../WebApi';
import { ReactComponent as SelectOpen } from '../../../imgs/selectopen.svg';
import { ReactComponent as SelectClose } from '../../../imgs/selectclose.svg';

const HistoryOrder = () => {
  const [historyOrderInfo, setHistoryOrderInfo] = useState('');
  const mem_id = localStorage.getItem('mem_id');
  const [cartId, setCartId] = useState();

  const handleClickToggle = e => {
    const id = e.target.attributes.getNamedItem('data-id').value; //react div元素的拿法

    const newCartData = cartId.map(d => {
      if (parseInt(d.cId) === parseInt(id)) {
        if (d.open === true) {
          return { ...d, open: false };
        } else {
          return { ...d, open: true };
        }
      } else {
        return { ...d };
      }
    });
    // if (clickToggle === true) {
    //   setClickToggle(false);
    // } else {
    //   setClickToggle(true);
    // }
    // setIndex(id);
    setCartId(newCartData);
  };

  useEffect(() => {
    orderInfo(mem_id).then(obj => {
      const cartData = obj.newData2
        .filter(i => {
          return i.cart_status !== '未結帳';
        })
        .map(v => {
          return { ...v, cId: v.cart_id, open: false };
        });
      setHistoryOrderInfo(obj);
      setCartId(cartData);
    });
  }, []);

  return (
    <div className="row orderDetailRow">
      <table className="table col-md-20 ch-title-16">
        <thead>
          <tr>
            <th scope="col" className="col-4">
              訂單編號
            </th>
            <th scope="col" className="col-4">
              購買日期
            </th>
            <th scope="col" className="col-4">
              訂單狀態
            </th>
            <th scope="col" className="col-4">
              總價
            </th>
            <th scope="col" className="col-4">
              印製時間
            </th>
            <th scope="col" className="col-4"></th>
          </tr>
        </thead>
      </table>
      {cartId &&
        cartId.map((data, i) => {
          return (
            <>
              <table className="table col-md-20 ch-cont-16">
                <tbody>
                  <tr>
                    <td className="col-4">{data.order_num}</td>
                    <td className="col-4">{data.cart_checkout_date}</td>
                    <td className="col-4">{data.cart_status}</td>
                    <td className="col-4">NT$ {data.cart_value} 元</td>
                    <td className="col-4">{data.cart_total_print_time} 分鐘</td>
                    <td
                      className="col-4"
                      onClick={handleClickToggle}
                      style={{ cursor: 'pointer' }}
                      data-id={data.cart_id}
                    >
                      交易明細
                      {data.open ? <SelectClose /> : <SelectOpen />}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div
                className="col-md-20"
                style={
                  data.open
                    ? { display: 'block', transition: '1s' }
                    : { display: 'none', transition: '1s' }
                }
              >
                <div
                  style={{
                    padding: '2%',
                  }}
                >
                  {historyOrderInfo.newAllData &&
                    historyOrderInfo.newAllData
                      .filter(d => d.cart_id === data.cart_id)
                      .map(info => {
                        return (
                          <>
                            <div
                              className="order-detail-list"
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                textAlign: 'left',
                                padding: '1%',
                              }}
                            >
                              <div className="col-4">
                                {info.c_prod_img_path ? (
                                  <img
                                    style={{ width: '100px' }}
                                    src={
                                      'http://localhost:3500' +
                                      info.c_prod_img_path
                                    }
                                  />
                                ) : (
                                  ''
                                )}
                                {info.cm_prod_img_path ? (
                                  <img
                                    style={{ width: '100px' }}
                                    src={
                                      'http://localhost:3500' +
                                      info.cm_prod_img_path
                                    }
                                  />
                                ) : (
                                  ''
                                )}
                                {info.set_name ? (
                                  <img
                                    style={{ width: '100px' }}
                                    src={
                                      'http://localhost:3500/img/setorder/bento_img/default.png'
                                    }
                                  />
                                ) : (
                                  ''
                                )}
                              </div>
                              <div className="col-4 ch-cont-14">
                                {info.c_prod_ch_name ? info.c_prod_ch_name : ''}
                                {info.set_name ? info.set_name : ''}
                                {info.cm_prod_name ? info.cm_prod_name : ''}
                              </div>
                              <div className="col-4 ch-cont-14">
                                共{info.orders_amount}件
                              </div>
                              <div className="col-4 ch-cont-14">
                                {info.c_prod_value
                                  ? 'NT' + info.c_prod_value + '元/件'
                                  : ''}
                                {info.set_price
                                  ? 'NT' +
                                    info.set_price / info.orders_amount +
                                    '元/件'
                                  : ''}
                                {info.cm_prod_value
                                  ? 'NT' + info.cm_prod_value + '元/件'
                                  : ''}
                              </div>
                              <div className="col-4 ch-cont-14">
                                {info.orders_print_time / 60}分鐘/件
                              </div>
                            </div>
                          </>
                        );
                      })}
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default HistoryOrder;
