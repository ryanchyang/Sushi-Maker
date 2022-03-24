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

  const handleClickToggle = () => {
    if (clickToggle === true) {
      setClickToggle(false);
    } else {
      setClickToggle(true);
    }
  };

  useEffect(() => {
    orderInfo(mem_id).then(obj => {
      console.log(obj);
      setHistoryOrderInfo(obj);
    });
  }, []);

  return (
    <div className="row orderDetailRow">
      <table className="table col-md-20">
        <thead>
          <tr>
            <th scope="col">訂單編號</th>
            <th scope="col">購買日期</th>
            <th scope="col">訂單狀態</th>
            <th scope="col">總價</th>
            <th scope="col">印製時間</th>
            <th scope="col"></th>
          </tr>
        </thead>
      </table>
      {historyOrderInfo &&
        historyOrderInfo.newData2.map(data => {
          return (
            <>
              <table className="table col-md-20">
                <tbody>
                  <tr>
                    <td>{data.order_num}</td>
                    <td>{data.cart_checkout_date}</td>
                    <td>{data.cart_status}</td>
                    <td>NT$ {data.cart_value} 元</td>
                    <td>{data.cart_total_print_time} 分鐘</td>
                    <td
                      onClick={handleClickToggle}
                      style={{ cursor: 'pointer' }}
                    >
                      交易明細 {clickToggle ? <SelectClose /> : <SelectOpen />}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div
                className="col-md-20"
                style={
                  clickToggle
                    ? { display: 'block', transition: '1s' }
                    : { display: 'none', transition: '1s' }
                }
              >
                <div style={{}}>
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
                                marginBottom: '5%',
                                textAlign: 'left',
                
                              }}
                            >
                              <div style={{ border: '1px solid red' }} className="col-4">
                                圖片
                              </div>
                              <div style={{ border: '1px solid red' }} className="col-4">
                                {info.c_prod_ch_name}
                              </div>
                              <div style={{ border: '1px solid red' }} className="col-4">
                                件數
                              </div>
                              <div style={{ border: '1px solid red' }} className="col-4">
                                金額
                              </div>
                              <div style={{ border: '1px solid red' }} className="col-4">
                                印製時間
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
