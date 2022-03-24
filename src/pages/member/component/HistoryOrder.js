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
  console.log(clickToggle);

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
        <tbody>
          <tr>
            <td>#0000001</td>
            <td>2022/4/30</td>
            <td>已出貨</td>
            <td>NT$ 1000 元</td>
            <td>30 分鐘</td>
            <td onClick={handleClickToggle} style={{ cursor: 'pointer' }}>
              交易明細 {clickToggle ? <SelectClose /> : <SelectOpen />}
            </td>
          </tr>
        </tbody>
      </table>
      <Accordion
        className="col-md-20"
        style={
          clickToggle
            ? { display: 'block', transition: '1s' }
            : { display: 'none', transition: '1s' }
        }
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ width: '10%', flexShrink: 0 }}>商品圖片</Typography>
          <Typography sx={{ width: '10%', flexShrink: 0 }}>商品名稱</Typography>
          <Typography sx={{ width: '10%', flexShrink: 0 }}>件數</Typography>
          <Typography sx={{ width: '10%', flexShrink: 0 }}>金額</Typography>
          <Typography sx={{ width: '10%', flexShrink: 0 }}>印製時間</Typography>
        </AccordionSummary>
        <AccordionDetails className="w-100">
          <Typography>{/* 商品詳細資訊 */}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default HistoryOrder;
