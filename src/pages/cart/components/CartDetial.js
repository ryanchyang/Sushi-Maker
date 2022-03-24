//CartDetail.js 交易明細
import React, { useState } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ProdItemInfo from './ProdItemInfo';
import { Collapse } from 'react-bootstrap';
// import Collapse from 'react-bootstrap/Collapse';
function CartDetail() {
  const [dateOpen, setDateOpen] = useState(false);
  return (
    // <Accordion>
    //   <AccordionSummary
    //     expandIcon={<ExpandMoreIcon />}
    //     aria-controls="panel1a-content"
    //     id="panel1a-header"
    //   >
    //     <Typography sx={{ width: '90%', flexShrink: 0 }}>交易明細</Typography>
    //     <Typography sx={{ width: '10%', flexShrink: 0 }}>數量</Typography>
    //   </AccordionSummary>
    //   <AccordionDetails className="w-100">
    //     <Typography>
    //       {/* 商品詳細資訊 */}
    //       <ProdItemInfo />
    //     </Typography>
    //   </AccordionDetails>
    // </Accordion>

    <div className="cart-detail ">
      <div className="cart-detail-title" onClick={() => setDateOpen(!dateOpen)}>
        <div className=" en-title-18">交易明細</div>
        <div className="cart-detail-title-right d-flex ">
          <div className=" en-title-14">數量</div>
          <div
            className="down-arrow"
            aria-controls="example-collapse-text"
            aria-expanded={dateOpen}
          >
            {/* {console.log('open:', dateOpen)} */}
            {dateOpen ? (
              <img src="/img/cart/uparrow.svg" alt="up" />
            ) : (
              <img src="/img/cart/downarrow.svg" alt="down" />
            )}
          </div>
        </div>
      </div>
      <Collapse in={dateOpen}>
        <div>
          {/* 商品詳細資訊 */}
          <ProdItemInfo />
        </div>
      </Collapse>
    </div>
  );
}
export default CartDetail;
