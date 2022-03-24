import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { orderInfo } from '../../../WebApi';
import { ReactComponent as SelectOpen } from '../../../imgs/selectopen.svg';
import { ReactComponent as SelectClose } from '../../../imgs/selectclose.svg';

const HistoryOrder = () => {
  const [historyOrderInfo, setHistoryOrderInfo] = useState('');
  const [clickToggle, setClickToggle] = useState(false);
  const mem_id = localStorage.getItem('mem_id');
  const [index, setIndex] = useState('');

  const handleClickToggle = e => {
    if (clickToggle === true) {
      setClickToggle(false);
    } else {
      setClickToggle(true);
    }
    setIndex(e.target.dataset.value);

    console.log(index);
  };

  useEffect(() => {
    orderInfo(mem_id).then(obj => {
      setHistoryOrderInfo(obj);
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
      {historyOrderInfo &&
        historyOrderInfo.newData2.map((data, i) => {
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
                      data-value={i}
                    >
                      交易明細
                      {clickToggle && index == i ? (
                        <SelectClose />
                      ) : (
                        <SelectOpen />
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div
                className="col-md-20"
                style={
                  clickToggle && index == i
                    ? { display: 'block', transition: '1s' }
                    : { display: 'none', transition: '1s' }
                }
              >
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '2%',
                  }}
                >
                  {historyOrderInfo.newData &&
                    historyOrderInfo.newData
                      .filter(d => d.cart_id === data.cart_id)
                      .map(info => {
                        return (
                          <>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '3%',
                                textAlign: 'left',
                              }}
                            >
                              <div className="col-4">
                                <img
                                  style={{ width: '100px' }}
                                  src={
                                    'http://localhost:3500' +
                                    info.c_prod_img_path
                                  }
                                />
                              </div>
                              <div className="col-4 ch-cont-14">
                                {info.c_prod_ch_name}
                              </div>
                              <div className="col-4 ch-cont-14">
                                共{info.orders_amount}件
                              </div>
                              <div className="col-4 ch-cont-14">
                                NT {info.c_prod_value}元/件
                              </div>
                              <div className="col-4 ch-cont-14">
                                {info.orders_print_time / 60}分鐘/件
                              </div>
                            </div>
                          </>
                        );
                      })}
                </div>

                <AccordionDetails className="w-100">
                  <Typography>{/* 商品詳細資訊 */}</Typography>
                </AccordionDetails>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default HistoryOrder;
